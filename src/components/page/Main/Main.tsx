import React from 'react';
import Layout from "../../layout/layout";
import SearchUser from "./Form/SearchUser";
import {Navigate} from "react-router-dom";




export const Main = () => {
    if(localStorage.getItem('online') !== 'true'){
        return (<Navigate to={'/'} />)
    }

    return (
    <Layout>
            <SearchUser/>
    </Layout>
    );
};

export default Main;
