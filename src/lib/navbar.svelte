<nav>
    <ul>
        <li><a href="/resume">resume</a></li>
        <li><a href="/projects">projects</a></li>
        <li><a href="/">home</a></li>
        <li><a href="/contact">contact</a></li>
        <li><a href="/blogs">blogs</a></li>
    </ul>
</nav>

<style>
    ul{
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
        position: fixed;
        width:100vw;
        background-color: #c8c8c8;
        top: 0;
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
        user-select: none;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    }

    li{
        border-radius: 15px;
        background: #eae1e1;
        box-shadow:  10px 10px 20px #a49e9e,-10px -10px 20px #ffffff;
        padding: 0.5rem;
    }
    li:hover{
        border-radius: 15px;
        background: linear-gradient(145deg, #d3cbcb, #faf1f1);
        box-shadow:  10px 10px 20px #a49e9e, -10px -10px 20px #ffffff;
    }
</style>