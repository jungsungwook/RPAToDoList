/* eslint-disable */
import { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";

const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 40%;
    height: 100%;
    justify-content: space-between;
`;

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ListComponent = (props: any) => {

    useEffect(() => {

    }, [props.list]);

    const propSetList = (data: string) => {
        props.setList(data);
    }

    return (
        <>
            <ListContainer className="memo__list">
                {props.list.map((item: any, index: number) => {
                    return (
                        <ListContainer key={index} className="memo">
                            <div>{"제목 : "+item.subject}</div>
                            <div>{"내용 : "+item.context}</div>
                            <div>{"생성일 : "+item.date}</div>
                            {
                                (item.doneDate) && <div>{"완료일 : "+item.doneDate}</div>
                            }
                            <RightContainer className="btn__list">
                                <ButtonComponent
                                    btnText="삭제"
                                    idx={index}
                                    onClick={() => {
                                        let prevData : Array<Object> = props.list;
                                        prevData.splice(index, 1);
                                        propSetList(JSON.stringify(prevData));
                                    }}
                                />
                                <ButtonComponent
                                    btnText="수정"
                                    idx={index}
                                    btnBgColor="blue"
                                    btnHoverColor="blue"
                                    onClick={() => {
                                        let prevData : any = props.list;
                                        const inputSubject= prompt('제목을 입력해주세요.', prevData[index].subject);
                                        const inputContext = prompt('내용을 입력해주세요.', prevData[index].context);
                                        prevData[index].subject = inputSubject || prevData[index].subject;
                                        prevData[index].context = inputContext || prevData[index].context;
                                        propSetList(JSON.stringify(prevData));
                                    }}
                                />
                                <ButtonComponent
                                    btnText= {item.isDone ? "완료" : "미완료"}
                                    idx={index}
                                    btnBgColor={item.isDone ? "green" : "red"}
                                    btnHoverColor={item.isDone ? "red" : "green"}
                                    btnHoverText={item.isDone ? "미완료" : "완료"}
                                    onClick={() => {
                                        let prevData : any = props.list;
                                        prevData[index].isDone = !prevData[index].isDone;
                                        if(prevData[index].isDone === true){
                                            prevData[index].doneDate = new Date().toLocaleString();
                                        }else{
                                            prevData[index].doneDate = '';
                                        }
                                        propSetList(JSON.stringify(prevData));
                                    }}
                                />
                            </RightContainer>
                        </ListContainer>
                    );
                })}
            </ListContainer>
        </>
    );
};

export default ListComponent;