<template>
	<!-- 轮播图 https://uniapp.dcloud.net.cn/component/swiper.html
		indicator-dots: 指示点
		circular：循环播放，到末尾后回到初始
		autoplay：自动播放
	-->
	<swiper class="banner" indicator-dots circular :autoplay="false">
		<swiper-item v-for="item in pictures" :key="item.id">
			<!-- @tap 点击放大预览  -->
			<image @tap="onPreviewImage(item.url)" :src="item.url"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				//轮播图数据
				pictures: [
					{id: '1', url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_1.jpg"},
					{id: '2', url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_2.jpg"},
					{id: '3', url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_3.jpg"},
					{id: '4', url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_4.jpg"},
					{id: '5', url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_5.jpg"}
				]
			}
		},
		onLoad() {

		},
		methods: {
			//图片点击预览
			onPreviewImage(url) {
				// 将微信Api wx.previewImage 替换为Uni Api
				uni.previewImage({
					//需要预览的图片链接列表
					urls: this.pictures.map(v => v.url),
					//当前显示的图片链接
					current: url
				})
			}
		}
	}
</script>

<style>
	.banner, .banner image {
		width: 750rpx;
		height: 750rpx;
	}
</style>
