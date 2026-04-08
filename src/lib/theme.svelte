<script lang="ts">
	import { onMount } from 'svelte';
	let currTheme = false; // false = light (default)

	const dark: Record<string, string> = {
		'--bg': '#13111c',
		'--neumorph-doffset': '#0c0a13',
		'--neumorph-loffset': '#1f1b2e',
		'--neumorph-blur-radius': '14px',
		'--neumorph-distance': '6px',
		'--font': '#e8c547',
		'--sub-font': '#b8b0d0',
		'--muted': '#5e5878',
		'--accent': '#a78bfa',
		'--accent-glow': 'rgba(167,139,250,0.22)',
		'--font-glow': 'rgba(232,197,71,0.18)',
		'--icon-filter': 'none'
	};

	const light: Record<string, string> = {
		'--bg': '#f0ece4',
		'--neumorph-doffset': '#ccc7bc',
		'--neumorph-loffset': '#ffffff',
		'--neumorph-blur-radius': '14px',
		'--neumorph-distance': '6px',
		'--font': '#1a0a3c',
		'--sub-font': '#2e2248',
		'--muted': '#8c7fa0',
		'--accent': '#7c3aed',
		'--accent-glow': 'rgba(124,58,237,0.18)',
		'--font-glow': 'rgba(26,10,60,0.1)',
		'--icon-filter': 'brightness(0) opacity(0.65)'
	};

	function applyTheme(t: Record<string, string>) {
		const root = document.documentElement;
		Object.entries(t).forEach(([k, v]) => root.style.setProperty(k, v));
	}

	function toggleTheme() {
		currTheme = !currTheme;
		applyTheme(currTheme ? dark : light);
		localStorage.setItem('theme', currTheme ? 'dark' : 'light');
	}

	onMount(() => {
		const saved = localStorage.getItem('theme');
		if (saved === 'dark') {
			currTheme = true;
			applyTheme(dark);
		} else {
			// light is default — apply it to ensure CSS vars are set
			currTheme = false;
			applyTheme(light);
		}
	});
</script>

<button class="toggle" on:click={toggleTheme} aria-label="Toggle theme" title={currTheme ? 'Light mode' : 'Dark mode'}>
	<span class="track">
		<span class="thumb" class:light={!currTheme}>
			<span class="icon">{currTheme ? '🌙' : '☀️'}</span>
		</span>
	</span>
</button>

<style>
	.toggle {
		border: none;
		background: transparent;
		cursor: pointer;
		padding: 0;
		display: inline-flex;
		align-items: center;
		vertical-align: middle;
	}

	.track {
		display: inline-flex;
		align-items: center;
		width: 52px;
		height: 28px;
		border-radius: var(--radius-pill);
		background: var(--bg);
		box-shadow: var(--shadow-inset);
		position: relative;
	}

	.thumb {
		position: absolute;
		left: 3px;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: var(--bg);
		box-shadow: var(--shadow-raised);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: left 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.thumb.light { left: 27px; }

	.icon { font-size: 11px; line-height: 1; }
</style>
