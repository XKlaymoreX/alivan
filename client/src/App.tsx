import React from 'react';
import './App.css';
import Home from './routes/Home/Home'
import Private from './routes/Private/Private'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Private" component={Private} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
