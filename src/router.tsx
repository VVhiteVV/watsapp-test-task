import {createBrowserRouter} from "react-router-dom";
import Messages from "./components/page/Messages/Messages";
import SideBar from "./components/sideBar/sideBar";
import Main from "./components/page/Main/Main";
import Login from "./components/page/Login/Login";



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
