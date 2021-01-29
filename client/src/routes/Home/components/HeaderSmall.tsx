import React, { CSSProperties, useEffect } from 'react'
import '../styles/Header.css'
import { gsap } from 'gsap'

const HeaderSmall: React.FC<{ image: string }> = ({ image }) => {

    const handleAction = () => {
        var tl = gsap.timeline()
        tl.to(".textWrapper", {
            opacity: 0,
            duration: .2,
            ease: "power1"
        })
        tl.to(".img", { filter: "brightness(100%) contrast(80%) saturate(100%)", duration: .5 }, .5)
            .then(() => { window.location.assign("/#infosection") })
            .then(() => {
                tl.to(".textWrapper", {
                    opacity: 100,
                    duration: .2,
                    ease: "power1"
                },2)
                tl.to(".img", { filter: "brightness(100%) contrast(30%) saturate(150%)", duration: .5 }, 2)
            })
    }


    return (
        <React.Fragment>
            <div className="textWrapper">
                <div className="textContainer">
                    <span className="bigText">Alice ha detto : "Si"!</span><br />
                    <span className="smallText">Questo è il tuo invito al nostro matrimonio</span>
                    <button onClick={() => handleAction()}>Partecipa 🥰</button>
                </div>
            </div>
            <div className="imgSectionWrapper" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "600px" }}>
                <img src={image} loading="lazy" className="img" style={{ userSelect: "none", pointerEvents: "none", objectFit: "cover", width: "100%", height: "100%", objectPosition: "center", filter: "brightness(100%) contrast(30%) saturate(150%)" }} />
            </div>
        </React.Fragment>

    )
}

export default HeaderSmall 
