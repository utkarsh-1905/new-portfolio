import type { RequestHandler } from "@sveltejs/kit"
import axios from "axios"

export const GET: RequestHandler = async () => {
    const response = await axios.get("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${import.meta.env.VITE_SPOTIFY_OAUTH}`,
            'Redirect': 'follow'
        }
    })
    console.log(response)
    if(response.status === 200) {
        return ({
            status: response.status,
            body: response.data,
            headers:{
                'Content-Type': 'application/json;charset=utf-8',
            }
        })
    }else{
        return ({
            status: response.status,
            body: "I am not listening to music right now!!",
            headers:{
                'Content-Type': 'application/json;charset=utf-8',
            }
        })
    }
}