//封装首页API

import type { BannerItem } from "@/types/home"
import { http } from "@/utils/http"

/**
 * 首页-广告区域-小程序
 * 除了首页调用广告区域外，其他的页面也会调用广告接口
 * @param distributionSite 广告区域展示位置 1 为首页（默认值）2 为商品分类页
 */
export const getHomeBannerApi = (distributionSite = 1) => {
    //返回类型为自定义的轮播图对象数组
    return http<BannerItem[]>({
        method: 'GET',
        url: '/home/banner',
        data: {
            distributionSite
        }
    })
}