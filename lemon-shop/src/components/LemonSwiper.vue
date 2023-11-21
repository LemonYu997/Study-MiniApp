<template>
    <view class="carousel">
        <swiper :circular="true" :autoplay="false" :interval="3000" @change="onChange">
            <!-- 遍历接口获取到的轮播图数据 -->
            <swiper-item v-for="item in bannerList" :key="item.id">
                <navigator url="/pages/index/index" hover-class="none" class="navigator">
                    <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
                </navigator>
            </swiper-item>
        </swiper>
        <!-- 指示点 -->
        <view class="indicator">
            <text v-for="(item, index) in bannerList" :key="item.id" class="dot"
                :class="{ active: index === activeIndex }"></text>
        </view>
    </view>
</template>

<script setup lang="ts">
import type { BannerItem } from '@/types/home';
import { ref } from 'vue'

const activeIndex = ref(0)

// 更新指示点索引
// 当 Swiper 下标发生变化时触发 类型定义使用UniHelper.SwiperOnChange
const onChange: UniHelper.SwiperOnChange = (e) => {
    // console.log(e.detail.current);
    //更新指示点索引 !.表示非空断言，排除非空状况
    activeIndex.value = e.detail!.current;
}

//定义props 接收首页传过来的轮播图数据
const props = defineProps<{
    //定义类型
    bannerList: BannerItem[];
}>();

</script>

<style lang="scss">
/* 轮播图 */
.carousel {
    height: 280rpx;
    position: relative;
    overflow: hidden;
    transform: translateY(0);
    background-color: #efefef;

    .indicator {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 16rpx;
        display: flex;
        justify-content: center;

        .dot {
            width: 30rpx;
            height: 6rpx;
            margin: 0 8rpx;
            border-radius: 6rpx;
            background-color: rgba(255, 255, 255, 0.4);
        }

        .active {
            background-color: #fff;
        }
    }

    .navigator,
    .image {
        width: 100%;
        height: 100%;
    }
}
</style>