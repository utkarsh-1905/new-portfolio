<footer>
    <div class="socials">
        <div class="cpy">
            <span>&copy; 2022 utkarsh tripathi &bull; <a class="sitemap" href="/sitemap">sitemap</a></span>
        </div>
        <div class="icons">
            <a href="https://github.com/utkarsh-1905" target="_blank"><img class="social-icon" src="/github.svg" width="32px" alt="github"/></a>
            <a href="https://www.linkedin.com/in/utkarsh-tripathi-80a0ab192/" target="_blank"><img class="social-icon" src="/linkedin.svg" width="32px" alt="linkedin"/></a>
            <a href="mailto:utripathi2002@gmail.com?subject=Hey%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you%20!!" target="_blank"><img class="social-icon" src="/mail.svg" width="32px" alt="email"/></a>
        </div>
    </div>
</footer>

<style>
    footer{
        left: 0;
        right: 0;
        bottom: -1rem;
        width:100vw;
        height: 300px;
        z-index: -10;
        background-image: url(/subtleWave.svg);
        background-repeat: none;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        align-items: center;
    }
    .socials{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width:90%;
        margin-bottom: 1rem;
    }
    .social-icon{
        margin-left: 1rem;
        text-decoration: none;
        padding: 0.5rem;
        border-radius: 50px;
        background: #ff5500;
        box-shadow:  10px 10px 10px #bf4000,-10px -10px 10px #ff6a00;
    }

    .social-icon:hover{
        border-radius: 50px;
        background: #ff5500;
        box-shadow: inset 10px 10px 10px #bf4000,inset -10px -10px 10px #ff6a00;
    }

    .sitemap{
        color: #c8c8c8;
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
</style>
<!-- below 586px -->