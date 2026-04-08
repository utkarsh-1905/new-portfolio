<script lang="ts">
	import Theme from '$lib/theme.svelte';
	let drawerOpen = false;

	const leftLinks = [
		{ label: 'about', href: '#about' },
		{ label: 'blogs', href: '#blogs' }
	];
	const rightLinks = [{ label: 'contact', href: '#contact' }];
	const allLinks = [...leftLinks, ...rightLinks];

	function closeDrawer() {
		drawerOpen = false;
	}
</script>

<nav class="navbar">
	<!-- Desktop: left-group [brand] right-group -->
	<div class="nav-inner">
		<div class="nav-group">
			{#each leftLinks as link}
				<a href={link.href} class="nav-pill">{link.label}</a>
			{/each}
		</div>

		<a href="/#home" aria-label="home" class="brand-btn">
			<svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<polyline points="3,5 9,10 3,15" />
					<line x1="11" y1="14" x2="17" y2="14" />
				</svg>
		</a>

		<div class="nav-group">
			{#each rightLinks as link}
				<a href={link.href} class="nav-pill">{link.label}</a>
			{/each}
			<div class="theme-wrap">
				<Theme />
			</div>
		</div>
	</div>

	<!-- Mobile controls -->
	<div class="mobile-bar">
		<a href="/#home" class="brand-btn" aria-label="home">
			<svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<polyline points="3,5 9,10 3,15" />
					<line x1="11" y1="14" x2="17" y2="14" />
				</svg>
		</a>
		<div class="mobile-right">
			<Theme />
			<button
				class="hamburger-btn"
				on:click={() => (drawerOpen = !drawerOpen)}
				aria-label="Toggle menu"
				aria-expanded={drawerOpen}
			>
				<span class="bar" class:open={drawerOpen}></span>
				<span class="bar mid" class:open={drawerOpen}></span>
				<span class="bar" class:open={drawerOpen}></span>
			</button>
		</div>
	</div>
</nav>

{#if drawerOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="backdrop" on:click={closeDrawer}></div>
{/if}

<div class="drawer" class:open={drawerOpen} aria-hidden={!drawerOpen}>
	<button class="close-btn" on:click={closeDrawer} aria-label="Close">✕</button>
	<div class="drawer-links">
		{#each allLinks as link}
			<a href={link.href} class="drawer-link" on:click={closeDrawer}>{link.label}</a>
		{/each}
	</div>
</div>

<style>
	.navbar {
		position: fixed;
		top: 0;
		width: 100vw;
		z-index: 200;
		background: var(--bg);
		border-bottom: 1px solid rgba(255, 255, 255, 0.04);
		padding: 0.6rem 0;
	}

	/* Desktop */
	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: min(82vw, 1080px);
		margin: 0 auto;
	}

	.nav-group {
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}

	.nav-pill {
		padding: 0.42rem 1.05rem;
		border-radius: var(--radius-pill);
		background: var(--bg);
		box-shadow: var(--shadow-raised);
		color: var(--font);
		font-size: 0.8rem;
		font-weight: 500;
		letter-spacing: 0.05em;
		transition:
			box-shadow 0.2s ease,
			transform 0.15s ease;
		white-space: nowrap;
	}

	.nav-pill:hover {
		box-shadow: var(--shadow-inset);
		transform: translateY(1px);
		color: var(--font);
	}

	.brand-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background: var(--bg);
		box-shadow: var(--shadow-raised);
		transition: box-shadow 0.2s ease;
		flex-shrink: 0;
	}

	.brand-btn:hover {
		box-shadow: var(--shadow-inset);
	}

	.theme-wrap {
		margin-left: 0.25rem;
		display: flex;
		align-items: center;
	}

	/* Mobile */
	.mobile-bar {
		display: none;
		align-items: center;
		justify-content: space-between;
		padding: 0 1.25rem;
	}

	.mobile-right {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}

	.hamburger-btn {
		background: var(--bg);
		border: none;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-raised);
		width: 36px;
		height: 36px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5px;
		cursor: pointer;
		padding: 0.4rem;
	}

	.hamburger-btn:active {
		box-shadow: var(--shadow-inset);
	}

	.bar {
		display: block;
		width: 16px;
		height: 2px;
		background: var(--font);
		border-radius: 2px;
		transition:
			transform 0.22s ease,
			opacity 0.22s ease;
		transform-origin: center;
	}

	.bar.open:first-child {
		transform: translateY(7px) rotate(45deg);
	}
	.bar.mid.open {
		opacity: 0;
		transform: scaleX(0);
	}
	.bar.open:last-child {
		transform: translateY(-7px) rotate(-45deg);
	}

	.backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 150;
	}

	.drawer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 160;
		background: var(--bg);
		border-radius: var(--radius-lg) var(--radius-lg) 0 0;
		box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.5);
		padding: 1.5rem 2rem 3rem;
		transform: translateY(100%);
		transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.drawer.open {
		transform: translateY(0);
	}

	.close-btn {
		background: var(--bg);
		border: none;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-raised);
		color: var(--sub-font);
		width: 34px;
		height: 34px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		margin: 0 auto 1.5rem;
		font-size: 0.9rem;
	}

	.drawer-links {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		align-items: center;
	}

	.drawer-link {
		display: block;
		width: 60%;
		text-align: center;
		padding: 0.8rem;
		border-radius: var(--radius-md);
		background: var(--bg);
		box-shadow: var(--shadow-raised);
		color: var(--font);
		font-size: 1.05rem;
		font-weight: 500;
		letter-spacing: 0.05em;
		transition: box-shadow 0.2s ease;
	}

	.drawer-link:hover,
	.drawer-link:active {
		box-shadow: var(--shadow-inset);
	}

	@media screen and (max-width: 768px) {
		.nav-inner {
			display: none;
		}
		.mobile-bar {
			display: flex;
		}
	}
</style>
