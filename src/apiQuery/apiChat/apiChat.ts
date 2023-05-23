import { createApi } from '@reduxjs/toolkit/query/react'
import {axiosBaseQuery} from "./axiosBaseQuery";


export const chatApi = createApi({
    reducerPath: 'chatApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://api.green-api.com/',
    }),
    endpoints: (builder) => ({
        getMessage: builder.query({
            query: () => ({
                url: 'receiveNotification/4f517c58557b498a9b17bfeecc698bd034eada0f37364b848d',
                method:'GET',
            }),
        }),
        sendMessageP: builder.mutation({
            query: (data) => ({
                url: 'SendMessages/4f517c58557b498a9b17bfeecc698bd034eada0f37364b848d',
                method: "POST",
                data
            })
        }),
        getStatusInstance: builder.mutation({
            query: (arg) => ({
                url: `waInstance${localStorage.getItem('idInstance')}/getStatusInstance/${localStorage.getItem('apiKey')}`,
                method: 'GET'
            })
        })

    }),
})

//1101823545
//4f517c58557b498a9b17bfeecc698bd034eada0f37364b848d
export const { useGetMessageQuery, useGetStatusInstanceMutation } = chatApi
