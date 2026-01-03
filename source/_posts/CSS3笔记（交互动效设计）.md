---
title: CSS3 笔记（交互动效设计）
tags: CSS3
categories: 前端学习
excerpt: 2D变换、3D变换、过渡、动画等
abbrlink: 71028ec5
date: 2025-12-05 20:50:01
---
## 2D变换
transform
平移translate、旋转rotate、缩放scale、倾斜skew
复合写法，从右往左执行：`transform: translate() rotate();`

平移的单位是百分比时，相对元素自身尺寸
```css
top: 50%;
left: 50%;
translate(-50%, -50%);
```

行内元素无法直接旋转，需要转换 

transform-origin设置中心点

## 过渡
过渡属性 **持续时间** 速度曲线 延迟时间
`transition: all 1s linear 1s;`

速度曲线参数：ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier

推荐网站：
[可视化编辑贝塞尔曲线](https://cubic-bezier.com/)
[获取常用缓动函数的预设值](https://easings.net/)

## 3D变换
左手法则
旋转 rotateX, rotateY
位移 translateZ, translate3d

透视
给父元素：`perspective: 1000px;`
或给子元素：`transform: perspective(1000px) rotateX(45deg);`

控制元素背面的可见性：`backface-visibility: hidden;`

开启3D空间
给父元素：`transform-style: preserve-3d;`

## 动画
1. 定义动画 关键帧`@keyframes`, from, to
2. 使用动画 `animation: 动画名称 动画时长;`

animation属性完整写法：`animation: 动画名称 动画时长 速度曲线 延迟时间 播放次数 播放方向 执行完毕状态`
无限循环infinite，交替alternate
暂停动画`animation-play-state: paused`，单独写
逐帧动画`steps(步数)`，配合精灵图

新知识：
定位盒子设置上下左右距离：`inset: 3px;`
父选择器 `:has()`
背景模糊效果：`backdrop-filter: blur(10px);`
倒影效果：`box-reflect: 倒影方向 倒影距离 倒影图像;`，前面需要加`-webkit-`
否定选择器 `:not()`
