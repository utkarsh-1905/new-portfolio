<script lang="ts">
	export let title: string =
		'My tech blog explaining alot of tech which you must read !! It is a really long long string';
	export let link: string;
	export let thumbnail: string;
	let navigateToBlog: any;
	import { onMount } from 'svelte';
	onMount(() => {
		navigateToBlog = (link: string) => {
			window.open(link, '_blank');
		};
	});
</script>

<div on:click={navigateToBlog(link)} on:keypress={navigateToBlog(link)}  class="container">
	<div class="blog">
		<img class="blog-header" src={thumbnail} alt={title} />
		<small>{title}</small>
	</div>
</div>

<style>
	.container {
		/* width:95%; */
		width: 17rem;
		height: 70%;
		margin: 0 1rem;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		box-shadow: var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius)
				var(--neumorph-doffset),
			calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
				var(--neumorph-blur-radius) var(--neumorph-loffset);
		background: var(--bg);
		border-radius: 15px;
	}
	.blog {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		text-align: center;
		justify-content: space-between;
		align-items: center;
	}

	.blog-header {
		width: 100%;
		height: 60%;
		border-radius: 15px 15px 0 0;
		cursor: pointer;
		filter: grayscale(15%);
	}

	small {
		margin-bottom: 2rem;
		text-transform: lowercase;
		cursor: pointer;
	}

	@media screen and (max-width: 1084px) {
		small {
			font-size: x-small;
		}
	}

	@media screen and (max-width: 768px) {
		small {
			font-size: xx-small;
		}
	}
</style>
