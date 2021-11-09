import './CadastroComponent.css';

function CadastroComponent() {
    
    return(
        <div className="container">
            <form className="container">
                <label>Username</label>
                <input type="text"></input>

                <label>Password</label>
                <input type="password"></input>

                <label>Confirm Password</label>
                <input type="password"></input>

                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default CadastroComponent;