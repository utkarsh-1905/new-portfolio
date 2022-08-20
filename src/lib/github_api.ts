import { Octokit } from 'octokit';

const octokit = new Octokit({
    auth: process.env.VITE_GITHUB_TOKEN,
})

export const getPackages = async () => {
    const { data } = await octokit.rest.users.getAuthenticated()
   return data
}