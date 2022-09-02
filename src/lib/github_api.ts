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
    const res = await octokit.request("GET /users/utkarsh-1905/repos");
    return res
    }catch(e){
        console.log(e)
    }
}