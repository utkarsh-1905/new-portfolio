<script lang="ts">
	declare const Calendly: any;
	import { loading } from '$lib/loading';
	$loading = false;
</script>

<section class="contact-section" id="contact">
	<h2 class="section-heading">contact me</h2>

	<div class="cta-row">
		<button
			class="calendly-btn"
			on:click={() => {
				Calendly.initPopupWidget({ url: 'https://calendly.com/heyutkarsh/30min' });
			}}
		>
			📅&nbsp; let's meet
		</button>
		<p class="helper">or fill out the form — i usually respond within the same business day</p>
	</div>

	<form action="https://api.web3forms.com/submit" method="post" class="form">
		<input type="hidden" name="access_key" value="d6a0ccc5-4cb8-4d11-8049-a220977183fc" />
		<input type="hidden" name="subject" value="Someone wants to contact me" />
		<input type="hidden" name="redirect" value="https://www.utkarshtripathi.in/thanks" />

		<div class="field-row">
			<div class="field">
				<label for="contact-name">name</label>
				<input type="text" required id="contact-name" name="name" placeholder="steve wozniak" />
			</div>
			<div class="field">
				<label for="contact-email">email</label>
				<input type="email" required id="contact-email" name="email" placeholder="steve@apple.com" />
			</div>
		</div>

		<div class="field">
			<label for="contact-subject">subject</label>
			<input type="text" required id="contact-subject" name="subject" placeholder="i want to know about..." />
		</div>

		<div class="field">
			<label for="contact-message">message</label>
			<textarea id="contact-message" required rows="7" name="message" placeholder="hey utkarsh, ..." />
		</div>

		<button type="submit" class="submit-btn">send message ↗</button>
	</form>
</section>

<style>
	.contact-section {
		margin: 4rem auto 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 4rem;
		max-width: 680px;
		width: 100%;
	}

	/* CTA */
	.cta-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		margin-bottom: 2rem;
		flex-wrap: wrap;
		width: 100%;
	}

	.calendly-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.65rem 1.4rem;
		border-radius: var(--radius-pill);
		background: var(--bg);
		box-shadow: var(--shadow-raised);
		border: none;
		color: var(--font);
		font-size: 0.85rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		cursor: pointer;
		transition: box-shadow 0.2s ease, transform 0.15s ease;
	}

	.calendly-btn:hover {
		box-shadow: var(--shadow-inset);
		transform: translateY(1px);
	}

	.helper {
		font-size: 0.8rem;
		color: var(--muted);
		max-width: 34ch;
		line-height: 1.5;
	}

	/* Form */
	.form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
	}

	.field-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	label {
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: lowercase;
		color: var(--muted);
	}

	input, textarea {
		background: var(--bg);
		border: 1px solid rgba(255,255,255,0.06);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-inset);
		color: var(--sub-font);
		font-size: 0.875rem;
		padding: 0.75rem 1rem;
		width: 100%;
		resize: vertical;
		transition: border-color 0.2s ease, box-shadow 0.2s ease;
		font-family: 'Inter', sans-serif;
	}

	input::placeholder, textarea::placeholder {
		color: var(--muted);
		opacity: 0.7;
	}

	input:focus, textarea:focus {
		outline: none;
		border-color: rgba(155, 114, 240, 0.4);
		box-shadow: var(--shadow-inset), 0 0 0 3px rgba(155, 114, 240, 0.1);
	}

	.submit-btn {
		align-self: center;
		padding: 0.7rem 1.75rem;
		border-radius: var(--radius-pill);
		background: var(--bg);
		box-shadow: var(--shadow-raised), 0 0 0 1px rgba(240,192,64,0.15);
		border: none;
		color: var(--font);
		font-size: 0.875rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		cursor: pointer;
		transition: box-shadow 0.2s ease, transform 0.15s ease;
		margin-top: 0.5rem;
	}

	.submit-btn:hover {
		box-shadow: var(--shadow-inset);
		transform: translateY(1px);
	}

	@media screen and (max-width: 600px) {
		.contact-section { max-width: 100%; }
		.field-row { grid-template-columns: 1fr; }
		.cta-row { flex-direction: column; align-items: center; }
		.submit-btn { width: 100%; justify-content: center; }
	}
</style>
