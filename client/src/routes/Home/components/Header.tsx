import React, { CSSProperties, useEffect } from 'react'
import '../styles/Header.css'
import HeaderImage from '../media/try.png'
import HeaderImageTwo from '../media/try2.png'
import Navbar from './Navbar'

const Header: React.FC = () => {

    const yesText: CSSProperties = {
        color: "white",
        fontSize: "8rem",
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
        top: "46%",
        color:"white",
        fontFamily:"tangerine",
        fontSize:"3rem",
        
    }
    const [useImage,setImage] = React.useState(HeaderImage)
    const [styleOne, setStyleOne] = React.useState(yesText)
    const [styleTwo, setStyleTwo] = React.useState(smallText)



    React.useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth < 1380){
                setImage(HeaderImageTwo)
                setStyleOne((prev) => ({...prev, top:"60%"}))
                setStyleTwo((prev) => ({...prev, top:"76%"}))
            }else{
                setImage(HeaderImage)
                setStyleOne((prev) => ({...prev, top:"30%"}))
                setStyleTwo((prev) => ({...prev, top:"46%"}))

            }
        })

        window.addEventListener('load', () => {
            if(window.innerWidth < 1380){
                setStyleOne((prev) => ({...prev, top:"60%"}))
                setStyleTwo((prev) => ({...prev, top:"76%"}))
                setImage(HeaderImageTwo)
            }else{
                setImage(HeaderImage)
                setStyleOne((prev) => ({...prev, top:"30%"}))
                setStyleTwo((prev) => ({...prev, top:"46%"}))
            }
        })
        return 

        window.removeEventListener('resize', () => {
            if(window.innerWidth < 1380){
                setImage(HeaderImageTwo)
                setStyleOne((prev) => ({...prev, top:"60%"}))
                setStyleTwo((prev) => ({...prev, top:"76%"}))
            }else{
                setImage(HeaderImage)
                setStyleOne((prev) => ({...prev, top:"30%"}))
                setStyleTwo((prev) => ({...prev, top:"46%"}))
            }
        })
        window.removeEventListener('load', () => {
            if(window.innerWidth < 1380){
                setStyleOne((prev) => ({...prev, top:"60%"}))
                setStyleTwo((prev) => ({...prev, top:"76%"}))
                setImage(HeaderImageTwo)
            }else{
                setImage(HeaderImage)
                setStyleOne((prev) => ({...prev, top:"30%"}))
                setStyleTwo((prev) => ({...prev, top:"46%"}))
            }
        })

    }, [])


    return (
        <React.Fragment>
            <div className="imgSectionWrapper" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* <Navbar /> */}
                {/* <div>
                    <span style={styleOne}>
                        Benvenuti al nostro <br/> Matrimonio!
                    </span>
                    <span style={styleTwo}>Da Alice e Ivan</span>
                </div> */}
                <img src={useImage} style={{ objectFit: "cover", width: "90%", height: "90%", objectPosition: "center", filter: "brightness(100%) contrast(85%) saturate(80%)" }} />
            </div>
        </React.Fragment>

    )
}

export default Header 
