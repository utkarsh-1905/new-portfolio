<script lang="ts">
    export const prerender = true;
    import { onMount } from "svelte";
    import animationData from "./landing-lottie.json";
    import lottie from "lottie-web";
    let lottieContainer: HTMLElement;
    import Typewriter from "svelte-typewriter";

    onMount(()=>{
        lottie.loadAnimation({
            container: lottieContainer,
            animationData,
        });
    });
    
    function typewriterDone(){
        
    }
</script>

<div class="container">
    <Typewriter mode="cascade" interval={100} cursor={true} keepCursorOnFinish={true} on:done={typewriterDone}>
        <h1>hi, i am utkarsh</h1>
    </Typewriter>
    <div class="bg-container">
        <div class="bg" bind:this={lottieContainer}></div>
    </div>

</div>

<style>
    .container{
        margin-top:6rem;
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: relative;
    }
    .bg-container{
        width: 100%;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        position: relative;
    }
    .bg{
       z-index: -10;
       /* width: 40%; */
       position: absolute;
    }

    @media screen and (max-width:1024px){
        .bg{
            width: 60vw;
        }
    }
    @media screen and (max-width:550px){
        .bg{
            width: 75vw;
        }
    }
</style>