import React, { useState, useEffect } from 'react';
import Colors from '../theme/Colors.js'
import styled from 'styled-components';

function Timeline(props) {
    const Timeline = styled.section`
        color: ${Colors.purple100};
        padding: 20px 20px 0 0;
        grid-area: timeline;
        h1,
        h2 {
            display: inline-block;
        }
        h1 {
            font-size: 1.7rem;
            margin-left: 20px;
            opacity: .7;
            margin-bottom: 15px;
            &:hover {
                opacity: 1;
                cursor: pointer;
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

    return(
        <Timeline>
            <h1>{props.workspaceData.workspaceName}</h1>
            <h2>{`${formatName(props.userData.username)}`}</h2>
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