import React from 'react';
import SideBarList from "../sideBar/SideBarList";
import style from "../../global.module.css"
interface LayoutProps{
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className={style.App}>
            <SideBarList/>
            {children}
        </div>
    );
};

export default Layout;
