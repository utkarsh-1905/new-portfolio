<footer>
    <div class="socials">
        <a href="https://github.com/utkarsh-1905" target="_blank"><img src="/github.svg" width="32px" alt="github"/></a>
        <a href="https://www.linkedin.com/in/utkarsh-tripathi-80a0ab192/" target="_blank"><img src="/linkedin.svg" width="32px" alt="linkedin"/></a>
        <a href="mailto:utripathi2002@gmail.com" target="_blank"><img src="/mail.svg" width="32px" alt="email"/></a>
    </div>
</footer>

<style>
    footer{
        left: 0;
        right: 0;
        bottom: -1rem;
        width:100vw;
        height: 250px;
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
        justify-content: flex-end;
        width:90%;
        margin-bottom: 1rem;
    }

    a{
        margin-left: 1rem;
        text-decoration: none;
        padding: 0.5rem;
        border-radius: 50px;
        background: #ff5500;
        box-shadow:  10px 10px 10px #bf4000,-10px -10px 10px #ff6a00;
    }

    a:hover{
        border-radius: 50px;
        background: #ff5500;
        box-shadow: inset 10px 10px 10px #bf4000,inset -10px -10px 10px #ff6a00;
    }
</style>