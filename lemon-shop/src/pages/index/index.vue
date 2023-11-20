<template>
  <!-- 首页导航栏 -->
  <CustomNavbar />
  <!-- 首页轮播图 传递接口获取的轮播图列表数据 -->
  <LemonSwiper :bannerList="bannerList" />
  <view class="index">首页</view>
</template>

<script setup lang="ts">
//引入首页导航栏
import CustomNavbar from './componenets/CustomNavbar.vue'
//引入首页轮播图 @表示src路径下
import LemonSwiper from '@/components/LemonSwiper.vue';
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getHomeBannerApi } from '@/services/home';
import type { BannerItem } from "@/types/home"

//轮播图数据，返回为自定义类型——轮播图对象数组
const bannerList = ref<BannerItem[]>([]);

//获取首页轮播图接口 异步请求
const getHomeBannerData = async () => {
  const res = await getHomeBannerApi();
  // console.log(res);
  bannerList.value = res.result;
}

//UniApp页面生命周期 发生在Vue3的created()之后 
//页面加载时候调用
onLoad(() => {
  getHomeBannerData();
})
</script>


<style lang="scss">
//
</style>
