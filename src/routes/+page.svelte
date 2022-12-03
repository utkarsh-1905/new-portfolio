<script lang='ts'>
    import Body from "$lib/body.svelte"
    import {page} from "$app/stores";

    if($page.error){
        location.reload();
    }
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