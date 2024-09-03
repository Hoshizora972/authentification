import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './public/Login'
import SignUp from './public/SignUp'
import Compte from './private/Compte'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

function App() {
  const [count, setCount] = useState(0);
  const [connect, setConnect] = useState(false);

  useEffect (()=>{
    console.log("charger")
    onAuthStateChanged(auth,(user)=> {
      if (user) {
        setConnect(true);
      }else{
        setConnect(false);
      }
    })
  },
[]) 


  return (
    <>
      <div>
      {/* Si l’utilisateur est connecter envoyer l’user sur son compte sinon l’envoyer sur le formulaire de connection */}
        {connect ? <Compte/> : <Login/> }
        {/* <SignUp/> */}
      </div>
    </>
  )
}

export default App
