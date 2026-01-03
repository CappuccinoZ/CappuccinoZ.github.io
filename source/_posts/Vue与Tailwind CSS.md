---
title: Vue 与 Tailwind CSS
tags:
  - Vue
  - Tailwind CSS
excerpt: 创建Vue与Tailwind CSS项目
abbrlink: 6990c04a
date: 2025-09-20 13:17:18
---
## 运行环境与编辑器
- Node.js
官网：https://nodejs.org/zh-cn/download
- VS Code
官网：https://code.visualstudio.com/
国内下载vscode速度慢问题解决：https://zhuanlan.zhihu.com/p/112215618

## npm配置
```sh
# 查看npm配置
npm config list
# 设置npm镜像源
npm config set registry https://registry.npmmirror.com
# 查看版本
node -v
npm -v
# 更新npm
npm install npm -g
```

## 创建项目
```sh
# 创建Vue3项目
npm create vue@latest
# 打开项目文件夹
cd vue-project
# 安装依赖项
npm install
# 启动服务器
npm run dev
# 浏览器访问
o
```

## 安装Tailwind CSS
`npm install tailwindcss @tailwindcss/vite`

## 配置Vite插件
在`vite.config.ts`中添加插件：
1. 导入插件：`import tailwindcss from '@tailwindcss/vite'`
2. 在plugins列表中添加`tailwindcss()`

## 引入Tailwind CSS
- 打开`src`文件夹，新建`style.css`文件，添加内容：`@import "tailwindcss";`

- 编辑`main.ts`文件，添加内容：`import './style.css'`
或编辑`index.html`文件，添加内容：`<link href="/src/style.css" rel="stylesheet">`

- 通过在`App.vue`文件中编辑class使用Tailwind CSS

## vscode扩展
- 扩展：Vue Official
设置开启：Vue › Auto Insert: Dot Value
- 扩展：Tailwind CSS IntelliSense
设置开启：Tailwind CSS: Emmet Completions
