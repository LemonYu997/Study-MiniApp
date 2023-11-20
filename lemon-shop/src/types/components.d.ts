// src/types/components.d.ts
import LemonSwiper from '../components/LemonSwiper.vue'
declare module 'vue' {
    export interface GlobalComponents {
        LemonSwiper: typeof LemonSwiper
    }
}