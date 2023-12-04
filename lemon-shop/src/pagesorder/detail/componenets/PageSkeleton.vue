<template name="skeleton">
    <view class="sk-container">
        <view class="navbar" style="padding-top:44px">
            <view class="wrap">
                <navigator class="back icon-home sk-pseudo sk-pseudo-circle" open-type="switchTab"></navigator>
                <view class="title sk-transparent sk-text-14-2857-707 sk-text">订单详情</view>
            </view>
        </view>
        <view>
            <view class="overview sk-image" style="padding-top:64px">
                <view class="status icon-clock sk-transparent sk-text-0-0000-592 sk-text sk-pseudo sk-pseudo-circle">等待付款
                </view>
                <view class="tips sk-transparent">
                    <text class="money sk-transparent sk-text-0-0000-615 sk-text">应付金额: ¥ 99.00</text>
                    <text class="time sk-transparent sk-text-0-0000-814 sk-text">支付剩余</text> 00 时 29 分 59 秒
                </view>
                <view class="button sk-transparent sk-text-28-1250-228 sk-text" style="background-position-x: 50%;">待付款
                </view>
            </view>
            <view class="shipment">
                <view class="item sk-image">
                    <view class="message sk-transparent sk-text-14-2857-304 sk-text"> 您已在广州市天河区黑马程序员完成取件，感谢使用菜鸟驿站，期待再次为您服务。
                    </view>
                    <view class="date sk-transparent sk-text-14-2857-387 sk-text"> 2023-04-14 13:14:20 </view>
                </view>
                <view class="locate sk-image">
                    <view class="user sk-transparent sk-text-14-2857-718 sk-text"> 张三 13333333333 </view>
                    <view class="address sk-transparent sk-text-14-2857-262 sk-text"> 广东省 广州市 天河区 黑马程序员 </view>
                </view>
            </view>
            <view class="goods">
                <view class="item">
                    <navigator class="navigator" hover-class="none">
                        <image class="cover sk-image"></image>
                        <view class="meta">
                            <view class="name ellipsis sk-transparent sk-text-14-2857-398 sk-text">ins风小碎花泡泡袖衬110-160cm
                            </view>
                            <view class="type sk-transparent sk-text-22-2222-40 sk-text">藏青小花， 130</view>
                            <view class="price">
                                <view class="actual">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="sk-transparent sk-text-14-2857-454 sk-text">99.00</text>
                                </view>
                            </view>
                            <view class="quantity sk-transparent sk-opacity">x1</view>
                        </view>
                    </navigator>
                    <navigator class="navigator" hover-class="none">
                        <image class="cover sk-image"></image>
                        <view class="meta">
                            <view class="name ellipsis sk-transparent sk-text-14-2857-228 sk-text">ins风小碎花泡泡袖衬110-160cm
                            </view>
                            <view class="type sk-transparent sk-text-22-2222-558 sk-text">藏青小花， 130</view>
                            <view class="price">
                                <view class="actual">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="sk-transparent sk-text-14-2857-198 sk-text">99.00</text>
                                </view>
                            </view>
                            <view class="quantity sk-transparent sk-opacity">x1</view>
                        </view>
                    </navigator>
                    <view class="action">
                        <view class="button primary sk-transparent sk-text-28-3333-874 sk-text"
                            style="background-position-x: 50%;">申请售后</view>
                        <navigator class="button sk-transparent sk-text-28-3333-953 sk-text"
                            style="background-position-x: 50%;"> 去评价 </navigator>
                    </view>
                </view>
                <view class="total">
                    <view class="row">
                        <view class="text sk-transparent sk-text-0-0000-175 sk-text">商品总价: </view>
                        <view class="symbol sk-transparent sk-text-0-0000-501 sk-text sk-pseudo sk-pseudo-circle">99.00
                        </view>
                    </view>
                    <view class="row">
                        <view class="text sk-transparent sk-text-0-0000-361 sk-text">运费: </view>
                        <view class="symbol sk-transparent sk-text-0-0000-184 sk-text sk-pseudo sk-pseudo-circle">10.00
                        </view>
                    </view>
                    <view class="row">
                        <view class="text sk-transparent sk-text-0-0000-806 sk-text">应付金额: </view>
                        <view class="symbol primary sk-transparent sk-text-0-0000-988 sk-text sk-pseudo sk-pseudo-circle">
                            109.00</view>
                    </view>
                </view>
            </view>
            <view class="detail">
                <view class="title sk-transparent sk-text-0-0000-819 sk-text">订单信息</view>
                <view class="row">
                    <view class="item sk-transparent"> 订单编号: 1731285057269665793
                        <text class="copy sk-transparent sk-text-0-0000-674 sk-text">复制</text>
                    </view>
                    <view class="item sk-transparent sk-text-0-0000-120 sk-text">下单时间: 2023-04-14 13:14:20</view>
                </view>
            </view>
            <view class="toolbar" style="padding-bottom:34px">
                <view class="button primary sk-transparent sk-text-14-2857-30 sk-text"> 去支付 </view>
                <view class="button sk-transparent sk-text-14-2857-436 sk-text"> 取消订单 </view>
            </view>
        </view>
    </view>
</template>

<style>
.sk-transparent {
    color: transparent !important;
}

.sk-text-14-2857-707 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-0-0000-592 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 36.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-615 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 28.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-814 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 28.0000rpx;
    position: relative !important;
}

.sk-text-28-1250-228 {
    background-image: linear-gradient(transparent 28.1250%, #EEEEEE 0%, #EEEEEE 71.8750%, transparent 0%) !important;
    background-size: 100% 64.0000rpx;
    position: relative !important;
}

.sk-text-14-2857-304 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-387 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-718 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-262 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-398 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-22-2222-40 {
    background-image: linear-gradient(transparent 22.2222%, #EEEEEE 0%, #EEEEEE 77.7778%, transparent 0%) !important;
    background-size: 100% 43.2000rpx;
    position: relative !important;
}

.sk-opacity {
    opacity: 0 !important;
}

.sk-text-14-2857-454 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-228 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-22-2222-558 {
    background-image: linear-gradient(transparent 22.2222%, #EEEEEE 0%, #EEEEEE 77.7778%, transparent 0%) !important;
    background-size: 100% 43.2000rpx;
    position: relative !important;
}

.sk-text-14-2857-198 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-28-3333-874 {
    background-image: linear-gradient(transparent 28.3333%, #EEEEEE 0%, #EEEEEE 71.6667%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
}

.sk-text-28-3333-953 {
    background-image: linear-gradient(transparent 28.3333%, #EEEEEE 0%, #EEEEEE 71.6667%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-175 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-501 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-361 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-184 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-806 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-988 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 36.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-819 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 30.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-674 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 20.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-120 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
}

.sk-text-14-2857-30 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-436 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-image {
    background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
    background: #EFEFEF !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
    border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
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