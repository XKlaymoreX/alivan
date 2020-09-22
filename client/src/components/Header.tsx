import React from 'react'
import '../styles/Header.css'

const Header : React.FC = () => {
    return (
        <div className="header container-fluid d-flex justify-content-center align-items-center text-white">
            <div className="row">
                <div className="col-md-12" style={{fontSize:'40px'}}>
                    <span>Alice & Ivan 's Wedding</span>
                </div>
            </div>
        </div>
    )
}

export default  Header 
