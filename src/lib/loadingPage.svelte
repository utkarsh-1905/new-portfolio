<div>
	<div class="center" />
</div>

<style>
	div {
		width: 80vw;
		height: 70vh;
		margin: 0 auto;
		margin-top: 6rem;
		background: var(--bg);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.center {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		position: relative;
		box-shadow: var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius)
				var(--neumorph-doffset),
			calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
				var(--neumorph-blur-radius) var(--neumorph-loffset);
	}
	.center:before {
		position: absolute;
		content: '';
		width: 80px;
		height: 80px;
		border-top: 7px solid var(--font);
		animation: spin 2s linear infinite;
		box-sizing: border-box;
		border-radius: 50%;
		background: var(--bg);
		box-shadow: inset var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius)
				var(--neumorph-doffset),
			inset calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
				var(--neumorph-blur-radius) var(--neumorph-loffset);
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
