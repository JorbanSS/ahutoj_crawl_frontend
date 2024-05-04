# AHUT OJ front-end V2

A crawl front-end.

## 相关仓库

前端部分 [AHUT OJ front-end V2](https://github.com/JorbanSS/AHUT-OJ-front-end-V2)

后端部分 [ahutoj](https://github.com/ximoyuxiao/ahutoj/tree/docker)

爬虫后端部分 [AHUT_Crawl](https://github.com/JorbanSS/AHUT_Crawl)

## 技术架构

技术周边: [Node.js](https://nodejs.org/en) \ [Vue 3](https://cn.vuejs.org/) \ [Vite](https://cn.vitejs.dev/) \ [TypeScript](https://www.typescriptlang.org/) \ Scss \ Pinia \ Axios \ Vue-Router

UI: [tailwindcss](https://www.tailwindcss.cn/) \ [daisyUI](https://daisyui.com/) \ [IconPark](https://iconpark.oceanengine.com/official)

## 配置环境

1. 安装 [nvm](https://github.com/nvm-sh/nvm/releases)

```sh
wget https://github.com/nvm-sh/nvm/archive/refs/tags/v0.39.7.tar.gz

tar -xzvf v0.39.7.tar.gz

cd nvm-0.39.7

./install.sh

nvm --version  # 检验是否安装成功
```

2. 安装 Node.js

```sh
nvm ls  # 查看可安装版本

nvm install 20.11.1

nvm use 20.11.1

nvm version  # 查看当前使用的 Node.js 版本
```

3. 安装 pnpm

```sh
npm install pnpm
```

在根目录下创建 `.npmrc` 的文件

```
# pnpm 配置
shamefully-hoist=true
auto-install-peers=true
strict-peer-dependencies=false
```

将 package-lock.json 转成 pnpm-lock.yaml 文件，保证依赖版本不变

```sh
pnpm import

pnpm install
```

4. 使用 Vite 构建

```sh
pnpm create vite@latest

pnpm install  # 补全依赖
```

5. 安装其余环境

```sh
pnpm install vue-router@4

pnpm install pinia

pnpm install sass

# pnpm install vite-plugin-vue-setup-extend -D

pnpm install axios

pnpm install -D ts-node
```

## 安装组件

1. 安装 tailwindcss

```sh
pnpm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
```

`tailwind.config.js` 文件内加上所有的模板文件

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

`vite.config.ts` 文件内配置 `preprocessorOptions`

```ts
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/base.scss";',
      },
    },
  },
})
```

`main.ts` 文件内引入 `tailwind.scss` 文件

```ts
@import "./tailwind.scss";
```

创建 `tailwind.scss` 文件

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

2. 安装 daisyUI

```sh
pnpm i -D daisyui@latest
```

在 tailwind.config.js 文件里追加 daisyUI 的设置

```js
module.exports = {
  plugins: [require("daisyui")],
}
```

3. 安装其余组件

```sh
pnpm install @icon-park/vue-next --save

pnpm i notivue

pnpm install apexcharts --save

pnpm install --save vue3-apexcharts

# pnpm install v-calendar@next @popperjs/core

# pnpm install vue-draggable-plus

# pnpm i image-conversion --save

# pnpm add vue-gtag-next

# pnpm i @guolao/vue-monaco-editor

# pnpm install --save vue-clipboard3

# pnpm install --save canvas-confetti  # 五彩纸屑
# pnpm i --save-dev @types/canvas-confetti

# pnpm install spark-md5
# pnpm install @types/spark-md5 -D
```

新建 `base.scss` 文件

`base.scss` 中添加

```scss
@import '@icon-park/vue/styles/index.css';
```

4. 安装 AutoAnimate

```sh
# pnpm install @formkit/auto-animate
```

使用 `v-auto-animate` 作用于其父元素对象上

## 其他一些琐碎的 

在 `vite.config.ts` 添加如下语句以支持 `<script lang="ts" setup name="Main">` 中 `name=""` 的语法

```ts
// import VueSetupExtend from 'vite-plugin-vue-setup-extend'
```

修改如下来实现用 `@/` 访问项目根目录

`tsconfig.json` 添加如下

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

`vite.config.ts` 添加如下

```ts
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
```

## 运行项目

```sh
pnpm run dev
```