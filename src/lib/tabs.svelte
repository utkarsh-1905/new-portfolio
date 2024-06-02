<script lang="ts">
	import { onMount } from 'svelte';
	export let activeTab: string = 'projects';
	let handleClick: any;
	onMount(() => {
		handleClick = (e: any) => {
			activeTab = e.target.dataset.tab;
		};
	});
</script>

<div class="tabs">
	<!-- <div class={activeTab === "about" ? "tab selected" : "tab"} on:click={handleClick} data-tab="about" >about me</div> -->
	<div
		class={activeTab === 'projects' ? 'tab selected' : 'tab'}
		on:click={handleClick}
		on:keydown={(e) => e.key === 'Enter' && handleClick(e)}
		data-tab="projects"
	>
		projects
	</div>
	<div class={activeTab === 'work' ? 'tab selected' : 'tab'} on:click={handleClick} 
		on:keydown={(e) => e.key === 'Enter' && handleClick(e)}
		data-tab="work"
	>
		experience
	</div>
	<div
		class={activeTab === 'github' ? 'tab selected' : 'tab'}
		on:click={handleClick}
		on:keydown={(e) => e.key === 'Enter' && handleClick(e)}
		data-tab="github"
	>
		github
	</div>
	<div
		class={activeTab === 'resume' ? 'tab selected' : 'tab'}
		on:click={handleClick}
		on:keydown={(e) => e.key === 'Enter' && handleClick(e)}
		data-tab="resume"
	>
		resume
	</div>
</div>

<style>
	.tabs {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		margin-top: 1.5rem;
		padding: 0.75rem;
		border-bottom: 1px solid #a36a4f;
	}
	.tab {
		cursor: pointer;
		padding: 0.5rem;
		transition: all 0.3s ease-in;
		color: var(--font);
	}
	.selected {
		font-weight: 900;
		font-size: large;
	}

	@media screen and (max-width: 576px) {
		.tab {
			font-size: 0.8rem;
		}
	}
	@media screen and (max-width: 400px) {
		.tabs {
			width: 100vw !important;
			padding: 0;
		}
		.tab {
			padding: 0;
			margin-bottom: 0.5rem;
		}
	}
	@media screen and (max-width: 340px) {
		.tab {
			font-size: x-small;
		}
	}
</style>
