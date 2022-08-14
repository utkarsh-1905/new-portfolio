
<script lang="ts">
    function openDrawer(){
        const drawer:any = document.querySelector('.invert');
        if(typeof window !== "undefined" && window.innerWidth<400){
            drawer.style.height = "70%";
        }else{
            drawer.style.height = "60%"
        }
    }
    function closeDrawer(){
        const drawer: any = document.querySelector('.invert');
        drawer.style.height = "0%"
    }
    //we apply a check here because it is a ssr app which means
    //the page is first compiled on the server where the window object
    //is not available, then it is sent to the client where the 
    //window object is available.
    if (typeof window !== "undefined") {
        const navbar: any = document.getElementById('navbar');
        let lastScrollTop: any;
        window.addEventListener('scroll',function(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if(scrollTop > lastScrollTop){
                navbar.style.top='-80px';
            }
            else{
                navbar.style.top='0';
            }
            lastScrollTop = scrollTop;
        });
    }
</script>

<nav id="navbar">
    <ul class="normal">
        <li><a href="/resume">resume</a></li>
        <li><a href="/projects">projects</a></li>
        <li><a href="/">home</a></li>
        <li><a href="/contact">contact</a></li>
        <li><a href="/blogs">blogs</a></li>
    </ul>
    <img class="hamburger" src="/hamburger.svg" on:click={openDrawer} width="32px" alt="hamburger menu"/>
</nav>
<div class="toggleMenu">
    <div class="invert">
        <img src="/shortDown.svg" on:click={closeDrawer} class="close" width="32px" alt="close"/>
        <ul class="responsive">
            <li><a href="/">home</a></li>
            <li><a href="/projects">projects</a></li>
            <li><a href="/contact">contact</a></li>
            <li><a href="/blogs">blogs</a></li>
            <li><a href="/resume">resume</a></li>
        </ul>
    </div>
</div>

<style>
    .normal{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
        align-items: center;
        width: 80vw;
        margin: 0 auto;
        padding: 0.5rem;
    }
    a{
        text-decoration: none;
        color: #ff5500;
        font-size: large;
    }

    nav{
        padding-top: 1.5rem;
        position: fixed;
        width:100vw;
        background-color: #eae1e1;
        top: 0; 
        padding-bottom: 0.5rem;
        user-select: none;
        transition: top 0.3s ease-in-out;
        /* box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px; */
    }

    li{
        border-radius: 15px;
        background: #eae1e1;
        box-shadow:  10px 10px 20px #a49e9e,-10px -10px 20px #ffffff;
        padding: 0.5rem;
        width:10%;
        text-align: center;
    }
    li:hover{
        border-radius: 15px;
        background: #eae1e1;
        box-shadow: inset 10px 10px 20px #d5cdcd,inset -10px -10px 20px #fff5f5;
    }

    .hamburger,.toggleMenu,.close{
        display: none;
    }

    @media screen and (max-width:768px){
        .normal{
            display: none;
        }
        .hamburger{
            display: block;
            padding: 0.5rem;
            border-radius: 50px;
            background: #eae1e1;
            box-shadow:  10px 10px 20px #a49e9e,-10px -10px 20px #ffffff;
            margin-left: 1.5rem;
            margin-top: 0.25rem;
        }

        .hamburger:hover,.close:hover{
            border-radius: 50px;
            background: #eae1e1;
            box-shadow: inset 10px 10px 20px #bbb4b4,inset -10px -10px 20px #ffffff;
        }

        .toggleMenu{
            display: flex;
            position: fixed;
            flex-direction: column-reverse;
            z-index: 100;
            background-color: transparent;
            width:100vw;
            height: 100vh;
        }

        .invert{
            width: 100%;
            height: 0%;
            background-color: #eae1e1;
            border-radius: 50px;
            box-shadow: 0px -10px 50px 20px rgba(0, 0, 0, 0.3);
            transition-property: height;
            transition-duration: 0.3s;
            transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .responsive{
            display: flex;
            height: 60%;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            list-style: none;
            padding:1rem;
        }

        .responsive li{
            width:50%;
            text-align: center;
        }
        .close{
            display:block;
            text-align: center;
            margin: 1rem auto;
            border-radius: 50px;
            background: #eae1e1;
            box-shadow:  10px 10px 20px #a49e9e,-10px -10px 20px #ffffff;
        }
    }

    @media screen and (max-width:1024px){
        li{
            width:auto;
        }
    }

</style>