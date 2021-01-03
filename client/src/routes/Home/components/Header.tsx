import React, { CSSProperties, useEffect } from 'react'
import '../styles/Header.css'
import HeaderImage from '../media/try.png'
import HeaderImageTwo from '../media/try2.png'
import Navbar from './Navbar'

const Header: React.FC = () => {

    const yesText: CSSProperties = {
        color: "white",
        fontSize: "8em",
        fontFamily: "Tangerine",
        zIndex: +1,
        left: "10%",
        top: "30%",
        lineHeight:".7em",
        userSelect:"none",
        textAlign:"left"

    }

    const smallText : CSSProperties ={
        zIndex: +1,
        left: "10%",
        top: "46%",
        color:"white",
        fontFamily:"tangerine",
        fontSize:"3em",
        userSelect:"none"
        
    }

    const textContainerStyle : CSSProperties = {
        position:"absolute", top:"30%", left:"8%", zIndex:+1, width:"50%", height:"30%", display:"flex", flexFlow:"column", alignItems:"center", justifyContent:"center"
    }
    const [useImage,setImage] = React.useState(HeaderImage)
    const [textContainer, setTextContainer] = React.useState(textContainerStyle)



    React.useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth < 1380){
                setImage(HeaderImageTwo)
                setTextContainer((prev) => ({...prev, display:"none"}))
            }else{
                setImage(HeaderImage)
                setTextContainer((prev) => ({...prev, display:"flex"}))


            }
        })

        window.addEventListener('load', () => {
            if(window.innerWidth < 1380){
                setTextContainer((prev) => ({...prev, display:"none"}))


                setImage(HeaderImageTwo)
            }else{
                setImage(HeaderImage)
                setTextContainer((prev) => ({...prev, display:"flex"}))

            }
        })
        return 

        window.removeEventListener('resize', () => {
            if(window.innerWidth < 1380){
                setImage(HeaderImageTwo)
                setTextContainer((prev) => ({...prev, display:"none"}))


            }else{
                setImage(HeaderImage)
                setTextContainer((prev) => ({...prev, display:"flex"}))

            }
        })
        window.removeEventListener('load', () => {
            if(window.innerWidth < 1380){
                setTextContainer((prev) => ({...prev, display:"none"}))


                setImage(HeaderImageTwo)
            }else{
                setImage(HeaderImage)
                setTextContainer((prev) => ({...prev, display:"flex"}))

            }
        })

    }, [])


    return (
        <React.Fragment>
            <div className="imgSectionWrapper" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* <Navbar /> */}
                <div style={textContainer}>
                    <span style={yesText}>
                        Benvenuti al nostro Matrimonio!
                    </span>
                    <span style={smallText}>Da Alice e Ivan</span>
                </div>
                <img src={useImage} loading="lazy" className="rounded" style={{userSelect:"none", pointerEvents:"none" ,objectFit: "cover", width: "90%", height: "90%", objectPosition: "center", filter: "brightness(100%) contrast(85%) saturate(80%)" }} />
            </div>
        </React.Fragment>

    )
}

export default Header 
