<script lang="ts">
	export const prerender = true;
	import { onMount } from 'svelte';
	import animationData from './landing-lottie.json';
	import lottie from 'lottie-web';
	let lottieContainer: HTMLElement;
	import Typewriter from 'svelte-typewriter';
	import { loading } from '$lib/loading';
	let typewritterDone: boolean = false;
	onMount(() => {
		$loading = false;
		lottie.loadAnimation({
			container: lottieContainer,
			animationData
		});
	});

	function typewriterDone() {
		document.querySelector('.title')!.style!.marginTop = '1rem';
		typewritterDone = true;
	}
</script>

<div class="container">
	<Typewriter mode="loop" interval={200} wordInterval={2000} cursor={true} on:done={typewriterDone}>
		<p class="title">namaste</p>
		<p class="title">hello</p>
		<p class="title">hola</p>
		<p class="title">salam</p>
		<p class="title">aloha</p>
	</Typewriter>
	{#if typewritterDone}
		<!-- <h2 class="show-on-done subtitle">developer &#x2022; student &#x2022; speaker</h2> -->
		<h2 class="show-on-done subtitle">welcome to my page</h2>
		<!-- <h2 class="show-on-done subtitle"></h2> -->
		<div class="buttons">
			<a href="https://github.com/utkarsh-1905" target="_blank" rel="noreferrer" class="social show-on-done">
				<img class="social-icon social-left" src="/github.svg" width="24px" alt="github" />
				github</a>
			<a href="https://www.linkedin.com/in/utkarsh1905/" target="_blank" rel="noreferrer" class="social show-on-done">
				<img class="social-icon" src="/linkedin.svg" width="24px" alt="linkedin" />
				linkedin</a>
			<a href="https://x.com/utripathi2002" target="_blank" rel="noreferrer" class="social show-on-done">
				<img class="social-icon" src="/twitter.svg" width="24px" alt="twitter"/> twitter</a>
		</div>
		<p class="aboutme" />
	{/if}
	<!-- <div class="bg-container">
		<div class="bg" bind:this={lottieContainer} />
	</div> -->
</div>

<style>
	.container {
		--cursor-color: var(--bg);
		margin-top: 4rem;
		padding-top: 5rem;
		width: 100%;
		height: max-content;
		min-height: 60vh;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		position: relative;
		margin-bottom: 4rem;
		/* background-image: url('me.png'); */
		background-position: right;
		background-repeat: no-repeat;
		background-size: 50%;
	}

	.title {
		font-size: 4rem;
		letter-spacing: 0.75rem;
		color: var(--font) !important;
	}

	.subtitle {
		padding-top: 1rem;
		letter-spacing: 0.5rem;
		color: var(--sub-font) !important;
	}

	.show-on-done {
		animation-name: fromAbove;
		animation-duration: 1.5s;
		animation-fill-mode: forwards;
		animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
		animation-delay: 0ms;
	}

	.buttons {
		display: flex;
		margin-top: 10rem;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		width: 60%;
	}
	.social {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 1.5rem;
		border-radius: 15px;
		background: var(--bg);
		box-shadow: var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius)
				var(--neumorph-doffset),
			calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
				var(--neumorph-blur-radius) var(--neumorph-loffset);
		color: var(--light-font);
		cursor: pointer;
		border: none;
		font-size: small;
	}
	.social:hover {
		border-radius: 15px;
		background: var(--bg);
		box-shadow: inset var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius)
				var(--neumorph-doffset),
			inset calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
				var(--neumorph-blur-radius) var(--neumorph-loffset);
	}

	.social-icon{
		margin-right: 1rem;
	}

	@keyframes fromAbove {
		0% {
			transform: translateY(-100%);
			color: transparent;
		}
		100% {
			transform: translateY(0%);
			color: var(--light-font);
		}
	}

	@media screen and (max-width: 1024px) {
		.title {
			font-size: 2.5rem;
			letter-spacing: 0.5rem;
		}
		.subtitle {
			font-size: 1.5rem;
			letter-spacing: 0;
		}
	}
	@media screen and (max-width: 550px) {
		.title {
			font-size: 2rem;
			letter-spacing: 0;
			margin-top: 15rem;
		}
		.subtitle {
			font-size: 1.1rem;
		}
		.buttons {
			width: 100%;
		}
		.social {
			padding: 0.25rem 0.5rem;
			justify-content: space-between;
		}

		.social-icon{
			width: 16px;
		}
	}
</style>
