import React, { useState, useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';
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

  return (
    <Workspace>
      <TrackBar
        tracks={tracks} 
        workspaceData={props.workspaceData}
      />
      <Timeline
        tracks={tracks}
        workspaceData={props.workspaceData}
        userData={props.getUserData()}
      />
      <Controls
        tracks={tracks}
      />
    </Workspace>
  );
}

export default Workspace;
