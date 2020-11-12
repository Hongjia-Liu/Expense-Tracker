import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Layout from 'components/Layout';


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

function NoMatch() {
  return (
    <div>404</div>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>Tags</h2>
    </Layout>
  );
}

function Track() {
  return (
    <Layout>
      <h2>Track</h2>
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>Statistics</h2>
    </Layout>
  );
}

export default App;
