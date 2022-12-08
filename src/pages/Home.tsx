/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
function Home(props: any) {

    useEffect(() => {
        console.log("currentMenuHome: " + props.currentMenu);
    }, [props.currentMenu]);

    const TempContainer = styled.div`
        display: flex;
        flex: 1;
        flex-direction: column;
        background-color: ${
            //if currentMenu is 0, set background color to red
            props.currentMenu === "0" ? "#f00" :
            //if currentMenu is 1, set background color to green
            props.currentMenu === "1" ? "#0f0" :
            //if currentMenu is 2, set background color to blue
            props.currentMenu === "2" ? "#00f" :
            //if currentMenu is 3, set background color to black
            props.currentMenu === "3" ? "#000" :
            //if currentMenu is 4, set background color to white
            props.currentMenu === "4" ? "#fff" :
            //if currentMenu is not 0, 1, 2, 3, 4, set background color to white
            "#fff"
        };
        height: min-height;
        min-width: 100px;
        `;

    return (
        <>
            <TempContainer>
            </TempContainer>
        </>
        
    );
}

export default Home;