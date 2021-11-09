import React, { useEffect, useState } from 'react';
import { User } from '../../models/User';
import { registrate } from '../../services/UsuarioService';
import './CadastroComponent.css';

function CadastroComponent() {
    const [nameInput, setNameInput] = useState('');
    const [surnameInput, setSurnameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let user = new User();

        user.name = nameInput;
        user.surname = surnameInput;
        user.email = emailInput;
        user.password = passwordInput;

        registrate(user).then(
          () => {
            setNameInput('');
            setSurnameInput('');
            setEmailInput('');
            setPasswordInput('');
            setConfirmPasswordInput('');
          }
        )
      };
    
    return(
        <div className="container">
            <form className="container" onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" onChange={event => setNameInput(event.target.value)} value={nameInput}/>

                <label>Surname</label>
                <input type="text" onChange={event => setSurnameInput(event.target.value)} value={surnameInput}/>

                <label>Email</label>
                <input type="text" onChange={event => setEmailInput(event.target.value)} value={emailInput}/>

                <label>Password</label>
                <input type="text" onChange={event => setPasswordInput(event.target.value)} value={passwordInput}/>

                <label>Confirm Password</label>
                <input type="text" onChange={event => setConfirmPasswordInput(event.target.value)} value={confirmPasswordInput}/>

                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default CadastroComponent;