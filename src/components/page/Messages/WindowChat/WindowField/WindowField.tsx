import React, {useState} from 'react';
import style from "../WindowChat.module.css";
import {useSendMessageMutation} from "../../../../../apiQuery/apiChat/apiChat";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

export const WindowField = () => {
    const [message,setMessage] = useState<string>('');
    const [sendMessage] = useSendMessageMutation();
    const params = useParams()

    const setMessages = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }

    const sendMessages = async () => {
        try {
            const response = await sendMessage({
                chatId: params.id,
                message
            });
            setMessage('')
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className={style.windowField} >
            <textarea value={message} onChange={(e) => setMessages(e)} className={style.windowTextArea}>

            </textarea>
            <button onClick={() => sendMessages()}>Отправить</button>
        </div>
    );
};

export default WindowField;
