import React, {FC} from 'react';
import style from "./button.module.css"
import {ButtonProps} from "./button.props";

const Button: FC<ButtonProps> = (props) => {
    return (
        <button className={style.button} onClick={() => props.onClick()}>
            {props.children}
        </button>
    );
};

export default Button;