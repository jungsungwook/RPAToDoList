/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonComponent from '../components/ButtonComponent';
import FastMemoListComponent from '../components/FastMemoListComponent';
import ReportCreator from '../reporterTemplates/ReportCreator';

const RightContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    background-color: white;
    height: min-height;
    min-width: 100px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: white;
    min-width: 250px;
    position: fixed;
    right: 0;
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
        let local_fastMemo : Array<Object> = JSON.parse(localStorage.getItem('fastMemo')||'[]');
        let isDone_fastMemo : Array<Object> = local_fastMemo.filter((item : any) => item.isDone === true);
        if(isDone_fastMemo.length === 0) {
            alert('완료된 메모가 없습니다.');
            return;
        }
        const result : any = ReportCreator({
            title: '주간보고서',
        });
    };

    const downloadWeeklyReport = () => {

    };

    let fileInput = React.useRef<any>("");

    const uploadTemplate = (e:any) => {
        if(e.target.files[0].type !== 'application/json') {
            alert('JSON 파일만 업로드 가능합니다.');
            return;
        }
        let reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        reader.onload = function() {
            let result = JSON.parse(reader.result as string);
            localStorage.setItem(e.target.files[0].name, JSON.stringify(result));
        }
        alert(
            "파일이 업로드 되었습니다."+
            "\n파일명 : " + e.target.files[0].name +
            "\n파일크기 : " + e.target.files[0].size +
            "\n파일타입 : " + e.target.files[0].type
        );
        let templateKeys : Array<string>= JSON.parse(localStorage.getItem('templateKeys')||'[]');

        if(!templateKeys.includes(e.target.files[0].name)) {
            templateKeys.push(e.target.files[0].name);
        }

        localStorage.setItem('templateKeys', JSON.stringify(templateKeys));
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
                <ButtonContainer className='weekly__button-container'>
                    <ButtonComponent
                        btnText='주간보고서 간편생성'
                        onClick={createWeeklyReport}
                    />
                    <ButtonComponent
                        btnText='주간보고서 다운로드'
                        onClick={downloadWeeklyReport}
                    />
                    <input type="file" ref={fileInput} style={{display: 'none'}} onChange={uploadTemplate}/>
                        <ButtonComponent
                            btnText='보고서 템플릿 업로드'
                            btnHoverText='JSON 파일만 허용'
                            onClick={() => {
                                fileInput.current.click();
                            }}
                        />
                </ButtonContainer>
            </RightContainer>
        </>
        
    );
}

export default Weekly;