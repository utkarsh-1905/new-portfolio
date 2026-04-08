export type Experience = {
	name: string;
	role: string;
	type: string;
	time: string;
	jobs: string[];
};

export type Project = {
	name: string;
	description: string;
	github?: string;
	live?: string;
	stack: string[];
	highlights: string[];
	featured?: boolean;
};

export type Cert = {
	name: string;
	issuer: string;
	date: string;
	url?: string;
};

export const experience: Experience[] = [
	{
		name: 'RapidFort, Inc.',
		role: 'Software Engineer',
		type: 'Full-time',
		time: 'Jun 2025 – Present',
		jobs: [
			'Engineer and maintain near-zero CVE open-source container images compliant with STIG/FIPS standards for FedRAMP, CMMC, SOC 2, and NIS 2.',
			'Deliver timely vulnerability remediation and image updates to consistently meet security SLAs for enterprise and government customers.',
			'Monitor upstream advisories and dependency chains to ensure continuous security and compliance readiness across image portfolios.',
			'Contribute to container hardening and secure image build pipelines following industry best practices in supply chain security.'
		]
	},
	{
		name: 'RapidFort, Inc.',
		role: 'Software Development Contractor',
		type: 'Internship',
		time: 'Jan 2025 – Jun 2025',
		jobs: [
			'Hardened, secured, and optimized Docker images of open-source software for Docker and Kubernetes environments as part of the Community Images team.',
			'Secured high-demand production images including MySQL, PostgreSQL, ClickHouse, and others used by thousands of deployments.'
		]
	},
	{
		name: 'Thapar Institute of Engineering & Technology',
		role: 'Student Software Developer',
		type: 'Contract',
		time: 'Jan 2024 – Dec 2024',
		jobs: [
			'Led a software project funded with INR 20 Lakhs by Thapar University.',
			'Collaborated with university stakeholders to design automation and scheduling software, streamlining complex manual processes in educational institutes.'
		]
	},
	{
		name: 'Rivet',
		role: 'Software Engineer',
		type: 'Internship',
		time: 'Oct 2023 – Oct 2024',
		jobs: [
			'Enhanced user experience by implementing crypto payment wallets, enabling users to pay in USDC.',
			'Implemented member invite service allowing users to onboard team members into their organization.',
			'Decreased feature shipping time by automating testing and deployment pipelines using GitHub Actions.',
			'Optimized the auth service flow, achieving a latency reduction of up to 7%.'
		]
	}
];

export const projects: Project[] = [
	{
		name: 'Hardened Community Images',
		description:
			'Production-grade, near-zero CVE container images for high-demand open-source software. Built for enterprises and government agencies that need provably secure, compliance-ready deployments.',
		github: 'https://github.com/rapidfort/community-images',
		// live: 'https://rapidfort.com/community-images',
		stack: ['Docker', 'Bash', 'Python', 'Go', 'Kubernetes'],
		highlights: [
			'Images used across thousands of enterprise and government deployments',
			'Compliant with STIG, FIPS, FedRAMP, CMMC, SOC 2, and NIS 2 frameworks'
		],
		featured: true
	},
	{
		name: 'SCM — System Call Monitor',
		description:
			'Real-time syscall monitoring tool built with eBPF that attaches to running processes and traces kernel interactions. Exports metrics to Prometheus with Grafana dashboard integration for auditing and security analysis.',
		github: 'https://github.com/utkarsh-1905/scm-prom',
		stack: ['Go', 'C', 'eBPF', 'Prometheus', 'Grafana', 'Docker'],
		highlights: [
			'Attaches directly to live processes via eBPF — no code instrumentation needed',
			'Generates syscall sequence graphs and audit reports for security analysis'
		],
		featured: true
	},
	{
		name: 'Linky — Open Source URL Shortener',
		description:
			'URL shortener that generates custom-named, memorable links with optional expiry dates and QR code generation. Led the project as an open-source initiative under Microsoft Student Chapter, TIET.',
		github: 'https://github.com/MicrosoftStudentChapter/Linky',
		stack: ['Go', 'React', 'Redis', 'Docker', 'Docker Compose'],
		highlights: [
			'20+ contributors, 6 stars, 16 forks on GitHub',
			'Shipped v1.0.0 with full Docker and Kubernetes deployment support'
		],
		featured: false
	},
	{
		name: 'Timetable Generator',
		description:
			'Web app that scrapes and parses Excel timetable files from Thapar University, presenting clean schedule views with persistent branch/section preferences.',
		github: 'https://github.com/utkarsh-1905/time-table',
		// live: 'https://timetable.mlsctiet.com',
		stack: ['Go', 'HTML', 'Docker'],
		highlights: [
			'65 stars and 33 forks — actively used by students across campus',
			'5 contributors; live at timetable.mlsctiet.com'
		],
		featured: false
	}
	// {
	// 	name: 'University Scheduling & Automation Platform',
	// 	description:
	// 		'Full-stack automation and scheduling system commissioned by Thapar University to streamline complex manual processes across academic departments.',
	// 	stack: ['Node.js', 'SvelteKit', 'PostgreSQL', 'Docker'],
	// 	highlights: ['Funded with INR 20 Lakhs by Thapar University'],
	// 	featured: false
	// }
];

export const certs: Cert[] = [
	// {
	// 	name: 'Fundamentals of Accelerated Computing with CUDA C/C++',
	// 	issuer: 'NVIDIA Deep Learning Institute',
	// 	date: '2024',
	// 	url: ''
	// },
	// {
	// 	name: 'Fundamentals of Accelerated Computing with CUDA Python',
	// 	issuer: 'NVIDIA Deep Learning Institute',
	// 	date: '2024',
	// 	url: ''
	// },
	{
		name: 'A Beginner`s Guide to Linux Kernel Development',
		issuer: 'The Linux Foundation',
		date: '2024',
		url: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/458ceaea-c26c-4525-b9c4-4ec0dd006bee-utkarsh-tripathi-99bd3332-edd9-469d-bffd-9ea6c2dfd1bc-certificate.pdf'
	}
];
