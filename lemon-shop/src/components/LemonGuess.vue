<template>
    <!-- 猜你喜欢 -->
    <view class="caption">
        <text class="text">猜你喜欢</text>
    </view>
    <view class="guess">
        <navigator class="guess-item" v-for="item in guessList" :key="item.id" :url="`/pages/goods/goods?id=4007498`">
            <image class="image" mode="aspectFill" :src="item.picture"></image>
            <view class="name"> {{ item.name }} </view>
            <view class="price">
                <text class="small">¥</text>
                <text>{{ item.price }}</text>
            </view>
        </navigator>
    </view>
    <view class="loading-text"> {{ finish ? '没有更多数据了' : '正在加载...' }} </view>
</template>

<script setup lang="ts">

import { getHomeGoodsGuessLikeApi } from '@/services/home';
import { ref } from 'vue';
import { onMounted } from 'vue';
import type { GuessItem } from '@/types/home'
import type { PageParams } from '@/types/global';

//猜你喜欢数据
const guessList = ref<GuessItem[]>([])
//已结束的标记
const finish = ref(false);

//分页参数 将可选参数转为必须，因为这里定义了默认值
const pageParams: Required<PageParams> = {
    page: 1,
    pageSize: 10
}

//调用接口
const getHomeGoodsGuessLikeData = async () => {
    //退出判断，分页数据到底了时
    if (finish.value) {
        return uni.showToast({
            icon: 'none',
            title: '没有更多数据了'
        });
    }

    const res = await getHomeGoodsGuessLikeApi(pageParams);
    // guessList.value = res.result.items;
    //数组追加
    guessList.value.push(...res.result.items);
    //分页数据还有时才会增加页码
    if (pageParams.page < res.result.pages) {
        //页码累加
        pageParams.page++;
    } else {
        finish.value = true;
    }
}

//组件挂载完毕
onMounted(() => {
    getHomeGoodsGuessLikeData();
})

//暴露方法 方便父组件调用
defineExpose({
    //起了别名
    getMore: getHomeGoodsGuessLikeData
})

</script>

<style lang="scss">
:host {
    display: block;
}

/* 分类标题 */
.caption {
    display: flex;
    justify-content: center;
    line-height: 1;
    padding: 36rpx 0 40rpx;
    font-size: 32rpx;
    color: #262626;

    .text {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 28rpx 0 30rpx;

        //标题前后添加小图标
        &::before,
        &::after {
            content: '';
            width: 20rpx;
            height: 20rpx;
            background-image: url(@/static/images/bubble.png);
            background-size: contain;
            margin: 0 10rpx;
        }
    }
}

/* 猜你喜欢 */
.guess {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20rpx;

    .guess-item {
        width: 345rpx;
        padding: 24rpx 20rpx 20rpx;
        margin-bottom: 20rpx;
        border-radius: 10rpx;
        overflow: hidden;
        background-color: #fff;
    }

    .image {
        width: 304rpx;
        height: 304rpx;
    }

    .name {
        height: 75rpx;
        margin: 10rpx 0;
        font-size: 26rpx;
        color: #262626;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .price {
        line-height: 1;
        padding-top: 4rpx;
        color: #cf4444;
        font-size: 26rpx;
    }

    .small {
        font-size: 80%;
    }
}

// 加载提示文字
.loading-text {
    text-align: center;
    font-size: 28rpx;
    color: #666;
    padding: 20rpx 0;
}
</style>