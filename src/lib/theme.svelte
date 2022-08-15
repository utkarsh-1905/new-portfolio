<script lang="ts">
    import { onMount } from 'svelte';
    let changeTheme:any;
    let currTheme:boolean = true; //true for light, false for dark
    const light:any = {
        "--bg":"#c0c0c0",
        "-font":"#a36a4f",
        "--accent":"#000",
        "--neumorph-doffset":"#949494",
        "--neumorph-loffset":"#ececec",
    };
    const dark:any = {
        "--bg":"#18181b",
        "-font":"#a36a4f",
        "--accent":"#000",
        "--neumorph-doffset":"#121215",
        "--neumorph-loffset":"#1e1e21",
    };
    onMount(()=>{
            const root: HTMLElement | null = document.querySelector(":root")
            const vars: CSSStyleDeclaration = getComputedStyle(root!)
            console.log(vars)
            changeTheme = function (){
                if(currTheme){
                    Object.keys(dark).forEach(key=>{
                        root!.style.setProperty(key,dark[key])
                    })
                    currTheme = false
                }else{
                    Object.keys(light).forEach(key=>{
                        root!.style.setProperty(key,light[key])
                    })
                    currTheme = true
                }
            }
        })
</script>

<button on:click={changeTheme}>Hello</button>

<style>
    button{
        margin-top: 5rem;
        z-index: 20;
    }
</style>