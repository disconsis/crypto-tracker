import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'ac5ad93034msh033882daf367ae2p142d25jsned43ed86e1a8'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = ( url ) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`), 
        })
    })
});

export const { 
    useGetCryptosQuery,
} = cryptoApi