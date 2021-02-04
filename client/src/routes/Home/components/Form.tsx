import React, { FormEvent, useRef } from 'react'
import axios from 'axios'
import { IInvitation } from '../../../types.d'

const Form: React.FC = () => {

    const [nome, setNome] = React.useState<string>('')
    const [numero, setNumero] = React.useState<number>(0)
    const [message, setMessage] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)
    const [success, setSuccess] = React.useState<{ message: string, success: boolean }>({ message: '', success: false })
    const nameRef = useRef(null)
    const numberRef = useRef(null)
    const validateForm = async () => {
        let validName: boolean = false
        let validNumber: boolean = false
        setIsLoading(true)
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
            setIsLoading(false)
        } else { //SE I CAMPI NON SONO VUOTI
            if (nome.length < 2 || nome.length > 20) {
                validName = false
                setMessage("Il Campo 'Nome Famiglia' deve contenere tra i 2 e i 20 caratteri!")
                textBoxNome.className = textBoxNome.className + " border-danger" + " redPlaceHolder"
                setIsLoading(false)
            } else {
                validName = true
            }
            if (numero < 1 || numero > 10 || isNaN(numero)) {
                validNumber = false
                setMessage("Inserire un numero di invitati Valido!(Minimo: 1, Massimo: 10)")
                textBoxNumero.value = ""
                textBoxNumero.className = textBoxNumero.className + " border-danger"
                textBoxNumero.style.color = 'red'
                setIsLoading(false)
            } else {
                validNumber = true
            }
        }

        if (validName && validNumber) {
            const data: IInvitation = {
                familyName: nome,
                presentsNumber: numero
            }
            try {
                await axios.post('/api/v1/inviti', data)
                    .then(res => {
                        setIsLoading(false)
                        setSuccess({ message: "Spedizione dell'invito Riuscita! :)", success: true })
                    }).catch(err => {
                        setIsLoading(false)
                        setSuccess({ message: `${err.response.data}`, success: false })
                    })
            } catch (error) {
                console.log(error)
            }
        } else {
            setIsLoading(false)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === " " && nome.length == 0) {
            e.preventDefault()
        }
    }

    return (
        <div className="formSection">

            <div className="myForm shadow-lg">
                <div className="formQuestion">
                    <span className=" formMargin">Sarete dei nostri?</span>
                    <small className=" formMargin">Non dovete fare altro che compilare il form</small>
                </div>
                <div className="formRow">
                    <label className="label" htmlFor="nome" >Nome Famiglia</label>
                    <input type="Text" onKeyDown={handleKeyDown} id="nome" ref={nameRef} onInput={(e: FormEvent<HTMLInputElement>) => {
                        setNome(e.currentTarget.value)
                        e.currentTarget.className = "myTextBox"
                        setMessage('')
                        setSuccess({ message: '', success: false })
                    }} name="nome" className="myTextBox"></input>
                </div>
                <div className="formRow">
                    <label className="label" htmlFor="numero">Numero di Presenti</label>
                    <input type="Number" id="numero" ref={numberRef} onInput={(e: FormEvent<HTMLInputElement>) => {
                        setNumero(parseInt(e.currentTarget.value))
                        e.currentTarget.className = "myTextBox"
                        e.currentTarget.style.color = '#DAA520'
                        setMessage('')
                        setSuccess({ message: '', success: false })
                    }} name="numero" min='1' max='10' defaultValue='0' className="myTextBox"></input>
                </div>
                <small className="text-danger" >{message}</small>
                <div className="formRowButton">
                    {isLoading ? <span style={{ fontSize: '20px', fontFamily: 'Poppins', color: '#DAA520', marginBottom: "20px" }}>Uhmmm.. controllo se c'è spazio</span> : <>{success.success ? <span className="text-success" style={{ margin: "20px 0 20px 0", fontWeight: "bold" }} >{success.message}</span> : <span className="text-danger" style={{ margin: "20px 0 20px 0", fontWeight: "bold" }}>{success.message}</span>}</>}
                    <input type="submit" value="Partecipa!" onClick={() => validateForm()} className="goButton"></input>
                </div>
            </div>
        </div>

    )
}

export default Form
