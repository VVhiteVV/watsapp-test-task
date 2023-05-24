import React, {useEffect, useState} from 'react';
import style from "../WindowChat.module.css";
import {useGetChatHistoryQuery, useGetMessageQuery} from "../../../../../apiQuery/apiChat/apiChat";
import {useParams} from "react-router-dom";
export const WindowMessage = () => {
    const params = useParams();
    const {data: history} =  useGetChatHistoryQuery(params.id);
    const {data: getMessage} = useGetMessageQuery(params.id,{
        pollingInterval: 5000
    });





    return (
        <div className={style.windowMessage}>
            {history && history.map((item: any) => <div>{item.textMessage}</div>)}
        </div>
    );
};

export default WindowMessage;
