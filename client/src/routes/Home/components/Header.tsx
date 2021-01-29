import React, { CSSProperties, useEffect } from 'react'
import '../styles/Header.css'
import Navbar from './Navbar'
import HeaderSmall from './HeaderSmall'
import HeaderLarge from './HeaderLarge'
import HeaderSmallImage from '../media/smallCompressed.jpg'
import HeaderLargeImage from '../media/largeCompressed.jpg'


const Header: React.FC = (props) => {

    const [isSmallDevice, setIsSmallDevice] = React.useState<boolean>(false)

    React.useEffect(() => {

        window.addEventListener('resize', () => {
            if (window.innerWidth < 1380) {
                setIsSmallDevice(true)

            } else {
                setIsSmallDevice(false)
            }
        })

        window.addEventListener('load', () => {
            if (window.innerWidth < 1380) {
                setIsSmallDevice(true)
            } else {
                setIsSmallDevice(false)
            }
        })
        return

        window.removeEventListener('resize', () => {
            if (window.innerWidth < 1380) {
            } else {
            }
        })
        window.addEventListener('load', () => {
            if (window.innerWidth < 1380) {
                setIsSmallDevice(true)
            } else {
                setIsSmallDevice(false)
            }
        })

    }, [])


    if(isSmallDevice){
        return <HeaderSmall image={HeaderSmallImage}/>
    }else{
        return <HeaderLarge image={HeaderLargeImage}/>
    }
}

export default Header 
