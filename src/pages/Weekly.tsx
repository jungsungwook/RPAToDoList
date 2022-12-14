/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FastMemoListComponent from '../components/FastMemoListComponent';

const RightContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    background-color: white;
    height: min-height;
    min-width: 100px;
`;

function Weekly(props: any) {
    const [fastMemo, setFastMemo] = useState<Array<Object>>(JSON.parse(localStorage.getItem('fastMemo')||'[]'));

    useEffect(() => {
        setFastMemo(JSON.parse(localStorage.getItem('fastMemo')||'[]'))
    }, [props.currentMenu]);

    const changeFastMemo = (e: string) => {
        setFastMemo(JSON.parse(e));
    }

    const createWeeklyReport = () => {
        let weeklyReport : Array<Object> = [];
        let weeklyReportData : Object = {};
        let weeklyReportDataList : Array<Object> = [];
        let weeklyReportDataListData : Object = {};
        let weeklyReportDataListDataList : Array<Object> = [];
        let weeklyReportDataListDataListData : Object = {};
        let weeklyReportDataListDataListDataList : Array<Object> = [];
    };

    useEffect(() => {
        localStorage.setItem('fastMemo', JSON.stringify(fastMemo));
    }, [fastMemo]);

    return (
        <>
            <RightContainer className='weekly__container'>
                <FastMemoListComponent
                    list={fastMemo}
                    setList={changeFastMemo}
                />
            </RightContainer>
        </>
        
    );
}

export default Weekly;