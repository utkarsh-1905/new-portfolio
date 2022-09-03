import { Octokit } from 'octokit';
import { VITE_GITHUB_KEY } from '$env/static/private';

const octokit = new Octokit({
    auth: VITE_GITHUB_KEY,
    timeZone:"Asia/Calcutta"
})

//dont use this
export async function getUser(){
    try{
    const res = await octokit.rest.users.getAuthenticated();
    return res
}catch(e: any){
    console.log(e)
}
}

export async function getRepos(){
    try{
    let res = await octokit.request("GET /users/utkarsh-1905/repos?per_page=100");
    let count=1;
    const data:any = res.data.map((repo:any)=>{
        if(!repo.fork){
            return {
                id:count++,
                name:repo.name,
                description:repo.description,
                url:repo.html_url,
                language:repo.language,
                updated_at:repo.updated_at,
                created_at:repo.created_at,
            }
        }
    })
    return data.filter((repo:any)=>repo!==undefined)
    }catch(e){
        console.log(e)
    }
}