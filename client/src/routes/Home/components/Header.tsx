import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

const Header: React.FC = () => {

    const [height, setHeight] = useState<number>(window.innerHeight)

    const handleResize = () => {
        console.log('resize')
        setHeight(window.innerHeight)
    }


    useEffect(() => {
        console.log('Render')
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline()
            .from(".imgSectionWrapper", { x: '-300vw', ease: 'power2', duration: 2 })
            .from(".imgSection", { filter: 'saturate(0%)', duration: 0.5 })
            .from(".welcomeText", { opacity: 0, ease: 'power2', duration: 0.5 })
            .from(".bi-chevron-compact-down", { opacity: 0, ease: 'power2', duration: 0.5 })

            gsap.to(".imgSectionWrapper", { scrollTrigger: { trigger: '.imgSectionWrapper', pin: true } })

        window.addEventListener('resize',handleResize)
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])

    return (
        <div className="imgSectionWrapper" style={{ zIndex: -1, height: '100vh' }}>
            <div className="imgSection rounded shadow-lg" style={{height:height-40, width:'90%'}}>
                <div className="welcomeText">Benvenuti Al Nostro Matrimonio</div>
                <svg width="4em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-compact-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                </svg>
            </div>
        </div>
    )
}

export default Header 
