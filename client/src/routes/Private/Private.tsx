import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import './styles/Private.css'

const Private : React.FC = () => {
    return (
        <div className="myPrivate">
          <Header />
          <Content />
        </div>
    )
}

export default Private
