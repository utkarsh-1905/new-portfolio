<script lang='ts'>
    import Body from "$lib/body.svelte"
    export const prerender = true;
</script>

<div class="container">
    <Body />
</div>

<style>
.container{
    width:100%;
    margin: 0 auto;
}
</style>