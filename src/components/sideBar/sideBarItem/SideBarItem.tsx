import React from 'react';
import style from "../sideBar.module.css"
import {SbItemInterface} from "./SbItemInterface";

const SideBarItem = (props: SbItemInterface) => {
    return (
        <li className={style.sideBarItem}>
            <div className={style.sideBarItemTop}>
                <div>{props.name}</div>
                <div>{props.time}</div>
            </div>
            <div className={style.sideBarItemBottom}>
                {props.message}
            </div>

        </li>
    );
};

export default SideBarItem;