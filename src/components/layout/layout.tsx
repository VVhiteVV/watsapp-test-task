import React, {useEffect} from 'react';
import style from "../../global.module.css"
import {useAppDispatch} from "../../store/hooks/storeHook";
import {useDeleteQueueMutation, useGetMessageQuery} from "../../store/apiChat/apiChat";
import {recordSendMessage} from "../../store/storeChat/chatListSlice";
import SideBar from "../sideBar/sideBar";
interface LayoutProps{
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    const dispatch = useAppDispatch();
    const {data = null} = useGetMessageQuery('',{
        pollingInterval: 10
    });
    const [deleteQueue] = useDeleteQueueMutation();

    useEffect(() => {
        if(data !== null){
            if(data.body.senderData && data.body.messageData){
                const textMessage = data.body.messageData.textMessageData.textMessage;
                const extendedMessage = data.body.messageData.extendedTextMessageData?.text;
                console.log(data)
                const message = !textMessage ? extendedMessage : textMessage

                dispatch(recordSendMessage({
                    idSender: Number(data.body.senderData.chatId.replace('@c.us','')),
                    chatHistory: [{
                        sender: data.body.senderData.senderName,
                        message: message
                    }]
                }))
            }
            deleteQueue(data.receiptId)
        }

    },[data])
    return (
        <div className={style.App}>
            <SideBar/>
            {children}
        </div>
    );
};

export default Layout;
