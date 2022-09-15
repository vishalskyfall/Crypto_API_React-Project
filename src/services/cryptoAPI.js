import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoApiHeaders = {
//     'X-RapidAPI-Key': '7d53e057b0mshef3834c5e33d4bfp18c0e6jsnbcab3ecd119a',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// }

const cryptoApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  };

  
const baseUrl = process.env.REACT_APP_CRYPTO_API_URL;

const createRequest = (url)=>({url, headers:cryptoApiHeaders})  // please check out it's headers not the Headers


export const cryptoAPI = createApi({
    reducerPath: 'cryptoAPI',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos:builder.query({
            query : (count)=>createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails:builder.query({
            query : (coinId)=>createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory:builder.query({
            query : ({coinId, timePeriod})=>createRequest(`/coin/${coinId}/history?timeperiod=${timePeriod}`)
        })
    })
})


export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoAPI;  // name of exported const  "https://redux-toolkit.js.org/rtk-query/api/createApi"

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       limit: '50',
//       offset: '0',
//       orderBy: '24hVolume',
//       orderDirection: 'desc'
//     },
//     headers: {
//       'X-RapidAPI-Key': '7d53e057b0mshef3834c5e33d4bfp18c0e6jsnbcab3ecd119a',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };