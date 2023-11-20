# Study-MiniApp
小程序+Vue3+Ts+UniAPP

**真实项目代码在 lemon-shop中**

参考学习视频：https://www.bilibili.com/video/BV1Bp4y1379L
参考学习文档：https://megasu.gitee.io/uni-app-shop-note/rabbit-shop/

Vue3官方文档：https://cn.vuejs.org/guide/introduction.html
小程序官方文档：https://developers.weixin.qq.com/miniprogram/dev/framework/
Uni-APP官方文档：https://uniapp.dcloud.net.cn/
Hbuilder X官方文档：https://hx.dcloud.net.cn/

Uni-App创建方式：

- 通过Hbuilder X创建
- 通过命令行创建（不必使用Hbuilder X）

使用命令行创建uni-app项目: vue3+ts

```shell
npx degit dcloudio/uni-preset-vue#vite-ts 项目名称
```
无法创建模板文件时访问https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite-ts.zip下载

## 启动和运行

1、在mainfest.json中添加微信小程序的APPID

2、安装依赖：
```shell
pnpm install 
```

3、开发模式启动（热更新）
```shell
npm run dev:mp-weixin
```

4、导入微信开发工具
导入时选择文件夹：`dist/dev/mp-weixin`

## ts类型校验

1、安装类型声明文件
```shell
cnpm i -D miniprogram-api-typings @uni-helper/uni-app-types
```

2、配置tsconfig.json
```json
{
  "compilerOptions": {
    //...
    "types": [
        "@dcloudio/types", 
        "miniprogram-api-typings", 
        "@uni-helper/uni-app-types"
    ]
  },
  "vueCompilerOptions": {
    // experimentalRuntimeMode 已废弃，现调整为 nativeTags，请升级 Volar 插件至最新版本
    "nativeTags": ["block", "component", "template", "slot"]
  },
}
```

## uni-ui

安装uni-ui：
```shell
npm i @dcloud/uni-ui
```

在pages.info配置自动导入组件
```json
{
  //组件自动导入规则
  "easycom": {
    //是否开启自动扫描
    "autoscan": true,
    //以正则方式自定义组件匹配规则
    "custom": {
      // uni-ui 规则如下配置
      "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
    }
  },
}
```

安装类型声明文件：
```shell
npm i -D @uni-helper/uni-ui-types
```

在tsconfig.json中配置类型声明文件：
```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": [
      "@dcloudio/types", // uni-app API 类型
      "miniprogram-api-typings", // 原生微信小程序类型
      "@uni-helper/uni-app-types", // uni-app 组件类型
      "@uni-helper/uni-ui-types" // uni-ui 组件类型  
    ]
  },
  // vue 编译器类型，校验标签类型
  "vueCompilerOptions": {
    "nativeTags": ["block", "component", "template", "slot"]
  }
}
```


## Pinia状态管理

官方文档：https://pinia.vuejs.org/zh/
持久化Persist文档：https://prazdevs.github.io/pinia-plugin-persistedstate/

持久化插件：
```shell
npm install --save pinia-plugin-persistedstate
```