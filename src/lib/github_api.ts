import { Octokit } from '@octokit/core';
import { VITE_GITHUB_KEY } from '$env/static/private';

const octokit = new Octokit({
    auth: VITE_GITHUB_KEY,
    timeZone:"Asia/Calcutta"
})

//dont use this
// export async function getUser(){
//     try{
//     const res = await octokit.rest.users.getAuthenticated();
//     return res
// }catch(e: any){
//     console.log(e)
// }
// }

export async function getRepos(){
    try{
    let res = await octokit.request("GET /users/utkarsh-1905/repos?per_page=100");
    const data:any = res.data.map((repo:any)=>{
        if(!repo.fork){
            return {
                name:repo.name,
                description:repo.description,
                url:repo.html_url,
                language:repo.language,
                updated_at:repo.updated_at,
                created_at:repo.created_at,
            }
        }
    })
    return data.filter((repo:any)=>repo!==undefined).sort((a:any,b:any)=>new Date(b.updated_at).getTime()-new Date(a.updated_at).getTime())
    }catch(e){
        console.log(e)
    }
}