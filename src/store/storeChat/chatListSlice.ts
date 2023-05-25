import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type idSender = number;
interface ChatMessage {
    sender?: string,
    message: string
}

interface ChatListItem {
    idSender: idSender,
    chatHistory: ChatMessage[]
}
interface ChatState {
    idChat: number[],
    chatData: ChatListItem[]
}

const initialState: ChatState = {
    idChat: [],
    chatData: []
}

export const chatSlice = createSlice({
    name: 'chatList',
    initialState,
    reducers: {
        recordSendMessage:(state, action: PayloadAction<ChatListItem>) => {
            const chatListItem = action.payload;
            if(state.idChat.includes(chatListItem.idSender)){
                for(let i = 0; i <= state.chatData.length - 1; i++){
                    if(state.idChat[i] === chatListItem.idSender){
                        state.chatData[i].chatHistory.push(...chatListItem.chatHistory)
                    }
                }
                return
            }
            state.chatData.push({...chatListItem});
            state.idChat.push(chatListItem.idSender);
        },
        createChat: (state,action: PayloadAction<number>) => {
            if(!state.idChat.includes(action.payload)){
                state.idChat.push(action.payload)
                state.chatData.push({
                    idSender: action.payload,
                    chatHistory:[]
                })
            }
        }
    },
})


export const { recordSendMessage,createChat } = chatSlice.actions

export default chatSlice.reducer
