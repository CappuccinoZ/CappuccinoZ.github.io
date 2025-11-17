---
title: CSS3 学习笔记
tags: CSS3
---
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
**后代选择器**：`A B`，空格
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
