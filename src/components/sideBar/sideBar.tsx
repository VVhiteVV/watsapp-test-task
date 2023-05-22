import React from 'react';
import style from "./sideBar.module.css";
import SideBarList from "./SideBarList";
const SideBar = () => {
    return (
        <div className={style.sidebar}>
            <SideBarList/>
        </div>
    );
};

export default SideBar;