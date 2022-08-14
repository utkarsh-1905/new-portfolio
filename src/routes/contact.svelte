<script>
    export const prerender = true;
</script>

<div class="container">
    <h1>contact me !!</h1>
    <form action="https://api.web3forms.com/submit" method="post" class="contact">
        <input type="hidden" name="access_key" value="d6a0ccc5-4cb8-4d11-8049-a220977183fc"/>
        <input type="hidden" name="subject" value="Someone wants to contact me">
        <input type="hidden" name="redirect" value="https://www.utkarsh.ninja/">
        <div class="space">
            <label for="contact-name">name</label>
            <input type="text" id="contact-name" name="name" placeholder="Steve Wozniak" />
        </div>
        <div class="space">
            <label for="contact-email">email</label>
            <input type="email" id="contact-email" name="email" placeholder="steve@google.com"/>
        </div>
        <div class="space">
            <label for="contact-subject">subject</label>
            <input type="text" id="contact-subject" name="subject" placeholder="I want to know about..."/>
        </div>
        <div class="space">
            <label for="contact-message">message</label>
            <textarea id="contact-message" rows="10" cols="20" name="message" placeholder="hey utkarsh, ..."></textarea>
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
        margin-top: 2rem;
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
        border-radius: 15px;
        margin: 1rem;
        width:50%;  
        padding: 0.75rem;
        background: #eae1e1;
        box-shadow:  10px 10px 10px #beb6b6, -10px -10px 10px #ffffff;
    }

    .submit{
    border-radius: 15px;
    background: #eae1e1;
    box-shadow:  10px 10px 10px #beb6b6, -10px -10px 10px #ffffff;
    color: #ff5500;
    font-size: large;
    cursor: pointer;
    margin-top: 1rem;
    }

    .submit:hover{
    border-radius: 15px;
    background: #eae1e1;
    box-shadow: inset 10px 10px 10px #beb6b6,inset -10px -10px 10px #ffffff; 
    }

    input:focus,textarea:focus{
        outline: none;
    }

    label{
        color: #ff5500;
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
</style>