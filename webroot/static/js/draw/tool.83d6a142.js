import{e as t,r as s,O as a,P as e,Z as o,_ as n,bE as i,N as l,F as r,$ as p,b1 as c,a1 as m}from"../main-6c725c30.js";const d="/static/png/AIchangeFace-55b91c9d.png",g={class:"toolBox bg-[#F8F9F9] dark:bg-[#111113]"},x={class:"contentBox"},y=["onClick"],f=["src"],u={style:{"margin-left":"12px"}},b={style:{"margin-top":"20px","font-size":"17px"}},I={style:{"font-size":"12px"},class:"text-[#8B8C8C] dark:text-[#6C6E79]"},k=m(t({__name:"tool",setup(t){const m=[{name:"图片解析",id:0,intro:"根据图片解析提示词",src:"/static/png/imgToText-e5cda816.png",type:"imgToText"},{name:"图片融合",id:1,intro:"将图片无缝融合",src:"/static/png/imgMixImg-45b8791e.png",type:"imgMixImg"},{name:"AI换脸",id:2,intro:"一键替换人脸",src:d,type:"AI"},{name:"AI小工具",id:3,intro:"小工具，一键生成你想要的东西",src:d,type:"smalltools",platform:["sd"]}],k=s("['saas']");return console.log(k.value),s(0),(t,s)=>{const d=i("platform");return l(),a("div",g,[e("div",x,[(l(),a(o,null,n(m,(t=>r(e("div",{class:"contentItem dark:bg-[#19191B] bg-[#fff]",key:t.id,onClick:s=>function(t){let s={type:t.type};"smalltools"===t.type?c.push({path:"/draw/smalltools"}):c.push({path:"/draw/midjourney",query:s})}(t)},[e("img",{src:t.src,alt:""},null,8,f),e("div",u,[e("p",b,p(t.name),1),e("p",I,p(t.intro),1)])],8,y),[[d,t.platform]]))),64))])])}}}),[["__scopeId","data-v-7125e232"]]);export{k as default};
