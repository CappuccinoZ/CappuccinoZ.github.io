---
title: HTML5 笔记（HTML5语义标签）
abbrlink: 54c944a1
date: 2025-11-16 15:19:25
tags: HTML5
categories: 前端学习
excerpt: 视频和音频、网页结构标签等
---
学习视频：[2025版pink老师最新AI+前端入门教程 (P0-P22)](https://www.bilibili.com/video/BV1MvaVzUEuz)

## 准备
### 开发工具
[TRAE AI编辑器](https://www.trae.cn/)
[谷歌浏览器](https://www.google.cn/chrome/)
编辑器扩展：Live Server, vscode-icons

### 快捷键
开发者工具：浏览器右击"检查"或`F12`
选择元素检查：`Ctrl + Shift + C`
新建文件：编辑器双击
创建网页模板：英文感叹号`!`

## 一些标签
根元素：`<html>`
头部元素：`<head>`
页面的标题：`<title>`
页面上的内容：`<body>`

## 标题与段落标签
标题标签：`<h1>` - `<h6>`
段落标签：`<p>`

## 有语义强调与重要性标签
加粗：`<strong>`
倾斜：`<em>`
下划线：`<ins>`
删除线：`<del>`

## 注释标签
语法：`<!-- 注释内容 -->`
快捷键：`Ctrl + /`

## 块级元素和内联元素
###  块级元素
- 独占一行
- 可以嵌套其他元素
- p, h, div等
- p标签不能嵌套块级元素

### 内联元素
- 可以一行放多个
- 不能嵌套块级元素， 可以嵌套其他内联元素
- strong, em, a等

## 图像标签
语法：`<img src="">`
属性：src, alt, width, height, title
单标签

## 路径
### 相对路径
1. 同一级路径
`pig.png`或`./pig.png`
2. 下一级路径
`/img/pig.png`或`./img/pig.png`
3. 上一级路径
`../pig.png`

### 绝对路径
1. 盘符路径
正、反斜杠都可以
2. 网络路径

## 视频和音频
### 视频
语法：`<video src=""></video>`
属性：src, controls, width, height, autoplay, loop, muted, poster

> 想要自动播放，需要先静音

兼容性写法：
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <p>您的浏览器不支持 HTML 5 Video 标签，请升级浏览器。</p>
</video>
```

### 音频
语法：`<audio src=""></audio>`
属性：src, controls, width, height

兼容性写法：
```html
<audio controls>
  <source src="audio.mp3" type="audio/mp3">
  <p>您的浏览器不支持 HTML 5 Audio 标签，请升级浏览器。</p>
</audio>
```

## 链接标签
语法：`<a href=""></a>`
属性：href, target, title

新窗口打开：`target="_blank"`
空链接：`href="#"`
下载链接：`href="./download.zip"`
邮件链接：`href="mailto:123@qq.com"`

### 锚点链接
1. 创建锚点目标 `id="1"`
2. 标记锚点目标 `href="#1"`

换行标签：`<br>`
页面滑动效果：`scroll-behavior: smooth;`

## 网页结构标签和无语义标签
### 网页结构标签
网页页眉: `<header>`
网页内容: `<main>`
导航栏: `<nav>`
文章相关: `<article>`
分类：`<section>`
侧边栏: `<aside>`
页面页脚: `<footer>`

### 无语义标签
块级：`<div>`，布局结构
行内：`<span>`，文本或行内元素

## 列表标签
有序列表：`<ol>`+`<li>`
无序列表：`<ul>`+`<li>`
描述列表：`<dl>`+`<dt>`+`<dd>`

## 表格
容器：`<table>`
行：`<tr>`
单元格：`<td>`
表头单元格：`<th>`

表格结构标签：`<thead>`, `<tbody>`, `<tfoot>`

## 表单
表单容器：`<form>`
表单控件：`<input>`, `<textarea>`, `<select>`, `<button>`
辅助标签：`<label>`

### input
单行文本框：`type="text"`, 密码框：`type="password"`
属性：placeholder, name, maxlength, accesskey, autocomplete

单选框：`type="radio"`, 复选框：`type="checkbox"`
属性：name, value, checked

文件域：`type="file"`
属性：multiple, accept

文本域：`type="textarea"`
属性：name, value, rows, cols

### select
容器：`<select>`
选项标签：`<option>`

### label
方式一：
```html
<label for="nan">男</label>
<input type="radio" id="nan" name="sex">
```

方式二：
```html
<label>男
<input type="radio" name="sex">
```

## 特殊字符
空格：`&nbsp;`
大于号：`&gt;`
小于号：`&lt;`
