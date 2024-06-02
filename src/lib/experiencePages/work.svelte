<script>
	// const works = [
	// 	{
	// 		name: 'Enterprof',
	// 		role: 'Blockchain Developer',
	// 		type: 'Internship',
	// 		jobs: [
	// 			'Developed the frontend for the DAPP',
	// 			'Modified the smart contract in solidity to minimize gas cost',
	// 			'Created backend to listen to events on the smart contract',
	// 			"Created packages and API's for their SaaS business model",
	// 			'Developed the backend to execute on chain (polygon) transactions'
	// 		],
	// 		time: 'April-July 2022'
	// 	},
	// 	{
	// 		name: 'Google Developers Student Club',
	// 		role: 'Core Member',
	// 		type: 'Full Time',
	// 		jobs: ['Leading a Blockchain development program with 100+ students'],
	// 		time: 'June 2022-Present'
	// 	},
	// 	{
	// 		name: 'Microsoft Learn Student Chapter',
	// 		role: 'Core Member',
	// 		type: 'Full Time',
	// 		jobs: [
	// 			'Oraganized workshops and gave talks on OpenSource, Git and Github',
	// 			'Helped in organizing Makeathon, a MLH sponsered Hackathon',
	// 			'Developed the website for the chapter',
	// 			'Developed a recruitment portal with firebase backend and edge functions'
	// 		],
	// 		time: 'December 2021-Present'
	// 	},
	// 	{
	// 		name: 'Lifesap',
	// 		role: 'Backend Developer',
	// 		type: 'Internship',
	// 		jobs: [
	// 			'Developed the backend on firebase for the medical e-commerce platform',
	// 			'Optimized API response times',
	// 			'Used firebase and firestore'
	// 		],
	// 		time: 'May-July 2022'
	// 	}
	// ];

	export let works;
</script>

<div class="container">
	<div class="work-container">
		{#each works as work}
			<div class="work-card">
				<div class="work-info">
					<h2 class="work-title">{work.name}</h2>
					<h5 class="work-role">{work.role} &#x2022; {work.type}</h5>
					<ul class="work-jobs">
						{#each work.jobs as job}
							<li>{job}</li>
						{/each}
					</ul>
					<small>{work.time}</small>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: fit-content;
		align-items: center;
		justify-content: center;
	}

	.work-container {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		width: 100%;
		height: fit-content;
		align-items: center;
		justify-content: space-around;
		border-radius: 15px;
		padding: 1rem;
		padding-bottom: 2rem;
		margin-top: 3rem;
		background: var(--bg);
		box-shadow: inset var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius)
				var(--neumorph-doffset),
			inset calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
				var(--neumorph-blur-radius) var(--neumorph-loffset);
	}
	.work-card {
		display: flex;
		flex-direction: column;
		box-shadow: var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius)
				var(--neumorph-doffset),
			calc(-1 * var(--neumorph-distance)) calc(-1 * var(--neumorph-distance))
				var(--neumorph-blur-radius) var(--neumorph-loffset);
		background: var(--bg);
		border-radius: 15px;
		padding: 1rem;
		width: 90%;
		margin-top: 2rem;
	}
	.work-info {
		padding: 0 1rem 0 1rem;
	}
	.work-title,
	.work-role,
	.work-jobs {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
	@media screen and (max-width: 450px) {
		.work-info {
			padding: 0 0.5rem 0 0.5rem;
		}
	}
</style>
