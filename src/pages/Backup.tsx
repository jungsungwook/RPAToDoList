/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Backup(props: any) {

    useEffect(() => {
        console.log(props.currentMenu);
    }, [props.currentMenu]);

    return (
        <>
            <div>
                <h1>Backup</h1>
            </div>
        </>
        
    );
}

export default Backup;