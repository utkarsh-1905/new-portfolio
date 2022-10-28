<script lang="ts">
    export const prerender = true;
    import { onMount } from "svelte";
    import animationData from "./landing-lottie.json";
    import lottie from "lottie-web";
    let lottieContainer: HTMLElement;
    import Typewriter from "svelte-typewriter";
    import {loading} from "$lib/loading"
    let typewritterDone:boolean = false;
    onMount(()=>{
        $loading = false;
        lottie.loadAnimation({
            container: lottieContainer,
            animationData,
        });
    });
    
    function typewriterDone(){
        document.querySelector(".title")!.style!.marginTop = "1rem"
        typewritterDone = true;
    }
</script>

<div class="container">
    <Typewriter mode="cascade" interval={100} cursor={true} on:done={typewriterDone}>
        <p class="title" >hi, i am utkarsh</p>
    </Typewriter>
    {#if typewritterDone}
    <h2 class="show-on-done subtitle">developer &#x2022; student &#x2022; speaker</h2>
    <div class="buttons">
        <a href="/about" class="about show-on-done">projects</a>
        <button class="calendly show-on-done" on:click={()=>{Calendly.initPopupWidget({"url": 'https://calendly.com/heyutkarsh/30min'});return false;}}>calendly meet</button>
    </div>
    <p class="aboutme"></p>
    {/if}
    <div class="bg-container">
        <div class="bg" bind:this={lottieContainer}></div>
    </div>

</div>

<style>
    .container{
        margin-top:4rem;
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: relative;
    }
    .bg-container{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        position: relative;
        margin-bottom: 8rem;
    }
    .bg{
       z-index: -10;
       /* width: 40%; */
       position: absolute;
    }

    .title{
        font-size: 4rem;
        letter-spacing: 0.75rem;
        margin-bottom: 1rem;
        margin-top: 10rem;
    }

    .subtitle{
        padding-top: 1rem;
        letter-spacing: 0.5rem;
    }

    .show-on-done{
        animation-name: fromAbove;
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
        animation-delay: 0ms;
    }

    .buttons{
        display: flex;
        margin-top: 10rem;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 60%;
    }

    .about,.calendly{
        padding: 1rem 1.5rem;
        border-radius: 15px;
        background: var(--bg);
        box-shadow:  var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius) var(--neumorph-doffset), calc(-1*var(--neumorph-distance)) calc(-1*var(--neumorph-distance)) var(--neumorph-blur-radius) var(--neumorph-loffset);
        color: var(--light-font);
        cursor: pointer;
        border: none;
    }

    .about:hover,.calendly:hover{
        border-radius: 15px;
        background: var(--bg);
        box-shadow: inset var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius) var(--neumorph-doffset), inset calc(-1*var(--neumorph-distance)) calc(-1*var(--neumorph-distance)) var(--neumorph-blur-radius) var(--neumorph-loffset);
    }

    @keyframes fromAbove{
        0%{
            transform: translateY(-100%);
            color: transparent;
        }
        100%{
            transform: translateY(0%);
            color: var(--light-font);
        }
    }

    @media screen and (max-width:1024px){
        .bg{
            width: 60vw;
        }
        .title{
            font-size: 2.5rem;
            letter-spacing: 0.5rem;
        }
        .subtitle{
            font-size: 1.5rem;
            letter-spacing: 0;
        }
    }
    @media screen and (max-width:550px){
        .bg{
            width: 75vw;
        }
        .title{
            font-size: 2rem;
            letter-spacing: 0;
            margin-top: 15rem;
        }
        .subtitle{
            font-size: 1.1rem;
        }
        .buttons{
            width: 100%;
        }
        .about,.calendly{
            padding: 0.25rem 0.5rem;
            justify-content: space-between;
        }
    }
</style>