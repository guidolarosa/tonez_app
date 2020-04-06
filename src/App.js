import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import Workspace from './components/Workspace.js';
import Colors from './theme/Colors.js';
import Login from './components/Login.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';

const App = () => {
  const Main = styled.section`
    background-color: ${Colors.purple600};
    height: 100vh;
    min-width: 1280px;
    & * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Gotham Rounded', sans-serif, monospace;
    }
  `;

  const [workspaceID, setWorkspaceID] = useState(12345);

  return (
      <Main>
        <Router>
          <Switch>
            <Route path={`/workspace/:userid/:${workspaceID}`}>
              <Workspace
                getUserData={useParams}
               >
              </Workspace>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </Main>
  );
}

export default App;
