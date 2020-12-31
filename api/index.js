/**
 * api接口文件
 */

 import request from "../untils/request";

 export default {
    //标题接口
    getNavData(){
        return request({
           url:"/postclass"
        })
    },
    //获取内容接口
    getContentData(options){
        return request({
            url:`/postclass/${options.index}/post/${options.id}`
        })
    },
    // 登录获取手机验证码
    getCodeData(phone){
        return request({
            url:"/user/sendcode",
            method:"POST",
            data:{
                phone
            }
        })
    },
    // 手机号登录
    loginIsPhone(options){
        return request({
            url:"/user/phonelogin",
            method:"POST",
            data:{
                phone:options.phone,
                code:options.code
            }
        })
    },
    // 退出登录
    putIsPhone(token){
        console.log(token)
        return request({
            url:"/user/logout",
            method:"POST",
            data:{
                token
            }
        })
    }
 }