import React, { useState, useEffect } from 'react';
import Colors from '../theme/Colors.js'
import styled, {keyframes} from 'styled-components';

function Timeline(props) {
    const fadeOpacity = keyframes`
        0% {
            opacity: .2
        }

        50% {
            opacity: .5
        }

        100% {
            opacity: .2
        }
    `;

    const Timeline = styled.section`
        color: ${Colors.purple100};
        padding: 20px 20px 0 0;
        grid-area: timeline;
        h1,
        h2 {
            display: inline-block;
        }
        .workspace-name-container {
            margin-bottom: 15px;
            &.loading-name {
                h1 {
                    animation: ${fadeOpacity} 2s ease-in-out infinite;
                }
            }
            h1 {
                font-size: 1.7rem;
                margin-left: 20px;
                opacity: .7;
                &:hover {
                    opacity: 1;
                    cursor: pointer;
                }
            }
            input {
                border: none;
                outline: none;
                background: transparent;
                border-bottom: 1px solid ${Colors.purple300};
                color: white;
                font-size: 1.3rem;
                padding: 3px 10px;
                font-weight: bold;
            }
        }
        h2 {
            float: right;
            font-size: 1rem;
        }
        .track-timeline {
            width: 100%;
            background-color: ${Colors.purple300};
            min-height: 80px;
            border-top: 1px solid ${Colors.purple600};
            border-collapse: collapse;
            border-left: none;
            &:first-child {
                border-radius: 0 3px 0 0;
                
            };
            &:last-child {
                border-radius: 0 0 3px 0;
            };
        }
    `;

    const formatName = rawName => {
        const rawString = rawName;
        const replacedSpaces = rawString.replace(/\+/g, " ");
        return (replacedSpaces)
    }

    const handleWorkspaceNameClick = () => {
        const workspaceNameContainer = document.querySelector('.workspace-name-container');
        if (!workspaceNameContainer.classList.contains('editing-name')) {
            workspaceNameContainer.classList.add('editing-name');
            const titleElement = workspaceNameContainer.querySelector('h1');
            titleElement.innerHTML = "";
            const input = document.createElement('input');
            workspaceNameContainer.appendChild(input);
        }
    }

    return(
        <Timeline>
            <section 
                className={`workspace-name-container ${!props.proyectName ?
                    'loading-name' :
                    ''}
                `}
                onClick={handleWorkspaceNameClick}>
                <h1>
                    {!props.proyectName ?
                        'Loading...' :
                        props.proyectName
                    }
                </h1>
                <h2>{`Guido La Rosa`}</h2>
            </section>
            <section>
                {props.tracks.map((track, index) => 
                    <section key={index} className="track-timeline">

                    </section>
                )}
            </section>
        </Timeline>
    )
}

export default Timeline;