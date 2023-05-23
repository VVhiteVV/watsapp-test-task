import React, {useState, useEffect, FC, JSX} from 'react';
import style from "./login.module.css";
import {DataResponse, ErrorResponse, LoginInterface} from "./LoginInterface";
import Input from "../../ui/input";
import {useGetStatusInstanceMutation} from "../../../apiQuery/apiChat/apiChat";

const Login = () => {
    const LoginForm: LoginInterface = {
        idInstance: '',
        apiKey: ''
    }
    const [loginData,setData] = useState<LoginInterface>(LoginForm);
    const [isOnline,setIsOnline] = useState<boolean>();

    const [login, res] = useGetStatusInstanceMutation();

    const setId = (event:React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({...loginData,idInstance: event.target.value}))
    }
    const setApiKey = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({...loginData,apiKey: event.target.value}))
    }

    const handleForm = async () => {
        localStorage.setItem('idInstance',loginData.idInstance);
        localStorage.setItem('apiKey',loginData.apiKey);
        const response: DataResponse | ErrorResponse = await login('');

        if('data' in response && response.data.statusInstance === "online"){
            setIsOnline(true)
            localStorage.setItem('online','true')
        }
        else{
            setIsOnline(false);
            localStorage.setItem('online','false')
        }
    }


    return (
        <div className={style.Form__login}>
            <Input value={loginData.idInstance} onChange={setId} placeholder={'Введите id Instance'}/>
            <Input value={loginData.apiKey} onChange={setApiKey} placeholder={'Введите api key'}/>
            {(res.isError || !isOnline) && 'Данные не верны или инстанс в офлайне'}
            <button onClick={() => handleForm()} >Войти</button>
        </div>
    );
};

export default Login;

