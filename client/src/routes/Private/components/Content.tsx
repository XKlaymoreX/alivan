import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import crypto from 'crypto-js'

const Content: React.FC = () => {

    const [loginResponse, setLoginResponse] = useState<string>("")
    const [redirect, setRedirect] = useState<boolean>(false)

    const Login = async () => {
        const user = (document.getElementById('user') as HTMLInputElement).value
        const password = (document.getElementById('password') as HTMLInputElement).value
        const hashedPassword = crypto.AES.encrypt(password, "2r5u8x/A?D(G+KaPdSgVkYp3s6v9y$B&E)H@McQeThWmZq4t7w!z%C*F-JaNdRgU")
        try {
            await axios.post("/Private/Login", { user: user, password: hashedPassword.toString() })
            return setRedirect(true)
        } catch (error) {
            return setLoginResponse(error.response.data.message)
        }
    }

    return (
        <div className="myPrivateContent" style={{fontFamily:'Poppins'}}>
            <div className="myContentSection shadow-lg rounded">
                <h3 style={{marginBottom:'30px'}}>Accesso Area Inviti</h3>
                {redirect ? <Redirect to="/Private/Dashboard"></Redirect> : (<div />)}
                <div className="myFormContent">
                    <label className="formLabel">Nome Utente</label>
                    <input type="text" id="user" placeholder="Nome Utente..." onInput={() => setLoginResponse('')}></input>
                    <label className="formLabel">Password</label>
                    <input type="password" id="password" placeholder="Password..." onInput={() => setLoginResponse('')}></input>
                    <span style={{ color: 'red', fontWeight: 'bold', fontFamily: 'Poppins' }}>{loginResponse}</span>
                    <button type="submit" onClick={Login}>Procedi</button>
                </div>
            </div>
        </div>
    )
}

export default Content
