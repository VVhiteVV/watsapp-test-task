import React, {useEffect} from 'react';
import style from "../WindowChat.module.css";
import {useNavigate, useParams} from "react-router-dom";
import { useAppSelector} from "../../../../../store/hooks/storeHook";
import {WindowMessageItem} from "./WindowMessageItem/WindowMessageItem";

export const WindowMessage = () => {
    const params = useParams();
    const navigate = useNavigate()
    const chatList = useAppSelector(state => state.chatList);

    useEffect(() => {
        if(!chatList.idChat.includes(Number(params.id))){
            navigate('/home')
        }
    },[])

    return (
        <div className={style.windowMessage}>
            {chatList.chatData && chatList.chatData.map((item) => {
                if(item.idSender === Number(params.id)){
                    return item.chatHistory.map((item) =>
                        <div style={{
                            textAlign: item.sender === 'Вы' ? 'left' : 'right'
                        }} >
                            <WindowMessageItem sender={item.sender} >
                                {item.message}
                            </WindowMessageItem>
                        </div>
                    )
                }
            })}


        </div>
    );
};

export default WindowMessage;
