import React, { CSSProperties, useEffect } from 'react'
import '../styles/Header.css'
import HeaderImage from '../media/try.png'
import Navbar from './Navbar'

const Header: React.FC = () => {


    const yesText: CSSProperties = {
        color: "white",
        fontSize: "8em",
        fontFamily: "Tangerine",
        zIndex: +1,
        position: "absolute",
        left: "10%",
        top: "30%",
        lineHeight:".7em"
    }

    const smallText : CSSProperties ={
        zIndex: +1,
        position: "absolute",
        left: "10%",
        top: "43%",
        color:"white",
        fontFamily:"tangerine",
        fontSize:"3em",
        
    }

    return (
        <React.Fragment>
            <div className="imgWrapper" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* <Navbar /> */}
                <div>
                    <span style={yesText}>
                        Benvenuti al nostro <br/> Matrimonio!
                    </span>
                    <span style={smallText}>Da Alice e Ivan</span>
                </div>
                <img src={HeaderImage} style={{ objectFit: "cover", width: "90%", height: "90%", objectPosition: "center", filter: "brightness(100%) contrast(85%) saturate(80%)" }} />
            </div>
        </React.Fragment>

    )
}

export default Header 
