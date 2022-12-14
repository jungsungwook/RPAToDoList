/* eslint-disable */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";
const MenuContainer = styled.div`
        position: fixed;
        display: flex;
        flex: 1;
        height: 100%;
        flex-direction: column;
        background-color: #000;
    `;
const SideBarComponent = (props: any) => {

    const OnClickMenu = (id: string) => {
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
                        <ButtonComponent
                            key={menu.id}
                            id={menu.id}
                            btnText={menu.text}
                            onClick={() => OnClickMenu(menu.id)}
                            path={menu.path}
                        />
                    </Link>
                ))}
            </MenuContainer>
        </>
    );
};

export default SideBarComponent;