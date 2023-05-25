import React from 'react';
import Layout from "../../layout/layout";
import SearchUser from "./Form/SearchUser";
import {useNavigate} from "react-router-dom";




export const Main = () => {
    const navigate = useNavigate();
    if(localStorage.getItem('online') !== 'true'){
        navigate("/")
    }

    return (
    <Layout>

    </Layout>
    );
};

export default Main;
