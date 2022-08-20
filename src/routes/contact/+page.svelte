<script>
    export const prerender = true;
    import {loading} from "$lib/loading"
    $loading = false
</script>

<div class="container">
    <h1>contact me</h1>
    <form action="https://api.web3forms.com/submit" method="post" class="contact">
        <input type="hidden" name="access_key" value="d6a0ccc5-4cb8-4d11-8049-a220977183fc"/>
        <input type="hidden" name="subject" value="Someone wants to contact me">
        <input type="hidden" name="redirect" value="https://www.utkarsh.ninja/">
        <div class="space">
            <label for="contact-name">name</label>
            <input type="text" required id="contact-name" name="name" placeholder="steve wozniak" />
        </div>
        <div class="space">
            <label for="contact-email">email</label>
            <input type="email" required id="contact-email" name="email" placeholder="steve@google.com"/>
        </div>
        <div class="space">
            <label for="contact-subject">subject</label>
            <input type="text" required id="contact-subject" name="subject" placeholder="i want to know about..."/>
        </div>
        <div class="space">
            <label for="contact-message">message</label>
            <textarea id="contact-message" required rows="10" cols="20" name="message" placeholder="hey utkarsh, ..."></textarea>
        </div>
        <input type="submit" class="submit" value="submit">
    </form>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-between  ;
        align-items: center;
        margin: 1rem;
        height: 100%;
    }

    h1{
        padding: 1rem;
        letter-spacing: 5px;
        margin-top: 1rem;
    }
    .contact{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        width:100%;
        margin-top: 2rem;
    }
    input,textarea{
        border:none;
        margin: 1rem;
        width:50%;  
        padding: 0.75rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-radius: 15px;
        background: var(--bg);
        box-shadow: inset var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius) var(--neumorph-doffset), inset calc(-1*var(--neumorph-distance)) calc(-1*var(--neumorph-distance)) var(--neumorph-blur-radius) var(--neumorph-loffset);
    }

    .submit{
        border-radius: 15px;
        background: var(--bg);
        box-shadow:  var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius) var(--neumorph-doffset), calc(-1*var(--neumorph-distance)) calc(-1*var(--neumorph-distance)) var(--neumorph-blur-radius) var(--neumorph-loffset);
        color: var(--light-font);
        font-size: large;
        cursor: pointer;
        margin-top: 5rem;
    }

    .submit:hover{
        border-radius: 15px;
        background: var(--bg);
        box-shadow: inset var(--neumorph-distance) var(--neumorph-distance) var(--neumorph-blur-radius) var(--neumorph-doffset), inset calc(-1*var(--neumorph-distance)) calc(-1*var(--neumorph-distance)) var(--neumorph-blur-radius) var(--neumorph-loffset);
    }

    input:focus,textarea:focus{
        outline: none;
    }

    input[type="text"],input[type="email"],textarea{
        color: var(--light-font);
    }

    label{
        color: var(--light-font);
        font-size: large;   
    }

    .space{
        display: flex;
        flex-direction: row;
        justify-content: space-around; 
        align-items: center;    
        margin-top: 1rem;
        margin-bottom: 1rem;
        width: 100%;
    }

    @media screen and (max-width:480px){
        h1{
            font-size: xx-large !important;
        }

        .space{
            flex-direction: column;
        }

        input,textarea{
            width: 75%;
        }
    }

    @media screen and (max-width:380px){
        h1{
            font-size: x-large !important;
        }
    }
    @media screen and (max-width:320px){
        h1{
            font-size: large !important;
        }
    }
</style>