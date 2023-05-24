import { createApi } from '@reduxjs/toolkit/query/react'
import {axiosBaseQuery} from "./axiosBaseQuery";
import {SendMessage} from "./apiChatDto";


export const chatApi = createApi({
    reducerPath: 'chatApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://api.green-api.com/',
    }),
    endpoints: (builder) => ({
        getMessage: builder.query({
            query: () => ({
                url: `waInstance${localStorage.getItem('idInstance')}/receiveNotification/${localStorage.getItem('apiKey')}`,
                method:'GET',
            }),

        }),
        deleteQueue: builder.mutation({
            query: (id) => ({
                url: `waInstance${localStorage.getItem('idInstance')}/deleteNotification/${localStorage.getItem('apiKey')}/${id}`,
                method: "DELETE",
            }),
        }),
        sendMessage: builder.mutation({
            query: (data) => ({
                url: `waInstance${localStorage.getItem('idInstance')}/SendMessage/${localStorage.getItem('apiKey')}`,
                method: "POST",
                data: {
                    chatId: `${data.chatId}@c.us`,
                    message: data.message
                }
            })
        }),
        createChat: builder.mutation({
           query: (data) => ({
               url: `waInstance${localStorage.getItem('idInstance')}/SendMessage/${localStorage.getItem('apiKey')}`,
               method: "POST",
               data: {
                   chatId: `${data}@c.us`,
                   message: ' '
               }
           })
        }),
        getChatHistory: builder.query({
            query: (data) => ({
                url: `waInstance${localStorage.getItem('idInstance')}/getChatHistory/${localStorage.getItem('apiKey')}`,
                method: "POST",
                data: {
                    chatId: `${data}@c.us`,
                    message: ' '
                }
            })
        }),
        getStatusInstance: builder.mutation({
            query: (name) => ({
                url: `waInstance${localStorage.getItem('idInstance')}/getStatusInstance/${localStorage.getItem('apiKey')}`,
                method: 'GET',

            })
        })

    }),
})

//1101823545
//4f517c58557b498a9b17bfeecc698bd034eada0f37364b848d
export const {
    useGetMessageQuery,
    useGetStatusInstanceMutation,
    useSendMessageMutation,
    useCreateChatMutation,
    useGetChatHistoryQuery,
    useDeleteQueueMutation
} = chatApi
