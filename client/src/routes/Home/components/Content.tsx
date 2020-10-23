import React from 'react'
import '../styles/Content.css'
import Form from './Form'
import InfoSection from './InfoSection'

const Content: React.FC = () => {

    return (
        <div className="myContent d-flex flex-column" style={{zIndex:1, background:'white'}}>
            <div className="infoSectionContainer container-fluid" >
                <InfoSection />
            </div>
            <div className="formSection d-flex justify-content-center" >
                <Form />
            </div>
        </div>
    )
}

export default Content
