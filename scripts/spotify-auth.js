/**
 * One-time script to get a Spotify refresh token.
 *
 * Usage:
 *   SPOTIFY_CLIENT_ID=xxx SPOTIFY_CLIENT_SECRET=yyy node scripts/spotify-auth.js
 *
 * Then open http://localhost:8888/login in your browser.
 * Copy the refresh_token from the response and put it in your .env.
 *
 * Required Spotify scopes:
 *   user-read-currently-playing  user-read-recently-played
 */

import http from 'http';
import { createHash, randomBytes } from 'crypto';
import { URLSearchParams } from 'url';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = 'http://127.0.0.1:8888/callback';
const SCOPES = 'user-read-currently-playing user-read-recently-played';

if (!CLIENT_ID || !CLIENT_SECRET) {
	console.error('Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET env vars first.');
	process.exit(1);
}

const state = randomBytes(8).toString('hex');

const server = http.createServer(async (req, res) => {
	const url = new URL(req.url, 'http://localhost:8888');

	if (url.pathname === '/login') {
		const params = new URLSearchParams({
			response_type: 'code',
			client_id: CLIENT_ID,
			scope: SCOPES,
			redirect_uri: REDIRECT_URI,
			state
		});
		res.writeHead(302, { Location: `https://accounts.spotify.com/authorize?${params}` });
		res.end();
		return;
	}

	if (url.pathname === '/callback') {
		const code = url.searchParams.get('code');
		if (!code) {
			res.end('Missing code');
			return;
		}

		const creds = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
		const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				Authorization: `Basic ${creds}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				grant_type: 'authorization_code',
				code,
				redirect_uri: REDIRECT_URI
			})
		});

		const data = await tokenRes.json();

		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end(
			`✅  Done!\n\nAdd this to your .env:\n\nSPOTIFY_REFRESH_TOKEN=${data.refresh_token}\n\nAccess token (expires in 1h): ${data.access_token}\n`
		);

		console.log('\nSPOTIFY_REFRESH_TOKEN=' + data.refresh_token);
		server.close();
	}
});

server.listen(8888, '127.0.0.1', () => {
	console.log('Open http://127.0.0.1:8888/login in your browser');
});
