import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const images = {
    'frst' : require('./routes/Home/media/img2.jpg')
}

ReactDOM.render(<App />,document.getElementById('root'));
