import React from 'react';
import WindowTextArea from "./WindowTextArea";
import style from "../WindowChat.module.css";
export const WindowField = () => {
    return (
        <div className={style.windowField} >
            <WindowTextArea/>
            <button>Отправить</button>
        </div>
    );
};

export default WindowField;