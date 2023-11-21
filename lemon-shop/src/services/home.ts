//封装首页API

import type { BannerItem, CategoryItem, HotItem, GuessItem } from "@/types/home"
import { http } from "@/utils/http"
import type { PageParams, PageResult } from "@/types/global"

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

/**
 * 首页-前台分类-小程序
 */
export const getHomeCategoryApi = () => {
    return http<CategoryItem[]>({
        method: 'GET',
        url: '/home/category/mutli'
    })
}

/**
 * 首页-热门推荐-小程序
 */
export const getHomeHotApi = () => {
    return http<HotItem[]>({
        method: 'GET',
        url: '/home/hot/mutli'
    })
}

/**
 * 猜你喜欢-小程序
 * 传递分页参数
 */
export const getHomeGoodsGuessLikeApi = (data?: PageParams) => {
    return http<PageResult<GuessItem>>({
        method: 'GET',
        url: '/home/goods/guessLike',
        data
    })
}