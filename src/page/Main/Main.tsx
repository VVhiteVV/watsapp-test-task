import React from 'react';
import Layout from "../../components/layout/layout";
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
