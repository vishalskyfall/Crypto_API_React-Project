import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoNewsApiHeaders = {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': '7d53e057b0mshef3834c5e33d4bfp18c0e6jsnbcab3ecd119a',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
// }

const cryptoNewsApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
  };

const baseUrl = process.env.REACT_APP_NEWS_API_URL ;

const createRequest = (url)=>({url, headers:cryptoNewsApiHeaders})  // please check out it's headers not the Headers

export const cryptoNewsAPI = createApi({
    reducerPath: 'cryptoNewsAPI',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptoNews:builder.query({
            // query : (newsCategory,count)=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`) 
            // a simple " , " at the end of the query make you spend whole day finding error fuck 
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),

            // above `` is copied as it's url
        })
    })
})

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsAPI;  // name of exported const  "https://redux-toolkit.js.org/rtk-query/api/createApi"
