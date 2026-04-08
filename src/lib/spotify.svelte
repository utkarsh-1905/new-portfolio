<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	type Track = {
		name: string;
		artist: string;
		albumArt: string | null;
		url: string | null;
		isPlaying?: boolean;
	};

	let track: Track | null = null;
	let isPlaying = false;
	let collapsed = false;
	let interval: ReturnType<typeof setInterval>;

	async function fetchTrack() {
		try {
			const res = await fetch('/getCurrentPlaying');
			const data = await res.json();

			if (data && data.isPlaying && data.name) {
				track = data;
				isPlaying = true;
				return;
			}

			// Nothing playing — fall back to last played
			const res2 = await fetch('/getLastPlayed');
			const data2 = await res2.json();
			if (data2 && data2.name) {
				track = data2;
				isPlaying = false;
			}
		} catch {
			// silently fail — Spotify is non-critical
		}
	}

	onMount(() => {
		fetchTrack();
		interval = setInterval(fetchTrack, 30_000);
	});

	onDestroy(() => clearInterval(interval));
</script>

{#if track}
	<div class="widget" class:collapsed aria-label="Spotify widget">
		<!-- Toggle collapse -->
		<button
			class="collapse-btn"
			on:click={() => (collapsed = !collapsed)}
			aria-label={collapsed ? 'Expand Spotify widget' : 'Collapse Spotify widget'}
		>
			{#if collapsed}
				<!-- Spotify logo mark -->
				<svg viewBox="0 0 24 24" width="14" height="14" fill="#1DB954" aria-hidden="true">
					<path
						d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
					/>
				</svg>
			{:else}
				<span aria-hidden="true">—</span>
			{/if}
		</button>

		{#if collapsed}
			<!-- Minimised: just album art + live dot -->
			<a
				href={track.url ?? '#'}
				target="_blank"
				rel="noreferrer"
				class="mini"
				aria-label="Open in Spotify"
			>
				{#if track.albumArt}
					<img src={track.albumArt} alt="" width="44" height="44" class="mini-art" />
				{:else}
					<div class="mini-art mini-art--fallback"></div>
				{/if}
				{#if isPlaying}
					<span class="live-dot" aria-hidden="true"></span>
				{/if}
			</a>
		{:else}
			<!-- Expanded card -->
			<a
				href={track.url ?? '#'}
				target="_blank"
				rel="noreferrer"
				class="card"
				aria-label="Open {track.name} in Spotify"
			>
				<!-- Album art -->
				<div class="art-wrap">
					{#if track.albumArt}
						<img src={track.albumArt} alt="" width="52" height="52" class="art" />
					{:else}
						<div class="art art--fallback"></div>
					{/if}
					{#if isPlaying}
						<div class="eq" aria-hidden="true">
							<span class="bar"></span>
							<span class="bar"></span>
							<span class="bar"></span>
						</div>
					{/if}
				</div>

				<!-- Track info -->
				<div class="info">
					<span class="status" class:playing={isPlaying}>
						{#if isPlaying}
							<span class="status-dot" aria-hidden="true"></span>now playing
						{:else}
							last played
						{/if}
					</span>
					<span class="name">{track.name}</span>
					<span class="artist">{track.artist}</span>
				</div>
			</a>
		{/if}
	</div>
{/if}

<style>
	/* ── Container ─────────────────────────────────────────── */
	.widget {
		position: fixed;
		bottom: 1.5rem;
		right: 1.5rem;
		z-index: 99;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.4rem;
	}

	/* ── Collapse button ────────────────────────────────────── */
	.collapse-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 22px;
		height: 22px;
		border: none;
		border-radius: 50%;
		background: var(--bg);
		box-shadow: var(--shadow-raised);
		color: var(--muted);
		font-size: 0.75rem;
		cursor: pointer;
		transition:
			box-shadow 0.2s ease,
			transform 0.15s ease;
		line-height: 1;
		padding: 0;
	}

	.collapse-btn:hover {
		box-shadow: var(--shadow-inset);
		transform: translateY(1px);
	}

	/* ── Expanded card ──────────────────────────────────────── */
	.card {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		width: 230px;
		padding: 0.7rem 0.85rem;
		background: var(--bg);
		box-shadow: var(--shadow-raised);
		border-radius: var(--radius-lg);
		text-decoration: none;
		transition:
			box-shadow 0.2s ease,
			transform 0.15s ease;
	}

	.card:hover {
		box-shadow: var(--shadow-inset);
		transform: translateY(1px);
	}

	/* ── Album art ──────────────────────────────────────────── */
	.art-wrap {
		position: relative;
		flex-shrink: 0;
	}

	.art {
		width: 52px;
		height: 52px;
		border-radius: var(--radius-sm);
		object-fit: cover;
		display: block;
	}

	.art--fallback {
		background: var(--neumorph-doffset);
	}

	/* Equaliser bars overlay */
	.eq {
		position: absolute;
		bottom: 3px;
		right: 3px;
		display: flex;
		align-items: flex-end;
		gap: 1.5px;
		background: rgba(0, 0, 0, 0.45);
		padding: 2px 3px;
		border-radius: 3px;
	}

	.bar {
		display: block;
		width: 2.5px;
		height: 4px;
		background: #1db954;
		border-radius: 1px;
		animation: eq 0.9s ease-in-out infinite;
		transform-origin: bottom;
	}

	.bar:nth-child(2) {
		animation-delay: 0.22s;
		animation-duration: 0.75s;
	}

	.bar:nth-child(3) {
		animation-delay: 0.44s;
		animation-duration: 1.05s;
	}

	@keyframes eq {
		0%,
		100% {
			height: 3px;
		}
		50% {
			height: 11px;
		}
	}

	/* ── Track info ─────────────────────────────────────────── */
	.info {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		min-width: 0;
	}

	.status {
		display: flex;
		align-items: center;
		gap: 0.3rem;
		font-size: 0.62rem;
		font-family: 'Cascadia Code', monospace;
		letter-spacing: 0.04em;
		color: var(--muted);
		text-transform: lowercase;
	}

	.status.playing {
		color: #1db954;
	}

	.status-dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #1db954;
		flex-shrink: 0;
		animation: pulse 2s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.4;
		}
	}

	.name {
		font-size: 0.78rem;
		font-weight: 600;
		color: var(--font);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 140px;
	}

	.artist {
		font-size: 0.68rem;
		color: var(--muted);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 140px;
		font-family: 'Cascadia Code', monospace;
	}

	/* ── Minimised state ────────────────────────────────────── */
	.mini {
		position: relative;
		display: block;
		text-decoration: none;
	}

	.mini-art {
		width: 44px;
		height: 44px;
		border-radius: var(--radius-sm);
		object-fit: cover;
		display: block;
		box-shadow: var(--shadow-raised);
		transition:
			box-shadow 0.2s ease,
			transform 0.15s ease;
	}

	.mini-art--fallback {
		background: var(--neumorph-doffset);
	}

	.mini:hover .mini-art {
		box-shadow: var(--shadow-inset);
		transform: translateY(1px);
	}

	.live-dot {
		position: absolute;
		top: -3px;
		right: -3px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #1db954;
		border: 2px solid var(--bg);
		animation: pulse 2s ease-in-out infinite;
	}

	/* ── Mobile ─────────────────────────────────────────────── */
	@media screen and (max-width: 480px) {
		.widget {
			bottom: 1rem;
			right: 1rem;
		}

		.card {
			width: 200px;
		}

		.name,
		.artist {
			max-width: 110px;
		}
	}
</style>
