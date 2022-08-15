<script>
    import "../global.css";
    import Navbar from "$lib/navbar.svelte"
    import Footer from "$lib/footer.svelte"
    import Theme from "$lib/theme.svelte"
</script>

<header>
    <Navbar />
    <Theme />
</header>

<main>
    <slot></slot>
</main>

<Footer />
<style>
    main {
        width: 80vw;
        margin: 0 auto;
        margin-top: 5rem;
    }
</style>