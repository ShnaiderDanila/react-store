import{z as o}from"./index-BOrqkEqy.js";const r=o.injectEndpoints({endpoints:s=>({getAllPosts:s.query({query:()=>({url:"/posts"})}),getPostById:s.query({query:t=>({url:`/posts/${t}`})})})});export{r as b};