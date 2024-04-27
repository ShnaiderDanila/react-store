import{i as X,o as Y,y as Z,k as aa,j as s,q as ta,s as oa,L as ea,w as sa,B as E,r as y,e as _}from"./index-BOrqkEqy.js";import{f as na}from"./formatCost-B_6Yb-6T.js";import{c as ia,p as la}from"./checkLikedProduct-DUy8ocaW.js";import{g as U,e as F,s as L,k as C,a as V,b as O,f as g,i as W,B as ra,h as R}from"./CustomButton-B_O74LLJ.js";const ca=({product:a})=>{const t=X(i=>i.userReducer.currentUser),o=ia(t==null?void 0:t.wishlist,a),[e]=la.useToggleLikeProductByIdMutation(),n=Y(),c=Z(),u=aa(),r=async()=>{t?await e(a.id).unwrap().then(i=>{i&&u(sa(i))}).catch(i=>{i.data?E.error(i.data.message):E.error("Ошибка сервера! Пожалуйста, повторите попытку позже.")}):n("/signin")};return s.jsxs("article",{className:"w-full flex flex-col relative group overflow-hidden",children:[s.jsx("div",{className:`${c.pathname.includes("catalog")?"hidden lg:flex flex-col gap-2 items-center absolute z-10 -mr-16 right-5 top-5 transition-all duration-500 group-hover:mr-0":"flex flex-col gap-2 items-center absolute z-10 right-5 top-5"}`,children:s.jsx("button",{className:"bg-white w-9 h-9 flex items-center justify-center text-xl",onClick:r,children:o?s.jsx(ta,{className:"text-red hover:opacity-70 transition-all duration-200"}):s.jsx(oa,{className:"hover:opacity-70 transition-all duration-200"})})}),s.jsxs(ea,{to:`/catalog/${a.id}`,className:"relative cursor-pointer",children:[s.jsx("div",{className:"absolute top-0 left-0 bg-black z-2 w-full h-full transition-all duration-300 opacity-0 lg:group-hover:opacity-10"}),s.jsx("img",{className:"w-full h-full object-cover object-center",src:`https://male-fashion.ru/api/${a.image}`})]}),s.jsxs("div",{className:"mt-6 flex flex-1 flex-col",children:[s.jsx("h6",{className:"mb-1.5 font-bold truncate",children:a.brand}),s.jsx("p",{className:"mb-1.5 line-clamp-2",children:a.name}),s.jsx("p",{className:"text-primary-medium font-bold truncate mb-1.5 mt-auto",children:na(a.price)}),s.jsx("ul",{className:" text-primary-light flex gap-2 truncate",children:a.availableSize.map(i=>s.jsx("li",{children:i},i))})]})]})};function da({controlled:a,default:t,name:o,state:e="value"}){const{current:n}=y.useRef(a!==void 0),[c,u]=y.useState(t),r=n?a:c,i=y.useCallback(v=>{n||u(v)},[]);return[r,i]}const pa=y.createContext(),ua=()=>{const a=y.useContext(pa);return a??!1};function ga(a){return U("MuiSvgIcon",a)}F("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const va=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],fa=a=>{const{color:t,fontSize:o,classes:e}=a,n={root:["root",t!=="inherit"&&`color${C(t)}`,`fontSize${C(o)}`]};return W(n,ga,e)},xa=L("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,o.color!=="inherit"&&t[`color${C(o.color)}`],t[`fontSize${C(o.fontSize)}`]]}})(({theme:a,ownerState:t})=>{var o,e,n,c,u,r,i,v,b,x,f,d,l;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(o=a.transitions)==null||(e=o.create)==null?void 0:e.call(o,"fill",{duration:(n=a.transitions)==null||(n=n.duration)==null?void 0:n.shorter}),fontSize:{inherit:"inherit",small:((c=a.typography)==null||(u=c.pxToRem)==null?void 0:u.call(c,20))||"1.25rem",medium:((r=a.typography)==null||(i=r.pxToRem)==null?void 0:i.call(r,24))||"1.5rem",large:((v=a.typography)==null||(b=v.pxToRem)==null?void 0:b.call(v,35))||"2.1875rem"}[t.fontSize],color:(x=(f=(a.vars||a).palette)==null||(f=f[t.color])==null?void 0:f.main)!=null?x:{action:(d=(a.vars||a).palette)==null||(d=d.action)==null?void 0:d.active,disabled:(l=(a.vars||a).palette)==null||(l=l.action)==null?void 0:l.disabled,inherit:void 0}[t.color]}}),T=y.forwardRef(function(t,o){const e=V({props:t,name:"MuiSvgIcon"}),{children:n,className:c,color:u="inherit",component:r="svg",fontSize:i="medium",htmlColor:v,inheritViewBox:b=!1,titleAccess:x,viewBox:f="0 0 24 24"}=e,d=O(e,va),l=y.isValidElement(n)&&n.type==="svg",N=g({},e,{color:u,component:r,fontSize:i,instanceFontSize:t.fontSize,inheritViewBox:b,viewBox:f,hasSvgAsChild:l}),P={};b||(P.viewBox=f);const m=fa(N);return s.jsxs(xa,g({as:r,className:_(m.root,c),focusable:"false",color:v,"aria-hidden":x?void 0:!0,role:x?"img":void 0,ref:o},P,d,l&&n.props,{ownerState:N,children:[l?n.props.children:n,x?s.jsx("title",{children:x}):null]}))});T.muiName="SvgIcon";function w(a,t){function o(e,n){return s.jsx(T,g({"data-testid":`${t}Icon`,ref:n},e,{children:a}))}return o.muiName=T.muiName,y.memo(y.forwardRef(o))}function ba(a){return U("MuiPagination",a)}F("MuiPagination",["root","ul","outlined","text"]);const ma=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function ha(a={}){const{boundaryCount:t=1,componentName:o="usePagination",count:e=1,defaultPage:n=1,disabled:c=!1,hideNextButton:u=!1,hidePrevButton:r=!1,onChange:i,page:v,showFirstButton:b=!1,showLastButton:x=!1,siblingCount:f=1}=a,d=O(a,ma),[l,N]=da({controlled:v,default:n,name:o,state:"page"}),P=(p,I)=>{v||N(I),i&&i(p,I)},m=(p,I)=>{const K=I-p+1;return Array.from({length:K},(Aa,Q)=>p+Q)},k=m(1,Math.min(t,e)),$=m(Math.max(e-t+1,t+1),e),B=Math.max(Math.min(l-f,e-t-f*2-1),t+2),j=Math.min(Math.max(l+f,t+f*2+2),$.length>0?$[0]-2:e-1),M=[...b?["first"]:[],...r?[]:["previous"],...k,...B>t+2?["start-ellipsis"]:t+1<e-t?[t+1]:[],...m(B,j),...j<e-t-1?["end-ellipsis"]:e-t>t?[e-t]:[],...$,...u?[]:["next"],...x?["last"]:[]],S=p=>{switch(p){case"first":return 1;case"previous":return l-1;case"next":return l+1;case"last":return e;default:return null}},z=M.map(p=>typeof p=="number"?{onClick:I=>{P(I,p)},type:"page",page:p,selected:p===l,disabled:c,"aria-current":p===l?"true":void 0}:{onClick:I=>{P(I,S(p))},type:p,page:S(p),selected:!1,disabled:c||p.indexOf("ellipsis")===-1&&(p==="next"||p==="last"?l>=e:l<=1)});return g({items:z},d)}function ya(a){return U("MuiPaginationItem",a)}const $a=F("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon","colorPrimary","colorSecondary"]),h=$a,D=w(s.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),G=w(s.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),H=w(s.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),q=w(s.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),Ca=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],J=(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant],t[`size${C(o.size)}`],o.variant==="text"&&t[`text${C(o.color)}`],o.variant==="outlined"&&t[`outlined${C(o.color)}`],o.shape==="rounded"&&t.rounded,o.type==="page"&&t.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&t.ellipsis,(o.type==="previous"||o.type==="next")&&t.previousNext,(o.type==="first"||o.type==="last")&&t.firstLast]},Pa=a=>{const{classes:t,color:o,disabled:e,selected:n,size:c,shape:u,type:r,variant:i}=a,v={root:["root",`size${C(c)}`,i,u,o!=="standard"&&`color${C(o)}`,o!=="standard"&&`${i}${C(o)}`,e&&"disabled",n&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[r]],icon:["icon"]};return W(v,ya,t)},Na=L("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:J})(({theme:a,ownerState:t})=>g({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${h.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity}},t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)})),za=L(ra,{name:"MuiPaginationItem",slot:"Root",overridesResolver:J})(({theme:a,ownerState:t})=>g({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${h.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${h.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:R(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${h.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:R(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${h.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}}},t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)},t.shape==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius}),({theme:a,ownerState:t})=>g({},t.variant==="text"&&{[`&.${h.selected}`]:g({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].contrastText,backgroundColor:(a.vars||a).palette[t.color].main,"&:hover":{backgroundColor:(a.vars||a).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[t.color].main}},[`&.${h.focusVisible}`]:{backgroundColor:(a.vars||a).palette[t.color].dark}},{[`&.${h.disabled}`]:{color:(a.vars||a).palette.action.disabled}})},t.variant==="outlined"&&{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${h.selected}`]:g({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / 0.5)`:R(a.palette[t.color].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:R(a.palette[t.color].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:R(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:R(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}},{[`&.${h.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}})})),Ia=L("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,t)=>t.icon})(({theme:a,ownerState:t})=>g({fontSize:a.typography.pxToRem(20),margin:"0 -8px"},t.size==="small"&&{fontSize:a.typography.pxToRem(18)},t.size==="large"&&{fontSize:a.typography.pxToRem(22)})),ja=y.forwardRef(function(t,o){const e=V({props:t,name:"MuiPaginationItem"}),{className:n,color:c="standard",component:u,components:r={},disabled:i=!1,page:v,selected:b=!1,shape:x="circular",size:f="medium",slots:d={},type:l="page",variant:N="text"}=e,P=O(e,Ca),m=g({},e,{color:c,disabled:i,selected:b,shape:x,size:f,type:l,variant:N}),k=ua(),$=Pa(m),j=(k?{previous:d.next||r.next||q,next:d.previous||r.previous||H,last:d.first||r.first||D,first:d.last||r.last||G}:{previous:d.previous||r.previous||H,next:d.next||r.next||q,first:d.first||r.first||D,last:d.last||r.last||G})[l];return l==="start-ellipsis"||l==="end-ellipsis"?s.jsx(Na,{ref:o,ownerState:m,className:_($.root,n),children:"…"}):s.jsxs(za,g({ref:o,ownerState:m,component:u,disabled:i,className:_($.root,n)},P,{children:[l==="page"&&v,j?s.jsx(Ia,{as:j,ownerState:m,className:$.icon}):null]}))}),ka=ja,Ra=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],La=a=>{const{classes:t,variant:o}=a;return W({root:["root",o],ul:["ul"]},ba,t)},Ba=L("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant]]}})({}),Ma=L("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(a,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function Sa(a,t,o){return a==="page"?`${o?"":"Go to "}page ${t}`:`Go to ${a} page`}const _a=y.forwardRef(function(t,o){const e=V({props:t,name:"MuiPagination"}),{boundaryCount:n=1,className:c,color:u="standard",count:r=1,defaultPage:i=1,disabled:v=!1,getItemAriaLabel:b=Sa,hideNextButton:x=!1,hidePrevButton:f=!1,renderItem:d=z=>s.jsx(ka,g({},z)),shape:l="circular",showFirstButton:N=!1,showLastButton:P=!1,siblingCount:m=1,size:k="medium",variant:$="text"}=e,B=O(e,Ra),{items:j}=ha(g({},e,{componentName:"Pagination"})),M=g({},e,{boundaryCount:n,color:u,count:r,defaultPage:i,disabled:v,getItemAriaLabel:b,hideNextButton:x,hidePrevButton:f,renderItem:d,shape:l,showFirstButton:N,showLastButton:P,siblingCount:m,size:k,variant:$}),S=La(M);return s.jsx(Ba,g({"aria-label":"pagination navigation",className:_(S.root,c),ownerState:M,ref:o},B,{children:s.jsx(Ma,{className:S.ul,ownerState:M,children:j.map((z,p)=>s.jsx("li",{children:d(g({},z,{color:u,"aria-label":b(z.type,z.page,z.selected),shape:l,size:k,variant:$}))},p))})}))}),Oa=_a,wa=(a,t,o)=>{const e=(t-1)*o,n=(t-1)*o+o;return a.slice(e,n)},A=5,Wa=({products:a,currentPage:t,setCurrentPage:o})=>{const e=y.useMemo(()=>wa(a,t,A),[a,t]),n=c=>{window.scrollTo(0,0),o(c)};return a.length?s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsx("ul",{className:"grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",children:e.map(c=>s.jsx(ca,{product:c},c.id))}),Math.ceil(a.length/A)>1&&s.jsx("div",{className:"flex justify-center mt-10",children:s.jsx(Oa,{count:Math.ceil(a.length/A),page:t,onChange:(c,u)=>n(u),showLastButton:!0,showFirstButton:!0})})]}):s.jsx("div",{className:"flex flex-col justify-center items-center gap-10 w-full text-center text-xl mt-12 lg:mt-0",children:s.jsx("p",{children:"Товары не найдены!"})})};export{Wa as P,ua as a,w as c,da as u};