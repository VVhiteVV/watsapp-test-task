import React, {useState} from 'react';
import style from "./WindowChat.module.css";
import WindowField from "./WindowField/WindowField";
import WindowMessage from "./WindowMessage/WindowMessage";


export const WindowChat = () => {



    return (
        <div className={style.windowChat}>
            <WindowMessage/>
            <WindowField/>
        </div>
    );
};

export default WindowChat;
