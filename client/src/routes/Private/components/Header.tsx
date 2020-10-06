import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Private.css'

const Header : React.FC = () => {
    return (
        <div className="myHeader shadow-sm">
            <span>Area Privata</span>
            <Link to="/" className="myLink">Torna Alla Home</Link>
        </div>
    )
}

export default Header
