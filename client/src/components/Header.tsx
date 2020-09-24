import React from 'react'
import backgroundImage from '../media/wedding.jpg'
const Header : React.FC = () => {
    return (
        <div className="header container-fluid d-flex justify-content-center align-items-center text-white" style={{
            height:'100vh',
            backgroundImage:`url(${backgroundImage})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            opacity:'70%',
            textShadow:'2px 2px black',
            fontFamily:'Great Vibes'
        }}>
            <div className="row">
                <div className="col-md-12" style={{fontSize:'40px'}}>
                    <span>Alice & Ivan 's Wedding</span>
                </div>
            </div>
        </div>
    )
}

export default  Header 
