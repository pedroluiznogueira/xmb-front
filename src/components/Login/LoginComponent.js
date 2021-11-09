import './LoginComponent.css';

function LoginComponent() {
    
    return(
        <div className="container">
            <form>
                <label>Username</label>
                <input type="text"></input>

                <label>Password</label>
                <input type="text"></input>

                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default LoginComponent;