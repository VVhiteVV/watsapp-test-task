import React from 'react';
import style from "./sideBar.module.css";
import SideBarList from "./SideBarList";
import SearchUser from "../page/Main/Form/SearchUser";
const SideBar = () => {
    return (
        <div className={style.sidebar}>
            <SearchUser/>
            <SideBarList/>
        </div>
    );
};

export default SideBar;