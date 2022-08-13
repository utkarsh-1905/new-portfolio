<script lang='ts'>
    import Header from "$lib/header.svelte"
    import Body from "$lib/body.svelte"
    import Footer from "$lib/footer.svelte"
</script>

<div class="container">
    <Header />
    <Body />
</div>

<Footer />

<style>
.container{
    width:80vw;
    margin: 0 auto;
}
</style>