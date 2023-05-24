import React, {FC, useState} from 'react';
import style from './sideBar.module.css';
import SideBarItem from "./sideBarItem/SideBarItem";

export const SideBarList: FC = () => {
    const storage = localStorage.getItem('users');
    const arr = storage !== null ? JSON.parse(storage) : '';
    const [users,setUsers] = useState<string[]>(arr)

    return (
        <ul className={style.sidebar}>
            {arr && users.map(user =>
                <SideBarItem key={user}  name={user} time={'19:21'}/>
            )}
        </ul>
    );
};

export default SideBarList;
