
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{ad as e}from"../main-2d3d97e8.js";const a={queryAdminDrawList:a=>e.get("midjourney/adminDrawList",{params:a}),salesAuditOrder:a=>e.post("sales/auditOrder",a),updateSalesUser:a=>e.post("sales/updateUserSales",a),queryRecords:a=>e.get("sales/inviteRecords",{params:a}),querySalesUserList:a=>e.get("sales/salesUserList",{params:a}),queryPrompts:()=>e.get("midjourney/promptsAll"),queryPagePrompts:a=>e.get("midjourney/promptsPage",{params:a}),setPrompt:a=>e.post("midjourney/setPrompt",a),delPrompt:a=>e.post("midjourney/delPrompt",a),queryMjParamByPage:a=>e.post("midjourney/queryList",a),getMjParamById:a=>e.get("midjourney/get",{params:a}),modifyMjParam:a=>e.post("midjourney/modify",a),removeMjParam:a=>e.post("midjourney/delete",a),addMjParam:a=>e.post("midjourney/add",a),setMjParamEnable:a=>e.post("midjourney/enable",a),updateMjSync:a=>e.post("midjourney/syncMjpAccountManual",a),uploadPromptImage:a=>e.post("file/upload",a),freshPromptImage:a=>e.get("midjourney/fresh",{data:a}),queryPromptImage:a=>e.get("midjourney/query",{data:a}),addMjIncantClassify:a=>e.post("midjourney/incantationClassifyAdd",a),removeMjIncantClassify:a=>e.post("midjourney/incantationClassifyDelete",a),modifyMjIncantClassify:a=>e.post("midjourney/incantationClassifyModify",a),queryMjIncantClassify:a=>e.post("midjourney/incantationClassifyQuery",a),getMjIncantClassify:a=>e.get("midjourney/incantationClassifyGet",{params:a}),queryTopMjIncantationClassify:()=>e.post("midjourney/queryTopMjIncantationClassify"),queryAllMjIncantClassify:a=>e.post("midjourney/incantationClassifyQueryAll",a),addMjInspireClassify:a=>e.post("midjourney/inspireClassifyAdd",a),removeMjInspireClassify:a=>e.post("midjourney/inspireClassifyDelete",a),modifyMjInspireClassify:a=>e.post("midjourney/inspireClassifyModify",a),queryMjInspireClassify:a=>e.post("midjourney/inspireClassifyQuery",a),getMjInspireClassify:a=>e.get("midjourney/inspireClassifyGet",{params:a}),addMjIncantation:a=>e.post("midjourney/incantationAdd",a),removeMjIncantation:a=>e.post("midjourney/incantationDelete",a),modifyMjIncantation:a=>e.post("midjourney/incantationModify",a),queryMjIncantation:a=>e.post("midjourney/incantationQuery",a),getMjIncantation:a=>e.get("midjourney/incantationGet",{params:a}),getCnTranslateEn:a=>e.get("/fanyi/translate",{params:a}),addMjSuggestWord:a=>e.post("midjourney/suggestSave",a),removeMjSuggestWord:a=>e.post("midjourney/suggestDelete",a),queryMjSuggestWord:a=>e.post("midjourney/suggestQuery",a),updateMjSetting:a=>e.post("midjourney/updateSetting",a),getVipLeavelRel:a=>e.get("config/getVipLeavelRel",{params:a}),saveVipLeavelRel:a=>e.post("config/saveVipLeavelRel",a)};export{a as A};
