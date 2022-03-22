import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://localhost:5000';

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
          query: (count) => `/coins?limit=${count}`,
        }),
        getExchanges: builder.query({
          query: () => '/exchanges',
        }),
        getCryptoDetails: builder.query({
          query: (coinId) => `/coin/${coinId}`,
        }),
        getCryptoHistory: builder.query({
          query: ({ coinId, timeperiod }) => `coin/${coinId}/history/${timeperiod}`,
        }),
      }),
    });
    
    export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery, useGetCryptoHistoryQuery } = cryptoApi;
