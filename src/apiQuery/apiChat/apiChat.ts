import { createApi } from '@reduxjs/toolkit/query/react'
import {axiosBaseQuery} from "./axiosBaseQuery";


export const chatApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://example.com',
    }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: () => ({
                url: '',
                method:'POST'
            }),
        }),
    }),
})


export const { useGetPokemonByNameQuery } = chatApi