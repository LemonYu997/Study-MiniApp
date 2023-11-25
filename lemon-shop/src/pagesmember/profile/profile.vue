<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <navigator open-type="navigateBack" class="back icon-left" hover-class="none"></navigator>
      <view class="title">个人信息</view>
    </view>
    <!-- 头像 -->
    <view class="avatar">
      <view @tap="onAvatarChange" class="avatar-content">
        <image class="image" :src="profile?.avatar" mode="aspectFill" />
        <text class="text">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">{{ profile?.account }}</text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <!-- 使用 v-model 双向绑定，注意需要提供初始值，否则undefied报错 -->
          <input class="input" type="text" placeholder="请填写昵称" v-model="profile!.nickname" />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="onGenderChange">
            <label class="radio">
              <radio value="男" color="#27ba9b" :checked="profile?.gender === '男'" />
              男
            </label>
            <label class="radio">
              <radio value="女" color="#27ba9b" :checked="profile?.gender === '女'" />
              女
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">生日</text>
          <picker @change="onBirthdayChange" class="picker" mode="date" start="1900-01-01" :end="new Date()" :value="profile?.birthday">
            <view v-if="profile?.birthday">{{ profile.birthday }}</view>
            <view class="placeholder" v-else>请选择日期</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">城市</text>
          <picker @change="onFullLocationChange" class="picker" mode="region" :value="profile?.fullLocation?.split(' ')">
            <view v-if="profile?.fullLocation">{{ profile.fullLocation }}</view>
            <view class="placeholder" v-else>请选择城市</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">职业</text>
          <input class="input" type="text" placeholder="请填写职业" v-model="profile!.profession" />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button class="form-button" @tap="onSubmit">保 存</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { getMemberProfileApi, putMemberProfileApi } from '@/services/profile';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import type { ProfileDetail, Gender } from "@/types/member"
import { useMemberStore } from '@/stores';

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

//用户信息 修改个人信息需提供初始值，防止undefined报错
const profile = ref<ProfileDetail>({} as ProfileDetail)

//本地状态-个人信息
const memberStore = useMemberStore();

//获取个人信息
const getMemberProfileData = async () => {
  const res = await getMemberProfileApi()
  profile.value = res.result;
}

onLoad(() => {
  getMemberProfileData();
}) 

//修改头像 头像上传
const onAvatarChange = () => {
  //调用拍照、选择图片
  uni.chooseMedia({
    count: 1,
    //文件类型
    mediaType: ['image'],
    success:(res)=>{
      //本地路径
      const { tempFilePath } = res.tempFiles[0]
      //文件上传
      uni.uploadFile({
        url: '/member/profile/avatar',
        name: 'file',
        filePath: tempFilePath,
        success: (res) => {
          if (res.statusCode === 200) {
            //获取上传成功的头像url
            const avatar = JSON.parse(res.data).result.avatar
            //更新当前页面展示的头像
            profile.value!.avatar = avatar
            //更新store中的个人信息
            memberStore.profile!.avatar = avatar;
            //成功提示
            uni.showToast({
              icon: 'none',
              title: '更新成功'
            })
          } else { 
            //失败提示
            uni.showToast({
              icon: 'error',
              title: '出现错误'
            })
          }
        } 
      })
    },
  })
}

// 修改性别
const onGenderChange:UniHelper.RadioGroupOnChange = (event) => {
  profile.value.gender = event.detail.value as Gender
}

//修改生日
const onBirthdayChange:UniHelper.DatePickerOnChange = (event) => {
  profile.value.birthday = event.detail.value
}

//修改城市
const onFullLocationChange:UniHelper.RegionPickerOnChange = (event) => {
  //修改前端界面 转换为字符串
  profile.value.fullLocation = event.detail.value.join(" ")
  //将城市编码放入store
  memberStore.fullLocationCode = event.detail.code!;
}

//点击保存，提交表单
const onSubmit = async () => {
  const {nickname, gender, birthday, profession} = profile.value;
  const res = await putMemberProfileApi({
    nickname,
    gender,
    birthday,
    provinceCode: memberStore.fullLocationCode[0],
    cityCode: memberStore.fullLocationCode[1],
    countyCode: memberStore.fullLocationCode[2],
    profession
  })
  //更新store中的昵称
  memberStore.profile!.nickname = res.result.nickname
  //成功提示
  uni.showToast({
    icon: 'none',
    title: '保存成功'
  })
  //等提示显示完后
  setTimeout(() => {
    //返回上一页
    uni.navigateBack();
  }, 500)
}
</script>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}

// 导航栏
.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

// 表单
.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
  }
}
</style>