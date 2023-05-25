import React, {useState} from 'react';
import style from "../WindowChat.module.css";
import {useSendMessageMutation} from "../../../../store/apiChat/apiChat";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../../../store/hooks/storeHook";
import {recordSendMessage} from "../../../../store/storeChat/chatListSlice";
import Button from "../../../../components/ui/button/Button";

export const WindowField = () => {
    const [message,setMessage] = useState<string>('');
    const [sendMessage] = useSendMessageMutation();
    const dispatch = useAppDispatch()
    const params = useParams()

    const setMessages = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }

    const sendMessages = async () => {
        try {
             await sendMessage({
                chatId: params.id,
                message
            });
            dispatch(recordSendMessage({
                idSender: Number(params.id),
                chatHistory: [{
                    sender: 'Вы',
                    message
                }]
            }))
            console.log(params.id)
            setMessage('')
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className={style.windowField} >
            <textarea className={style.windowTextArea} value={message} onChange={(e) => setMessages(e)} >

            </textarea>
            <Button onClick={sendMessages}>Отправить</Button>

        </div>
    );
};

export default WindowField;
