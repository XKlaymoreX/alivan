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
            <div className="imgSection">
                <Carousel controls={false} fade={true} interval={4000}>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h2 style={{ fontFamily: 'Great Vibes', textShadow:'1px 1px black'}}>Welcome to</h2>
                            <h1 style={{ fontFamily: 'Great Vibes', textShadow:'1px 1px black' }}>Alice & Ivan's Wedding</h1>
                        </Carousel.Caption>
                        <div className="img" style={{
                            backgroundImage: `url(${imgOne})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transform: 'scale(1)',
                            opacity:'85%'

                        }}></div>

                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img" style={{
                            backgroundImage: `url(${imgTwo})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transform: 'scale(1)',
                            opacity:'85%'
                        }}></div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img" style={{
                            backgroundImage: `url(${imgThree})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transform: 'scale(1)',
                            opacity:'85%'
                        }}></div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img" style={{
                            backgroundImage: `url(${imgFour})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transform: 'scale(1)',
                            opacity:'85%'
                        }}></div>
                    </Carousel.Item>
                </Carousel>

            </div>
        </div>
    )
}

export default Header 
