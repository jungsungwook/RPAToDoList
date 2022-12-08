/* eslint-disable */
import { useState, useEffect } from "react";
import styled from "styled-components";
import MenuButtonComponent from "./MenuButtonComponent";

const SideBarComponent = (props: any) => {

    const MenuContainer = styled.div`
        display: flex;
        flex-direction: column;
        background-color: #000;
    `;


    const onClickMenu = (id: string) => {
        props.changeState(id);
    };

    useEffect(() => {
        //set color of current menu
        const menuButtons = document.getElementsByClassName("menu__button");
        Array.from(menuButtons).forEach((menuButton: any) => {
            if (menuButton.id === props.currentMenu) {
                menuButton.classList.add("menu__button--active");
            }else{
                menuButton.classList.remove("menu__button--active");
            }
        });
    }, [props.currentMenu]);
    
    return ( 
        <>
            <MenuContainer className="menu__container">
                {props.menuList.map((menu:any) => (
                    <MenuButtonComponent
                        id = {menu.id}
                        text = {menu.text}
                        onClick = {() => onClickMenu(menu.id)}
                    />
                ))}
            </MenuContainer>
        </>
    );
};

export default SideBarComponent;