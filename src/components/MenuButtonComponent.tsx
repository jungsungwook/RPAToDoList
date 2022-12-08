import { useState, useEffect } from "react";
import styled from "styled-components";
const MenuButtonComponent = (props: any) => {
    const StyledButton = styled.button`
        background-color: #fff;
        border: none;
        border-radius: 0.5rem;
        color: #000;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0.5rem 0;
        padding: 0.5rem 1rem;
        text-align: left;
        width: 100%;
        &:hover {
            background-color: #000;
            color: #fff;
        }
        &.menu__button--active {
            background-color: #000;
            color: #fff;
        }
    `;
    return (
        <StyledButton 
            className="menu__button" 
            onClick={props.onClick}
            id={props.id}
            >
            <span className="menu__button__text">{props.text}</span>
        </StyledButton>
    );
};
export default MenuButtonComponent;