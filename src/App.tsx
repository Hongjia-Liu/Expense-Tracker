import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import Track from './views/Track';
import NoMatch from './views/NoMatch';



function App() {
  return (
    <Router>

      <Switch>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/track">
          <Track/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Redirect exact from="/" to="/track"/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
