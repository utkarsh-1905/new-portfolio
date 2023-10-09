<script lang="ts">
	import '../global.css';
	import Navbar from '$lib/navbar.svelte';
	import Footer from '$lib/footer.svelte';
	import { loading } from '$lib/loading';
	import { navigating } from '$app/stores';
	import LoadingPage from '$lib/loadingPage.svelte';
	import { onMount } from 'svelte';

	$: $loading = !!$navigating; //loading pages

	onMount(() => {
		const cursor: Element | null = document.querySelector('.cursor');
		const positionElement = (e: MouseEvent) => {
			const mouseY = e.clientY;
			const mouseX = e.clientX;
			cursor!.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
		};
		// window.addEventListener('mousemove', positionElement)
	});
</script>

<svelte:head>
	<title>Utkarsh Tripathi</title>
	<!-- Primary Meta Tags -->
	<meta name="title" content="Utkarsh Tripathi - Student, Developer, Speaker" />
	<meta
		name="description"
		content="My name is Utkarsh Tripathi and I am in my third year of B.Tech with majors in Computer and Electronics from Thapar Institute of Technology, Patiala, India. I am an aspiring software developer and an Open Source enthusiast. I like to work in teams and solve problems with efficent solutions and I am always looking for opportunities to learn and grow."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://utkarssh.tech/" />
	<meta property="og:title" content="Utkarsh Tripathi - Student, Developer, Speaker" />
	<meta
		property="og:description"
		content="My name is Utkarsh Tripathi and I am in my third year of B.Tech with majors in Computer and Electronics from Thapar Institute of Technology, Patiala, India. I am an aspiring software developer and an Open Source enthusiast. I like to work in teams and solve problems with efficent solutions and I am always looking for opportunities to learn and grow."
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://utkarssh.tech/" />
	<meta property="twitter:title" content="Utkarsh Tripathi - Student, Developer, Speaker" />
	<meta
		property="twitter:description"
		content="My name is Utkarsh Tripathi and I am in my third year of B.Tech with majors in Computer and Electronics from Thapar Institute of Technology, Patiala, India. I am an aspiring software developer and an Open Source enthusiast. I like to work in teams and solve problems with efficent solutions and I am always looking for opportunities to learn and grow."
	/>
</svelte:head>

<header>
	<Navbar />
</header>

<canvas id="canvas"></canvas>

{#if $loading}
	<LoadingPage />
{:else}
	<div class="body-align">
		<!-- <div class="cursor">&nbsp;</div> -->
		<main>
			<slot />
		</main>
		<Footer />
	</div>
{/if}

<style>
	.cursor {
		z-index: -100;
		position: relative;
		margin: 0;
		padding: 0;
		width: 55px;
		height: 55px;
		background: var(--bg);
		box-shadow: inset var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius)
				var(--neumorph-doffset),
			inset calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
				var(--neumorph-blur-radius) var(--neumorph-loffset);
		border-radius: 50%;
		user-select: none;
	}

	main {
		width: 80vw;
		margin: 0 auto;
		margin-top: 1rem;
		/* cursor: none !important; */
	}
	.body-align {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		min-height: 100vh;
	}

	#canvas{
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -100;
	}
</style>
