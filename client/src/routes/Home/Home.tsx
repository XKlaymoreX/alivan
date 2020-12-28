import React from 'react'
import Content from './components/Content'
import Header from './components/Header'

const Home : React.FC = () => {

    
    return (
        <div className="Home d-flex flex-column">
            <Header />
            <Content />
        </div>
    )
}

export default Home
