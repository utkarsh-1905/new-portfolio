<script lang="ts">
    import { onMount } from 'svelte';
    let changeTheme: any;
    let currTheme:boolean = true; //true for light, false for dark
    const light:any = {
        "--bg":"#c0c0c0",
        "-font":"#a36a4f",
        "--accent":"#000",
        "--neumorph-doffset":"#949494",
        "--neumorph-loffset":"#ececec",
        "--neumorph-blur-radius":"20px",
        "--neumorph-distance":"5px"
    };
    const dark:any = {
        "--bg":"#18181b",
        "-font":"#a36a4f",
        "--accent":"#000",
        "--neumorph-doffset":"#0d0d0f",
        "--neumorph-loffset":"#232327",
        "--neumorph-blur-radius":"10px",
        "--neumorph-distance":"5px"
    };
    onMount(()=>{
            const root: HTMLElement | null = document.querySelector(":root")
            changeTheme = function (){
                if(currTheme){
                    Object.keys(light).forEach(key=>{
                        root!.style.setProperty(key,light[key])
                    })
                    currTheme = false
                }else{
                    Object.keys(dark).forEach(key=>{
                        root!.style.setProperty(key,dark[key])
                    })
                    currTheme = true
                }
            }
        })
</script>

<div class="themeSlider">
    <label>
        <input type="checkbox" on:change={changeTheme}/>
        <span class="slider"></span>
    </label>
</div>

<style>

    .themeSlider{
        /* width: 100vw; */
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        user-select: none;
        cursor: pointer;
        /* margin-top: 6rem; */
    }
    
    label{
        position: relative;
        display:inline-block;
        width: 70px;
        height: 45px;
        border-radius: 50px;
        cursor: pointer;
        box-shadow:  var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius) var(--neumorph-doffset), calc(-1*var(--neumorph-distance)) calc(-1*var(--neumorph-distance)) var(--neumorph-blur-radius) var(--neumorph-loffset);
    }

    label:before{
        position: absolute;
        text-align: center;
        content: "";
        height: 35px;
        width: 60px;
        left: 5px;
        bottom: 5px;
        right: 5px;
        top: 5px;
        margin:0 auto;
        background-color: transparent;
        box-shadow: inset var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius) var(--neumorph-doffset), inset calc(-1*var(--neumorph-distance)) calc(-1*var(--neumorph-distance)) var(--neumorph-blur-radius) var(--neumorph-loffset);
        -webkit-transition: .4s;
        transition: .4s;
        border-radius:50px;
    }

    input{
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider{
        position: absolute;
        width: 15px;
        height: 15px;
        top: 15px;
        bottom: 15px;
        left: 15px;
        border-radius: 50px;
        transition: .4s;
        background: var(--font);
        cursor: pointer;
        box-shadow:  var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius) var(--neumorph-doffset), calc(-1*var(--neumorph-distance)) calc(-1*var(--neumorph-distance)) var(--neumorph-blur-radius) var(--neumorph-loffset);
    }

    input:checked + .slider {
        -webkit-transform: translateX(24px);
        -ms-transform: translateX(24px);
        transform: translateX(24px);
    }

</style>