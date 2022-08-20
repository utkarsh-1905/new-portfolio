import { mediumBlogs, devtoBlogs } from "$lib/fetchBlogs";
import { loading } from "$lib/loading";

export async function load(){
    const medBlogs = await mediumBlogs();
    const devBlogs = await devtoBlogs();
    loading.set(false);
    return {
        medBlogs,
        devBlogs
    }
}