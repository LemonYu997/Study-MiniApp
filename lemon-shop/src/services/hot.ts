import type { PageParams } from "@/types/global"
import type { HotResult } from "@/types/hot";
import { http } from "@/utils/http"

//热门推荐参数类型
type HotParams = PageParams & {subType?: string};

/**
 * 通用热门推荐类型
 * @param url 请求地址
 * @param data 请求参数，可选
 **/
export const getHotRecommendApi = (url: string, data?: HotParams ) => {
    return http<HotResult>({
        method: 'GET',
        url,
        data,
    })
}