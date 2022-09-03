<script lang="ts">
    import Tabs from "$lib/tabs.svelte"
    import { onMount } from "svelte";
    import Projects from "$lib/experiencePages/projects.svelte";
    let active:string;
    onMount(async ()=>{
        console.log(active)
    })
</script>

<div class="container">
    <h2>my experience</h2>
    <p class="about-me">Hello, I am a developer</p>
    <!-- add projects, github repos, previous work experience. and resume-->
    <!-- lang i use and github contri chart at bottom -->
    <Tabs bind:activeTab={active}/>
    {#if active === "about"}
        <div class="about">
            <p>about me</p>
        </div>
    {:else if active === "projects"}
        <Projects />
    {:else if active === "github"}
        <div class="github">
            <p>github</p>
        </div>
    {:else if active === "work"}
        <div class="work">
            <p>work</p>
        </div>
    {:else if active === "resume"}
        <div class="resume">
            <p>resume</p>
        </div>
    {/if}
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: fit-content;
    }
    h2{
        padding: 1rem 0;
    }
</style>