import React from 'react';
import './App.css';
import Home from './routes/Home/Home'
import Private from './routes/Private/Private'
import Dashboard from './routes/Dashboard/Dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UserContext } from './routes/Contexts/UserContext'


function App() {
  return (
    <UserContext>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Private" component={Private} />
            <Route path="/Private/Dashboard" component={Dashboard} />
            <Route exact path="/*" component={Home} />
          </Switch>
        </div>
      </Router>
    </UserContext>
  );
}

export default App;
