/* eslint-disable */
import { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";

const List = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ListComponent = (props: any) => {

    useEffect(() => {
        console.log("reload")
    }, [props.list]);

    return (
        <>
            <List>
                {props.list.map((item: any, index: number) => {
                    return (
                        <div key={index}>
                            <div>{item.subject}</div>
                            <div>{item.context}</div>
                            <div>{item.date}</div>
                            <ButtonComponent
                                text="삭제"
                                idx={index}
                                onClick={() => {
                                    let prevData: Array<Object> = JSON.parse(
                                        localStorage.getItem("fastMemo") || "[]"
                                    );
                                    prevData.splice(index, 1);
                                    localStorage.setItem(
                                        "fastMemo",
                                        JSON.stringify(prevData)
                                    );
                                }}
                            />
                        </div>
                    );
                })}
            </List>
        </>
    );
};

export default ListComponent;