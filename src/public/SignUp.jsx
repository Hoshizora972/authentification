import { createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import React, { useState } from 'react'
import { Await } from 'react-router-dom';
import { auth } from '../firebase';

const SignUp = () => {

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
  const inscription = async() => {
    console.log(password,email);
    await createUserWithEmailAndPassword(auth,email,password)
  }
  

  return (
    <div>
        <h1>Sign Up</h1> 
            Email : <input type="text" name="email" onChange={handleChangeEmail} /> 
        <br />
          Mot de passe : <input type="password" name="password" onChange={handleChangePassword}/>
        <br />
        <button onClick={inscription}>S'inscrire</button>
    </div>
  )
}

export default SignUp