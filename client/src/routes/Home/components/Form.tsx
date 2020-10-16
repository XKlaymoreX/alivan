import React, { FormEvent } from 'react'
import axios from 'axios'
import { IInvitation } from '../../../types.d'

const Form: React.FC = () => {

    const [nome, setNome] = React.useState<string>('')
    const [numero, setNumero] = React.useState<number>(0)
    const [message, setMessage] = React.useState('')
    const [isFormValid, setFormValid] = React.useState(true)

    const validateForm = async () => {
        const textBoxNome = (document.getElementById('nome') as HTMLInputElement)
        const textBoxNumero = (document.getElementById('numero') as HTMLInputElement)
        if (nome.length === 0 || numero === 0) {
            if (nome.length === 0) {
                textBoxNome.className = textBoxNome.className + " border-danger" + " redPlaceHolder"
            }
            if (numero === 0) {
                textBoxNumero.className = textBoxNumero.className + " border-danger"
                textBoxNumero.style.color = 'red'
            }
            setMessage('I campi non possono essere vuoti!')
            setFormValid(false)
        } else {
            if (isNaN(numero)) {
                setMessage("Inserire un numero di invitati valido!")
                textBoxNumero.value = ""
                textBoxNumero.className = textBoxNumero.className + " border-danger"
                textBoxNumero.style.color = 'red'
                setFormValid(false)
            }else{
                setFormValid(true)
                
            }
            if (nome.length < 2 || nome.length > 20) {
                setMessage("Il Campo 'Nome Famiglia' deve contenere tra i 2 e i 20 caratteri!")
                textBoxNome.className = textBoxNome.className + " border-danger" + " redPlaceHolder"
                setFormValid(false)
            }else{
                setFormValid(true)    
            }
            if (numero < 1 || numero > 10) {
                setMessage("Inserire un numero di invitati Valido!(Minimo: 1, Massimo: 10)")
                textBoxNumero.value = ""
                textBoxNumero.className = textBoxNumero.className + " border-danger"
                textBoxNumero.style.color = 'red'
                setFormValid(false)
            }else{
                setFormValid(true)    
            }
        }

        if(isFormValid){
            const data : IInvitation = {
                familyName:nome,
                presentsNumber:numero
            }
            try {
                await axios.post('/api/v1/inviti', data)
            } catch (error) {
                console.log(error)
            }
            
        }
    }


    return (
        <div className="myForm rounded shadow-lg" id="myForm">
            <div className="formQuestion">
                <span>Siete Interessati?</span>
                <small>Non dovete fare altro che compilare il form</small>
            </div>
            <div className="formRow">
                <label className="label" htmlFor="nome" >Nome Famiglia</label>
                <input type="Text" id="nome" onInput={(e: FormEvent<HTMLInputElement>) => {
                    setNome(e.currentTarget.value)
                    e.currentTarget.className = "myTextBox"
                    setMessage('')
                }} name="nome" className="myTextBox" placeholder="Nome famiglia..." ></input>
            </div>
            <div className="formRow">
                <label className="label" htmlFor="numero">Numero di Presenti</label>
                <input type="Number" id="numero" onInput={(e: FormEvent<HTMLInputElement>) => {
                    setNumero(parseInt(e.currentTarget.value))
                    e.currentTarget.className = "myTextBox"
                    e.currentTarget.style.color = '#DAA520'
                    setMessage('')
                }} name="numero" min='1' max='10' defaultValue='0' className="myTextBox" placeholder="Numero Persone..."></input>
            </div>
            <small className="text-danger" >{message}</small>
            <div className="formRow">
                <input type="submit" value="Partecipa!" onClick={() => validateForm()} className="goButton"></input>
            </div>
        </div>
    )
}

export default Form
