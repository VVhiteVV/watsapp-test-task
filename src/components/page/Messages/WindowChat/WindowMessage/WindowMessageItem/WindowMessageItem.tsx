import React from 'react';
import style from "../../WindowChat.module.css";
import {WindowItemProps} from "./WindowItem.props";
const WindowMessageItem = (props: WindowItemProps) => {
    return (
        <div>
            {props.message}
            {props.time}
        </div>
    );
};

export default WindowMessageItem;