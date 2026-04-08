<script lang="ts">
	export let title: string = 'Untitled post';
	export let link: string;
	export let thumbnail: string;
</script>

<a href={link} target="_blank" rel="noreferrer" class="card">
	<div class="img-wrap">
		<img src={thumbnail} alt={title} class="thumb" loading="lazy" />
	</div>
	<div class="info">
		<p class="title">{title}</p>
		<span class="read-more">read more ↗</span>
	</div>
</a>

<style>
	.card {
		display: flex;
		flex-direction: column;
		width: 16rem;
		border-radius: var(--radius-lg);
		background: var(--bg);
		box-shadow: var(--shadow-raised);
		overflow: hidden;
		transition: box-shadow 0.25s ease, transform 0.25s ease;
		cursor: pointer;
		text-decoration: none;
	}

	.card:hover {
		box-shadow: var(--shadow-inset);
		transform: translateY(2px);
	}

	.img-wrap {
		width: 100%;
		height: 130px;
		overflow: hidden;
		flex-shrink: 0;
	}

	.thumb {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		filter: brightness(0.92) saturate(0.9);
		transition: filter 0.3s ease;
	}

	.card:hover .thumb {
		filter: brightness(1) saturate(1);
	}

	.info {
		padding: 0.875rem 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		flex: 1;
	}

	.title {
		font-size: 0.8rem;
		color: var(--sub-font);
		line-height: 1.5;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.read-more {
		font-size: 0.72rem;
		color: var(--font);
		font-weight: 500;
		letter-spacing: 0.04em;
		margin-top: auto;
	}

	@media screen and (max-width: 768px) {
		.card {
			width: 13rem;
		}
		.img-wrap {
			height: 110px;
		}
	}
</style>
