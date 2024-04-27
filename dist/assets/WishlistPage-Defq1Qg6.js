import{r as E,j as m,e as z,i as B,o as I}from"./index-BOrqkEqy.js";import{P as U}from"./ProductList-BF6EFJPF.js";import{P as q}from"./PageWrapper-B1cRq7ap.js";import{x as H,b as W,y as J,f as l,z as L,A as K,D as Q,k as O,E as X,i as Y,g as Z,s as ee,a as te,C as se}from"./CustomButton-B_O74LLJ.js";import"./formatCost-B_6Yb-6T.js";import"./checkLikedProduct-DUy8ocaW.js";const oe=["ownerState"],re=["variants"],ne=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function ie(e){return Object.keys(e).length===0}function ae(e){return typeof e=="string"&&e.charCodeAt(0)>96}function T(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const le=L(),ce=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function R({defaultTheme:e,theme:o,themeId:t}){return ie(o)?e:o[t]||o}function ue(e){return e?(o,t)=>t[e]:null}function j(e,o){let{ownerState:t}=o,c=W(o,oe);const i=typeof e=="function"?e(l({ownerState:t},c)):e;if(Array.isArray(i))return i.flatMap(p=>j(p,l({ownerState:t},c)));if(i&&typeof i=="object"&&Array.isArray(i.variants)){const{variants:p=[]}=i;let r=W(i,re);return p.forEach(n=>{let a=!0;typeof n.props=="function"?a=n.props(l({ownerState:t},c,t)):Object.keys(n.props).forEach(d=>{(t==null?void 0:t[d])!==n.props[d]&&c[d]!==n.props[d]&&(a=!1)}),a&&(Array.isArray(r)||(r=[r]),r.push(typeof n.style=="function"?n.style(l({ownerState:t},c,t)):n.style))}),r}return i}function de(e={}){const{themeId:o,defaultTheme:t=le,rootShouldForwardProp:c=T,slotShouldForwardProp:i=T}=e,p=s=>K(l({},s,{theme:R(l({},s,{defaultTheme:t,themeId:o}))}));return p.__mui_systemSx=!0,(s,r={})=>{H(s,u=>u.filter(x=>!(x!=null&&x.__mui_systemSx)));const{name:n,slot:a,skipVariantsResolver:d,skipSx:v,overridesResolver:C=ue(ce(a))}=r,w=W(r,ne),P=d!==void 0?d:a&&a!=="Root"&&a!=="root"||!1,_=v||!1;let g,b=T;a==="Root"||a==="root"?b=c:a?b=i:ae(s)&&(b=void 0);const N=J(s,l({shouldForwardProp:b,label:g},w)),A=u=>typeof u=="function"&&u.__emotion_real!==u||Q(u)?x=>j(u,l({},x,{theme:R({theme:x.theme,defaultTheme:t,themeId:o})})):u,G=(u,...x)=>{let $=A(u);const S=x?x.map(A):[];n&&C&&S.push(h=>{const f=R(l({},h,{defaultTheme:t,themeId:o}));if(!f.components||!f.components[n]||!f.components[n].styleOverrides)return null;const y=f.components[n].styleOverrides,k={};return Object.entries(y).forEach(([V,D])=>{k[V]=j(D,l({},h,{theme:f}))}),C(h,k)}),n&&!P&&S.push(h=>{var f;const y=R(l({},h,{defaultTheme:t,themeId:o})),k=y==null||(f=y.components)==null||(f=f[n])==null?void 0:f.variants;return j({variants:k},l({},h,{theme:y}))}),_||S.push(p);const F=S.length-x.length;if(Array.isArray(u)&&F>0){const h=new Array(F).fill("");$=[...u,...h],$.raw=[...u.raw,...h]}const M=N($,...S);return s.muiName&&(M.muiName=s.muiName),M};return N.withConfig&&(G.withConfig=N.withConfig),G}}const pe=de(),me=["className","component","disableGutters","fixed","maxWidth","classes"],fe=L(),xe=pe("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[`maxWidth${O(String(t.maxWidth))}`],t.fixed&&o.fixed,t.disableGutters&&o.disableGutters]}}),he=e=>X({props:e,name:"MuiContainer",defaultTheme:fe}),ve=(e,o)=>{const t=n=>Z(o,n),{classes:c,fixed:i,disableGutters:p,maxWidth:s}=e,r={root:["root",s&&`maxWidth${O(String(s))}`,i&&"fixed",p&&"disableGutters"]};return Y(r,t,c)};function be(e={}){const{createStyledComponent:o=xe,useThemeProps:t=he,componentName:c="MuiContainer"}=e,i=o(({theme:s,ownerState:r})=>l({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&{paddingLeft:s.spacing(2),paddingRight:s.spacing(2),[s.breakpoints.up("sm")]:{paddingLeft:s.spacing(3),paddingRight:s.spacing(3)}}),({theme:s,ownerState:r})=>r.fixed&&Object.keys(s.breakpoints.values).reduce((n,a)=>{const d=a,v=s.breakpoints.values[d];return v!==0&&(n[s.breakpoints.up(d)]={maxWidth:`${v}${s.breakpoints.unit}`}),n},{}),({theme:s,ownerState:r})=>l({},r.maxWidth==="xs"&&{[s.breakpoints.up("xs")]:{maxWidth:Math.max(s.breakpoints.values.xs,444)}},r.maxWidth&&r.maxWidth!=="xs"&&{[s.breakpoints.up(r.maxWidth)]:{maxWidth:`${s.breakpoints.values[r.maxWidth]}${s.breakpoints.unit}`}}));return E.forwardRef(function(r,n){const a=t(r),{className:d,component:v="div",disableGutters:C=!1,fixed:w=!1,maxWidth:P="lg"}=a,_=W(a,me),g=l({},a,{component:v,disableGutters:C,fixed:w,maxWidth:P}),b=ve(g,c);return m.jsx(i,l({as:v,ownerState:g,className:z(b.root,d),ref:n},_))})}const Se=be({createStyledComponent:ee("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[`maxWidth${O(String(t.maxWidth))}`],t.fixed&&o.fixed,t.disableGutters&&o.disableGutters]}}),useThemeProps:e=>te({props:e,name:"MuiContainer"})}),ye=Se,we=()=>{var i;const e=B(p=>p.userReducer.currentUser),[o,t]=E.useState(1),c=I();return m.jsx(q,{children:m.jsx("section",{className:"pt-10 pb-48",children:m.jsxs(ye,{children:[m.jsx("h2",{className:"text-center text-2xl mb-10 font-semibold",children:"Избранное"}),(i=e==null?void 0:e.wishlist)!=null&&i.length?m.jsx(U,{products:e==null?void 0:e.wishlist,currentPage:o,setCurrentPage:t}):m.jsxs("div",{className:"flex flex-col justify-center items-center gap-10 w-full text-center text-xl mt-12 lg:mt-0",children:[m.jsxs("div",{children:[m.jsx("p",{children:"В списке избранного нет товаров!"}),m.jsx("p",{className:"text-sm mt-3",children:"Для выбора вещей перейдите в каталог"})]}),m.jsx(se,{onClick:()=>c("/catalog"),maxWidth:"384px",children:"Перейти в каталог"})]})]})})})};export{we as default};