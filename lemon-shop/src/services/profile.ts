import type { ProfileDetail, ProfileParams } from "@/types/member"
import { http } from "@/utils/http"

/**
 * 获取个人信息
 */
export const getMemberProfileApi = () => {
    return http<ProfileDetail>({
        method: 'GET',
        url: '/member/profile'
    })
}

/**
 * 修改个人信息
 * @param data 请求体参数
 */
export const putMemberProfileApi = (data: ProfileParams) => {
    return http<ProfileDetail>({
        method: 'PUT',
        url: '/member/profile',
        data
    })
}