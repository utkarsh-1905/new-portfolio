<script lang="ts">
	import '../global.css';
	import Navbar from '$lib/navbar.svelte';
	import Footer from '$lib/footer.svelte';
	import Spotify from '$lib/spotify.svelte';
	import { loading } from '$lib/loading';
	import { navigating } from '$app/stores';
	import LoadingPage from '$lib/loadingPage.svelte';

	$: $loading = !!$navigating;
</script>

<svelte:head>
	<title>Utkarsh Tripathi — Software Engineer, Container & Supply Chain Security</title>
	<meta name="title" content="Utkarsh Tripathi — Software Engineer, Container & Supply Chain Security" />
	<meta
		name="description"
		content="Software Engineer at RapidFort specialising in container security and software supply chain security. Building hardened, near-zero CVE container images compliant with STIG, FIPS, FedRAMP, CMMC, SOC 2, and NIS 2."
	/>
	<meta name="keywords" content="Utkarsh Tripathi, container security, software supply chain security, Go, eBPF, Docker, Kubernetes, STIG, FIPS, FedRAMP, CMMC, SOC 2, NIS 2, RapidFort, open source" />
	<meta name="author" content="Utkarsh Tripathi" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://utkarshtripathi.in/" />
	<meta name="theme-color" content="#f0ece4" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://utkarshtripathi.in/" />
	<meta property="og:title" content="Utkarsh Tripathi — Software Engineer, Container & Supply Chain Security" />
	<meta property="og:description" content="Software Engineer at RapidFort specialising in container security and software supply chain security. Building hardened, near-zero CVE container images compliant with STIG, FIPS, FedRAMP, CMMC, SOC 2, and NIS 2." />
	<meta property="og:image" content="https://utkarshtripathi.in/me.png" />
	<meta property="og:image:width" content="400" />
	<meta property="og:image:height" content="400" />
	<meta property="og:site_name" content="Utkarsh Tripathi" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter / X -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@utripathi2002" />
	<meta name="twitter:creator" content="@utripathi2002" />
	<meta name="twitter:url" content="https://utkarshtripathi.in/" />
	<meta name="twitter:title" content="Utkarsh Tripathi — Software Engineer, Container & Supply Chain Security" />
	<meta name="twitter:description" content="Software Engineer at RapidFort. Container security, eBPF, Go. Building hardened images compliant with STIG, FIPS, FedRAMP." />
	<meta name="twitter:image" content="https://utkarshtripathi.in/me.png" />

	<!-- JSON-LD structured data -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Utkarsh Tripathi",
		"url": "https://utkarshtripathi.in",
		"image": "https://utkarshtripathi.in/me.png",
		"jobTitle": "Software Engineer",
		"worksFor": {
			"@type": "Organization",
			"name": "RapidFort, Inc.",
			"url": "https://rapidfort.com"
		},
		"alumniOf": {
			"@type": "CollegeOrUniversity",
			"name": "Thapar Institute of Engineering & Technology"
		},
		"knowsAbout": ["Container Security", "Software Supply Chain Security", "eBPF", "Go", "Docker", "Kubernetes", "STIG", "FIPS", "FedRAMP"],
		"sameAs": [
			"https://github.com/utkarsh-1905",
			"https://www.linkedin.com/in/utkarsh1905/",
			"https://x.com/utripathi2002"
		]
	})}</script>`}
</svelte:head>

<header>
	<Navbar />
</header>

{#if $loading}
	<LoadingPage />
{:else}
	<div class="page-wrap">
		<main>
			<slot />
		</main>
		<Footer />
	</div>
	<Spotify />
{/if}

<style>
	.page-wrap {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		padding-top: 52px;
	}

	main {
		width: min(82vw, 1080px);
		margin: 0 auto;
		flex: 1;
	}

	@media screen and (max-width: 900px) {
		main { width: 90vw; }
	}

	@media screen and (max-width: 600px) {
		main { width: 94vw; }
	}
</style>
