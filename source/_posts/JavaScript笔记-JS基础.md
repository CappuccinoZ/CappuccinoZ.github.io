---
title: JavaScript 笔记（JS基础）
tags: JavaScript
categories: 前端学习
excerpt: JavaScript简介、变量、常量、数据类型等
abbrlink: b70d58d
date: 2025-11-30 17:33:36
---
## JavaScript简介
### 概念
一种运行在客户端（浏览器）的编程语言，实现人机交互效果

组成：ECMAScript、Web APIs（DOM、BOM）
- ECMAScript：规定了js基础语法核心知识
- DOM：操作文档
- BOM：操作浏览器

### 使用方法
书写位置：
- 内部 `<script>`
- 外部 `<script src=""></script>`
- 内联 标签内部

注释：
- 单行注释 符号`//`，快捷键`Ctrl + /`
- 块注释 符号`/* */`，快捷键`Shift + Alt + A`

输入输出语句：
- 输入 prompt()
- 输出 document.write(), alert(), console.log()

### 注意
顺序加载，书写位置尽量写到`</body>`前面
外部js标签中间不要写代码

### 使用场景
网页特效、表单验证、数据交互、服务端编程


## 变量
### 概念
计算机中用来**存储数据**的**容器**
本质：程序在内存中申请的一块用来存放数据的小空间

### 使用方法
声明、赋值、更新
`let age = 18`

### 注意
变量命名规范：
- 起名要有意义
- 小驼峰命名法，例：`userName`

let不允许多次声明一个变量

var声明：
- 可以先使用再声明（不合理）
- 可以重复声明（不合理）
- 变量提升、全局变量、没有块级作用域

## 常量
### 使用背景
某个变量永远不会改变

### 概念
使用const声明的变量

### 使用方法
`const G = 9.8`

### 注意
不允许更改值，声明时必须赋值

## 数据类型
### 使用背景
- 更加充分和高效地利用内存
- 更加方便程序员使用数据

### 概念
基本数据类型：
- number 数字型
- string 字符串型
- boolean 布尔型（true和false）
- undefined 未定义型
- null 空类型

引用数据类型：object 对象

### 使用方法
```js
let age = 18
// console.log('我今年' + age + '岁了')
console.log(`我今年${age}岁了`)
```

NaN：计算错误 粘性

字符串推荐用单引号，模版字符串用反引号

检测数据类型：`typeof x`

隐式转换 用算术运算符
- `+`号作为正号解析可以转换成数字型
- 任何数据和字符串相加结果都是字符串

显式转换 用代码
转换成数字：Number(), parseInt(), parseFloat()
转换成字符串：String(), .toString()

### 注意
引号嵌套：外双内单，或者外单内双

null和undefined区别：
- undefined表示没有赋值
- null表示赋值了，但是内容为空

## 运算符
### 概念
赋值运算符：`=`, `+=`等
自增运算符：`++`
比较运算符：`>`, `>=`, `==`, `===`, `!==`等
逻辑运算符：`&&`, `||`, `!`

### 注意
`==`值相等（不严格等于），`===`类型和值都相等（严格等于，推荐用）
不同类型比较会隐式转换
NaN不等于任何值，包括它本身

## 语句
### 分支
if分支、三元运算符、switch分支
switch适合确定值、分支多，if适合范围判断

### 循环
while循环、for循环
contine退出本次循环，break退出整个循环
循环次数确定用for，不确定用while

## 数组
### 背景
一个变量保存多个数据

### 概念
数组（Array）是一种可以按顺序保存数据的数据类型

### 使用方法
用字面量声明：`let arr = [1, 2, 3, 4]`

取值：`数组[下标]` 下标从0开始

遍历数组：
```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
```

修改：`数组[下标] = 新值`

新增：**push**添加到末尾，unshift添加到开头，都可以返回数组长度

删除：pop删除最后一个，shift删除第一个，**splice**删除指定元素`splice(起始位置, 删除几个)`

排序：
1. 升序排序 `arr.sort()`
2. 降序排序
```js
arr.sort(function(a, b) {
  return b - a
})
```

## 学习视频
[黑马程序员前端JavaScript入门到精通全套视频教程](https://www.bilibili.com/video/BV1Y84y1L7Nn)