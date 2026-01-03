---
title: CSS3 笔记（前沿技术拓展）
tags: CSS3
categories: 前端学习
excerpt: SVG图片、动画时间线、CSS变量与计算函数等
abbrlink: 77fbe856
date: 2025-12-10 23:25:26
---
## SVG图片
矢量图形
填充fill，描边stroke
获取路径总长度getTotalLength()
画笔效果：让stroke-dashoffset的值变小

## 裁剪clip-path
`clip-path: 内置几何形;`
图片切换效果

[可视化工具](https://tools.jb51.net/static/api/css3path/index.html)

裁剪文字范围：`background-clip: text;`
旋转一圈：`rotate(1turn)`

## 滤镜filter
高斯模糊blur、灰度grayscale、阴影drop-shadow

## 背景滤镜background-filter
毛玻璃效果
```css
background: transparent;
backdrop-filter: saturate(150%) blur(28px);
```

网格状效果
```css
background-image: radial-gradient(transparent 1px, #fff 1px);
background-size: 4px 4px;
backdrop-filter: saturate(50%) blur(4px);
```

## 动画时间线
滚动时间线：`animation-timeline: scroll();`
视图时间线：`animation-timeline: view();`

## CSS变量
动态存储、复用值
声明：`--变量名: 值;`
使用：`var(--变量名)`
全局变量：`:root {}`
使用场景：主题颜色

## 计算函数
calc() 可以执行数学运算
注意：符号左右两侧要保留空格
使用场景：计算宽度、执行不同的延迟时间

视口单位 vw, vh 相对可视窗口
百分比相对父元素
