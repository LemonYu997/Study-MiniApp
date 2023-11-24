import type { LoginResult } from "@/types/member"
import { http } from "@/utils/http"

//登录参数
type LoginParams = {
    code: string,
    encryptedData: string,
    iv: string
}

/**
 * 小程序登录
 * @param data 请求参数
 */
export const postLoginWxMinApi = (data: LoginParams) => {
    return http<LoginResult>({
        method: 'POST',
        url: '/login/wxMin',
        data
    })
}

/**
 * 小程序登录-内测版
 * 该接口用于模拟微信小程序一键登录，开发学习使用。
 * @param phoneNumber 模拟手机号码
 */
export const postLoginWxMinSimpleApi = (phoneNumber: string) => {
    return http<LoginResult>({
        method: 'POST',
        url: '/login/wxMin/simple',
        data: {
            phoneNumber
        }
    })
}