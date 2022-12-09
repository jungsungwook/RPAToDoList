/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Monitoring(props: any) {

    useEffect(() => {
        console.log(props.currentMenu);
    }, [props.currentMenu]);

    return (
        <>
            <div>
                <h1>Monitoring</h1>
            </div>
        </>
        
    );
}

export default Monitoring;