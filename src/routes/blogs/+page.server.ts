import { mediumBlogs, devtoBlogs } from '$lib/fetchBlogs';
import { loading } from '$lib/loading';

export async function load() {
	try {
		const medBlogs = await mediumBlogs();
		const devBlogs = await devtoBlogs();
		loading.set(false);
		return {
			medBlogs,
			devBlogs
		};
	} catch (err) {
		console.log(err);
		return err;
	}
}
