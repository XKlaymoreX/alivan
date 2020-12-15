import React, { CSSProperties } from 'react'
import { Redirect, Link } from 'react-router-dom'

const Success: React.FC<{ location: { state: { message: string } } }> = (props) => {

    const successStyle: CSSProperties = {
        backgroundColor: '#DAA520',
        width: '100vw',
        height: '100vh',
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }


    const textStyle: CSSProperties = {
        backgroundColor: 'white',
        borderRadius: '6px',
        fontWeight: 'bold',

    }




    return (
        <div style={successStyle} className="text-success">
            <div style={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
            }}>
                {props.location.state ?
                    <span style={textStyle}>
                        {props.location.state.message}
                        <h2>Ci vediamo il 1 Luglio 2021</h2>
                    </span> : <Redirect to="/" />}
                <iframe src="https://giphy.com/embed/3KC2jD2QcBOSc" width="100%" height="262" frameBorder="0"></iframe>
                <Link to="/" style={{
                    textDecoration: 'none',
                    color: 'black',
                    backgroundColor: 'white',
                    borderRadius: '6px',
                    padding: '5px',
                    fontWeight:200
                }}>Torna Alla Home</Link>
            </div>
        </div>
    )
}



export default Success
