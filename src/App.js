import React, { useState, useEffect } from 'react';
import Workspace from './components/Workspace.js';
import Colors from './theme/Colors.js'
import styled from 'styled-components';
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

  const [workspace, setWorkspace] = useState({
    'workspaceID':'1',
    'workspaceName': 'My New Song'
  })

  return (
      <Main>
        <Router>
          <Switch>
            <Route path="/workspace/:userid/:username">
              <Workspace
                workspaceData={workspace}
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
