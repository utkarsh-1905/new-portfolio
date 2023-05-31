<script lang="ts">
	export let repo: any;
	function getUpdatedTime(time: string) {
		let date_prev = new Date(time);
		return date_prev.toDateString();
	}
</script>

<div class="container">
	<!-- <img class="gh-calender" src="https://raw.githubusercontent.com/utkarsh-1905/utkarsh-1905/output/github-contribution-grid-snake.svg" alt="snake eating my contributions, i am sad"/> -->
	<!-- this only looks good in dark mode -->
	<div class="repo-table">
		<div class="table">
			<div class="row">
				<div class="cl cl-head cl-number">s.no</div>
				<div class="cl cl-head cl-name">repo</div>
				<div class="cl cl-head cl-lang">language</div>
				<div class="cl cl-head cl-updated">updated</div>
			</div>
			{#each repo as data}
				<div class="row">
					<div class="cl cl-number">{data.id}</div>
					<div class="cl cl-name">
						<a href={data.url} target="_blank" rel="noreferrer">{data.name} &#x2197;</a>
					</div>
					<div class="cl cl-lang">{data.language}</div>
					<div class="cl cl-updated">{getUpdatedTime(data.updated_at)}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.repo-table {
		width: 100%;
		margin-top: 2rem;
		box-shadow: var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius)
				var(--neumorph-doffset),
			calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
				var(--neumorph-blur-radius) var(--neumorph-loffset);
		background: var(--bg);
		border-radius: 15px;
		padding: 1rem;
	}
	.table {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.row {
		display: flex;
		width: 100%;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-top: 1rem;
		box-shadow: inset var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius)
				var(--neumorph-doffset),
			inset calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
				var(--neumorph-blur-radius) var(--neumorph-loffset);
		border-radius: 15px;
		background: var(--bg);
	}
	.table > div:first-of-type {
		margin-top: 0;
	}
	.cl {
		/* border: 1px solid black; */
		text-align: center;
		padding: 1rem;
	}
	.cl-number {
		width: 10%;
	}
	.cl-name {
		width: 50%;
	}
	.cl-lang {
		width: 20%;
	}
	.cl-updated {
		width: 20%;
	}
	@media screen and (max-width: 470px) {
		.repo-table {
			width: 85vw !important;
		}
		.repo-table {
			padding: 0.5rem;
		}
		.cl-updated {
			display: none;
		}
		.cl-name {
			width: 65%;
		}
		.cl-lang {
			width: 25%;
		}
	}
	@media screen and (max-width: 375px) {
		.cl {
			font-size: x-small;
		}
		.repo-table {
			width: 92vw !important;
		}
	}
</style>
