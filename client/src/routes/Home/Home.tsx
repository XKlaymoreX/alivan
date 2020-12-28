import React from 'react'
import Content from './components/Content'
import Header from './components/Header'

const Home : React.FC = () => {
    React.useEffect(() => { 
        const linkEl = document.createElement('link');
        linkEl.setAttribute('rel', 'preload');
        linkEl.setAttribute('href', './routes/Home/styles/Header.css');
        linkEl.setAttribute('as', 'image');
      })
    
    return (
        <div className="Home d-flex flex-column">
            <Header />
            <Content />
        </div>
    )
}

export default Home
