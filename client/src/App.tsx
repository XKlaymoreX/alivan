import React from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App d-flex flex-column">
      <Header />
      <Content />
    </div>
  );
}

export default App;
