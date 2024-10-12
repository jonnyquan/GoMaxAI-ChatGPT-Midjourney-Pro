
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as a,r as l,F as s,l as t,b as o,J as i,i as r,f as d,t as n,g as u,h as p,j as c,O as m,P as f,x as g,_ as b}from"../main-fe71c3b2.js";import{A as v}from"../mj/mj.b05f9cba.js";const y={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},x={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},h={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},j=b(e({__name:"mjInspireClassify",emits:["fresh"],setup(e,{expose:b,emit:j}){const w=a(),_=l(!1),F=l(""),V=l(0),C=l();l(!1);const k=s({name:"",value:""}),I=j,M=s({name:[{required:!0,message:"广场分类名称不能为空",trigger:"change"},{max:10,message:"最大长度10"}],value:[{required:!0,message:"广场分类值不能为空",trigger:"change"}]});const O=async e=>{await(null==e?void 0:e.validate((async e=>{if(e){if(0==w.isUserModifyPermissions())return f.error("非超级管理员无权限操作！");V.value?await q({id:V.value,...k}):await U(k),I("fresh",!0),_.value=!1,Object.assign(k,{})}})))},U=async e=>(await v.addMjInspireClassify(e),f.success("添加广场分类类成功！"),!0),A=async e=>await v.getMjInspireClassify(e).then((e=>e.data)),q=async e=>{await v.modifyMjInspireClassify(e),f.success("更新广场分类成功！")};return b({open:function(e){_.value=!0,V.value=e||0,F.value=e?"编辑广场分类":"添加广场分类",e&&e>0?A({id:e}).then((e=>{Object.assign(k,e)})):Object.assign(k,{name:"",value:""})}}),(e,a)=>{const l=g,s=t("el-icon"),f=t("el-input"),b=t("el-form-item"),v=t("el-form"),j=t("el-button"),w=t("el-dialog");return o(),i(w,{modelValue:u(_),"onUpdate:modelValue":a[5]||(a[5]=e=>m(_)?_.value=e:null),width:"500","show-close":!1,"destroy-on-close":""},{header:r((({close:e,titleId:t,titleClass:o})=>[d("div",y,[d("div",null,n(u(F)),1),d("div",{onClick:a[0]||(a[0]=e=>_.value=!1),style:{cursor:"pointer"}},[p(s,null,{default:r((()=>[p(l,{name:"close"})])),_:1})])])])),default:r((()=>[d("div",x,[p(v,{model:k,"label-position":"right",ref_key:"formRef",ref:C,rules:M,inline:!1,"label-width":"80px"},{default:r((()=>[p(b,{label:"分类名称",prop:"name"},{default:r((()=>[p(f,{modelValue:k.name,"onUpdate:modelValue":a[1]||(a[1]=e=>k.name=e),placeholder:"输入分类名称",clearable:""},null,8,["modelValue"])])),_:1}),p(b,{label:"分类值",prop:"value"},{default:r((()=>[p(f,{modelValue:k.value,"onUpdate:modelValue":a[2]||(a[2]=e=>k.value=e),placeholder:"输入分类value值",clearable:""},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])]),d("div",h,[p(j,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:a[3]||(a[3]=e=>_.value=!1)},{default:r((()=>a[6]||(a[6]=[c("取消 ")]))),_:1}),p(j,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:a[4]||(a[4]=e=>O(u(C)))},{default:r((()=>a[7]||(a[7]=[c(" 确定 ")]))),_:1})])])),_:1},8,["modelValue"])}}}),[["__scopeId","data-v-d1d2099e"]]);export{j as default};
