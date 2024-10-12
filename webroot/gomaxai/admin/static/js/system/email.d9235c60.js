
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as l,r,F as a,o as i,l as s,b as t,e as m,f as u,h as g,H as d,i as o,K as c,j as p,c as f,P as n,_ as E,q as V}from"../main-46c178e9.js";const y={class:"email_box"},x={class:"disposition_main"},_={class:"type_title_list"},T={style:{"margin-top":"16px"}},b={key:0},F={key:1},v={key:2},S={style:{"margin-top":"16px"}},U=e({__name:"email",setup(e){const E=l(),V=r(0),U=a({emailRegisterStatus:"",registerBaseUrl:"",registerVerifyEmailTitle:"",registerVerifyEmailDesc:"",registerVerifyEmailFrom:"",registerVerifyExpir:"",registerSuccessEmailTitle:"",registerSuccessEmailTeamName:"",registerSuccessEmaileAppend:"",registerFailEmailTitle:"",registerFailEmailTeamName:""}),A=r({registerBaseUrl:[{required:!0,trigger:"blur",message:"请填写注册后端服务基础地址！"}],registerVerifyEmailTitle:[{required:!0,trigger:"blur",message:"请填写注册验证码的邮箱标题"}],registerVerifyEmailFrom:[{required:!0,trigger:"blur",message:"请填写注册验证码的邮箱来源团队"}],registerVerifyEmailDesc:[{required:!0,trigger:"blur",message:"请填写注册验证码的邮箱正文内容"}],registerVerifyExpir:[{required:!0,trigger:"blur",message:"请填写注册验证码的过期时间"}],registerSuccessEmailTitle:[{required:!0,trigger:"blur",message:"请填写注册成功页的标题"}],registerSuccessEmailTeamName:[{required:!0,trigger:"blur",message:"请填写注册成功页的团队名称"}],registerSuccessEmaileAppend:[{required:!0,trigger:"blur",message:"请填写注册成功页的正文追加内容"}],registerFailEmailTitle:[{required:!0,trigger:"blur",message:"请填写注册失败页的标题名称"}],registerFailEmailTeamName:[{required:!0,trigger:"blur",message:"请填写注册失败页的团队名称"}]}),h=r();async function N(){const e=await f.queryConfig({keys:["registerBaseUrl","registerVerifyEmailTitle","registerVerifyEmailFrom","registerVerifyEmailDesc","registerVerifyExpir","registerSuccessEmailTitle","registerSuccessEmailTeamName","registerSuccessEmaileAppend","registerFailEmailTitle","registerFailEmailTeamName","emailRegisterStatus"]});Object.assign(U,e.data)}function q(){var e;null==(e=h.value)||e.validate((async e=>{if(e){if(0==E.isUserModifyPermissions())return n.error("非超级管理员无权限操作！");var l={};0==V.value?(l.registerBaseUrl=U.registerBaseUrl,l.registerVerifyEmailTitle=U.registerVerifyEmailTitle,l.registerVerifyEmailFrom=U.registerVerifyEmailFrom,l.registerVerifyExpir=U.registerVerifyExpir,l.registerVerifyEmailDesc=U.registerVerifyEmailDesc):1==V.value?(l.registerSuccessEmailTitle=U.registerSuccessEmailTitle,l.registerSuccessEmailTeamName=U.registerSuccessEmailTeamName,l.registerSuccessEmaileAppend=U.registerSuccessEmaileAppend):2==V.value&&(l.registerFailEmailTitle=U.registerFailEmailTitle,l.registerFailEmailTeamName=U.registerFailEmailTeamName);try{await f.setConfig({settings:(r=l,Object.keys(r).map((e=>({configKey:e,configVal:r[e]}))))}),n.success("变更配置信息成功")}catch(a){}N()}else n.error("请填写完整信息");var r}))}function z(e){V.value=e}return i((()=>{N()})),(e,l)=>{const r=s("el-alert"),a=s("el-input"),i=s("el-form-item"),f=s("el-col"),n=s("el-row"),E=s("el-form"),N=s("el-button");return t(),m("div",y,[u("div",null,[g(r,{closable:!1,"show-icon":"",title:"邮件设置说明",description:"这里的邮件设置是作用于邮箱绑定发送的验证邮件、您需要先在服务的.env文件中配置邮件服务信息。",type:"warning"})]),u("div",x,[u("div",_,[u("div",{class:d(0==V.value?"type_title":"def_type_title"),onClick:l[0]||(l[0]=e=>z(0))},"验证邮件基础配置",2),u("div",{class:d(1==V.value?"type_title":"def_type_title"),onClick:l[1]||(l[1]=e=>z(1))},"验证成功页面基础配置",2),u("div",{class:d(2==V.value?"type_title":"def_type_title"),onClick:l[2]||(l[2]=e=>z(2))},"验证失败页面基础配置",2)]),u("div",T,[g(E,{"label-position":"top",ref_key:"formRef",ref:h,rules:A.value,model:U},{default:o((()=>[0==V.value?(t(),m("div",b,[g(n,null,{default:o((()=>[g(f,{xs:24,md:20,lg:15,xl:8},{default:o((()=>[g(i,{label:"后端服务BASE_URL",prop:"registerBaseUrl"},{default:o((()=>[g(a,{size:"large",modelValue:U.registerBaseUrl,"onUpdate:modelValue":l[3]||(l[3]=e=>U.registerBaseUrl=e),placeholder:"示例地址: http://ai.xxxx.com 后端服务地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),g(n,null,{default:o((()=>[g(f,{xs:24,md:20,lg:15,xl:8},{default:o((()=>[g(i,{label:"注册验证码下发邮件标题",prop:"registerVerifyEmailTitle"},{default:o((()=>[g(a,{size:"large",modelValue:U.registerVerifyEmailTitle,"onUpdate:modelValue":l[4]||(l[4]=e=>U.registerVerifyEmailTitle=e),placeholder:"默认标题: GoMaxAi团队验证码",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),g(n,null,{default:o((()=>[g(f,{xs:24,md:20,lg:15,xl:8},{default:o((()=>[g(i,{label:"注册验证码下发邮件来源",prop:"registerVerifyEmailFrom"},{default:o((()=>[g(a,{size:"large",modelValue:U.registerVerifyEmailFrom,"onUpdate:modelValue":l[5]||(l[5]=e=>U.registerVerifyEmailFrom=e),placeholder:"邮件尾部来源 From: (默认： GoMaxAiTeam)",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),g(n,null,{default:o((()=>[g(f,{xs:24,md:20,lg:15,xl:8},{default:o((()=>[g(i,{label:"注册账号验证码有效时间",prop:"registerVerifyExpir"},{default:o((()=>[g(a,{size:"large",modelValue:U.registerVerifyExpir,"onUpdate:modelValue":l[6]||(l[6]=e=>U.registerVerifyExpir=e),modelModifiers:{number:!0},placeholder:"注册验证码的有效时间（默认 30 * 60 = 30分钟）",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),g(n,null,{default:o((()=>[g(f,{xs:24,md:20,lg:15,xl:8},{default:o((()=>[g(i,{label:"注册时下发邮件详细内容",prop:"registerVerifyEmailDesc"},{default:o((()=>[g(a,{size:"large",modelValue:U.registerVerifyEmailDesc,"onUpdate:modelValue":l[7]||(l[7]=e=>U.registerVerifyEmailDesc=e),type:"textarea",rows:3,placeholder:"默认内容(欢迎使用GoMaxAiTeam团队AI团队的产品服务,请在三十分钟内完成你的账号绑定,点击以下按钮绑定您的账号) | 发送的邮件内容、会追加一个绑定按钮、详细内容请查看文档。    ",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])):c("",!0),1==V.value?(t(),m("div",F,[g(n,null,{default:o((()=>[g(f,{xs:24,md:20,lg:15,xl:8},{default:o((()=>[g(i,{label:"验证成功通知页标题内容",prop:"registerSuccessEmailTitle"},{default:o((()=>[g(a,{size:"large",modelValue:U.registerSuccessEmailTitle,"onUpdate:modelValue":l[8]||(l[8]=e=>U.registerSuccessEmailTitle=e),placeholder:"默认标题: GoMaxAiTeam团队账户绑定成功",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),g(n,null,{default:o((()=>[g(f,{xs:24,md:20,lg:15,xl:8},{default:o((()=>[g(i,{label:"验证成功通知页团队名称",prop:"registerSuccessEmailTeamName"},{default:o((()=>[g(a,{size:"large",modelValue:U.registerSuccessEmailTeamName,"onUpdate:modelValue":l[9]||(l[9]=e=>U.registerSuccessEmailTeamName=e),placeholder:"邮件尾部来源 From: (默认： GoMaxAiTeam)",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),g(n,null,{default:o((()=>[g(f,{xs:24,md:20,lg:15,xl:8},{default:o((()=>[g(i,{label:"通知页邮件详情追加内容",prop:"registerSuccessEmaileAppend"},{default:o((()=>[g(a,{size:"large",modelValue:U.registerSuccessEmaileAppend,"onUpdate:modelValue":l[10]||(l[10]=e=>U.registerSuccessEmaileAppend=e),type:"textarea",rows:3,placeholder:"默认内容(亲爱的{{ username }},欢迎加入{{ xx }}团队,您是尊贵的{{ 000x }}号用户，你的账号[username] | [email] 已经绑定成功)、此处填写内容将追加至默认内容后方。",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])):c("",!0),2==V.value?(t(),m("div",v,[g(n,null,{default:o((()=>[g(f,{xs:24,md:20,lg:15,xl:8},{default:o((()=>[g(i,{label:"注册失败通知页标题内容",prop:"registerFailEmailTitle"},{default:o((()=>[g(a,{size:"large",modelValue:U.registerFailEmailTitle,"onUpdate:modelValue":l[11]||(l[11]=e=>U.registerFailEmailTitle=e),placeholder:"默认标题: GoMaxAiTeam团队账户绑定失败",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),g(n,null,{default:o((()=>[g(f,{xs:24,md:20,lg:15,xl:8},{default:o((()=>[g(i,{label:"注册失败通知页团队名称",prop:"registerFailEmailTeamName"},{default:o((()=>[g(a,{size:"large",modelValue:U.registerFailEmailTeamName,"onUpdate:modelValue":l[12]||(l[12]=e=>U.registerFailEmailTeamName=e),placeholder:"邮件尾部来源 From: (默认： GoMaxAiTeam)",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])):c("",!0)])),_:1},8,["rules","model"])]),u("div",S,[g(N,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:q},{default:o((()=>l[13]||(l[13]=[p("保存设置")]))),_:1})])])])}}});"function"==typeof V&&V(U);const A=E(U,[["__scopeId","data-v-8cef4269"]]);export{A as default};
