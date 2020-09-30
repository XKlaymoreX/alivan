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
                                <h2 style={{ fontFamily: 'Great Vibes', textShadow: '1px 1px black' }}>Welcome to</h2>
                                <h1 style={{ fontFamily: 'Great Vibes', textShadow: '1px 1px black' }}>Alice & Ivan's Wedding</h1>
                            </div>
                            <a style={{cursor:'pointer', textDecoration:'none', color:'white'}} href="#myForm">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-mouse" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8V5a4 4 0 0 0-8 0v6a4 4 0 0 0 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" />
                                </svg>
                                <span>Scroll Down</span>
                            </a>
                        </Carousel.Caption>
                        <img src={imgOne} style={{width:'100vw', objectFit:'cover', objectPosition:'center', height:window.innerHeight}}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Carousel.Caption className="d-flex flex-column justify-content-end">
                            <div>
                                <h2 style={{ fontFamily: 'Great Vibes', textShadow: '1px 1px black' }}>Welcome to</h2>
                                <h1 style={{ fontFamily: 'Great Vibes', textShadow: '1px 1px black' }}>Alice & Ivan's Wedding</h1>
                            </div>
                            <a style={{cursor:'pointer', textDecoration:'none', color:'white'}} href="#myForm">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-mouse" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8V5a4 4 0 0 0-8 0v6a4 4 0 0 0 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" />
                                </svg>
                                <span>Scroll Down</span>
                            </a>
                        </Carousel.Caption>
                        <img src={imgTwo} style={{width:'100vw', objectFit:'cover', objectPosition:'center', height:window.innerHeight}}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Carousel.Caption className="d-flex flex-column justify-content-end">
                            <div>
                                <h2 style={{ fontFamily: 'Great Vibes', textShadow: '1px 1px black' }}>Welcome to</h2>
                                <h1 style={{ fontFamily: 'Great Vibes', textShadow: '1px 1px black' }}>Alice & Ivan's Wedding</h1>
                            </div>
                            <a style={{cursor:'pointer', textDecoration:'none', color:'white'}} href="#myForm">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-mouse" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8V5a4 4 0 0 0-8 0v6a4 4 0 0 0 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" />
                                </svg>
                                <span>Scroll Down</span>
                            </a>
                        </Carousel.Caption>
                        <img src={imgThree} style={{width:'100vw', objectFit:'cover', objectPosition:'center', height:window.innerHeight}}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Carousel.Caption className="d-flex flex-column justify-content-end">
                            <div>
                                <h2 style={{ fontFamily: 'Great Vibes', textShadow: '1px 1px black' }}>Welcome to</h2>
                                <h1 style={{ fontFamily: 'Great Vibes', textShadow: '1px 1px black' }}>Alice & Ivan's Wedding</h1>
                            </div>
                            <a style={{cursor:'pointer', textDecoration:'none', color:'white'}} href="#myForm">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-mouse" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8V5a4 4 0 0 0-8 0v6a4 4 0 0 0 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" />
                                </svg>
                                <span>Scroll Down</span>
                            </a>
                        </Carousel.Caption>
                        <img src={imgFour} style={{width:'100vw', objectFit:'cover', objectPosition:'center', height:window.innerHeight}} ></img>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Header 
