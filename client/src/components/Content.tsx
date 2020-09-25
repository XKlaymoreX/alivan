import React from 'react'
import '../styles/Content.css'

const Content = () => {

    return (
        <div className="myContent d-flex justify-content-center" style={{backgroundColor:'#eee'}}>   
            <div className="myForm d-flex flex-column align-items-center rounded shadow-lg" style={{backgroundColor:'violet',width:'80%', height:'auto', margin:'20px 0 20px 0', padding:'20px'}}>
                <label className="align-self-start" >Sarete Presenti?</label>
                <input type="radio"></input>
                <label className="align-self-start" >Nome Famiglia</label>
                <input type="Text" className="myTextBox" placeholder="Nome famiglia..." ></input>
                <label className="align-self-start" >Numero di Presenti</label>
                <input type="Number" className="myTextBox" placeholder="Numero Persone..."></input>
            </div>
        </div>
    )
}

export default Content
