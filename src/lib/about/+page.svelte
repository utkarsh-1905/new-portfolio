<script lang="ts">
	import Tabs from '$lib/tabs.svelte';
	import Projects from '$lib/experiencePages/projects.svelte';
	import Github from '$lib/experiencePages/github.svelte';
	import Resume from '$lib/experiencePages/resume.svelte';
	import Work from '$lib/experiencePages/work.svelte';
	import About from '$lib/experiencePages/about.svelte';
	export let repos: any;
	export let projects: any;
	export let experience: any;
	let active: string;
</script>

<div class="container" id="about">
	<About />
	<!-- add projects, github repos, previous work experience. and resume-->
	<!-- lang i use and github contri chart at bottom -->
	<Tabs bind:activeTab={active} />
	{#if active === 'projects'}
		<Projects {projects}/>
	{:else if active === 'work'}
		<Work works={experience}/>
	{:else if active === 'github'}
		<Github bind:repo={repos} />
	{:else if active === 'resume'}
		<Resume />
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;
		height: fit-content;
	}
</style>
