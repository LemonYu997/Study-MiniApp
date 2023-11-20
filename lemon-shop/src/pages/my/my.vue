<script setup lang="ts">
import { useMemberStore } from '@/stores'
//导入自定义请求拦截器
import { http } from '@/utils/http'

const memberStore = useMemberStore()

//异步请求 获取用户信息
const getData = async () => {
  //定义res.data.result的返回类型
  const res = await http({
    method: 'GET',
    url: '/member/profile',
  })
  console.log('获取数据成功', res.result);
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button @tap="
      memberStore.setProfile({
        nickname: '黑马先锋',
        token: '12345'
      })
    " size="mini" plain type="primary">
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">
      清理用户信息
    </button>
    <button @tap="getData" size="mini" plain type="primary">
      测试请求
    </button>
  </view>
</template>

<style lang="scss">
//
</style>
