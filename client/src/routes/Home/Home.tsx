import React from 'react'
import Content from './components/Content'
import Header from './components/Header'


const Home : React.FC = () => {

    return (
        <div className="Home d-flex flex-column" style={{backgroundColor:"#eee", maxWidth:"1920px", margin:"auto",boxShadow:"1px 1px 5px grey"}}>
            <Header  />
            <Content />
        </div>
    )
}

export default Home
