import { mediumBlogs, devtoBlogs } from '$lib/fetchBlogs';
import { experience, projects, certs } from '$lib/data';

export async function load() {
	try {
		const medBlogs = await mediumBlogs();
		const devBlogs = await devtoBlogs();

		return {
			blogs: { medBlogs, devBlogs },
			projects,
			experience,
			certs
		};
	} catch (err) {
		console.log(err);
		return {
			blogs: { medBlogs: [], devBlogs: [] },
			projects,
			experience,
			certs
		};
	}
}
