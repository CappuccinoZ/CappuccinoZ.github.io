---
title: CSS3 笔记（CSS3核心技术）
tags: CSS3
categories: 前端学习
excerpt: CSS选择器、CSS优先级、盒子模型等
abbrlink: bae36060
date: 2025-11-20 22:56:01
---

学习视频：[2025版pink老师最新AI+前端入门教程 (P23-P54)](https://www.bilibili.com/video/BV1MvaVzUEuz)

## CSS分类
CSS：层叠样式表 显示外观
层叠性 就近原则

按书写位置分为：
- 内联样式表：标签内部，当前标签
- 内部样式表：head标签中，当前页面
- 外部样式表：CSS文件，整个网站

## 基础选择器
```css
div {
  color: pink;
}
```
注释：`/* 注释内容 */`，快捷键 `Ctrl + /`

类型选择器：标签名
类选择器：`.`开头，class属性，多次
id选择器：`#`开头，id属性，唯一
通配符选择器：`*`，所有


## 关系选择器
**后代选择器**：`A B`
子代选择器：`A>B`
邻接兄弟选择器：`A+B`
通用兄弟选择器：`A~B`

## CSS文本样式
### 字体样式
color：关键字，十六进制，rgb格式
font-family：无衬线字体
font-size：像素px
font-style：normal, italic
font-weight：400, 700, normal, bold
text-decoration：none, underline, overline, line-through

### 文本布局
text-align：left, right, center, justify(两端对齐)
text-indent(简写ti)：本元素的文字大小em
> text-align和text-indent对行内元素无效

letter-spacing：数值
line-height：像素或倍数
> 行高等于盒子高度，可以让单行文本垂直居中对齐

### font简写
语法：`font: font-style font-weight font-size/line-height font-family;`
有严格顺序，font-size和font-family必须写，其他可以省略

### 继承性
继承 字体、颜色、文本对齐等
优先自己

## 分组选择器
组合，逗号`,`

## 伪类选择器
特定状态或结构位置，冒号`:`
### 状态伪类
链接伪类 a:link, a:visited, **a:hover**, a:active (LVHA顺序)
用户行为伪类 :hover, :focus

### 结构伪类
:first-child, :last-child, :nth-child(n)
n的取值：数字、关键字（odd, even）、公式（3n, n+2, -n+3）
> 让表格和单元格的相邻边框合并：`border-collapse: collapse;`

### 表单伪类
:disabled, :checked

## 伪元素选择器
双冒号`::`
### 选择特定部分
::first-line, ::first-letter, **::placeholder**

### 插入内容
::before, ::after
必须有content属性

## 属性选择器
[属性], [属性=值]
开头[属性^=值] ,结尾[属性$=值] ,包含[属性*=值]
值不能纯数字

```css
input[type="text"],
input[type="password"] {
  /* 去掉轮廓线 */
  outline: none;
}
```

## CSS优先级
优先级相等时，用最后声明的样式
| 选择器类型   | 权重值         |
| ------------ | -------------- |
| !important   | 无限大（慎用） |
| 内联样式     | (1,0,0,0)      |
| ID选择器     | (0,1,0,0)      |
| 类/属性/伪类 | (0,0,1,0)      |
| 类型/伪元素  | (0,0,0,1)      |
| 通配符/继承  | (0,0,0,0)      |

> CSS三大特性：继承性、层叠性、优先级

## 盒子模型
**区块盒子block**、行内盒子inline
盒子模型组成：盒子内容、内边距、边框、外边距

### 边框border
语法：`border: 边框粗细 边框样式 边框颜色;`
边框样式：solid, dashed, dotted
单边设置：根据方位名词 top bottom left right

**圆角边框border-radius**
圆形：高度的一半或者50%
胶囊按钮：宽度或者高度的一半
| 顺时针              | 左上1 | 右上2 | 右下3 | 左下4 | 说明               |
| ------------------- | ----- | ----- | ----- | ----- | ------------------ |
| 10px                | 10px  | 10px  | 10px  | 10px  | 都用1的值          |
| 10px 20px           | 10px  | 20px  | 10px  | 20px  | 3用1的值，4用2的值 |
| 10px 20px 30px      | 10px  | 20px  | 30px  | 20px  | 4用2的值           |
| 10px 20px 30px 40px | 10px  | 20px  | 30px  | 40px  |                    |

### 内边距padding
边框和内容区域之间距离
顺时针：上 右 下 左

一个值：上下左右
两个值：上下 左右
三个值：上 左右 下
四个值：上 右 下 左

### 外边距margin
顺时针：上 右 下 左
> 行内元素 左右外边距生效，上下外边距无效，宽度和高度无效

**水平居中**
区块元素 宽度，左右外边距为auto
行内元素 套一个块级盒子，`text-align: center;`

**外边距折叠**
区块元素 上下外边距 最大

**外边距塌陷**
区块元素 塌陷
解决方案：父盒子上边框、上内边距、`overflow: hidden;`

### 尺寸计算
box-sizing
- content-box：默认值，不包含padding和border
- border-box：包含内容、padding和border

### 盒子背景
background-color：颜色名称、十六进制、RGB、透明度
background-image：url(image.jpg)
background-repeat：repeat, no-repeat, repeat-x, repeat-y
background-position：方位名词或者px、%
background-size：auto、cover、contain或者px、%
background-attachment：scroll, fixed(固定的 相对于当前视口)

复合写法（顺序无关）：`background: 颜色 图片 重复 固定 位置/尺寸;`

### 背景渐变
线性渐变linear-gradient(方向, 颜色1 位置, 颜色2 位置...)
径向渐变radial-gradient(形状, 颜色1, 颜色2...)

文字背景线性渐变
```css
background: linear-gradient(to right, pink, red);
-webkit-background-clip: text;
background-clip: text; 
-webkit-text-fill-color: transparent; 
```

### 盒子阴影
box-shadow: x y 模糊距离 扩散距离 阴影颜色;

### 过渡
写到盒子身上 `transition: all .3s;`

### 样式初始化
简单重置：
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* 重置列表样式 */
ul,
ol {
  list-style: none;
}
/* 重置链接样式 */
a {
  text-decoration: none;
}
```

Normalize.css
引入Normalize.css：`<link rel="stylesheet" href="./css/Normalize.css">`
官网下载地址：https://necolas.github.io/normalize.css/

### 显示省略号
单行文字溢出显示省略号：
```css
/* 溢出隐藏 */
overflow: hidden;
/* 文本溢出显示省略号 */
text-overflow: ellipsis;
/* 强制文字一行显示，不换行 */
white-space: nowrap;
```

多行文字溢出显示省略号：
```css
/* 修改盒子高度正好显示 */
height: 48px;
/* 旧版弹性盒子布局 */
display: -webkit-box;
/* 文本垂直排列 */
-webkit-box-orient: vertical;
/* 限制显示行数 */
-webkit-line-clamp: 2;
overflow: hidden;
text-overflow: ellipsis;
```

## 字体图标
1. 下载字体图标文件
图标库：
[Font Awesome](https://fontawesome.com/)
[Bootstrap Icons](https://icons.getbootstrap.com/)
[icomoon](https://icomoon.io/)
[iconfont](https://www.iconfont.cn/)
2. 引入html文件中
3. 使用字体图标

## 精灵图
优势：减少HTTP请求、提升性能、统一管理
背景图片 背景定位(background-position)移动位置
