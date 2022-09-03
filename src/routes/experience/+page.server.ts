import { getRepos } from "$lib/github_api";
import { loading } from "$lib/loading";

export async function load(){
    const repos = await getRepos();
    loading.set(false);
    return {
        repos
    }
}