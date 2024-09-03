import React, { useState } from 'react';
import { auth } from '../firebase';
import { Await } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // applique et enregistre les changement sur le champ password et email
    const handleChangeEmail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
    }
    const handleChangePassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
    }
//permet d'envoyer les valeurs
    const connection = async() => {
        console.log(password,email);
        await signInWithEmailAndPassword(auth,email,password)
}

    return (
        <div>
            <h1>Login</h1> 
                Email : <input type="text" name="email" onChange={handleChangeEmail} /> 
            <br />
                Mot de passe : <input type="password" name="password" onChange={handleChangePassword}/>
        <br />
            <button onClick={connection}>Se connecter</button>
    </div>
    )
}

export default Login