import React, {FC, useEffect, useState} from 'react';
import style from './sideBar.module.css';
import SideBarItem from "./sideBarItem/SideBarItem";
import {useAppSelector} from "../../store/hooks/storeHook";

export const SideBarList: FC = () => {
    const chatItem = useAppSelector(state => state.chatList.idChat);

    return (
        <ul className={style.sideBarList}>
            {chatItem && chatItem.map(user =>
                <SideBarItem key={user}  name={String(user)}/>
            )}
        </ul>
    );
};

export default SideBarList;
