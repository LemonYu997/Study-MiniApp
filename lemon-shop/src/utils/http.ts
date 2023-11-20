/**
 * 添加拦截器：
 *  拦截 request请求
 *  拦截 uploadFile 文件上传
 * 
 * TODO：
 *  1、非 http 开头需拼接地址
 *  2、请求超时
 *  3、添加小程序端请求头标识
 *  4、添加 token 请求头标识
 */

import { useMemberStore } from "@/stores";

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net';

//定义拦截器
const httpInterceptor = {
    //拦截前触发
    invoke(options: UniApp.RequestOptions) {
        //1、非 http 开头需拼接地址
        if (!options.url.startsWith('http')) {
            options.url = baseUrl + options.url;
        }
        //2、请求超时 默认60秒
        options.timeout = 10000;
        //3、添加小程序端请求头标识
        options.header = {
            //先保存已经配置好的header，再添加小程序标识
            ...options.header,
            'source-client': 'miniapp'
        }
        //4、添加 token 请求头标识
        const memberStore = useMemberStore();
        //profile?. 表示profile存在时才调用后续
        const token = memberStore.profile?.token;
        if (token) {
            options.header.Authorization = token;
        }
        console.log(options);
    }
}

//添加拦截器 拦截uni.request
uni.addInterceptor('request', httpInterceptor);

//拦截文件上传 uploadFile
uni.addInterceptor('uploadFile', httpInterceptor);