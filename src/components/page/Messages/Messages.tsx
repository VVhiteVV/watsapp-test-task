import React from 'react';
import SideBarList from "../../sideBar/SideBarList";
import WindowChat from "./WindowChat/WindowChat";
import style from "./messages.module.css";
import Layout from "../../layout/layout";

export const Messages = () => {
    return (
        <Layout>
            <WindowChat/>
        </Layout>

    );
};

export default Messages;
