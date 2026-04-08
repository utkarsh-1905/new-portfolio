import { Octokit } from '@octokit/core';
import { env } from '$env/dynamic/private';

export async function getRepos() {
	try {
		const octokit = new Octokit({
			auth: env.VITE_GITHUB_KEY ?? ''
		});
		const res = await octokit.request('GET /users/utkarsh-1905/repos?per_page=100');
		return (res.data as any[])
			.filter((repo: any) => !repo.fork)
			.map((repo: any) => ({
				name: repo.name,
				description: repo.description,
				url: repo.html_url,
				language: repo.language,
				updated_at: repo.updated_at,
				created_at: repo.created_at
			}))
			.sort(
				(a: any, b: any) =>
					new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
			);
	} catch (e) {
		console.error('GitHub API error:', e);
		return [];
	}
}
