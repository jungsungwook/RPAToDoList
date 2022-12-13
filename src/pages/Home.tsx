/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TemplateContainer from '../components/TemplateContainer';
import InputTextFieldComponent from '../components/InputTextFieldComponent';
import ButtonComponent from '../components/ButtonComponent';

const VerticalContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: left;
    width: 100%;
    height: 100%;
`;
const HorizontalContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: left;
    width: 100%;
    height: 100%;
`;

function Home(props: any) {
    const [inputs, setInputs] = useState({
        subject: '',
        context: '',
    });

    const { subject, context } = inputs;

    const onChange = (e: any) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const FastSave = () => {
        if(subject === '' || context === '') {
            alert('제목과 내용을 입력해주세요.');
            return;
        }
        let prevData : Array<Object> = JSON.parse(localStorage.getItem('fastMemo')|| '[]') ;

        const data : Object = {
            subject: subject,
            context: context,
            date: new Date().toLocaleString(),
        };
        
        prevData.push(data);
        localStorage.setItem('fastMemo', JSON.stringify(prevData));

        setInputs({
            subject: '',
            context: '',
        });

        alert('저장되었습니다.');
    };

    useEffect(() => {
        console.log(props.currentMenu);
    }, [props.currentMenu]);

    return (
        <>
            <VerticalContainer className='input__container'>
                <div>
                    <h3>빠른 메모</h3>
                </div>
                <InputTextFieldComponent
                    placeholder='Subject..'
                    name='subject'
                    onChange={onChange}
                    value={subject}
                />
                <InputTextFieldComponent
                    placeholder='Context..'
                    name='context'
                    onChange={onChange}
                    value={context}
                />
                <HorizontalContainer className='button__container'>
                    <ButtonComponent
                        text='저장'
                        onClick={FastSave}
                    />
                    <ButtonComponent
                        text='취소'
                        // onClick={() => console.log('취소')}
                    />
                </HorizontalContainer>
            </VerticalContainer>
        </>
    );
}

export default Home;