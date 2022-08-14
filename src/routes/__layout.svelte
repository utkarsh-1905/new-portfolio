<script>
    import "../global.css";
    import Header from "$lib/header.svelte"
    import Footer from "$lib/footer.svelte"
</script>
<Header />
<main><slot></slot></main>
<Footer />
<style>
    main {
        width: 100vw;
        min-width: 100vh;
    }
</style>