import React from 'react'
import '../styles/Content.css'
import Form from './Form'
import InfoSection from './InfoSection'

const Content: React.FC = () => {

    return (
        <div className="myContent d-flex flex-column " style={{zIndex:1, background:'white'}}>
                <InfoSection />
                <Form />
                <footer>
                    <span>Website developed with ❤ by Cristian Hoza.</span>
                </footer>
        </div>
    )
}

export default Content
