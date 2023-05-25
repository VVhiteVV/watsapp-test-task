import { configureStore } from '@reduxjs/toolkit'
import { chatApi } from './apiChat/apiChat'
import chatListReducer from "./storeChat/chatListSlice";

export const store = configureStore({
    reducer: {
        [chatApi.reducerPath]: chatApi.reducer,
        chatList: chatListReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(chatApi.middleware),
})



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch