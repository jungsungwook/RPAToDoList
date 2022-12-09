/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TempContainer = styled.div`
        display: flex;
        flex: 1;
        flex-direction: column;
        background-color: white;
        height: min-height;
        min-width: 100px;
        `;

function TemplateContainer(props: any) {

    useEffect(() => {
        console.log(props.currentMenu);
    }, [props.currentMenu]);

    return (
        <>
            <TempContainer >
                <div>
                    <h1>Template Container</h1>
                </div>
            </TempContainer>
        </>
        
    );
}

export default TemplateContainer;