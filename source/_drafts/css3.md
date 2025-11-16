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
text-indent：本元素的文字大小em
> text-align和text-indent对行内元素无效

letter-spacing：数值
line-height：像素或倍数
> 行高等于盒子高度，可以让单行文本垂直居中对齐
