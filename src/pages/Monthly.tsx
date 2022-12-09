/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Monthly(props: any) {

    useEffect(() => {
        console.log(props.currentMenu);
    }, [props.currentMenu]);

    return (
        <>
            <div>
                <h1>Monthly</h1>
            </div>
        </>
        
    );
}

export default Monthly;