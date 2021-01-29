import React from 'react';
import Home from './routes/Home/Home'
import Private from './routes/Private/Private'
import Dashboard from './routes/Dashboard/Dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {

  

  return (
      <Router>
        <div className="App" style={{textAlign:"center", maxWidth:"1920px", margin:"auto",boxShadow:"1px 1px 5px grey"}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Private" component={Private} />
            <Route path="/Private/Dashboard" component={Dashboard} />
            <Route exact path="/*" component={Home} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
