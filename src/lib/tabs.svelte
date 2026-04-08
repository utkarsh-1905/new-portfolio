<script lang="ts">
	export let activeTab: string = 'work';

	const tabs = [
		{ id: 'work', label: 'experience' },
		{ id: 'projects', label: 'projects' },
		{ id: 'certs', label: 'certifications' },
		{ id: 'resume', label: 'resume' }
	];
</script>

<div class="tabs" role="tablist">
	{#each tabs as tab}
		<button
			role="tab"
			aria-selected={activeTab === tab.id}
			class="tab"
			class:active={activeTab === tab.id}
			on:click={() => (activeTab = tab.id)}
		>
			{tab.label}
			{#if activeTab === tab.id}
				<span class="indicator"></span>
			{/if}
		</button>
	{/each}
</div>

<style>
	.tabs {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		width: 100%;
		margin-top: 2.5rem;
		padding: 0.6rem 0.75rem;
		border-radius: var(--radius-lg);
		background: var(--bg);
		box-shadow: var(--shadow-inset);
	}

	.tab {
		position: relative;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0.7rem 1.5rem;
		border-radius: var(--radius-md);
		color: var(--muted);
		font-size: 0.85rem;
		font-weight: 500;
		letter-spacing: 0.04em;
		transition: color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5px;
		flex: 1;
		white-space: nowrap;
	}

	.tab:hover {
		color: var(--sub-font);
	}

	.tab.active {
		background: var(--bg);
		box-shadow: var(--shadow-raised);
		color: var(--font);
	}

	.indicator {
		display: block;
		width: 18px;
		height: 2px;
		background: var(--font);
		border-radius: 2px;
	}

	@media screen and (max-width: 576px) {
		.tab {
			font-size: 0.75rem;
			padding: 0.5rem 0.75rem;
		}
	}

	@media screen and (max-width: 380px) {
		.tabs {
			gap: 0.25rem;
		}
		.tab {
			font-size: 0.7rem;
			padding: 0.4rem 0.5rem;
		}
	}
</style>
