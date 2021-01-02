import React, { useEffect } from 'react'
import '../styles/Header.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import HeaderImage from '../media/img2.jpg'

const Header: React.FC = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.timeline()
            .from(".imgSectionWrapper", { x: '-300vw', ease: 'power2', duration: 2 })
            .from(".welcomeText", { opacity: 0, ease: 'power2', duration: 0.5 })
            .from(".bi-chevron-compact-down", { opacity: 0, ease: 'power2', duration: 0.5 })
        gsap.to(".imgSectionWrapper", { scrollTrigger: { trigger: '.imgSectionWrapper', pin: true } })
    }, [])

    return (
        <React.Fragment>


            <div className="imgSectionWrapper" style={{ zIndex: -1, height: '100vh'}}>
                <img src={HeaderImage} style={{ objectFit: "cover", width: "90%", height: "90%", objectPosition: "center", position: "absolute", zIndex: -1, filter: "brightness(100%) contrast(85%) saturate(80%)" }} />
                <div className="welcomeText">Benvenuti Al Nostro Matrimonio</div>
                <svg width="6em" height="4em" viewBox="0 0 16 16" className="bi bi-chevron-compact-down" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                </svg>
            </div>
        </React.Fragment>

    )
}

export default Header 
