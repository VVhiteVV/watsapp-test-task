import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from './store/store';
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);




// @ts-ignore
root.render(
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
);


