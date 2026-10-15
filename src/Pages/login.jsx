import { useState } from "react";
import './login.css'

const Login=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [visible,setVisible]=useState(false)
     function valider(){
        setVisible(true)
     }
    return(<main className="login-page">
    <section className="login-card">
    <h1>Login</h1>
    <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="login" /><br />
    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password" /><br />
    <input type="button" value="valider" onClick={valider} />
    {visible ? <><h3>{email}</h3><h3>{password}</h3></>:<h3>no data</h3>}
    </section>
    </main>
    
        
    )
}
export default Login;
