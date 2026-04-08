<script lang="ts">
	import { onMount } from 'svelte';
	import Typewriter from 'svelte-typewriter';
	import { loading } from '$lib/loading';

	let showContent = false;

	onMount(() => {
		$loading = false;
		setTimeout(() => {
			showContent = true;
		}, 2500);
	});

	function onTypewriterDone() {
		showContent = true;
	}
</script>

<section class="hero" id="home">
	<div class="hero-bg" aria-hidden="true"></div>

	<div class="hero-inner">
		<div class="greeting-wrap">
			<Typewriter
				mode="loop"
				interval={100}
				wordInterval={2000}
				cursor={true}
				on:done={onTypewriterDone}
			>
				<span class="greeting">namaste</span>
				<span class="greeting">hello</span>
				<span class="greeting">hola</span>
				<span class="greeting">salam</span>
				<span class="greeting">aloha</span>
			</Typewriter>
		</div>

		<div class="name-block">
			<h1 class="name">Utkarsh Tripathi</h1>
			<p class="role">
				complaince &nbsp;·&nbsp; open source &nbsp;·&nbsp; software supply chain security
			</p>
		</div>

		{#if showContent}
			<div class="social-row">
				<a
					href="https://github.com/utkarsh-1905"
					target="_blank"
					rel="noreferrer"
					class="social-btn"
				>
					<img src="/github.svg" width="16" height="16" alt="" aria-hidden="true" />
					<span>github</span>
				</a>
				<a
					href="https://www.linkedin.com/in/utkarsh1905/"
					target="_blank"
					rel="noreferrer"
					class="social-btn"
				>
					<img src="/linkedin.svg" width="16" height="16" alt="" aria-hidden="true" />
					<span>linkedin</span>
				</a>
				<a href="https://x.com/utripathi2002" target="_blank" rel="noreferrer" class="social-btn">
					<img src="/twitter.svg" width="16" height="16" alt="" aria-hidden="true" />
					<span>twitter</span>
				</a>
				<a href="#contact" class="social-btn cta">
					<span>get in touch ↗</span>
				</a>
			</div>

			<!-- Terminal widget -->
			<div class="terminal-card" aria-hidden="true">
				<div class="term-titlebar">
					<span class="dot dot-red"></span>
					<span class="dot dot-yellow"></span>
					<span class="dot dot-green"></span>
					<span class="term-title">utkarsh@arch ~ </span>
				</div>
				<div class="term-body">
					<div class="term-line" style="animation-delay: 0.1s">
						<span class="term-prompt">$&nbsp;</span><span class="term-cmd"
							>systemctl status utkarsh</span
						>
					</div>

					<div class="term-gap" style="animation-delay: 0.45s"></div>

					<!-- service header -->
					<div class="term-line" style="animation-delay: 0.5s">
						<span class="term-bullet">●&nbsp;</span><span class="term-svc-name"
							>utkarsh.service</span
						><span class="term-muted"> — Software Engineer, Container Security</span>
					</div>
					<div class="term-line term-svc-row" style="animation-delay: 0.75s">
						<span class="term-svc-key">Loaded:</span>
						<span class="term-svc-val"
							>loaded <span class="term-muted">(/usr/lib/systemd/user/utkarsh.service;</span>
							<span class="term-ok">enabled</span><span class="term-muted">)</span></span
						>
					</div>
					<div class="term-line term-svc-row" style="animation-delay: 0.95s">
						<span class="term-svc-key">Active:</span>
						<span class="term-ok">active (running)</span><span class="term-muted">
							since Jun 2021; 4 years ago</span
						>
					</div>
					<div class="term-line term-svc-row" style="animation-delay: 1.15s">
						<span class="term-svc-key">Employer:</span>
						<span class="term-svc-val"
							>RapidFort, Inc. <span class="term-muted">— Noida, India 🇮🇳</span></span
						>
					</div>
					<div class="term-line term-svc-row" style="animation-delay: 1.35s">
						<span class="term-svc-key">Main PID:</span>
						<span class="term-svc-val"
							><span class="term-muted">001</span>
							<span class="term-muted">(hardening-containers)</span></span
						>
					</div>
					<div class="term-line term-svc-row" style="animation-delay: 1.55s">
						<span class="term-svc-key">Memory:</span>
						<span class="term-svc-val"
							>3 cups of coffee <span class="term-muted">(limit: ∞)</span></span
						>
					</div>

					<div class="term-gap" style="animation-delay: 1.7s"></div>

					<!-- cgroup tree -->
					<div class="term-line term-svc-row" style="animation-delay: 1.75s">
						<span class="term-svc-key">CGroup:</span>
						<span class="term-muted">/user.slice/utkarsh.service</span>
					</div>
					<div class="term-line term-tree" style="animation-delay: 1.95s">
						<span class="term-tree-chr">├─</span><span class="term-muted">001 </span><span
							class="term-svc-val">hardening-container-images --compliance stig,fips</span
						>
					</div>
					<div class="term-line term-tree" style="animation-delay: 2.15s">
						<span class="term-tree-chr">├─</span><span class="term-muted">002 </span><span
							class="term-svc-val">vibecoding --with-claude</span
						>
					</div>
					<div class="term-line term-tree" style="animation-delay: 2.35s">
						<span class="term-tree-chr">├─</span><span class="term-muted">003 </span><span
							class="term-svc-val">flying-drones <span class="term-muted">(weekends)</span></span
						>
					</div>
					<div class="term-line term-tree" style="animation-delay: 2.55s">
						<span class="term-tree-chr">└─</span><span class="term-muted">004 </span><span
							class="term-bad">travelling <span class="term-muted">(always)</span></span
						>
					</div>

					<div class="term-gap" style="animation-delay: 2.7s"></div>

					<!-- journal tail -->
					<div class="term-line term-log" style="animation-delay: 2.75s">
						<span class="term-muted">Jan 25 </span><span class="term-log-svc">utkarsh[001]:</span
						><span class="term-muted"> promoted to Software Engineer</span>
					</div>
					<div class="term-line term-log" style="animation-delay: 2.95s">
						<span class="term-muted">Jun 21 </span><span class="term-log-svc">utkarsh[001]:</span
						><span class="term-muted"> graduated Thapar University, B.E. 2025</span>
					</div>

					<div class="term-gap" style="animation-delay: 3.1s"></div>

					<div class="term-line" style="animation-delay: 3.2s">
						<span class="term-prompt">$&nbsp;</span><span class="term-cursor">▋</span>
					</div>
				</div>
			</div>
		{/if}

		<div class="scroll-hint" class:visible={showContent}>
			<span class="scroll-dot"></span>
		</div>
	</div>
</section>

<style>
	.hero {
		--cursor-color: var(--bg);
		position: relative;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		min-height: calc(100vh - 52px);
		text-align: center;
		overflow: hidden;
		padding-top: 14vh;
		padding-bottom: 4rem;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		background-image: radial-gradient(circle, var(--neumorph-loffset) 1.5px, transparent 1.5px);
		background-size: 28px 28px;
		opacity: 0.5;
		pointer-events: none;
	}

	.hero-inner {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.1rem;
		padding: 1rem 1rem 0;
		width: 100%;
	}

	/* Greeting typewriter */
	.greeting-wrap {
		line-height: 1;
	}

	:global(.greeting) {
		font-size: clamp(0.9rem, 1.8vw, 1.1rem);
		font-weight: 400;
		letter-spacing: 0.3em;
		text-transform: lowercase;
		color: var(--muted) !important;
		font-family: 'Cascadia Code', monospace;
	}

	.name-block {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.name {
		font-size: clamp(2.5rem, 7vw, 5rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		color: var(--font);
		text-shadow: 0 0 80px rgba(244, 196, 48, 0.2);
		line-height: 1.05;
	}

	.role {
		font-size: clamp(0.78rem, 1.4vw, 0.92rem);
		color: var(--muted);
		letter-spacing: 0.08em;
		text-transform: lowercase;
	}

	.social-row {
		display: flex;
		flex-direction: row;
		gap: 0.75rem;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 0.75rem;
		animation: fadeUp 0.5s ease both;
	}

	.social-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.55rem 1.1rem;
		border-radius: var(--radius-pill);
		background: var(--bg);
		box-shadow: var(--shadow-raised);
		color: var(--sub-font);
		font-size: 0.8rem;
		font-weight: 500;
		letter-spacing: 0.04em;
		transition:
			box-shadow 0.2s ease,
			transform 0.15s ease;
	}

	.social-btn:hover {
		box-shadow: var(--shadow-inset);
		transform: translateY(1px);
		color: var(--font);
	}

	.social-btn.cta {
		background: var(--bg);
		color: var(--font);
		box-shadow:
			var(--shadow-raised),
			0 0 0 1px rgba(244, 196, 48, 0.2);
	}

	.social-btn.cta:hover {
		box-shadow:
			var(--shadow-inset),
			0 0 0 1px rgba(244, 196, 48, 0.15);
	}

	/* ── Terminal widget ── */
	.terminal-card {
		background: var(--bg);
		box-shadow: var(--shadow-raised);
		border-radius: var(--radius-lg);
		width: min(460px, 92vw);
		font-family: 'Cascadia Code', 'Fira Code', monospace;
		font-size: 0.75rem;
		overflow: hidden;
		margin-top: 1.75rem;
		animation: fadeUp 0.6s ease 1.9s both;
		text-align: left;
	}

	.term-titlebar {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 0.6rem 1rem;
		background: var(--bg);
		box-shadow: var(--shadow-inset);
	}

	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		flex-shrink: 0;
	}
	.dot-red {
		background: #ff5f57;
	}
	.dot-yellow {
		background: #febc2e;
	}
	.dot-green {
		background: #28c840;
	}

	.term-title {
		margin-left: 0.6rem;
		color: var(--muted);
		font-size: 0.68rem;
		letter-spacing: 0.04em;
	}

	.term-body {
		padding: 1rem 1.25rem 1.1rem;
		display: flex;
		flex-direction: column;
		gap: 0.28rem;
	}

	.term-line {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.2rem;
		opacity: 0;
		animation: termLine 0.3s ease both;
	}

	.term-indent {
		padding-left: 1.15rem;
	}

	.term-gap {
		height: 0.55rem;
		opacity: 0;
		animation: termLine 0.1s ease both;
	}

	.term-prompt {
		color: var(--accent);
		flex-shrink: 0;
	}
	.term-cmd {
		color: var(--sub-font);
	}
	.term-label {
		color: var(--muted);
		min-width: 5rem;
		flex-shrink: 0;
	}
	.term-val {
		color: var(--font);
		font-weight: 500;
	}
	.term-ok {
		color: #4ade80;
		flex-shrink: 0;
	}
	.term-warn {
		color: #f59e0b;
		flex-shrink: 0;
	}
	.term-bad {
		color: #f87171;
	}
	.term-status {
		color: var(--sub-font);
	}
	.term-muted {
		color: var(--muted);
	}

	/* systemctl layout */
	.term-bullet {
		color: #4ade80;
		flex-shrink: 0;
	}
	.term-svc-name {
		color: var(--font);
		font-weight: 600;
	}
	.term-svc-row {
		padding-left: 1.15rem;
		gap: 0.5rem;
	}
	.term-svc-key {
		color: var(--muted);
		flex-shrink: 0;
		width: 5.5rem;
		font-size: 0.72rem;
	}
	.term-svc-val {
		color: var(--sub-font);
	}
	.term-tree {
		padding-left: 2rem;
		gap: 0.3rem;
	}
	.term-tree-chr {
		color: var(--muted);
		flex-shrink: 0;
	}
	.term-log {
		padding-left: 1.15rem;
		gap: 0.4rem;
		font-size: 0.7rem;
	}
	.term-log-svc {
		color: var(--accent);
		flex-shrink: 0;
	}

	.term-cursor {
		color: var(--font);
		animation: blink 1s step-end infinite;
	}

	@keyframes termLine {
		from {
			opacity: 0;
			transform: translateX(-5px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}

	/* Scroll hint */
	.scroll-hint {
		margin-top: 1.5rem;
		opacity: 0;
		transition: opacity 0.6s ease;
	}

	.scroll-hint.visible {
		opacity: 0.4;
	}

	.scroll-dot {
		display: block;
		width: 5px;
		height: 5px;
		background: var(--font);
		border-radius: 50%;
		animation: bounce 2s ease-in-out infinite;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(8px);
		}
	}

	@keyframes fadeUp {
		from {
			opacity: 0;
			transform: translateY(12px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media screen and (max-width: 600px) {
		.hero {
			padding-top: 12vh;
		}
		.social-row {
			gap: 0.5rem;
		}
		.social-btn {
			padding: 0.5rem 0.85rem;
			font-size: 0.75rem;
		}
		.role {
			letter-spacing: 0.04em;
		}
		.terminal-card {
			font-size: 0.72rem;
		}
	}
</style>
