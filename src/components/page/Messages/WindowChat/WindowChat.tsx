import React, {useState} from 'react';
import style from "./WindowChat.module.css";
import WindowField from "./WindowField/WindowField";
import WindowMessage from "./WindowMessage/WindowMessage";
import {useSendMessageQuery} from "../../../../apiQuery/apiChat/apiChat";

export const WindowChat = () => {
    const [message,setMessage] = useState([]);


    return (
        <div className={style.windowChat}>
            <WindowMessage/>
            <WindowField/>
        </div>
    );
};

export default WindowChat;