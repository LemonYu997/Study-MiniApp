<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="bannerPicture">
      </image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text v-for="(item, index) in subTypes" :key="item.id" :class="{ active: index === activeIndex }" class="text"
        @tap="activeIndex = index">
        {{ item.title }}
      </text>
    </view>
    <!-- 推荐列表 -->
    <scroll-view @scrolltolower="onScrollToLower" v-for="(item, index) in subTypes" v-show="activeIndex === index" :key="item.id" scroll-y
      class="scroll-view">
      <view class="goods">
        <navigator hover-class="none" class="navigator" v-for="goods in item.goodsItems.items" :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`">
          <image class="thumb" :src="goods.picture"></image>
          <view class="name ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{ item.finish ? '没有更多数据了' : '正在加载...' }}</view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { getHotRecommendApi } from '@/services/hot'
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import type { SubTypeItem } from '@/types/hot'

// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]

//uniapp获取页面路径参数
const query = defineProps<{
  type: string
}>()
// console.log(query);

//找到当前应跳转的参数
const currentUrlMap = hotMap.find(v => v.type === query.type);
//动态设置标题 !.表示排除undefined情况
uni.setNavigationBarTitle({ title: currentUrlMap!.title });

//推荐封面图
const bannerPicture = ref('');
//推荐选项数据 finish 触底标记
const subTypes = ref<(SubTypeItem & {finish?: boolean})[]>([]);
//高亮下标
const activeIndex = ref(0);


//获取热门推荐数据
const getHotRecommendData = async () => {
  //请求地址从页面路径中对应的map参数获取
  const res = await getHotRecommendApi(currentUrlMap!.url, {
    //默认分页参数 设置环境参数，开发环境为30，生产环境为1
    page: import.meta.env.DEV ? 30 : 1,
    pageSize: 10
  });
  // console.log(res.result);
  bannerPicture.value = res.result.bannerPicture
  subTypes.value = res.result.subTypes;
}

//页面加载
onLoad(() => {
  getHotRecommendData();
})

//滚动触底
const onScrollToLower = async () => {
  //获取当前选项
  const currentSubTypes = subTypes.value[activeIndex.value];
  //分页条件
  if (currentSubTypes.goodsItems.page < currentSubTypes.goodsItems.pages) {
    //当前页码累加
    currentSubTypes.goodsItems.page++;
  } else {
    //标记已结束
    currentSubTypes.finish = true;
    //退出并轻提示
    return uni.showToast({
      icon: 'none',
      title: '没有更多数据了'
    });
  }

  //调用api传参
  const res = await getHotRecommendApi(currentUrlMap!.url, {
    subType: currentSubTypes.id,
    page: currentSubTypes.goodsItems.page,
    pageSize: currentSubTypes.goodsItems.pageSize
  });
  //新的列表选项
  const newSubTypes = res.result.subTypes[activeIndex.value];
  //数组追加
  currentSubTypes.goodsItems.items.push(...newSubTypes.goodsItems.items);
}
</script>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}

.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}

.scroll-view {
  flex: 1;
}

.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;

  .text {
    margin: 0 20rpx;
    position: relative;
  }

  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}

.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;

  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  .thumb {
    width: 305rpx;
    height: 305rpx;
  }

  .name {
    height: 88rpx;
    font-size: 26rpx;
  }

  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }

  .symbol {
    font-size: 70%;
  }

  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>