<script lang="ts">
	export let resume: any;
</script>

<div class="container">
	<iframe
		class="pdf"
		src={resume.data.publicUrl}
		style="border:none;"
		title="resume"
	/>
</div>

<style>
	.container {
		margin-top: 3rem;
		width: 100%;
		text-align: center;
	}
	.pdf {
		width: 100%;
		height: 1000px;
	}
	@media screen and (max-width: 576px) {
		.container {
			margin-top: 2rem;
			width: 95vw !important;
		}
		.pdf {
			height: 600px;
		}
	}
</style>
