import React, {FC} from 'react';
import style from "../sideBar.module.css"
import {SbItemInterface} from "./SbItemInterface";
import {Link} from "react-router-dom";


const SideBarItem: FC<SbItemInterface> = (props) => {
    return (
        <li className={style.sideBarItem}>
            <Link to={`/messages/${props.name}`}>
                <div className={style.sideBarItemTop}>
                    <div>{props.name}</div>
                    <div>{props.time}</div>
                </div>
                <div className={style.sideBarItemBottom}>
                    {props.message}
                </div>
            </Link>
        </li>
    );
};

export default SideBarItem;
