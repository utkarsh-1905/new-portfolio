import { getRepos } from "$lib/github_api";
import { loading } from "$lib/loading";

export async function load() {
    // const res = await getRepos();
    // console.log(res)
    loading.set(false);
    return "HI"
}