<script>
	import Skills from './skill-icons.svelte';
</script>

<footer class="show-footer-after-70">
	<div class="skills">
		<Skills />
	</div>
	<div class="socials">
		<div class="cpy">
			<span class="footer-text"
				>&copy; 2024 utkarsh tripathi &bull; <a class="sitemap" href="/sitemap.xml">sitemap</a
				></span
			>
		</div>
		<div class="icons">
			<a href="https://github.com/utkarsh-1905" target="_blank" rel="noreferrer"
				><img class="social-icon" src="/github.svg" width="32px" alt="github" /></a
			>
			<a
				href="https://www.linkedin.com/in/utkarsh1905/"
				target="_blank"
				rel="noreferrer"
				><img class="social-icon" src="/linkedin.svg" width="32px" alt="linkedin" /></a
			>
			<a
				href="https://x.com/utripathi2002"
				target="_blank"
				rel="noreferrer"
				><img class="social-icon" src="/twitter.svg" width="32px" alt="twitter" /></a
			>
			<a
				href="mailto:utripathi2002@gmail.com?subject=Hey%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you%20!!"
				target="_blank"
				rel="noreferrer"><img class="social-icon" src="/mail.svg" width="32px" alt="email" /></a
			>
		</div>
	</div>
</footer>

<!-- below 586px -->
<style>
	.skills:hover,
	.skills:active {
		animation-play-state: paused;
	}
	.skills{
		margin-top: 3rem;
	}
	footer {
		left: 0;
		right: 0;
		bottom: 0;
		width: 100vw;
		/* padding-top: 4rem; */
		height: max-content;
		/* z-index: -10; */
		/* background-image: url(/subtleWave.svg);
        background-repeat: none;
        background-size: cover;
        background-position: center; */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		user-select: none;
		position: relative;
		overflow-x: hidden;
		/* margin-top: auto; */
	}

	.skills {
		width: 100vw !important;
		height: 13vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: pink;
		margin-bottom: 2rem;
		background-color: transparent;
		box-shadow: inset var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius)
				var(--neumorph-doffset),
			inset calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
				var(--neumorph-blur-radius) var(--neumorph-loffset);
	}

	.footer-text {
		color: var(--font);
	}
	.socials {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 87.5%;
		margin-bottom: 1rem;
	}
	.social-icon {
		margin-left: 1rem;
		text-decoration: none;
		padding: 0.5rem;
		border-radius: 50px;
		background: var(--bg);
		box-shadow: var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius)
				var(--neumorph-doffset),
			calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
				var(--neumorph-blur-radius) var(--neumorph-loffset);
		/* box-shadow: var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius) #7e523d, calc(-1*var(--neumorph-distance)) calc(-1*var(--neumorph-distance)) var(--neumorph-blur-radius) #c88261; */
	}

	.social-icon:hover {
		border-radius: 50px;
		background: var(--bg);
		box-shadow: inset var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius)
				var(--neumorph-doffset),
			inset calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
				var(--neumorph-blur-radius) var(--neumorph-loffset);
	}

	@media screen and (max-width: 586px) {
		footer {
			height: auto;
			padding: 0;
		}
		.social-icon {
			width: 18px;
		}
		.cpy {
			width: 50%;
		}
	}

	@media screen and (max-width: 390px) {
		.socials {
			width: 95%;
		}
	}

	@media screen and (max-width: 350px) {
		.cpy {
			display: none;
		}

		.socials {
			flex-direction: row;
			justify-content: center;
		}
	}
</style>
