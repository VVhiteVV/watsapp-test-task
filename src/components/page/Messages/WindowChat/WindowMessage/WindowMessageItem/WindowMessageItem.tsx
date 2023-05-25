import React, {FC} from 'react';
import style from "../../WindowChat.module.css";
import {WindowItemProps} from "./WindowItem.props";
import classNames from "classnames";

export const WindowMessageItem: FC<WindowItemProps> = (props) => {
    console.log(style.WindowMessageItem)
    let cx = classNames.bind(style)
    return (
        <div className={cx(style.WindowMessageItem,props.sender === 'Вы' ? style.WindowItemUser : style.WindowItemSender)}>
            {props.sender}:
            {props.children}
        </div>
    );
};

