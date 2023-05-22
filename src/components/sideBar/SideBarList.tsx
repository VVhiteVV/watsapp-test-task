import React, {FC} from 'react';
import style from './sideBar.module.css';
import SideBarItem from "./sideBarItem/SideBarItem";

export const SideBarList: FC = () => {
    return (
        <ul className={style.sidebar}>
            <SideBarItem name={'Anton'} time={'19:21'} message={'Привет Антон!'}/>
            <SideBarItem name={'Anton'} time={'19:21'} message={'Привет Антон!'}/>
            <SideBarItem name={'Anton'} time={'19:21'} message={'Привет Антон!'}/>
        </ul>
    );
};

export default SideBarList;