import{z as o}from"./index-CtNSFrqJ.js";const c=o.injectEndpoints({endpoints:e=>({getAllProducts:e.query({query:()=>({url:"/products"})}),getProductsById:e.query({query:t=>({url:`/products/${t}`})}),toggleLikeProductById:e.mutation({query:t=>({url:`/products/like/${t}`,method:"PATCH",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})})})}),d=(e,t)=>e?e.some(r=>r.id===t.id):!1;export{d as c,c as p};