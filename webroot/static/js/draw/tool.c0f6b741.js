import{e as t,r as a,O as s,P as e,Z as n,_ as i,N as o,$ as c,b4 as p,a3 as r}from"../main-ddc3955a.js";const g={class:"toolBox bg-[#F8F9F9] dark:bg-[#111113]"},l={class:"contentBox"},m=["onClick"],d=["src"],x={style:{"margin-left":"12px"}},y={style:{"margin-top":"20px","font-size":"17px"}},f={style:{"font-size":"12px"},class:"text-[#8B8C8C] dark:text-[#6C6E79]"},u=r(t({__name:"tool",setup(t){const r=[{name:"图片解析",id:0,intro:"根据图片解析提示词",src:"/static/png/imgToText-e5cda816.png",type:"imgToText"},{name:"图片融合",id:1,intro:"将图片无缝融合",src:"/static/png/imgMixImg-45b8791e.png",type:"imgMixImg"},{name:"AI换脸",id:2,intro:"一键替换人脸",src:"/static/png/AIchangeFace-55b91c9d.png",type:"AI"}];return a(0),(t,a)=>(o(),s("div",g,[e("div",l,[(o(),s(n,null,i(r,(t=>e("div",{class:"contentItem dark:bg-[#19191B] bg-[#fff]",key:t.id,onClick:a=>function(t){let a={type:t.type};p.push({path:"/draw/midjourney",query:a})}(t)},[e("img",{src:t.src,alt:""},null,8,d),e("div",x,[e("p",y,c(t.name),1),e("p",f,c(t.intro),1)])],8,m))),64))])]))}}),[["__scopeId","data-v-b7872983"]]);export{u as default};
