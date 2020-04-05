import React from 'react';
import Colors from '../theme/Colors.js'
import styled from 'styled-components';

function Track(props) {
    const Track = styled.section`
        width: 100%;
        background-color: ${Colors.pink500};
        padding: 10px;
        min-height: 80px;
        transition: ease-in-out .1s background;
        cursor: pointer;
        border-top: 1px solid ${Colors.pink600};
        &:first-child {
            border-radius: 5px 0 0 0;
            border-top: none;
        }
        &:last-child {
            border-radius: 0 0 0 3px;
        }
        &:hover {
            background-color: ${Colors.pink600}
        }
        &.selected {
            border-left: 5px solid ${Colors.gold400};
            background-color: ${Colors.pink600};
            .track-content {
                left: 0;
                .track-title-bar {
                    font-weight: bold;
                }
                .author-name-container {
                    opacity: .7;
                    color: white;
                }
            }
        }
        &.midi {
            border-left-color: slateblue;
        }
        .track-content {
            position: relative;
            left: 5px;
            width: 90%;
            padding-right: 10px;
            .track-title-bar {
                color: ${Colors.purple100};
                width: 100%;
                .icon {
                    font-size: .8rem;
                    margin-right: 5px;
                }
                .track-position {
                    font-size: .8rem;
                    opacity: .7;
                }
                .track-name {
                    .track-type {
                        margin-left: 5px;
                        font-size: .8rem;
                        opacity: .5;
                    }
                }
            }
            .author-name-container {
                margin-top: 3px;
                font-size: .6rem;
                opacity: .8;
                transition: .1s ease-in-out color;
                .author-name {
                    display: block;
                }
            }
            .track-controls {
                margin-top: 3px;
                .track-control {
                    width: 15px;
                    height: 15px;
                    margin-right: 5px;
                    border-radius: 3px;
                    border: 0;
                    background: ${Colors.pink800};
                    color: white;
                    cursor: pointer;
                    font-size: .6rem;
                    &.toggled {
                        font-weight: bold;
                        color: black;
                        &.arm {
                            background-color: ${Colors.red300};
                        }
                        &.mute {
                            background-color: ${Colors.gold400};
                        }
                        &.solo {
                            background-color: ${Colors.blue300};
                        }
                    }
                    &:focus {
                        outline: none;
                    }
                }
            }
        }
    `;

    function handleTrackClick(e) {
        const clicked = e.target;
        let allTracks = document.querySelectorAll('.track');

        allTracks.forEach(track => {
            track.classList.remove('selected');
        })

        const track = clicked.closest('.track');
        track.classList.add('selected');
    }



    const formatDate = date => {
        const day = date.getDay();
        const month = date.getMonth();
        const year = date.getYear();
        return `${month}/${day}/${year}`;
    }

    const toggleControl = e => {
        const clicked = e.target;
        const clickedControl = clicked.closest('.track-control');
        if (!clickedControl.classList.contains('toggled')) {
            clickedControl.classList.add('toggled');
        } else {
            clickedControl.classList.remove('toggled');
        }
    }

    return(
        <Track 
            className={`track ${props.trackData.trackType}`}
            onClick={handleTrackClick}>
            <section className="track-content">
                <section className="track-title-bar">
                    <span className="icon">{props.trackData.icon}</span>
                    <span className="track-position">
                        {`${props.trackPosition + 1}. `}
                    </span>
                    <span className="track-name">
                        {props.trackData.trackName}
                        {props.trackData.trackType === 'midi' ? 
                            <span className="track-type">MIDI</span> : ''
                        }
                    </span>
                </section>
                <section className="author-name-container">
                    <span className="author-name">{`Created by ${props.trackData.authorName}`}</span>
                    {/* <span className="created-date">{`${formatDate(props.trackData.dateCreated)}`}</span> */}
                </section>
                <section className="track-controls">
                    <button 
                        className="track-control arm"
                        onClick={toggleControl}>
                        R
                    </button>
                    <button 
                        className="track-control solo"
                        onClick={toggleControl}>
                        S
                    </button>
                    <button 
                        className="track-control mute"
                        onClick={toggleControl}>
                        M
                    </button>
                </section>
            </section>
        </Track>
    )
}

export default Track;