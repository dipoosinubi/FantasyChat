import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage.js'
import LeaguePage from './components/LeaguePage.js'
import PlayerPage from './components/PlayerPage.js'
import NavBar from './components/NAV.js'

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/api/sports/:sportsId/leagues" component={LeaguePage}/>
          <Route exact path="/api/sports/:sportsId/leagues/:league/players" component={PlayerPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
