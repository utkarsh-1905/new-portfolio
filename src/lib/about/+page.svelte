<script lang="ts">
	import Tabs from '$lib/tabs.svelte';
	import Projects from '$lib/experiencePages/projects.svelte';
	import Certs from '$lib/experiencePages/certs.svelte';
	import Resume from '$lib/experiencePages/resume.svelte';
	import Work from '$lib/experiencePages/work.svelte';
	import About from '$lib/experiencePages/about.svelte';
	import type { Experience, Project, Cert } from '$lib/data';

	export let projects: Project[];
	export let experience: Experience[];
	export let certs: Cert[];

	let active: string = 'work';
</script>

<section class="about-section" id="about">
	<h2 class="section-heading">about</h2>
	<About />
	<Tabs bind:activeTab={active} />
	<div class="tab-content">
		{#if active === 'projects'}
			<Projects {projects} />
		{:else if active === 'work'}
			<Work works={experience} />
		{:else if active === 'certs'}
			<Certs {certs} />
		{:else if active === 'resume'}
			<Resume />
		{/if}
	</div>
</section>

<style>
	.about-section {
		margin-top: 4rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
	}

	.tab-content {
		width: 100%;
		min-height: 280px;
	}
</style>
