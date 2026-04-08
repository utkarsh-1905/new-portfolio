<div class="loading-wrap">
	<div class="spinner-outer">
		<div class="spinner-inner"></div>
	</div>
</div>

<style>
	.loading-wrap {
		position: fixed;
		inset: 0;
		background: var(--bg);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 500;
	}

	.spinner-outer {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		background: var(--bg);
		box-shadow: var(--shadow-raised);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.spinner-inner {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: var(--bg);
		box-shadow: var(--shadow-inset);
		border-top: 3px solid var(--font);
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		to { transform: rotate(360deg); }
	}
</style>
