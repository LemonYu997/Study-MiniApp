<!-- 因为小程序的 tabBar页没有返回按钮，所以要复制一个普通页面给商品详情页跳转使用 -->
<template>
    <CartMain :style="{ paddingBottom: safeAreaInsets!.bottom + 'px' }" />
</template>

<script setup lang="ts">
import CartMain from './componenets/CartMain.vue'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()


console.log(safeAreaInsets);
</script>