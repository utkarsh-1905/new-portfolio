<script lang="ts">
	export let repo: any[];

	function getUpdatedTime(time: string) {
		return new Date(time).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
	}
</script>

<div class="container">
	<div class="table-wrap">
		<div class="table-header row">
			<span class="col num">#</span>
			<span class="col name">repository</span>
			<span class="col lang">language</span>
			<span class="col updated hide-mobile">updated</span>
		</div>
		{#each repo as data}
			<div class="row data-row">
				<span class="col num muted">{data.id}</span>
				<span class="col name">
					<a href={data.url} target="_blank" rel="noreferrer" class="repo-link">
						{data.name}
						<span class="arrow">&#x2197;</span>
					</a>
				</span>
				<span class="col lang">
					{#if data.language}
						<span class="lang-badge">{data.language}</span>
					{:else}
						<span class="muted">—</span>
					{/if}
				</span>
				<span class="col updated hide-mobile muted">{getUpdatedTime(data.updated_at)}</span>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		width: 100%;
		padding-bottom: 2rem;
	}

	.table-wrap {
		margin-top: 1.5rem;
		background: var(--bg);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-raised);
		overflow: hidden;
		padding: 0.5rem;
	}

	.row {
		display: grid;
		grid-template-columns: 48px 1fr 120px 130px;
		align-items: center;
		padding: 0.6rem 0.75rem;
		border-radius: var(--radius-md);
	}

	.table-header {
		background: var(--bg);
		box-shadow: var(--shadow-inset);
		margin-bottom: 0.4rem;
	}

	.table-header .col {
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--muted);
	}

	.data-row {
		transition: background 0.15s ease;
	}

	.data-row:hover {
		background: var(--bg);
		box-shadow: var(--shadow-inset);
	}

	.col {
		font-size: 0.83rem;
		color: var(--sub-font);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding-right: 0.5rem;
	}

	.num {
		text-align: center;
		font-size: 0.75rem;
	}

	.muted {
		color: var(--muted);
		font-size: 0.78rem;
	}

	.repo-link {
		color: var(--font);
		font-size: 0.85rem;
		font-weight: 500;
		display: inline-flex;
		align-items: center;
		gap: 0.2rem;
	}

	.repo-link:hover {
		color: var(--accent);
	}

	.arrow {
		font-size: 0.75rem;
		opacity: 0.6;
	}

	.lang-badge {
		font-size: 0.72rem;
		padding: 0.2rem 0.55rem;
		border-radius: var(--radius-pill);
		background: var(--bg);
		box-shadow: var(--shadow-inset);
		color: var(--sub-font);
		font-family: 'Cascadia Code', monospace;
		white-space: nowrap;
	}

	@media screen and (max-width: 560px) {
		.row {
			grid-template-columns: 40px 1fr 100px;
		}

		.hide-mobile {
			display: none;
		}
	}

	@media screen and (max-width: 380px) {
		.row {
			grid-template-columns: 32px 1fr 80px;
		}
	}
</style>
