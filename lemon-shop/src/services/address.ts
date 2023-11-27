import type { AddressItem, AddressParams } from "@/types/address"
import { http } from "@/utils/http"

/**
 * 添加收货地址
 * @param data 请求参数
 */
export const postMemberAddressApi = (data: AddressParams) => {
    return http({
        method: 'POST',
        url: '/member/address',
        data
    })
}

/**
 * 获取收货地址
 */
export const getMemberAddressApi = () => {
    return http<AddressItem[]>({
        method: 'GET',
        url: '/member/address'
    })
}

/**
 * 获取收货地址详情
 * @param id 地址id(路径参数)
 */
export const getMemberAddressByIdApi = (id: string) => {
    return http<AddressItem>({
        method: 'GET',
        url: `/member/address/${id}`,
    })
}

/**
 * 修改收货地址
 * @param id 地址id(路径参数)
 * @param data 表单数据(请求体参数)
 */
export const putMemberAddressByIdApi = (id: string, data: AddressParams) => {
    return http({
        method: 'PUT',
        url: `/member/address/${id}`,
        data,
    })
}

/**
 * 删除收货地址
 * @param id 地址id(路径参数)
 */
export const deleteMemberAddressByIdApi = (id: string) => {
    return http({
        method: 'DELETE',
        url: `/member/address/${id}`,
    })
}