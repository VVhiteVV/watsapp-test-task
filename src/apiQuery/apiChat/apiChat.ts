import { createApi } from '@reduxjs/toolkit/query/react'
import {axiosBaseQuery} from "./axiosBaseQuery";


export const chatApi = createApi({
    reducerPath: 'chatApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://api.green-api.com/waInstance1101823545/',
    }),
    endpoints: (builder) => ({
        sendMessage: builder.query({
            query: () => ({
                url: 'receiveNotiication/4f517c58557b498a9b17bfeecc698bd034eada0f37364b848d',
                method:'GET',
            }),
        }),
    }),
})


export const { useSendMessageQuery } = chatApi
