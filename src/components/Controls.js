import React, { useState, useEffect } from 'react';
import Colors from '../theme/Colors.js'
import styled from 'styled-components';
import Logo from './../img/logo.png';

function Controls(props) {
    const Controls = styled.section`
        grid-area: controls;
        background-color: ${Colors.purple400};
        padding: 10px 20px;
        display: flex;
        .control-logo {
            height: 40px;
            margin-top: 10px;
            margin-right: 20px;
        }
        .control-box {
            border-radius: 5px;
            background: ${Colors.purple600};
            width: 70%;
            height: 60px;
            box-shadow: inset 0 0 4px black;
        }
    `;

    return(
        <Controls>
            <img className="control-logo" src={Logo}></img>
            <section className="control-box"></section>
        </Controls>
    )
}

export default Controls;