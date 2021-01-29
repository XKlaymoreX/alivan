import React, { CSSProperties, useEffect } from 'react'
import '../styles/Header.css'
import Navbar from './Navbar'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const HeaderLarge: React.FC<{ image: string }> = ({ image }) => {
    const handleAction = () => {
            gsap.to(".img", { filter: "brightness(100%) contrast(80%) saturate(100%)", duration: .5 })
            .then(() => { window.location.assign("/#infosection") })
    }



    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)


        gsap.to(".textWrapper", {
            scrollTrigger:{
                trigger:".textWrapper",
                start:"start start",
                end:"80% start",
                toggleActions:"none none reverse none",
                scrub:true

            },
            opacity:0,
            display:"none"
        })




    })


    return (
        <React.Fragment>
            <div className="textWrapper">
                <div className="textContainer">
                    <span className="bigText">Alice ha detto : <br /> "Si"!</span><br />
                    <span className="smallText">Questo è il tuo invito al nostro matrimonio</span>
                    <button onClick={handleAction}>Partecipa 🥰</button>
                </div>
            </div>

            <div className="imgSectionWrapper" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "800px" }}>
                {/* <Navbar /> */}
                <img src={image} loading="lazy" className="img" style={{ userSelect: "none", pointerEvents: "none", objectFit: "cover", width: "100%", height: "100%", objectPosition: "center", filter: "brightness(100%) contrast(60%) saturate(140%)" }} />
            </div>
        </React.Fragment>

    )
}

export default HeaderLarge 
