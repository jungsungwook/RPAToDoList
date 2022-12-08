import { useState, useEffect } from "react";
import styled from "styled-components";
const MenuButtonComponent = (props: any) => {
    const DefaultButton = styled.button`
        background-color: #000;
        border: none;
        border-radius: 0.5rem;
        color: #fff;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0rem 0;
        padding: 0.5rem 0rem;
        text-align: left;
        width: 20%;
        &:hover {
            background-color: #fff;
            color: #000;
        }
        &.menu__button--active {
            background-color: #fff;
            color: #000;
        }
    `;
    return (
        <DefaultButton 
            className="menu__button" 
            onClick={props.onClick}
            id={props.id}
            >
            <span className="menu__button__text">{props.text}</span>
        </DefaultButton>
    );
};
export default MenuButtonComponent;