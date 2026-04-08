<script>
	import Skills from './skill-icons.svelte';
</script>

<footer>
	<div class="marquee-wrap">
		<div class="marquee-track">
			<Skills />
			<Skills />
		</div>
	</div>

	<div class="footer-bottom">
		<span class="copy"
			>&copy; 2026 utkarsh tripathi &bull;
			<a href="/sitemap.xml" class="sitemap-link">sitemap</a>
		</span>
		<div class="socials">
			<a
				href="https://github.com/utkarsh-1905"
				target="_blank"
				rel="noreferrer"
				aria-label="GitHub"
			>
				<span class="icon-btn"><img src="/github.svg" width="16" height="16" alt="github" /></span>
			</a>
			<a
				href="https://www.linkedin.com/in/utkarsh1905/"
				target="_blank"
				rel="noreferrer"
				aria-label="LinkedIn"
			>
				<span class="icon-btn"
					><img src="/linkedin.svg" width="16" height="16" alt="linkedin" /></span
				>
			</a>
			<a href="https://x.com/utripathi2002" target="_blank" rel="noreferrer" aria-label="Twitter/X">
				<span class="icon-btn"><img src="/twitter.svg" width="16" height="16" alt="twitter" /></span
				>
			</a>
			<a
				href="mailto:utripathi2002@gmail.com?subject=Hey%20Utkarsh!"
				target="_blank"
				rel="noreferrer"
				aria-label="Email"
			>
				<span class="icon-btn"><img src="/mail.svg" width="16" height="16" alt="email" /></span>
			</a>
		</div>
	</div>
</footer>

<style>
	footer {
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-x: hidden;
		margin-top: 3rem;
		border-top: 1px solid rgba(255, 255, 255, 0.05);
	}

	/* Skills marquee tray */
	.marquee-wrap {
		width: 100%;
		padding: 1.5rem 0;
		background: var(--bg);
		box-shadow:
			inset 0 5px 14px var(--neumorph-doffset),
			inset 0 -5px 14px var(--neumorph-loffset);
		overflow: hidden;
	}

	.marquee-track {
		display: flex;
		width: max-content;
		animation: marquee 40s linear infinite;
	}

	.marquee-wrap:hover .marquee-track {
		animation-play-state: paused;
	}

	@keyframes marquee {
		from { transform: translateX(0); }
		to   { transform: translateX(-50%); }
	}

	/* Footer bar */
	.footer-bottom {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: min(82vw, 1080px);
		padding: 1rem 0 1.5rem;
	}

	.copy {
		font-size: 0.75rem;
		color: var(--muted);
		letter-spacing: 0.02em;
	}

	.sitemap-link {
		color: var(--font);
		font-size: 0.75rem;
		opacity: 0.6;
		transition: opacity 0.2s;
	}

	.sitemap-link:hover {
		opacity: 1;
	}

	.socials {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.icon-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 34px;
		height: 34px;
		border-radius: 50%;
		background: var(--bg);
		box-shadow: var(--shadow-raised);
		transition:
			box-shadow 0.2s ease,
			transform 0.15s ease;
	}

	.icon-btn:hover {
		box-shadow: var(--shadow-inset);
		transform: translateY(1px);
	}

	@media screen and (max-width: 640px) {
		.footer-bottom {
			width: 92vw;
			flex-direction: column-reverse;
			gap: 0.75rem;
			text-align: center;
		}
	}

	@media screen and (max-width: 380px) {
		.copy {
			display: none;
		}
	}
</style>
