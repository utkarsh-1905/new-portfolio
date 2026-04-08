import type { RequestHandler } from '@sveltejs/kit';
import { getAccessToken } from '$lib/server/spotify';

export const GET: RequestHandler = async () => {
	const token = await getAccessToken();
	if (!token) {
		return new Response(JSON.stringify(null), {
			headers: { 'Content-Type': 'application/json' }
		});
	}

	const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing?market=IN', {
		headers: { Authorization: `Bearer ${token}` }
	});

	// 204 = nothing playing
	if (res.status === 204) {
		return new Response(JSON.stringify({ isPlaying: false }), {
			headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }
		});
	}

	if (!res.ok) {
		return new Response(JSON.stringify(null), {
			headers: { 'Content-Type': 'application/json' }
		});
	}

	const data = await res.json();
	return new Response(
		JSON.stringify({
			isPlaying: data.is_playing ?? false,
			name: data.item?.name ?? null,
			artist: data.item?.artists?.map((a: { name: string }) => a.name).join(', ') ?? null,
			albumArt:
				data.item?.album?.images?.[1]?.url ?? data.item?.album?.images?.[0]?.url ?? null,
			url: data.item?.external_urls?.spotify ?? null
		}),
		{
			headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }
		}
	);
};
