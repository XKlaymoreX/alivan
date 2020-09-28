import React from 'react'
import '../styles/Content.css'
import Form from './Form'
import InfoSection from './InfoSection'

const Content: React.FC = () => {

    return (
        <div className="myContent d-flex flex-column">
            <div className="infoSection contatiner-fluid shadow-sm">
                <InfoSection />
            </div>
            <div className="formSection d-flex justify-content-center">
                <Form />
            </div>
        </div>
    )
}

export default Content
