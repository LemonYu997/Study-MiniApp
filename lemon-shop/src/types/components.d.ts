// src/types/components.d.ts
import type LemonGuess from '@/components/LemonGuess.vue'
import LemonSwiper from '../components/LemonSwiper.vue'
declare module 'vue' {
    export interface GlobalComponents {
        LemonSwiper: typeof LemonSwiper,
        LemonGuess: typeof LemonGuess
    }
}

//组件实例类型
export type LemonGuessInstance = InstanceType<typeof LemonGuess>