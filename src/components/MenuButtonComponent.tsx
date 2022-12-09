/* eslint-disable */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const DefaultButton = styled.button`
        background-color: #000;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0rem 0;
        padding: 0.5rem 0rem;
        text-align: left;
        width: 100%;
        &:hover {
            background-color: #fff;
            color: #000;
        }
        &.menu__button--active {
            background-color: #fff;
            color: #000;
        }
    `;
const MenuButtonComponent = (props: any) => {
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