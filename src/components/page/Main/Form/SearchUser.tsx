import React, {FC, useEffect, useState} from 'react';
import {useCreateChatMutation} from "../../../../apiQuery/apiChat/apiChat";

export const SearchUser: FC = () => {
    const [user,setUser] = useState<string>('');
    const [sendMessage,res] = useCreateChatMutation();

    const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }

    const sendForm = async () => {
        try{
            if(!localStorage.getItem('users')){
                localStorage.setItem('users', JSON.stringify([user]));
            }
            const storage= localStorage.getItem('users');
            const users = storage !== null ? JSON.parse(storage) : ''
            const response = await sendMessage(user);

            if(!users.includes(user) && res.isError){
                localStorage.setItem('users', JSON.stringify([...users,user]));
            }
        }catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <input type="text" value={user} onChange={handleUser} placeholder={'Введите номер'}/>
            <button onClick={() => sendForm()} >Поиск</button>
            {res.isError && 'Возможно такого пользователя нет'}
        </div>
    );
};

export default SearchUser;
