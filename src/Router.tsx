/* eslint-disable */
import { useEffect, useState } from "react";
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import Backup from "./pages/Backup";
import Home from "./pages/Home";
import Monitoring from "./pages/Monitoring";
import Monthly from "./pages/Monthly";
import Weekly from "./pages/Weekly";

function Router (props : any) {
    const [currentMenu, setCurrentMenu] = useState(props.currentMenu);

    useEffect(() => {
        console.log(props.currentMenu);
    }, [currentMenu]);
    
    return (
        <Routes>
            <Route path="/" element={
                <Home 
                    currentMenu={props.currentMenu}
                    menuList={props.menuList}
                    changeState={props.changeState}
                />
            } />
            <Route path="/home" element={
                <Home 
                    currentMenu={props.currentMenu}
                    menuList={props.menuList}
                    changeState={props.changeState}
                />
            } />
            <Route path="/weekly" element={
                <Weekly 
                    currentMenu={props.currentMenu}
                    menuList={props.menuList}
                    changeState={props.changeState}
                />
            } />
            <Route path="/monthly" element={
                <Monthly 
                    currentMenu={props.currentMenu}
                    menuList={props.menuList}
                    changeState={props.changeState}
                />
            } />
            <Route path="/monitoring" element={
                <Monitoring 
                    currentMenu={props.currentMenu}
                    menuList={props.menuList}
                    changeState={props.changeState}
                />
            } />
            <Route path="/backup" element={
                <Backup
                    currentMenu={props.currentMenu}
                    menuList={props.menuList}
                    changeState={props.changeState}
                />
            } />
        </Routes>
    );
}

export default Router;