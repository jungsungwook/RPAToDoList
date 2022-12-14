/* eslint-disable */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
interface ButtonProps {
    bgColor?: string;
    color?: string;
    fontSize?: string;
    hoverBgColor?: string;
    hoverColor?: string;
    hoverText?: string;
    text?: string;
}
const DefaultButton = styled.button<ButtonProps>`
        background-color: ${props => props.bgColor|| '#000'};
        border: none;
        color: ${props => props.color|| '#fff'};
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0rem 0;
        padding: 0.5rem 0rem;
        text-align: left;
        width: 100%;
        &:hover {
            background-color: ${props => props.hoverBgColor|| '#fff'};
            color: ${props => props.hoverColor|| '#000'};
        }
        &:hover span::after {
            content: '${props => props.hoverText|| props.text}';
        }

        & span::after {
            content: '${props => props.text|| ''}';
        }
        &.menu__button--active {
            background-color: #fff;
            color: #000;
        }
    `;
const ButtonComponent = (props: any) => {
    return (
            <DefaultButton 
                className="menu__button" 
                onClick={props.onClick}
                id={props.id}
                bgColor={props.btnBgColor}
                color={props.btnColor}
                hoverBgColor={props.btnHoverBgColor}
                hoverColor={props.btnHoverColor}
                hoverText={props.btnHoverText}
                text={props.btnText}
                >
                <span className="menu__button__text"></span>
            </DefaultButton>
    );
};
export default ButtonComponent;