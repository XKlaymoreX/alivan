import React from 'react'
import imgOne from '../media/img1.jpg'
import imgTwo from '../media/img2.jpg'
import imgThree from '../media/img3.jpg'
import imgFour from '../media/img4.jpg'
import '../styles/Header.css'
import Carousel from 'react-bootstrap/Carousel'

const Header: React.FC = () => {

    return (
        <div className="imgSectionWrapper">
            <div className="imgSection" >
                <Carousel controls={false} fade={true}  interval={5000} >
                    <Carousel.Item>
                        <Carousel.Caption className="d-flex flex-column justify-content-end">
                            <div>
                                <h1 style={{ fontFamily: 'Great Vibes', textShadow: '1px 1px black' }}>Benvenuti al nostro Matrimonio</h1>
                            </div>
                            <a style={{cursor:'pointer', textDecoration:'none', color:'white'}} href="#myForm">
                                <input type="button" className="goDownButton"  value="Partecipa"></input>
                            </a>
                        </Carousel.Caption>
                        <img src={imgOne} alt="Prima Immagine" style={{width:'100vw', objectFit:'cover', objectPosition:'center', height:window.innerHeight}}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Carousel.Caption className="d-flex flex-column justify-content-end">
                            <div>
                                <h1 style={{ fontFamily: 'Great Vibes', textShadow: '1px 1px black' }}>Benvenuti al nostro Matrimonio</h1>
                            </div>
                            <a style={{cursor:'pointer', textDecoration:'none', color:'white'}} href="#myForm">
                                <input type="button" className="goDownButton"  value="Partecipa"></input>
                            </a>
                        </Carousel.Caption>
                        <img src={imgTwo} alt="Seconda Immagine" style={{width:'100vw', objectFit:'cover', objectPosition:'center', height:window.innerHeight}}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Carousel.Caption className="d-flex flex-column justify-content-end">
                            <div>
                                <h1 style={{ fontFamily: 'Great Vibes', textShadow: '1px 1px black' }}>Benvenuti al nostro Matrimonio</h1>
                            </div>
                            <a style={{cursor:'pointer', textDecoration:'none', color:'white'}} href="#myForm">
                                <input type="button" className="goDownButton"  value="Partecipa"></input>
                            </a>
                        </Carousel.Caption>
                        <img src={imgThree} alt="Terza Immagine" style={{width:'100vw', objectFit:'cover', objectPosition:'center', height:window.innerHeight}}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Carousel.Caption className="d-flex flex-column justify-content-end">
                            <div>
                                <h1 style={{ fontFamily: 'Great Vibes', textShadow: '1px 1px black' }}>Benvenuti al nostro Matrimonio</h1>
                            </div>
                            <a style={{cursor:'pointer', textDecoration:'none', color:'white'}} href="#infoAnchor">
                                <input type="button" className="goDownButton"  value="Partecipa"></input>
                            </a>
                        </Carousel.Caption>
                        <img src={imgFour} alt="Quarta Immagine" style={{width:'100vw', objectFit:'cover', objectPosition:'center', height:window.innerHeight}} ></img>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Header 
