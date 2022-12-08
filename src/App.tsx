/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import SideBarComponent from './components/SideBarComponent';
import Router from './Router';

function App(){
    const MenuContainer = styled.div`
        display: flex;
        flex-direction: row;
        height: 100vh;
        width: 100%;
        `;
    const menuList = [
        {
            id: "0",
            text: "　Red",
        },
        {
            id: "1",
            text: "　Green　　",
        },
        {
            id: "2",
            text: "　Blue",
        },
        {
            id: "3",
            text: "　Black",
        },
        {
            id: "4",
            text: "　White",
        }
    ];

    const [currentMenu, setCurrentMenu] = useState(menuList[0].id);
    const changeState = (id: string) => {
    setCurrentMenu(id);
    };
    
    return(
        <MenuContainer className="menu">
            <SideBarComponent 
                currentMenu={currentMenu}
                menuList={menuList}
                changeState={changeState}
                />
            <Router
                currentMenu={currentMenu}
                menuList={menuList}
                changeState={changeState}
            />
        </MenuContainer>
    );

}

export default App;