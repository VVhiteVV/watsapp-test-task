import {createBrowserRouter} from "react-router-dom";
import Messages from "./page/Messages/Messages";
import Main from "./page/Main/Main";
import Login from "./page/Login/Login";



export const router = createBrowserRouter([
    {
        path:'/',
        element: <Login/>
    },
    {
        path:'/home',
        element: <Main/>
    }
    ,
    {
      path: '/messages/:id',
      element: <Messages/>
    }
])
