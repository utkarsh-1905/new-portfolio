import type { RequestHandler } from '@sveltejs/kit';
import axios from 'axios';

export const GET: RequestHandler = async () => {
	const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
			Authorization: `Bearer ${import.meta.env.VITE_SPOTIFY_OAUTH}`,
			Redirect: 'follow'
		}
	});
	console.log(response);
	if (response.status === 200) {
		// Suggestion (check for correctness before using):
		// return new Response(response.data, {
		//     status: response.status,
		//     headers: {
		//         'Content-Type': 'application/json;charset=utf-8',
		//     }
		// });
		// return ({
		//     status: response.status,
		//     body: response.data,
		//     headers:{
		//         'Content-Type': 'application/json;charset=utf-8',
		//     }
		// })
		return new Response(JSON.stringify(response.data), {
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			status: response.status
		});
	} else {
		return new Response('I am not listening to music right now!!', {
			status: response.status,
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		});
	}
};
