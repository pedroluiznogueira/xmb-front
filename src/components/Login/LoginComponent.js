import React, { useEffect, useState } from 'react';
import { UserLogin } from '../../models/UserLogin';
import './LoginComponent.css';
import { login } from '../../services/UsuarioService';

function LoginComponent() {
    const [usernameInput, setUsernameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let user = new UserLogin();

        console.log(usernameInput);
        user.email = emailInput;
        user.password = passwordInput;

        login(user).then(
          () => {
            setUsernameInput('');
            setEmailInput('');
            setPasswordInput('');
          }
        )
      };
    
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                
                <label>Username</label>
                <input type="text" onChange={event => setUsernameInput(event.target.value)} value={usernameInput}/>
                
                <label>Email</label>
                <input type="text" onChange={event => setEmailInput(event.target.value)} value={emailInput}/>

                <label>Password</label>
                <input type="password" onChange={event => setPasswordInput(event.target.value)} value={passwordInput} />

                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default LoginComponent;