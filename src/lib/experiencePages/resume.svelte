<div class="container">
	<div class="frame-wrap">
		<iframe
			class="pdf"
			src="/resume.pdf"
			title="Resume — Utkarsh Tripathi"
			style="border: none;"
		/>
	</div>
	<a
		href="/resume.pdf"
		target="_blank"
		rel="noreferrer"
		class="download-btn"
	>
		download pdf ↗
	</a>
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.25rem;
		padding-bottom: 2rem;
		margin-top: 1.5rem;
	}

	.frame-wrap {
		width: 100%;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-raised);
		overflow: hidden;
		background: var(--bg);
	}

	.pdf {
		width: 100%;
		height: 900px;
		display: block;
	}

	.download-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.65rem 1.5rem;
		border-radius: var(--radius-pill);
		background: var(--bg);
		box-shadow: var(--shadow-raised);
		color: var(--font);
		font-size: 0.85rem;
		font-weight: 500;
		letter-spacing: 0.04em;
		transition: box-shadow 0.2s ease, transform 0.2s ease;
	}

	.download-btn:hover {
		box-shadow: var(--shadow-inset);
		transform: translateY(1px);
		color: var(--font);
	}

	@media screen and (max-width: 576px) {
		.pdf {
			height: 550px;
		}
	}
</style>
