import { useState, useEffect, Fragment } from "react";
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
        }
    ];
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
            <div className="menu">
                {MenuList.map((menu) => (
                    <MenuButtonComponent
                        id = {menu.id}
                        text = {menu.text}
                        onClick = {() => onClickMenu(menu.id)}
                    />
                ))}
            </div>
        </Fragment>
    );
};

export default SideBarComponent;