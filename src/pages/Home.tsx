import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
function Home(props: any) {

    useEffect(() => {
        console.log("currentMenuHome: " + props.currentMenu);
    }, [props.currentMenu]);

    const MenuContainer = styled.div`
        display: flex;
        flex-direction: row;
        height: 100vh;
        width: 100%;
        `;
    const TempContainer = styled.div`
        display: flex;
        flex: 1;
        flex-direction: column;
        background-color: blue;
        height: min-height;
        min-width: 100px;
        `;

    return (
        <Fragment>
                <TempContainer>
                </TempContainer>
        </Fragment>
        
    );
}

export default Home;