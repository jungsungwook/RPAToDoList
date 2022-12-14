/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListComponent from '../components/ListComponent';

function Weekly(props: any) {
    const [fastMemo, setFastMemo] = useState<Array<Object>>(JSON.parse(localStorage.getItem('fastMemo')||'[]'));

    useEffect(() => {
        setFastMemo(JSON.parse(localStorage.getItem('fastMemo')||'[]'))
    }, [props.currentMenu]);

    const changeFastMemo = (e: string) => {
        setFastMemo(JSON.parse(e));
    }

    useEffect(() => {
        localStorage.setItem('fastMemo', JSON.stringify(fastMemo));
    }, [fastMemo]);

    return (
        <>
            <ListComponent
                list={fastMemo}
                setList={changeFastMemo}
                />
        </>
        
    );
}

export default Weekly;