import type { LoginResult } from '@/types/member'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useMemberStore = defineStore(
  'member',
  () => {
    // 会员信息
    const profile = ref<LoginResult>()
    // 城市信息
    const fullLocationCode = ref<[string, string, string]>(['', '', ''])

    // 保存会员信息，登录时使用
    const setProfile = (val: LoginResult) => {
      profile.value = val
    }

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined
    }

    // 保存会员地区code，修改地区时使用
    const setFullLocationCode = (val: [string, string, string]) => {
      fullLocationCode.value = val;
    }

    // 记得 return
    return {
      profile,
      fullLocationCode,
      setProfile,
      clearProfile,
    }
  },
  //持久化
  {
    //网页端方案
    // persist: true,
    //小程序端配置
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key);
        },
        setItem(key, value) {
          uni.setStorageSync(key, value);
        },
      }
    }
  },
)
