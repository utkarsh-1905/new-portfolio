<script lang="ts">
    const projects = [
        {
            name:"CLI based chat app",
            description:"A node cli client to create chat rooms and chat with other users in the terminal",
            stack:["nodejs","javascript","socket.io"],
            github:"https://github.com/utkarsh-1905/node-cli-project"
        },
        {
            name:"CLI based chat app",
            description:"A node cli client to create chat rooms and chat with other users in the terminal",
            stack:["nodejs","javascript","socket.io"],
            github:"https://github.com/utkarsh-1905/node-cli-project"
        },
        {
            name:"CLI based chat app",
            description:"A node cli client to create chat rooms and chat with other users in the terminal",
            stack:["nodejs","javascript","socket.io"],
            github:"https://github.com/utkarsh-1905/node-cli-project"
        },
        {
            name:"CLI based chat app",
            description:"A node cli client to create chat rooms and chat with other users in the terminal",
            stack:["nodejs","javascript","socket.io"],
            github:"https://github.com/utkarsh-1905/node-cli-project"
        },
    ]
</script>

<div class="container">
    <div class="projects-container">
        {#each projects as project}
            <div class="project-card">
                <div class="project-info">
                    <a href={project.github} target="_blank"><h3>{project.name} &#x2197;</h3></a>
                    <p>{project.description}</p>
                </div>
                <div class="project-stack">
                    {#each project.stack as stack}
                        <div class="project-stack-card">{stack}</div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: fit-content;
        align-items: center;
    }

    .projects-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        height: fit-content;
        align-items: center;
        justify-content: space-around;
        border-radius: 15px;
        padding: 1rem;
        padding-bottom: 2rem;
        margin-top: 3rem;
        background: var(--bg);
        box-shadow: inset var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius) var(--neumorph-doffset), inset calc(-1*var(--neumorph-distance)) calc(-1*var(--neumorph-distance)) var(--neumorph-blur-radius) var(--neumorph-loffset);
    }
    .project-card{
        display: flex;
        flex-direction: column;
        box-shadow: var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius) var(--neumorph-doffset), calc(-1*var(--neumorph-distance)) calc(-1*var(--neumorph-distance)) var(--neumorph-blur-radius) var(--neumorph-loffset);
        background: var(--bg);
        border-radius: 15px;
        padding: 1rem;
        width: 40%;
        margin-top: 2rem;
    }
    .project-info p{
        padding: 1rem;
    }
    .project-stack{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        text-align: center;
    }
    .project-stack-card{
        background: var(--bg);
        box-shadow: inset var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius) var(--neumorph-doffset), inset calc(-1*var(--neumorph-distance)) calc(-1*var(--neumorph-distance)) var(--neumorph-blur-radius) var(--neumorph-loffset);
        border-radius: 20px;
        padding: 0.5rem 1rem;
        font-size: small;
    }
    @media screen and (max-width:1024px){
        .project-stack-card{
            /* margin-top: 1rem; */
            padding: 0.4rem;
        }
    }
    @media screen and (max-width:850px){
        .project-stack{
            flex-direction: column;
        }
        .project-stack-card{
            margin-top: 1rem;
            padding: 0.5rem 1rem;
        }
    }
    @media screen and (max-width:576px){
        .projects-container{
            flex-direction: column;
        }
        .project-card{
            width:80%;
        }
        .project-stack{
            flex-direction: row;
        }
        .project-stack-card{
            padding: 0.4rem;
        }
    }
    @media screen and (max-width:390px){
        .project-stack{
            flex-direction: column;
        }
        .project-stack-card{
            margin-top: 1rem;
            padding: 0.5rem 1rem;
        }
    }
</style>