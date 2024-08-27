import{e,r as a,R as l,a4 as t,N as s,ad as n,W as o,P as r,U as d,O as i,_ as u,X as v,ae as c,Z as p,af as b,$ as m,aa as y,a6 as h,aq as x,bl as f,bO as g,ao as k,j as w,H as E,bo as _,bP as I,a3 as j}from"../main-cd5b7247.js";const A={class:"flex justify-between"},C={class:"mr-2 w-10/12"},F={class:"dark:border-gray-600 border h-[470px] min-h-[470px] overflow-y-auto overflow-x-hidden"},T={class:"p-2"},U={class:"mb-2"},H={class:"level-classify text-[15px] py-2 pt-2"},P={key:0,class:"my-1"},N=["onClick"],O={class:"select-none"},W={class:"w-2/12 h-full flex flex-col"},S={class:"dark:bg-[#15171A] dark:border-gray-600 border bg-[#FFFFFF] h-[470px] rounded p-2"},q=[r("p",{class:"dark:text-white text-white"},"前往制作",-1)],R=e({__name:"createInspiration",props:{type:{type:String}},emits:["textToImg","dall"],setup(e,{expose:k,emit:w}){const E=a(!1),_=a(""),I=l(),j=w,R=e,X=t({level1:[],level2:[]}),Z=a(0),$=async e=>{Z.value=e,X.level2=await f({id:e}).then((e=>e.data.rows))},z=()=>{I.updatePromptWords({prompt:_.value}),"mj"==R.type?j("textToImg",_.value):"dall"==R.type&&j("dall",_.value),E.value=!1},B=async()=>{const e=await g({level:0}).then((e=>e.data)),{level1:a}=e;await $(a[0].id),Object.assign(X,{level1:a})};return k({open:()=>{E.value=!0,B()}}),(e,a)=>(s(),n(v(x),{show:E.value,"onUpdate:show":a[1]||(a[1]=e=>E.value=e),style:{width:"1200px",height:"600px"},preset:"dialog",title:"咒语生成器","close-on-esc":!1,"mask-closable":!1,"show-icon":!1},{default:o((()=>[r("div",A,[r("div",C,[d(v(b),{value:Z.value,"onUpdate:value":[a[0]||(a[0]=e=>Z.value=e),$],type:"card",animated:"",trigger:"click","tab-style":"min-width: 90px; text-align: center;"},{default:o((()=>[(s(!0),i(p,null,u(X.level1,(e=>(s(),n(v(c),{key:e.id,tab:e.classifyName,name:e.id},null,8,["tab","name"])))),128))])),_:1},8,["value"]),r("div",F,[r("ul",T,[(s(!0),i(p,null,u(X.level2,(e=>(s(),i("li",null,[r("div",U,[r("span",H,m(e.classifyName),1)]),e.children.length>0?(s(),i("div",P,[(s(!0),i(p,null,u(e.children,(e=>(s(),i("div",{key:e.id,class:y(["inline-block rounded mr-2 mb-2 text-[12px] py-[2px] px-[6px]",[_.value.includes(e.incantationEn)?"dark:bg-[#010102] bg-[#A0A0A0]":"dark:bg-[#1E2023] bg-[#f4f4f4]"]]),onClick:a=>(e=>{_.value.includes(e.incantationEn)?_.value=_.value.replace(e.incantationEn+",",""):_.value+=e.incantationEn+","})(e)},[r("button",O,m(e.incantationCn)+" "+m(e.incantationEn),1)],10,N)))),128))])):h("",!0)])))),256))])])]),r("div",W,[r("div",S,[r("p",null,m(_.value),1)]),r("div",{onClick:z,class:"rounded-full flex items-center justify-center mt-2 w-full h-[42px] cursor-pointer bg-[#10A37F]"},q)])])])),_:1},8,["show"]))}}),X=j(e({__name:"baiduThink",props:{type:{type:String}},emits:["dall","textToImg"],setup(e,{expose:t,emit:r}){const u=r,c=e,p=a(!1),b=a(!1),m=a(!1),f=a(""),g=a(""),j=k(),A=l(),C=w((()=>b.value||!f.value)),F=()=>{f.value=g.value,T()},T=async()=>{if(m.value=!1,g.value=f.value,C.value)return;if(!f.value)return j.info("请输入简单的描述!"),b.value=!1,void(m.value=!1);b.value=!0;const e=await I({prompt:f.value}).then((e=>e.data||"")).catch((()=>{b.value=!1,m.value=!1}));b.value=!1,f.value=e,m.value=!0},U=()=>{A.updatePromptWords({prompt:f.value}),p.value=!1,"dall"==c.type?u("dall",f.value):"mj"==c.type&&u("textToImg",f.value)};return t({open:()=>{p.value=!0}}),(e,a)=>(s(),n(v(x),{show:p.value,"onUpdate:show":a[1]||(a[1]=e=>p.value=e),preset:"dialog",title:"AI帮我想","close-on-esc":!1,"mask-closable":!1,"show-icon":!1},{action:o((()=>[m.value?(s(),i("div",{key:0,class:"btn btnHover border border-[#E0E0E6] dark:border-[#525355]",onClick:F},"重新联想")):h("",!0),m.value?(s(),i("div",{key:1,class:"btn btnHover border border-[#E0E0E6] dark:border-[#525355]",onClick:U},"使用此描述")):h("",!0),m.value?h("",!0):(s(),i("div",{key:2,class:y(["btn border border-[#E0E0E6] dark:border-[#525355]",C.value?"":"btnHover"]),onClick:T,style:E(C.value?"cursor: not-allowed;":"")},"生成此描述",6))])),default:o((()=>[d(v(_),{value:f.value,"onUpdate:value":a[0]||(a[0]=e=>f.value=e),clearable:"",type:"textarea",loading:b.value,bordered:"",disabled:b.value,placeholder:"请输入简单的描述，AI将智能完善创意描述","show-count":"",rows:7,maxlength:"3000",class:"dark:bg-[#010102] bg-[#f4f4f4]"},null,8,["value","loading","disabled"])])),_:1},8,["show"]))}}),[["__scopeId","data-v-f3b7ea74"]]);export{R as _,X as b};
