<script>
    import {onMount} from "svelte";

    // onMount(()=>{
    //     window.addEventListener("scroll",e=>{
    //         console.log(e,window)
    //     })
    // })

</script>

<footer class="show-footer-after-70">
    <div class="socials">
        <div class="cpy">
            <span class="footer-text">&copy; 2022 utkarsh tripathi &bull; <a class="sitemap" href="/sitemap.xml">sitemap</a></span>
        </div>
        <div class="icons">
            <a href="https://github.com/utkarsh-1905" target="_blank" rel="noreferrer"><img class="social-icon" src="/github.svg" width="32px" alt="github"/></a>
            <a href="https://www.linkedin.com/in/utkarsh-tripathi-80a0ab192/" target="_blank" rel="noreferrer"><img class="social-icon" src="/linkedin.svg" width="32px" alt="linkedin"/></a>
            <a href="mailto:utripathi2002@gmail.com?subject=Hey%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you%20!!" target="_blank" rel="noreferrer"><img class="social-icon" src="/mail.svg" width="32px" alt="email"/></a>
        </div>
    </div>
</footer>

<style>

    .show-footer-after-70{
        /* display: none; */
    }
    footer{
        left: 0;
        right: 0;
        bottom: 0;
        width:100vw;
        padding-top: 4rem;
        /* z-index: -10; */
        /* background-image: url(/subtleWave.svg);
        background-repeat: none;
        background-size: cover;
        background-position: center; */
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        align-items: center;
        user-select: none;
        margin-top: auto;
    }

    .footer-text{
        color:var(--font)
    }
    .socials{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width:87.5%;
        margin-bottom: 1rem;
    }
    .social-icon{
        margin-left: 1rem;
        text-decoration: none;
        padding: 0.5rem;
        border-radius: 50px;
        background: var(--bg);
        box-shadow:  var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius) var(--neumorph-doffset), calc(-1*var(--neumorph-distance)) calc(-1*var(--neumorph-distance)) var(--neumorph-blur-radius) var(--neumorph-loffset);
        /* box-shadow: var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius) #7e523d, calc(-1*var(--neumorph-distance)) calc(-1*var(--neumorph-distance)) var(--neumorph-blur-radius) #c88261; */
    }

    .social-icon:hover{
        border-radius: 50px;
        background: var(--bg);
        box-shadow: inset var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius) var(--neumorph-doffset), inset calc(-1*var(--neumorph-distance)) calc(-1*var(--neumorph-distance)) var(--neumorph-blur-radius) var(--neumorph-loffset);
    }

    @media screen and (max-width:586px){
        footer{
            height: 250px;
        }
        .social-icon{
            width:18px;
        }
        .cpy{
            width: 50%;
        }
    }

    @media screen and (max-width:390px){
        .socials{
            width:95%;
        }
    }

    @media screen and (max-width:350px){
        .cpy{
            display: none;
        }

        .socials{
            flex-direction: row;
            justify-content: center;
        }
    }
</style>
<!-- below 586px -->