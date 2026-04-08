<div class="about-container">
	<div class="bio-card">
		<h3 class="card-heading">something about me</h3>
		<p class="bio-text">
			I'm a Software Engineer at RapidFort, focused on Container Security and Software Supply Chain
			Security. My work revolves around building and maintaining hardened, near-zero CVE open-source
			container images — the kind that enterprises and government agencies can actually trust in
			production.
		</p>
		<p class="bio-text" style="margin-top: 0.9rem;">
			That means a lot of CVE triage, vulnerability remediation, upstream dependency tracking, and
			securing build pipelines against compliance frameworks like STIG, FIPS, FedRAMP, CMMC, SOC 2,
			and NIS 2. It's unglamorous work most of the time, but there's something deeply satisfying
			about closing the last CVE on an image that ships to thousands of deployments.
		</p>
		<p class="bio-text" style="margin-top: 0.9rem;">
			I graduated from Thapar University in 2025 with a degree in Electronics and Computer
			Engineering. If you're working on anything in the container security or supply chain security
			space, I'm always up for a conversation.
		</p>
	</div>

	<div class="stack-card">
		<h3 class="card-heading">my stack</h3>
		<ul class="stack-list">
			<li class="stack-item">
				<span class="stack-label">Languages</span>
				<span class="stack-value">Go, JavaScript, Python, C/C++, Bash</span>
			</li>
			<li class="stack-item">
				<span class="stack-label">Frontend</span>
				<span class="stack-value">SvelteKit, React.js, Next.js, TailwindCSS</span>
			</li>
			<li class="stack-item">
				<span class="stack-label">Backend</span>
				<span class="stack-value">Node.js, Go, REST APIs, PostgreSQL, Redis</span>
			</li>
			<li class="stack-item">
				<span class="stack-label">Security</span>
				<span class="stack-value">CVE triage, STIG, FIPS, FedRAMP, CMMC, SOC 2, NIS 2, SBOM</span>
			</li>
			<li class="stack-item">
				<span class="stack-label">DevOps</span>
				<span class="stack-value">Docker, Kubernetes, Terraform, GitHub Actions, Jenkins</span>
			</li>
			<li class="stack-item">
				<span class="stack-label">Cloud</span>
				<span class="stack-value">AWS, GCP, Firebase</span>
			</li>
		</ul>
	</div>
</div>

<style>
	.about-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-top: 1.5rem;
	}

	.bio-card,
	.stack-card {
		background: var(--bg);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-raised);
		padding: 1.75rem 2rem;
	}

	.card-heading {
		font-size: 1rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		color: var(--font);
		margin-bottom: 1rem;
	}

	.bio-text {
		color: var(--sub-font);
		font-size: 0.92rem;
		line-height: 1.75;
	}

	.stack-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.stack-item {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: baseline;
		padding: 0.6rem 0.75rem;
		border-radius: var(--radius-sm);
		background: var(--bg);
		box-shadow: var(--shadow-inset);
	}

	.stack-label {
		font-size: 0.78rem;
		font-weight: 600;
		color: var(--font);
		letter-spacing: 0.05em;
		white-space: nowrap;
		min-width: 90px;
		text-transform: lowercase;
	}

	.stack-value {
		font-size: 0.82rem;
		color: var(--sub-font);
		font-family: 'Cascadia Code', monospace;
		line-height: 1.5;
	}

	@media screen and (max-width: 580px) {
		.bio-card,
		.stack-card {
			padding: 1.25rem 1rem;
		}

		.stack-item {
			flex-direction: column;
			gap: 0.25rem;
		}

		.stack-label {
			min-width: unset;
		}
	}
</style>
