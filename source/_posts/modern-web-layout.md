---
title: CSS3 笔记（现代网页布局）
tags: CSS3
categories: 前端学习
excerpt: 弹性布局、网格布局、定位布局与多列布局等
abbrlink: c9e3e372
date: 2025-11-29 14:18:37
---
## display模式转换
block, inline, inline-block

> 行内块元素中间有空白缝隙
给父元素字号改为0可以去掉
适合**对间距要求不高**的情况

## 弹性盒布局
核心：
1. 父控子（容器、项目）
2. 主轴和交叉轴

父盒子设置`display: flex;`
子盒子按照**主轴**方式排列，**给定大小**、拉伸、压缩

### justify-content
主轴上的对齐方式
属性值：
- flex-start, flex-end, center
- space-between 两端对齐
- space-around -A--B--C-
- space-evenly 平均分配

### align-items
交叉轴上的对齐方式（单行）
属性值：
- flex-start, flex-end, center
- stretch 需子元素无固定高度

### flex-direction
主轴方向
属性值：row, **column**
> a给了flex布局后，可以直接设置宽度和高度

### flex-wrap
换行方式
属性值：nowrap, wrap

### align-content
交叉轴上的对齐方式（多行）
属性值与justify-content的相同

### flex
尺寸 写到子元素
flex-grow, flex-shrink, flex-basis的简写
语法：`flex: 1;`
优先级比width和height高

### gap
间距 写到父元素
语法：`gap: 20px;`

解决图片底部空白缝隙问题：
1. 转换为块级元素 `display: block;`
2. 改成不是基线对齐 `vertical-align: middle;`

## 定位布局
| 定位类型          | 脱离文档流 | 定位基准           | 典型场景                 |
| ----------------- | ---------- | ------------------ | ------------------------ |
| 相对定位 relative | 否         | 自身正常位置       | 微调元素、子绝父相       |
| 绝对定位 absolute | 是         | 最近定位祖先或视口 | 弹窗、下拉菜单、悬浮元素 |
| 固定定位 fixed    | 是         | 视口               | 固定导航栏、返回顶部按钮 |
| 粘性定位 sticky   | 否         | 视口或滚动祖先     | 吸顶导航栏、侧边栏固定   |
| 不定位 static     | 否         | 默认文档流         | 普通元素布局             |

偏移属性：top、bottom、left、right
优先级：top覆盖bottom, left覆盖right
粘性定位至少指定一个方位名词

> 子绝父相：子元素绝对定位，父元素相对定位

行内元素加了定位后可以直接给宽度和高度

### 层叠顺序 z-index
语法：`z-index: 数值;`
数值越大，层级越高
默认auto，后出现的元素覆盖前者
仅对定位元素有效

## 网格布局
核心：创建网格，放入元素
父盒子设置`display: grid;`
单行用flex，多行或响应式用grid

### 创建网格轨道
创建列轨道：`grid-template-columns: 100px 100px 100px;`
创建行轨道：`grid-template-rows: 100px 100px 100px;`
列轨道两端对齐：`justify-content: space-between;`
行轨道两端对齐：`align-content: space-between;`

### 项目对齐方式
水平对齐：justify-items
垂直对齐：align-items
start, end, center, stretch

### 跨单元格
跨行 grid-row，跨列 grid-column
语法1：`grid-column: 1 / 3;`
语法2：`grid-column: 1 / span 2;`

### 自动填充
grid-auto-flow
row先行后列，column先列后行

### 响应式布局
自动填充并设置最小值：`repeat(auto-fill, minmax(100px, 1fr))`

fr单位，类似`flex: 1;`

图片缩放
```css
object-fit: cover;
object-position: center;
```

## 多列布局
自动分割
column-count, column-gap, column-rule

解决底部元素被切断问题：
子元素设置`break-inside: avoid-column;`

## 鼠标样式与CSS属性书写顺序
鼠标样式 cursor
pointer, not-allowed

CSS属性书写顺序建议：
布局、盒模型、视觉、交互、其他

## 学习视频
[2025版pink老师最新AI+前端入门教程](https://www.bilibili.com/video/BV1MvaVzUEuz)
