import React, { CSSProperties, useEffect } from 'react'
import '../styles/Header.css'
import Navbar from './Navbar'

const HeaderLarge: React.FC<{image:string}> = ({image}) => {






    return (
        <React.Fragment>
            <div className="textWrapper">
                <div className="textContainer">
                    <span className="bigText">Alice ha detto : <br /> "Si"!</span><br />
                    <span className="smallText">Questo è il tuo invito al nostro matrimonio</span>
                    <button onClick={() => {window.location.assign("/#infosection")}}>Partecipa 🥰</button>
                </div>
            </div>

            <div className="imgSectionWrapper" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "600px" }}>
                {/* <Navbar /> */}
                <img src={image} loading="lazy" className="rounded" style={{ userSelect: "none", pointerEvents: "none", objectFit: "cover", width: "100%", height: "100%", objectPosition: "center", filter: "brightness(100%) contrast(85%) saturate(80%)" }} />
            </div>
        </React.Fragment>

    )
}

export default HeaderLarge 
