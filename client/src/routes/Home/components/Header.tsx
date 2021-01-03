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
        userSelect:"none"

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
    const [useImage,setImage] = React.useState(HeaderImage)
    const [styleOne, setStyleOne] = React.useState(yesText)
    const [styleTwo, setStyleTwo] = React.useState(smallText)



    React.useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth < 1380){
                setImage(HeaderImageTwo)

            }else{
                setImage(HeaderImage)


            }
        })

        window.addEventListener('load', () => {
            if(window.innerWidth < 1380){

                setImage(HeaderImageTwo)
            }else{
                setImage(HeaderImage)

            }
        })
        return 

        window.removeEventListener('resize', () => {
            if(window.innerWidth < 1380){
                setImage(HeaderImageTwo)

            }else{
                setImage(HeaderImage)

            }
        })
        window.removeEventListener('load', () => {
            if(window.innerWidth < 1380){

                setImage(HeaderImageTwo)
            }else{
                setImage(HeaderImage)

            }
        })

    }, [])


    return (
        <React.Fragment>
            <div className="imgSectionWrapper" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* <Navbar /> */}
                <div style={{position:"absolute", top:"30%", left:"8%", zIndex:+1, width:"50%", height:"30%", display:"flex", flexFlow:"column", alignItems:"center", justifyContent:"center"}}>
                    <span style={styleOne}>
                        Benvenuti al nostro  Matrimonio!
                    </span>
                    <span style={styleTwo}>Da Alice e Ivan</span>
                </div>
                <img src={useImage} className="rounded" style={{userSelect:"none", pointerEvents:"none" ,objectFit: "cover", width: "90%", height: "90%", objectPosition: "center", filter: "brightness(100%) contrast(85%) saturate(80%)" }} />
            </div>
        </React.Fragment>

    )
}

export default Header 
