//组合式函数

import type { LemonGuessInstance } from "@/types/components"
import { ref } from "vue"

/**
 * 猜你喜欢组合式函数  方便复用
 */
export const useGuessList = () => {
    //获取猜你喜欢实例
    const guessRef = ref<LemonGuessInstance>()

    //滚动触底事件
    const onScrollToLower = () => {
        guessRef.value?.getMore()
    }

    //返回 ref 和事件处理函数
    return {
        guessRef,
        onScrollToLower
    }
}