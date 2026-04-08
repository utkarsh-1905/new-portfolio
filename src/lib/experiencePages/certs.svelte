<script lang="ts">
	import type { Cert } from '$lib/data';
	export let certs: Cert[];
</script>

<div class="container">
	<div class="grid">
		{#each certs as cert}
			<div class="card">
				<div class="card-top">
					<span class="issuer">{cert.issuer}</span>
					<span class="date">{cert.date}</span>
				</div>
				<h3 class="cert-name">{cert.name}</h3>
				{#if cert.url}
					<a href={cert.url} target="_blank" rel="noreferrer" class="verify-btn">
						verify credential ↗
					</a>
				{/if}
			</div>
		{/each}

		<!-- Coming soon card -->
		<div class="card card-soon">
			<div class="soon-inner">
				<span class="soon-icon">🔒</span>
				<p class="soon-text">more coming soon</p>
				<p class="soon-sub">currently studying for cloud & security certs</p>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		width: 100%;
		padding-bottom: 2rem;
		margin-top: 1.5rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.25rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		background: var(--bg);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-raised);
		padding: 1.4rem 1.5rem;
		transition: box-shadow 0.2s ease, transform 0.2s ease;
	}

	.card:hover {
		transform: translateY(-2px);
	}

	.card-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.issuer {
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		color: var(--accent);
		text-transform: uppercase;
	}

	.date {
		font-size: 0.7rem;
		color: var(--muted);
		font-family: 'Cascadia Code', monospace;
	}

	.cert-name {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--font);
		line-height: 1.4;
	}

	.verify-btn {
		display: inline-flex;
		align-self: flex-start;
		margin-top: 0.25rem;
		font-size: 0.72rem;
		font-weight: 500;
		padding: 0.25rem 0.7rem;
		border-radius: var(--radius-pill);
		background: var(--bg);
		box-shadow: var(--shadow-raised);
		color: var(--sub-font);
		transition: box-shadow 0.2s ease, color 0.2s ease;
	}

	.verify-btn:hover {
		box-shadow: var(--shadow-inset);
		color: var(--font);
	}

	/* Coming soon */
	.card-soon {
		box-shadow: var(--shadow-inset);
		border: 1px dashed rgba(255, 255, 255, 0.06);
	}

	.soon-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.4rem;
		flex: 1;
		padding: 0.5rem 0;
		text-align: center;
	}

	.soon-icon {
		font-size: 1.4rem;
	}

	.soon-text {
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--muted);
		letter-spacing: 0.04em;
	}

	.soon-sub {
		font-size: 0.75rem;
		color: var(--muted);
		opacity: 0.7;
	}

	@media screen and (max-width: 640px) {
		.grid { grid-template-columns: 1fr; }
	}
</style>
