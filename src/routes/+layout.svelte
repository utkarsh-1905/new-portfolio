<script lang="ts">
	import '../global.css';
	import Navbar from '$lib/navbar.svelte';
	import Footer from '$lib/footer.svelte';
	import { loading } from '$lib/loading';
	import { navigating } from '$app/stores';
	import LoadingPage from '$lib/loadingPage.svelte';

	$: $loading = !!$navigating; //loading pages
</script>

<svelte:head>
	<title>Utkarsh Tripathi</title>
	<!-- Primary Meta Tags -->
	<meta name="title" content="Utkarsh Tripathi - Student, Developer, Speaker" />
	<meta
		name="description"
		content="My name is Utkarsh Tripathi and I am in my second year of B.Tech with majors in Computer and Electronics from Thapar Institute of Technology, Patiala, India. I am an aspiring software developer and an Open Source enthusiast. I like to work in teams and solve problems with efficent solutions and I am always looking for opportunities to learn and grow."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://utkarssh.tech/" />
	<meta property="og:title" content="Utkarsh Tripathi - Student, Developer, Speaker" />
	<meta
		property="og:description"
		content="My name is Utkarsh Tripathi and I am in my second year of B.Tech with majors in Computer and Electronics from Thapar Institute of Technology, Patiala, India. I am an aspiring software developer and an Open Source enthusiast. I like to work in teams and solve problems with efficent solutions and I am always looking for opportunities to learn and grow."
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://utkarssh.tech/" />
	<meta property="twitter:title" content="Utkarsh Tripathi - Student, Developer, Speaker" />
	<meta
		property="twitter:description"
		content="My name is Utkarsh Tripathi and I am in my second year of B.Tech with majors in Computer and Electronics from Thapar Institute of Technology, Patiala, India. I am an aspiring software developer and an Open Source enthusiast. I like to work in teams and solve problems with efficent solutions and I am always looking for opportunities to learn and grow."
	/>
</svelte:head>

<header>
	<Navbar />
</header>

{#if $loading}
	<LoadingPage />
{:else}
	<div class="body-align">
		<main>
			<slot />
		</main>
		<Footer />
	</div>
{/if}

<style>

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
</style>
