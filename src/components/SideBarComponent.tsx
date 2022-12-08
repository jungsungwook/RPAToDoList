import { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import MenuButtonComponent from "./MenuButtonComponent";

const SideBarComponent = () => {
    const MenuList = [
        {
            id: "0",
            text: "Home",
        },
        {
            id: "1",
            text: "About",
        },
        {
            id: "2",
            text: "Contact",
        },
        {
            id: "3",
            text: "Settings",
        },
        {
            id: "4",
            text: "몰루",
        }
    ];

    const MenuContainer = styled.div`
        display: flex;
        flex-direction: column;
        background-color: #000;
        border-radius: 0.6rem;
    `;

    const [currentMenu, setCurrentMenu] = useState(MenuList[0].id);

    const onClickMenu = (id: string) => {
        setCurrentMenu(id);
    };

    useEffect(() => {
        //set color of current menu
        const menuButtons = document.getElementsByClassName("menu__button");
        Array.from(menuButtons).forEach((menuButton: any) => {
            if (menuButton.id === currentMenu) {
                menuButton.classList.add("menu__button--active");
            }else{
                menuButton.classList.remove("menu__button--active");
            }
        });
    }, [currentMenu]);
    
    return ( 
        <Fragment>
            <MenuContainer className="menu__container">
                {MenuList.map((menu) => (
                    <MenuButtonComponent
                        id = {menu.id}
                        text = {menu.text}
                        onClick = {() => onClickMenu(menu.id)}
                    />
                ))}
            </MenuContainer>
        </Fragment>
    );
};

export default SideBarComponent;