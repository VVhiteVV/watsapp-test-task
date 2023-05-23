import React from 'react';
import {InputProps} from "./InputProps";

export const Input = (props: any) => {
    return (
        <input type="text" value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
    );
};

export default Input;