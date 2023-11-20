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

//定义请求拦截器
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

/**
 * 请求处理
 * @param UniApp.RequestOptions
 * @returns Promise
 *  1、返回 Promise 对象
 *  2、请求成功
 *      2.1 提取核心数据 res.data
 *      2.2 添加类型，支持泛型
 *  3、请求失败
 *      3.1 网络错误 -> 提示用户换网络
 *      3.2 401错误 -> 清理用户信息，跳转到登录页
 *      3.3 其他错误 -> 根据后端错误信息轻提示
 */
//2.2 添加类型，支持泛型
export const http = <T>(options: UniApp.RequestOptions) => {
    //1、返回 Promise 对象
    return new Promise<Data<T>>((resolve, reject) => {
        uni.request({
            //保存已配置好的请求参数
            ...options,
            //2、响应成功
            success(res) {
                //状态码2开头 响应成功
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    //2.1 提取核心数据 res.data
                    //使用as断言，返回对象应为Data类型
                    resolve(res.data as Data<T>);
                } else if (res.statusCode === 401) {
                    //3.2 401错误 -> 清理用户信息，跳转到登录页
                    const memberStore = useMemberStore();
                    memberStore.clearProfile();
                    //跳转到登录页
                    uni.navigateTo({url: '/pages/login/login'})
                    reject(res);
                } else {
                    //3.3 其他错误 -> 根据后端错误信息轻提示
                    uni.showToast({
                        icon: 'none',
                        title: (res.data as Data<T>).msg || "请求错误"
                    })
                    reject(res);
                }
            },
            //3、相应失败
            fail(err) {
                uni.showToast({
                    icon: 'none',
                    title: '网络错误，换个网络试试'
                })
                reject(err)
            }
        })
    }) 
}

//封装后端返回对象
interface Data<T> {
    code: string,
    msg: string,
    result: T
}