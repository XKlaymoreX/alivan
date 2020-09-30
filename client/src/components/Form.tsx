import React from 'react'

const Form: React.FC = () => {
    return (
        <div className="myForm rounded shadow-lg" id="myForm">
            <div className="formQuestion">
                <span>Siete Interessati?</span>
                <small>Non dovete fare altro che compilare il form</small>
            </div>
            <div className="formRow">
                <label className="label" htmlFor="nome" >Nome Famiglia</label>
                <input type="Text" name="nome" className="myTextBox" placeholder="Nome famiglia..." ></input>
            </div>
            <div className="formRow">
                <label className="label" htmlFor="numero">Numero di Presenti</label>
                <input type="Number" name="numero" min='1' max='10' defaultValue='1' className="myTextBox" placeholder="Numero Persone..."></input>
            </div>
            <div className="formRow">
                <input type="submit" value="Partecipa!" className="goButton"></input>
            </div>
        </div>
    )
}

export default Form
