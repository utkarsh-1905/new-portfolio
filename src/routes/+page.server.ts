import { mediumBlogs, devtoBlogs } from '$lib/fetchBlogs';
import { loading } from '$lib/loading';
import { getRepos } from '$lib/github_api';

export async function load() {
	try {
		const medBlogs = await mediumBlogs();
		const devBlogs = await devtoBlogs();
        const repos = await getRepos();
	    repos.sort((a: any, b: any) => {
            const d1: any = new Date(a.updated_at);
            const d2: any = new Date(b.updated_at);
            return d2 - d1;
	    });
        repos.map((repo: any, index: number) => {
            repo.id = index + 1;
        });
        loading.set(false);
		return {
			blogs: {
                medBlogs,
			    devBlogs
            },
            repos
		};
	} catch (err) {
		console.log(err);
		return err;
	}
}
