import { getRepos } from "$lib/github_api";
import { loading } from "$lib/loading";

export async function load(){
    const repos = await getRepos();
    repos.sort((a:any, b:any) =>{
        const d1: any = new Date(a.updated_at);
        const d2: any = new Date(b.updated_at);
        return d2 - d1;
    });
    repos.map((repo:any,index:number)=>{
        repo.id = index+1;
    })
    loading.set(false);
    return {
        repos
    }
}