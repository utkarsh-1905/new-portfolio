<script lang="ts">
    import {getPackages} from "$lib/github_api";
    import {onMount} from "svelte";
    onMount(()=>{
        const data = getPackages()
        console.log(data)
    })
</script>