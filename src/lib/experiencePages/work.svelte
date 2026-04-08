<script>
	export let works;
</script>

<div class="container">
	<div class="timeline">
		{#each works as work, i}
			<div class="entry">
				<div class="dot-col">
					<div class="dot"></div>
					{#if i < works.length - 1}
						<div class="line"></div>
					{/if}
				</div>
				<div class="card">
					<div class="card-top">
						<h2 class="org">{work.name}</h2>
						<small class="time">{work.time}</small>
					</div>
					<h5 class="role">{work.role} &bull; {work.type}</h5>
					<ul class="jobs">
						{#each work.jobs as job}
							<li>{job}</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		width: 100%;
		padding-bottom: 2rem;
	}

	.timeline {
		display: flex;
		flex-direction: column;
		gap: 0;
		margin-top: 1.5rem;
		padding-left: 0.5rem;
	}

	.entry {
		display: flex;
		flex-direction: row;
		gap: 1.25rem;
	}

	.dot-col {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-shrink: 0;
		padding-top: 1.6rem;
	}

	.dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: var(--font);
		box-shadow: 0 0 10px var(--font-glow);
		flex-shrink: 0;
	}

	.line {
		width: 2px;
		flex: 1;
		min-height: 2rem;
		background: linear-gradient(to bottom, var(--neumorph-loffset), var(--neumorph-doffset));
		margin-top: 4px;
	}

	.card {
		background: var(--bg);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-raised);
		padding: 1.25rem 1.5rem;
		margin-bottom: 1.25rem;
		flex: 1;
		transition: box-shadow 0.25s ease;
	}

	.card:hover {
		box-shadow:
			var(--shadow-raised),
			0 0 0 1px rgba(244, 196, 48, 0.08);
	}

	.card-top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: baseline;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.org {
		font-size: 1.05rem;
		font-weight: 600;
		color: var(--font);
	}

	.time {
		font-size: 0.75rem;
		color: var(--muted);
		font-family: 'Cascadia Code', monospace;
		white-space: nowrap;
	}

	.role {
		font-size: 0.82rem;
		font-weight: 500;
		color: var(--accent);
		margin-top: 0.35rem;
		letter-spacing: 0.02em;
	}

	.jobs {
		list-style: none;
		margin-top: 0.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.jobs li {
		font-size: 0.85rem;
		color: var(--sub-font);
		padding-left: 1rem;
		position: relative;
		line-height: 1.5;
	}

	.jobs li::before {
		content: '›';
		position: absolute;
		left: 0;
		color: var(--font);
		font-size: 1rem;
		line-height: 1.4;
		opacity: 0.6;
	}

	@media screen and (max-width: 480px) {
		.timeline {
			padding-left: 0;
		}
		.entry {
			gap: 0.75rem;
		}
		.card {
			padding: 1rem;
		}
	}
</style>
