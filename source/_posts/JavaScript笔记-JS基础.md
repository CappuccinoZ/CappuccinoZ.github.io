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
sort()默认按字母升序，对数字排序要传入比较函数：
1. 升序排序
```js
arr.sort(function(a, b) {
  return a-b
})
```
2. 降序排序
```js
arr.sort(function(a, b) {
  return b - a
})
```



## 函数
### 使用背景
实现代码复用，提高开发效率

### 概念
函数（function）：执行特定任务的代码块
具名函数和匿名函数
全局作用域和局部作用域（函数作用域）
逻辑中断

### 使用方法
函数声明：
```js
function 函数名() {
  函数体
}
```

函数调用：`函数名()`

函数传参 形参、实参、参数默认值

函数返回值：`return 数据`

匿名函数：
1. 函数表达式
```js
let fn = function () {
  // 函数体
}
```

2. 立即执行函数
可以防止变量污染
```js
// 方式1
(function () { })();

// 方式2
(function () { }());
```

### 注意
函数复用代码和循环重复代码的区别：
- 循环代码写完即执行
- 函数代码随时调用、随时执行

变量访问 就近原则

函数表达式和具名函数的区别：
- 具名函数 调用可以写到任何位置
- 函数表达式 必须先声明，后调用

多个立即执行函数用`;`号隔开

## 对象
### 概念
对象（object）：一种数据类型，无序的数据的集合
对象由属性和方法组成

### 使用方法
对象声明：
```js
let 对象名 = {
  属性名: 属性值,
  方法名: 函数
}
```

对象操作
查：`对象名.属性名`或`对象名['属性名']`
改：`对象名.属性名 = 新值`
增：`对象名.新属性名 = 新值`

遍历对象：
```js
for (let k in obj) {
  console.log(k) // 打印属性名
  console.log(obj[k]) // 打印属性值
}
```

Math对象的方法：random, ceil, floor, max, min, pow, abs等
random范围：`[0, 1)`
```js
function getRandom(N, M) {
  return Math.floor(Math.random() * (M - N + 1)) + N
}
```

## 基本数据类型和引用数据类型
基本数据类型（值类型）：存的是值本身，存到栈里面
string, number, boolean, undefined, null

引用数据类型：存的是地址（引用），存到堆里面
通过new关键字创建的对象，如Object, Array, Date等

## 学习视频
[黑马程序员前端JavaScript入门到精通全套视频教程](https://www.bilibili.com/video/BV1Y84y1L7Nn)