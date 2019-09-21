import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import LeaguePage from './components/LeaguePage'
import PlayerPage from './components/PlayerPage'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/sports/:sportsId/leagues" component={LeaguePage}/>
          <Route exact path="/sports/:sportsId/leagues/:league/messages" component={PlayerPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
