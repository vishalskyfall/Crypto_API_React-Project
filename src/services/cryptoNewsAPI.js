import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '7d53e057b0mshef3834c5e33d4bfp18c0e6jsnbcab3ecd119a',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url)=>({url, headers:cryptoNewsApiHeaders})  // please check out it's headers not the Headers

export const cryptoNewsAPI = createApi({
    reducerPath: 'cryptoNewsAPI',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptoNews:builder.query({
            query : (newsCategory, count)=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
            // above `` is copied as it's url
        })
    })
})

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsAPI;  // name of exported const  "https://redux-toolkit.js.org/rtk-query/api/createApi"
