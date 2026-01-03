---
title: CSS3 笔记（移动网页与响应网页开发）
tags: CSS3
categories: 前端学习
excerpt: 移动端适配与媒体查询等
abbrlink: ad27e791
date: 2026-01-03 21:22:20
---
## 视口标签
将页面宽度设置为**设备宽度**：
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

## 物理像素和CSS像素
设计稿用物理像素
前端开发用CSS像素

## 移动端适配方案
1. flex+vw
   1vw = 视窗宽度的1%
2. flex+rem
   1rem = 根元素的文字大小(font-size)
   通过Flexible.js动态修改

## 响应式布局
根据用户设备，自动调整布局和内容
一次设计，多端适配

## 媒体查询
```css
/* 当屏幕尺寸小于768像素，页面显示为红色 */
@media screen and (max-width: 768px) {
  body {
    background-color: red;
  }
}
```

## 小技巧
### 独立圆角属性
`border-bottom-left-radius: 150px 20px;`
两个值分别表示水平半径和垂直半径

### 移除移动端点击高亮
`-webkit-tap-highlight-color: rgba(0,0,0,0);`

### 自动填充
`grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));`

### SVG裁剪波浪效果
给clipPath指定id
再给被裁剪的盒子设置样式`clip-path: url(#id)`