<script>
    import "../global.css";
    import Navbar from "$lib/navbar.svelte"
    import Footer from "$lib/footer.svelte"
    import { loading } from "$lib/loading"
    import { navigating } from "$app/stores";
    import LoadingPage from "$lib/loadingPage.svelte";

    $: $loading = !!$navigating; //loading pages
</script>

<svelte:head>
    <title>Utkarsh Tripathi</title>
</svelte:head>

<header>
    <Navbar />
</header>

{#if $loading}
<LoadingPage />
{:else}
<main>
    <slot></slot>
</main>
{/if}
<Footer />
<style>
    main {
        width: 80vw;
        margin: 0 auto;
        margin-top: 1rem;
    }
</style>