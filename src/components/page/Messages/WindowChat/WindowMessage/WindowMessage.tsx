import React, {useEffect, useState} from 'react';
import style from "../WindowChat.module.css";
import {
    useDeleteQueueMutation,
    useGetChatHistoryQuery,
    useGetMessageQuery
} from "../../../../../apiQuery/apiChat/apiChat";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

export const WindowMessage = () => {
    const params = useParams();
    const [chatList,setChatList ] = useState<string[]>([]);
    const [deleteQueue] = useDeleteQueueMutation();
    const {data: history} =  useGetChatHistoryQuery(params.id,{
        pollingInterval: 5000
    });
    // const {data: getMessage = 0} = useGetMessageQuery(params.id,{
    //     pollingInterval: 5000
    // });

    // useEffect(() => {
    //
    //     if(history.length){
    //         const copyHistory = history.map((item:any) => item.textMessage);
    //         setChatList(copyHistory)
    //     }
    //
    //
    //
    // },[history])
    // useEffect(() => {
    //         if(getMessage !== 0 && getMessage !== null) {
    //             const newMessage = getMessage?.body?.messageData.textMessageData.textMessage;
    //             setChatList([...chatList,newMessage]);
    //             console.log(getMessage)
    //             deleteQueue(getMessage?.receiptId)
    //         }
    // },[getMessage])

    return (
        <div className={style.windowMessage}>
            {history && history.map((item: any) => <div>{item}</div>)}
        </div>
    );
};

export default WindowMessage;
