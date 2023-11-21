<template>
  <!-- 首页导航栏 -->
  <CustomNavbar />
  <!-- 滚动区域 y轴滚动 
    scrolltolower：滚动触底函数 
    refresher-enabled：开启下拉刷新
    @refresherrefresh：自定义下拉刷新
    refresher-triggered：当前下拉刷新状态，动画展示
  -->
  <scroll-view 
    refresher-enabled="true" 
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered" 
    @scrolltolower="onScrollToLower"  
    class="scroll-view" 
    scroll-y>
    <!-- 首页轮播图 传递接口获取的轮播图列表数据 -->
    <LemonSwiper :bannerList="bannerList" />
    <!-- 首页分类组件 -->
    <CategoryPanel :categoryList="categoryList" />
    <!-- 热门推荐 -->
    <HotPanel :hotList="hotList" />
    <!-- 猜你喜欢 子方法传给父组件 -->
    <LemonGuess ref="guessRef"/>
  </scroll-view>
</template>

<script setup lang="ts">
//引入首页导航栏
import CustomNavbar from './componenets/CustomNavbar.vue'
//引入首页轮播图 @表示src路径下
import LemonSwiper from '@/components/LemonSwiper.vue';
//引入首页分类组件
import CategoryPanel from './componenets/CategoryPanel.vue';
//热门推荐
import HotPanel from './componenets/HotPanel.vue';
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getHomeBannerApi, getHomeCategoryApi, getHomeHotApi } from '@/services/home';
import type { BannerItem, CategoryItem, HotItem } from "@/types/home"
import LemonGuess from '@/components/LemonGuess.vue';
import type { LemonGuessInstance } from "@/types/components"

//轮播图数据，返回为自定义类型——轮播图对象数组
const bannerList = ref<BannerItem[]>([]);
//分类数据
const categoryList = ref<CategoryItem[]>([])
//猜你喜欢数据
const hotList = ref<HotItem[]>([])

//获取首页轮播图接口 异步请求
const getHomeBannerData = async () => {
  const res = await getHomeBannerApi();
  // console.log(res);
  bannerList.value = res.result;
}

//获取前台分类数据 异步请求
const getHomeCategory = async () => {
  const res = await getHomeCategoryApi();
  categoryList.value = res.result;
}

//获取热门推荐数据 异步请求
const getHomeHot = async () => {
  const res = await getHomeHotApi();
  hotList.value = res.result;
}


//UniApp页面生命周期 发生在Vue3的created()之后 
//页面加载时候调用
onLoad(() => {
  getHomeBannerData();
  getHomeCategory();
  getHomeHot();
})

//获取猜你喜欢组件实例
const guessRef = ref<LemonGuessInstance>();

//滚动触底
const onScrollToLower = () => {
  guessRef.value?.getMore();
  // console.log('滚动触底啦');
}

//当前下拉刷新动画状态
const isTriggered = ref(false);

//自定义下拉刷新
const onRefresherrefresh = async () => {
  //开启动画
  isTriggered.value = true;
  //加载数据 重新获取轮播图、分类、热门推荐数据
  // await getHomeBannerData();
  // await getHomeCategory();
  // await getHomeHot();
  // 同时发送，全部返回后再继续
  await Promise.all([getHomeBannerData(), getHomeCategory(), getHomeHot()]);
  
  //关闭动画
  isTriggered.value = false;
}

</script>


<style lang="scss">
//修改首页底色，小程序的page相当于html的body
page {
  background-color: #f7f7f7;
  //滚动的配置
  height: 100%;
  display: flex;
  flex-direction: column; //竖直排列
}

.scroll-view {
  flex: 1;
}
</style>
