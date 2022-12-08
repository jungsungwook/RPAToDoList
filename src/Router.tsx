/* eslint-disable */
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function Router (props : any) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Home 
                        currentMenu={props.currentMenu}
                        menuList={props.menuList}
                        changeState={props.changeState}
                    />
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;