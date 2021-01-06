import React, { CSSProperties, useEffect } from 'react'
import '../styles/Header.css'
import HeaderImage from '../media/try.png'
import HeaderImageTwo from '../media/try2.png'
import Navbar from './Navbar'

const Header: React.FC = (props) => {



    const [useImage, setImage] = React.useState(HeaderImage)


    React.useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 1380) {
                setImage(HeaderImageTwo)
            } else {
                setImage(HeaderImage)
            }
        })

        window.addEventListener('load', () => {
            if (window.innerWidth < 1380) {
                setImage(HeaderImageTwo)
            } else {
                setImage(HeaderImage)
            }
        })
        return

        window.removeEventListener('resize', () => {
            if (window.innerWidth < 1380) {
                setImage(HeaderImageTwo)
            } else {
                setImage(HeaderImage)
            }
        })
        window.removeEventListener('load', () => {

            if (window.innerWidth < 1380) {
                setImage(HeaderImageTwo)
            } else {
                setImage(HeaderImage)
            }
        })

    }, [])


    return (
        <React.Fragment>
            <div className="textWrapper">
                <div className="textContainer">
                    <span className="bigText">Benvenuti al nostro<br/> Matrimonio</span><br />
                    <span className="smallText">Da Alice e Ivan</span>
                </div>
            </div>

            <div className="imgSectionWrapper" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* <Navbar /> */}
                <img src={useImage} loading="lazy" className="rounded" style={{ userSelect: "none", pointerEvents: "none", objectFit: "cover", width: "90%", height: "90%", objectPosition: "center", filter: "brightness(100%) contrast(85%) saturate(80%)" }} />
            </div>
        </React.Fragment>

    )
}

export default Header 
