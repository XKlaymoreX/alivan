import React from 'react'
import '../styles/Content.css'
import Form from './Form'
import InfoSection from './InfoSection'

const Content: React.FC = () => {

    return (
        <div className="myContent d-flex flex-column align-items-center" style={{zIndex:1, background:'white'}}>
                <InfoSection />
                <Form />
        </div>
    )
}

export default Content
