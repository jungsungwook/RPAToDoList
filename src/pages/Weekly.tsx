/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Weekly(props: any) {

    useEffect(() => {
        console.log(props.currentMenu);
    }, [props.currentMenu]);

    return (
        <>
            <div>
                <h1>Weekly</h1>
            </div>
        </>
        
    );
}

export default Weekly;