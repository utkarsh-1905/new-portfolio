<script lang="ts">
	import Body from '$lib/body.svelte';
	import Contact from "$lib/contact/+page.svelte";
	import Blogs from "$lib/blogs/+page.svelte";
	import About from "$lib/about/+page.svelte";
	export let data: any;
	const blogs = data.blogs;
	const repos = data.repos;
	const projects = data.projects;
	const experience = data.experience;
</script>

<div class="container">
	<Body />
	<About repos={repos} projects={projects} experience={experience}/>
	<Blogs data={blogs}/>
	<Contact />
</div>

<style>
	.container {
		width: 100%;
		margin: 0 auto;
	}
</style>
