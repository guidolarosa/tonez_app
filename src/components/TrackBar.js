import React, {useState} from 'react';
import Colors from '../theme/Colors.js'
import Track from './Track.js'
import styled from 'styled-components';

function TrackBar(props) {
    const TrackBar = styled.section`
        max-width: 250px;
        grid-area: trackbar;
        background-color: ${Colors.pink400};
        padding: 20px 0 20px 20px;
        .title-bar{
            position: relative;
            h1 {
                font-size: 1.7rem;
                margin-bottom: 15px;
                color: ${Colors.pink600};
                display: inline-block;
            }
            .collapse-button {
                position: absolute;
                right: 20px;
                width: 20px;
                height: 20px;
                top: 5px;
                border-radius: 10px;
                border: 0;
                background: ${Colors.pink600};
                cursor: pointer;
                &:focus {
                    outline: 0;
                }
            }
        }
        h2 {
            font-size: 1.5rem;
            color: ${Colors.pink600};
            opacity: .7;
        }
        .track-container {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
    `;

    const [isTrackBarCollapsed, setTrackBarCollapse] = useState(false);


    return (
        <TrackBar className={`${isTrackBarCollapsed ?
            'collapsed' :
            ''
        }`}>
            <section className="title-bar">
                <h1>Workspace</h1>
                <button className={`collapse-button ${isTrackBarCollapsed ?
                    'collapsed' :
                    ''
                }`}>C</button>
            </section>
            <section className ="track-container">
                {props.tracks.map((track, index) => 
                    <Track
                        trackPosition={index}
                        trackData={track}
                        key={index}
                    />
                )}
            </section>
        </TrackBar>
    );
  }
  
  export default TrackBar;