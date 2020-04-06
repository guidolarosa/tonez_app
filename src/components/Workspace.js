import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import Colors from '../theme/Colors.js';
import trackData from './../data/tracks.js';
import TrackBar from './TrackBar.js';
import Timeline from './Timeline.js';
import Controls from './Controls.js';
import styled from 'styled-components';

function Workspace(props) {
  const Workspace = styled.section`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: calc(100vh - 80px) 80px;
    grid-template-areas: "trackbar timeline" "controls controls"
  `;

  const [tracks, setTracks] = useState(trackData);
  const [selectedTrack, setSelectedTrack] = useState('');
  const [proyectName, setProyectName] = useState(undefined);

  const firebaseConfig = {
    apiKey: "AIzaSyBDcgXgo6p-UIIXO83zv9mtS8Mlzff9daw",
    authDomain: "tonez-85c72.firebaseapp.com",
    databaseURL: "https://tonez-85c72.firebaseio.com",
    projectId: "tonez-85c72",
    storageBucket: "tonez-85c72.appspot.com",
    messagingSenderId: "872522202210",
    appId: "1:872522202210:web:f86b8c4118a50ea465a53b"
  };

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
    readFirebaseData(database);
  },[])

  const readFirebaseData = (database) => {
    return database.ref('workspaces/').on('value', function(snapshot) {
      let workspace= snapshot.child('12345');
      let workspaceNameSS = workspace.child('workspace_name');
      let proyectName = workspaceNameSS.val();
      setProyectName(proyectName);
    });
  }

  return (
    <Workspace>
      <TrackBar
        tracks={tracks} 
      />
      <Timeline
        proyectName={proyectName}
        tracks={tracks}
      />
      <Controls
        tracks={tracks}
      />
    </Workspace>
  );
}

export default Workspace;
