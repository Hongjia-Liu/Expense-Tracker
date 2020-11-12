import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;



function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
          <Redirect exact from="/" to="/track" />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        </Main>
        <Nav />
      </Wrapper>
    </Router>
  );
}

function NoMatch() {
  return (
    <div>404</div>
  )
}

function Tags() {
  return <h2>Tags</h2>;
}

function Track() {
  return <h2>Track</h2>;
}

function Statistics() {
  return <h2>Statistics</h2>;
}

export default App;
