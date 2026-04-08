import type { RequestHandler } from '@sveltejs/kit';
import { getAccessToken } from '$lib/server/spotify';

export const GET: RequestHandler = async () => {
	const token = await getAccessToken();
	if (!token) {
		return new Response(JSON.stringify(null), {
			headers: { 'Content-Type': 'application/json' }
		});
	}

	const res = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
		headers: { Authorization: `Bearer ${token}` }
	});

	if (!res.ok) {
		return new Response(JSON.stringify(null), {
			headers: { 'Content-Type': 'application/json' }
		});
	}

	const data = await res.json();
	const item = data.items?.[0];
	if (!item) {
		return new Response(JSON.stringify(null), {
			headers: { 'Content-Type': 'application/json' }
		});
	}

	return new Response(
		JSON.stringify({
			name: item.track.name,
			artist: item.track.artists.map((a: { name: string }) => a.name).join(', '),
			albumArt:
				item.track.album.images?.[1]?.url ?? item.track.album.images?.[0]?.url ?? null,
			url: item.track.external_urls?.spotify ?? null,
			playedAt: item.played_at
		}),
		{
			headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }
		}
	);
};
