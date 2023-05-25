import React from 'react';
import style from "./input.module.css"
import {InputProps} from "./InputProps";

export const Input = (props: any) => {
    return (
        <input className={style.input} type="text" value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
    );
};

export default Input;