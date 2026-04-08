<script lang="ts">
	import type { Project } from '$lib/data';
	export let projects: Project[];

	const featured = projects.filter((p) => p.featured);
	const rest = projects.filter((p) => !p.featured);
</script>

<div class="container">
	{#if featured.length > 0}
		<div class="featured-grid">
			{#each featured as project}
				<div class="card card-featured">
					<div class="card-top">
						<div class="title-row">
							<h3 class="project-title">{project.name}</h3>
							<div class="link-row">
								{#if project.live}
									<a href={project.live} target="_blank" rel="noreferrer" class="link-btn">
										live ↗
									</a>
								{/if}
								{#if project.github}
									<a href={project.github} target="_blank" rel="noreferrer" class="link-btn link-gh">
										github ↗
									</a>
								{/if}
							</div>
						</div>
						<p class="description">{project.description}</p>
					</div>

					{#if project.highlights.length > 0}
						<ul class="highlights">
							{#each project.highlights as h}
								<li>{h}</li>
							{/each}
						</ul>
					{/if}

					<div class="stack-row">
						{#each project.stack as tech}
							<span class="badge">{tech}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}

	{#if rest.length > 0}
		<div class="grid">
			{#each rest as project}
				<div class="card">
					<div class="card-top">
						<div class="title-row">
							<h3 class="project-title">{project.name}</h3>
							<div class="link-row">
								{#if project.live}
									<a href={project.live} target="_blank" rel="noreferrer" class="link-btn">live ↗</a>
								{/if}
								{#if project.github}
									<a href={project.github} target="_blank" rel="noreferrer" class="link-btn link-gh">github ↗</a>
								{/if}
							</div>
						</div>
						<p class="description">{project.description}</p>
					</div>

					{#if project.highlights.length > 0}
						<ul class="highlights">
							{#each project.highlights as h}
								<li>{h}</li>
							{/each}
						</ul>
					{/if}

					<div class="stack-row">
						{#each project.stack as tech}
							<span class="badge">{tech}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		width: 100%;
		padding-bottom: 2rem;
		margin-top: 1.5rem;
	}

	.featured-grid {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.25rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background: var(--bg);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-raised);
		padding: 1.5rem;
		transition: box-shadow 0.25s ease, transform 0.2s ease;
	}

	.card:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-raised), 0 0 0 1px rgba(244, 196, 48, 0.08);
	}

	.card-featured {
		border-left: 3px solid var(--font);
		padding-left: calc(1.5rem - 3px);
	}

	.card-top {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.title-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.project-title {
		font-size: 1rem;
		font-weight: 600;
		color: var(--font);
	}

	.link-row {
		display: flex;
		gap: 0.5rem;
	}

	.link-btn {
		font-size: 0.75rem;
		font-weight: 500;
		padding: 0.25rem 0.7rem;
		border-radius: var(--radius-pill);
		background: var(--bg);
		box-shadow: var(--shadow-raised);
		color: var(--sub-font);
		transition: box-shadow 0.2s ease, color 0.2s ease;
		white-space: nowrap;
	}

	.link-btn:hover {
		box-shadow: var(--shadow-inset);
		color: var(--font);
	}

	.link-gh { color: var(--muted); }

	.description {
		font-size: 0.85rem;
		color: var(--sub-font);
		line-height: 1.65;
	}

	.highlights {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		padding: 0.65rem 0.9rem;
		border-radius: var(--radius-sm);
		background: var(--bg);
		box-shadow: var(--shadow-inset);
	}

	.highlights li {
		font-size: 0.8rem;
		color: var(--font);
		padding-left: 1rem;
		position: relative;
		line-height: 1.5;
		font-weight: 500;
	}

	.highlights li::before {
		content: '▸';
		position: absolute;
		left: 0;
		color: var(--font);
		opacity: 0.5;
		font-size: 0.75rem;
	}

	.stack-row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.badge {
		font-size: 0.7rem;
		padding: 0.28rem 0.65rem;
		border-radius: var(--radius-pill);
		background: var(--bg);
		box-shadow: var(--shadow-inset);
		color: var(--sub-font);
		font-family: 'Cascadia Code', monospace;
		white-space: nowrap;
	}

	@media screen and (max-width: 768px) {
		.grid { grid-template-columns: 1fr; }
	}
</style>
