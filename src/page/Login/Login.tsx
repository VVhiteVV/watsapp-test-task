import React, {useState, FC} from 'react';
import style from "./login.module.css";
import {LoginInterface} from "./LoginInterface";
import Input from "../../components/ui/input/input";
import {useGetStatusInstanceMutation} from "../../store/apiChat/apiChat";
import {Navigate} from "react-router-dom";
import Button from "../../components/ui/button/Button";
import {DataResponse, ErrorResponse} from "../../store/apiChat/apiChatDto/responseDto";

const Login: FC = () => {
    const LoginForm: LoginInterface = {
        idInstance: '',
        apiKey: ''
    }
    const [loginData,setData] = useState<LoginInterface>(LoginForm);
    const [isOnline,setIsOnline] = useState<boolean | undefined>(undefined);

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
        } else{
            setIsOnline(false);
            localStorage.setItem('online','false')
        }
    }


    return (
        <div className={style.Login}>
            <div className={style.Login__form}>
                <Input value={loginData.idInstance} onChange={setId} placeholder={'Введите id Instance'}/>
                <Input value={loginData.apiKey} onChange={setApiKey} placeholder={'Введите api key'}/>
                {(res.isError || isOnline === false) && 'Данные не верны или инстанс в офлайне'}
                <Button onClick={handleForm}>Войти</Button>
                {isOnline && <Navigate to={'/home'}/>}
            </div>
        </div>
    );
};

export default Login;

