/* eslint-disable */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuButtonComponent from "./MenuButtonComponent";
const MenuContainer = styled.div`
        display: flex;
        flex-direction: column;
        background-color: #000;
    `;
const SideBarComponent = (props: any) => {

    const onClickMenu = (id: string) => {
        props.changeState(id);
        history.pushState(null, "", props.menuList[id].path);
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
                {props.menuList.map((menu: any) => (
                    <Link to={menu.path} key={menu.id}>
                        <MenuButtonComponent
                            key={menu.id}
                            id={menu.id}
                            text={menu.text}
                            onClick={() => onClickMenu(menu.id)}
                            path={menu.path}
                        />
                    </Link>
                ))}
            </MenuContainer>
        </>
    );
};

export default SideBarComponent;