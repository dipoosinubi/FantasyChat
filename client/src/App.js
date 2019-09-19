import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import HomePage from './components/HomePage'
import LeaguePage from './components/LeaguePage'
import MessagePage from './components/MessagePage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path="/" component={HomePage}/> */}
          <Route exact path="/" component={LeaguePage}/>
          {/* <Route exact path="/" component={MessagePage}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
