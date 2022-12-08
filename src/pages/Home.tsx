import React, { Fragment } from 'react';
import styled from 'styled-components';
import MenuButtonComponent from '../components/MenuButtonComponent';
import SideBarComponent from '../components/SideBarComponent';
function Home() {
    const MenuContainer = styled.div`
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 1000px;
        `;
    return (
        <Fragment>
            <MenuContainer className="menu">
                <SideBarComponent />
            </MenuContainer>
        </Fragment>
        
    );
}

export default Home;