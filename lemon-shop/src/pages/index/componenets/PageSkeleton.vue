<!-- 骨架屏：没有加载数据时的页面展示 -->
<template name="skeleton">
    <view is="components/LemonSwiper">
        <view class="carousel LemonSwiper--carousel">
            <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
                <swiper-item
                    style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                    <navigator class="navigator LemonSwiper--navigator" hover-class="none">
                        <image class="image LemonSwiper--image sk-image" mode="aspectFill"></image>
                    </navigator>
                </swiper-item>
            </swiper>
            <view class="indicator LemonSwiper--indicator">
                <text class="dot LemonSwiper--dot active LemonSwiper--active"></text>
                <text class="dot LemonSwiper--dot"></text>
                <text class="dot LemonSwiper--dot"></text>
                <text class="dot LemonSwiper--dot"></text>
                <text class="dot LemonSwiper--dot"></text>
            </view>
        </view>
    </view>
    <view is="pages/index/componenets/CategoryPanel">
        <view class="category CategoryPanel--category">
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-266 sk-text">居家</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-804 sk-text">锦鲤</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-490 sk-text">服饰</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-496 sk-text">母婴</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-207 sk-text">个护</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-425 sk-text">严选</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-203 sk-text">数码</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-388 sk-text">运动</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-347 sk-text">杂项</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-920 sk-text">品牌</text>
            </navigator>
        </view>
    </view>
    <view is="pages/index/componenets/HotPanel">
        <view class="panel HotPanel--panel hot HotPanel--hot">
            <view class="item HotPanel--item">
                <view class="title HotPanel--title">
                    <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-786 sk-text">特惠推荐</text>
                    <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-187 sk-text">精选全攻略</text>
                </view>
                <navigator class="cards HotPanel--cards" hover-class="none">
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
            <view class="item HotPanel--item">
                <view class="title HotPanel--title">
                    <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-968 sk-text">爆款推荐</text>
                    <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-628 sk-text">最受欢迎</text>
                </view>
                <navigator class="cards HotPanel--cards" hover-class="none">
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
            <view class="item HotPanel--item">
                <view class="title HotPanel--title">
                    <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-556 sk-text">一站买全</text>
                    <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-716 sk-text">精心优选</text>
                </view>
                <navigator class="cards HotPanel--cards" hover-class="none">
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
            <view class="item HotPanel--item">
                <view class="title HotPanel--title">
                    <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-285 sk-text">新鲜好物</text>
                    <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-649 sk-text">生活加分项</text>
                </view>
                <navigator class="cards HotPanel--cards" hover-class="none">
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
        </view>
    </view>
    <view is="components/LemonGuess" class="r">
        <view class="caption LemonGuess--caption">
            <text class="text LemonGuess--text sk-pseudo sk-pseudo-circle"></text>
        </view>
        <view class="guess LemonGuess--guess"></view>
        <view class="loading-text LemonGuess--loading-text"></view>
    </view>
</template>

<style lang="scss">
// H5端、APP端 默认开启 scoped 样式隔离，导致组件基础样式无效
/* #ifdef H5 || APP-PLUS */
@import '@/components/styles/LemonSwiper.scss';
@import './styles/CategoryPanel.scss';
@import './styles/HotPanel.scss';
/* #endif */

.sk-transparent {
    color: transparent !important;
  }
.sk-text-6-2500-780 {
    background-image: linear-gradient(transparent 6.2500%, #EEEEEE 0%, #EEEEEE 93.7500%, transparent 0%) !important;
    background-size: 100% 27.9070rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-14-2857-255 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.0698rpx;
    position: relative !important;
  }
.sk-text-14-2857-266 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-804 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-490 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-496 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-207 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-425 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-203 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-388 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-347 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-920 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-786 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.9535rpx;
    position: relative !important;
  }
.sk-text-14-2857-187 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-text-14-2857-968 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.9535rpx;
    position: relative !important;
  }
.sk-text-14-2857-628 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-text-14-2857-556 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.9535rpx;
    position: relative !important;
  }
.sk-text-14-2857-716 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-text-14-2857-285 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.9535rpx;
    position: relative !important;
  }
.sk-text-14-2857-649 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-image {
    background: #EFEFEF !important;
  }
.sk-pseudo::before, .sk-pseudo::after {
      background: #EFEFEF !important;
      background-image: none !important;
      color: transparent !important;
      border-color: transparent !important;
    }
.sk-pseudo-rect::before, .sk-pseudo-rect::after {
      border-radius: 0 !important;
    }
.sk-pseudo-circle::before, .sk-pseudo-circle::after {
      border-radius: 50% !important;
    }
.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
  }

</style>