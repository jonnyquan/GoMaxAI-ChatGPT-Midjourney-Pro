import{e as a,N as t,O as e,P as s,a7 as l,j as r,S as n,U as d,W as f,X as i,Y as o,a8 as u,$ as p}from"../main-6c725c30.js";const x={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},c=[s("path",{d:"M30.71 229.47l188.87-113a30.54 30.54 0 0 1 31.09-.39a33.74 33.74 0 0 1 16.76 29.47v79.05l180.72-108.16a30.54 30.54 0 0 1 31.09-.39A33.74 33.74 0 0 1 496 145.52v221A33.73 33.73 0 0 1 479.24 396a30.54 30.54 0 0 1-31.09-.39L267.43 287.4v79.08A33.73 33.73 0 0 1 250.67 396a30.54 30.54 0 0 1-31.09-.39l-188.87-113a31.27 31.27 0 0 1 0-53z",fill:"currentColor"},null,-1)],v=a({name:"PlayBack",render:function(a,s){return t(),e("svg",x,c)}}),m={class:"pt-1 mr-2 cursor-pointer"},w=a({__name:"titleBar",props:{title:{default:""},des:{default:""},padding:{default:4}},setup(a){const x=a,c=l(),w=r((()=>"dark"===c.theme)),b=n();return(a,l)=>(t(),e("div",{class:u(["flex border-b border-[#ebebeb] dark:border-[#ffffff17] py-4 w-full",[`px-${x.padding}`]])},[s("div",m,[d(i(o),{size:"16",class:"text-primary",onClick:l[0]||(l[0]=a=>i(b).push("/"))},{default:f((()=>[d(i(v))])),_:1})]),s("div",null,[s("b",{class:u([[w.value?"text-[#fff]":"text-[#555]"],"text-lg"])},p(x.title),3),s("div",{class:u([[w.value?"text-[#fff]":"text-[#626569]"],"text-truncate text-[#626569] mt-1"])},p(x.des),3)])],2))}});export{w as _};
