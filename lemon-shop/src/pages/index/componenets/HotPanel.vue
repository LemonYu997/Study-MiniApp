<template>
    <!-- 推荐专区 -->
    <view class="panel hot">
        <view class="item" v-for="item in hotList" :key="item.id">
            <view class="title">
                <text class="title-text">{{ item.title }}</text>
                <text class="title-desc">{{ item.alt }}</text>
            </view>
            <!-- 设置跳转参数 -->
            <navigator hover-class="none" :url="`/pages/hot/hot?type=${item.type}`" class="cards">
                <!-- 列表嵌套 -->
                <image class="image" mode="aspectFit" v-for="src in item.pictures" 
                    :src="src"></image>
            </navigator>
        </view>
    </view>
</template>

<script setup lang="ts">
import type { HotItem } from '@/types/home';

// 接收首页传来的推荐数据
const props = defineProps<{
    hotList: HotItem[]
}>()
</script>


<style lang="scss">
@import './styles/HotPanel.scss';
</style>