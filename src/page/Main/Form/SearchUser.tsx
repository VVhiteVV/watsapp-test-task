import React, {FC, useState} from 'react';
import {useCreateChatMutation} from "../../../store/apiChat/apiChat";
import {createChat} from "../../../store/storeChat/chatListSlice";
import {useAppDispatch} from "../../../store/hooks/storeHook";
import style from "./Form.module.css"
import Button from "../../../components/ui/button/Button";
import Input from "../../../components/ui/input/input";

export const SearchUser: FC = () => {
    const [user,setUser] = useState<string>('');
    const [sendMessage,res] = useCreateChatMutation();
    const dispatch = useAppDispatch();

    const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }

    const sendForm = async () => {
        try{
            await sendMessage(user);
            dispatch(createChat(Number(user)))

        }catch (err) {
            console.log(err);
        }
    }
    return (
        <div className={style.Search}>
            <div className={style.Search__inner}>
                <Input type="text" value={user} onChange={handleUser} placeholder={'Введите номер'}/>
                <Button onClick={sendForm} >Поиск</Button>
            </div>
            <div className={style.Search__error}>
                {res.isError && 'Возможно такого пользователя нет'}
            </div>
        </div>
    );
};

export default SearchUser;
