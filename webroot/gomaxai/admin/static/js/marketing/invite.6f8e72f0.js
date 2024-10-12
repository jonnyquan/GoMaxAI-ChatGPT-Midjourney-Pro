
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as a,r as l,F as i,o as t,l as d,b as n,e as r,f as s,h as o,i as p,j as u,c,P as v,U as g,_ as m}from"../main-fe71c3b2.js";const f={style:{display:"flex","align-items":"center","justify-content":"space-between"}},b={style:{display:"flex","align-items":"center","justify-content":"space-between"}},y={style:{"margin-top":"16px"}},w={class:"search_add_card"},x={style:{display:"flex","align-items":"center"}},V={style:{"margin-left":"10px"}},h={style:{"margin-left":"10px"}},R={style:{"margin-left":"10px"}},_=m(e({__name:"invite",setup(e){const m=a(),_=l(),z=l([]),S=l(0),F=i({keyword:"",inviterKeyword:"",startTime:"",page:1,size:10}),I=i({inviteSendStatus:0,inviteRewards:"",inviteRewardVip:"",InvitedRewards:"",invitedRewardVip:""}),U=l({inviteRewards:[{required:!0,trigger:"blur",message:"请输入邀请人所获得的积分数量"}],inviteRewardVip:[{required:!0,trigger:"blur",message:"请输入邀请人所获得的会员天数"}],InvitedRewards:[{required:!0,trigger:"blur",message:"请输入被邀请人所获得的积分数量"}],invitedRewardVip:[{required:!0,trigger:"blur",message:"请输入被邀请人所获得的会员天数"}]});async function k(){const e=await c.queryConfig({keys:["inviteSendStatus","inviteRewards","inviteRewardVip","InvitedRewards","invitedRewardVip"]});e.data.inviteSendStatus&&(e.data.inviteSendStatus=Number(e.data.inviteSendStatus)),Object.assign(I,e.data)}async function C(){var e;null==(e=_.value)||e.validate((async e=>{if(e){if(0==m.isUserModifyPermissions())return v.error("非超级管理员无权限操作！");try{await c.setConfig({settings:(a=I,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),v.success("变更配置信息成功")}catch(l){}k()}else v.error("请填写完整信息");var a}))}async function j(){await g.getInviteLog(F)}function q(){}return t((()=>{j(),k()})),(e,a)=>{const l=d("el-switch"),i=d("el-form-item"),t=d("el-input"),c=d("el-form"),v=d("el-button"),g=d("el-date-picker"),m=d("RefreshRight"),k=d("el-icon"),A=d("el-table-column"),D=d("el-table"),E=d("el-pagination"),P=d("el-row");return n(),r("div",null,[a[16]||(a[16]=s("div",{style:{color:"#20295","font-size":"15px","font-weight":"bold","margin-bottom":"16px"}},"邀请奖励",-1)),s("div",null,[o(c,{ref_key:"formRef",ref:_,rules:U.value,model:I,"label-position":"top"},{default:p((()=>[o(i,{prop:"inviteSendStatus"},{default:p((()=>[a[10]||(a[10]=s("div",{style:{color:"#9FA3B8","font-size":"15px","margin-right":"12px"}}," 邀请注册赠送 ",-1)),o(l,{modelValue:I.inviteSendStatus,"onUpdate:modelValue":a[0]||(a[0]=e=>I.inviteSendStatus=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1}),s("div",f,[o(i,{label:"邀请者赠送积分",prop:"inviteRewards",style:{width:"48%"}},{default:p((()=>[o(t,{size:"large",modelValue:I.inviteRewards,"onUpdate:modelValue":a[1]||(a[1]=e=>I.inviteRewards=e),placeholder:"邀请人获得的积分数量",clearable:""},null,8,["modelValue"])])),_:1}),o(i,{label:"邀请者赠送会员天数",prop:"inviteRewardVip",style:{width:"48%"}},{default:p((()=>[o(t,{size:"large",modelValue:I.inviteRewardVip,"onUpdate:modelValue":a[2]||(a[2]=e=>I.inviteRewardVip=e),placeholder:"邀请人获得的vip天数",clearable:""},null,8,["modelValue"])])),_:1})]),s("div",b,[o(i,{label:"被邀请者赠送积分",prop:"InvitedRewards",style:{width:"48%"}},{default:p((()=>[o(t,{size:"large",modelValue:I.InvitedRewards,"onUpdate:modelValue":a[3]||(a[3]=e=>I.InvitedRewards=e),placeholder:"被邀请人获得的积分数量",clearable:""},null,8,["modelValue"])])),_:1}),o(i,{label:"被邀请者赠送会员天数",prop:"invitedRewardVip",style:{width:"48%"}},{default:p((()=>[o(t,{size:"large",modelValue:I.invitedRewardVip,"onUpdate:modelValue":a[4]||(a[4]=e=>I.invitedRewardVip=e),placeholder:"被邀请人获得的vip天数",clearable:""},null,8,["modelValue"])])),_:1})])])),_:1},8,["rules","model"]),s("div",y,[o(v,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:C},{default:p((()=>a[11]||(a[11]=[u("保存设置 ")]))),_:1})])]),a[17]||(a[17]=s("div",{style:{color:"#20295","font-size":"15px","font-weight":"bold","margin-bottom":"16px","margin-top":"32px"}},"邀请记录",-1)),s("div",w,[s("div",x,[s("div",null,[a[12]||(a[12]=s("div",{class:"condition_name"},"用户信息",-1)),o(t,{modelValue:F.userInfo,"onUpdate:modelValue":a[5]||(a[5]=e=>F.userInfo=e),placeholder:"用户名/呢称/手机号/邮箱",style:{width:"200px"}},null,8,["modelValue"])]),s("div",V,[a[13]||(a[13]=s("div",{class:"condition_name"},"邀请人信息",-1)),o(t,{modelValue:F.inviterInfo,"onUpdate:modelValue":a[6]||(a[6]=e=>F.inviterInfo=e),placeholder:"用户名/呢称/手机号/邮箱",style:{width:"200px"}},null,8,["modelValue"])]),s("div",h,[a[14]||(a[14]=s("div",{class:"condition_name"},"邀请人时间",-1)),o(g,{modelValue:F.inviterDate,"onUpdate:modelValue":a[7]||(a[7]=e=>F.inviterDate=e),type:"datetime",placeholder:"请输入邀请人时间","prefix-icon":"Calendar"},null,8,["modelValue"])]),s("div",R,[o(v,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",height:"32px",background:"#EFF6FF",color:"#60A5FA","border-radius":"8px","margin-top":"25px"},onClick:j},{default:p((()=>a[15]||(a[15]=[u(" 查询 ")]))),_:1})]),s("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:q},[o(k,{color:"#3B82F6",size:"20"},{default:p((()=>[o(m)])),_:1})])])]),s("div",null,[o(D,{border:"","highlight-current-row":"",data:z.value,style:{width:"100%"},"max-height":"70vh"},{default:p((()=>[o(A,{label:"排序ID"}),o(A,{label:"邀请人头像"}),o(A,{label:"邀请人用户名"}),o(A,{label:"邀请人手机号"}),o(A,{label:"邀请人昵称"}),o(A,{label:"邀请人邮箱"}),o(A,{label:"新用户名"}),o(A,{label:"新用户昵称"}),o(A,{label:"新用户手机号"}),o(A,{label:"新用户邮箱"}),o(A,{label:"注册时间"})])),_:1},8,["data"])]),o(P,{class:"flex justify-end mt-3"},{default:p((()=>[o(E,{"current-page":F.page,"onUpdate:currentPage":a[8]||(a[8]=e=>F.page=e),"page-size":F.size,"onUpdate:pageSize":a[9]||(a[9]=e=>F.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:S.value,onSizeChange:j,onCurrentChange:j},null,8,["current-page","page-size","total"])])),_:1})])}}}),[["__scopeId","data-v-e308cd20"]]);export{_ as default};
