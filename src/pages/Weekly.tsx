/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListComponent from '../components/ListComponent';

function Weekly(props: any) {
    let fastMemo : Array<Object> = JSON.parse(localStorage.getItem('fastMemo')||'[]')
    
    useEffect(() => {
        fastMemo = JSON.parse(localStorage.getItem('fastMemo')||'[]')
    }, [props.currentMenu]);

    return (
        <>
            <ListComponent list={fastMemo}/>
        </>
        
    );
}

export default Weekly;