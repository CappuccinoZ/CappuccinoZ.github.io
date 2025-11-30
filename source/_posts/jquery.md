---
title: jQuery 笔记
tags: jQuery
categories: 前端学习
excerpt: 学习jQuery的笔记
abbrlink: 56ea09c5
date: 2025-10-17 00:48:26
---
## jQuery下载
我们可以进入[jquery.com](https://jquery.com/)下载jQuery文件，如`jquery-3.7.1.min.js`。
在HTML文件中引入jQuery，放在自己写的js文件前面：
```html
<html>
    <head>
        <title>jQuery</title>
        <script src="./js/jquery-3.7.1.min.js"></script>
    </head>

    <body>
        <div id="a">
            <p>abc</p>
            <p>
                <span id="span1">span1</span>
                <span>span2</span>
                <span>span3</span>
            </p>
        </div>
        <div id="b"></div>
        <div class="c">a</div>
        <div class="c">b</div>
        <div class="c">c</div>

        <script src="./js/index.js"></script>
    </body>
</html>
```

## jQuery准备
两种jQuery的准备方法，后面可以在花括号内编写代码，代码将会在文档加载后执行：
```js
// 方法1
$(document).ready(function(){

})

// 方法2
$(function(){
    
})
```

## 点击事件click
用`click`添加点击事件，例如点击id="a"的元素时弹出警告框：
```js
$(document).ready(function(){
    $("#a").click(function(){
        alert(123)
    })
})
```

## 选择器
在jQuery中可以使用CSS选择器来选取元素，`#`开头代表id，`.`开头代表class，用`:eq()`选择下标，例如：
```js
//选取id="a"的元素
$("#a")
//选取class="c"的第1个元素（下标为0）
$(".c:eq(0)")
//选取第5个<div>元素（下标为4）
$("div:eq(4)")
//选取id="a"的<div>元素内的第1个<p>元素
$("div#a p:eq(0)")
//选取id="a"的元素内的第2个<p>元素内的第3个<span>元素
$("#a p:eq(1) span:eq(2)")
```
弹出所选元素的内容：`alert($("#a").html())`

## 悬停事件hover
用`mouseenter`添加鼠标进入事件，`mouseleave`添加鼠标移出事件。
可以用`hover`添加悬停事件，传入2个函数，对应鼠标进入和移出，例如：
```js
$("#span1").hover(
    function(){
        $(this).html("123")
    },
    function(){
        $(this).html("abc")
    }
)
```

## 提交事件submit
检查表单提交的值：
```html
<form id="f" action="https://www.baidu.com">
    <input type="text" id="name">
    <input type="submit" value="提交">
</form>
```

```js
$("#f").submit(function(){
    if($("#name").val() == "baidu"){
        alert("是baidu")
        return true
    } else {
        alert("不是baidu")
        return false
    }
})
```

## 触发事件
在准备方法之外定义函数，用不带参数的`submit`触发submit事件：
```js
function c(){
    alert("触发submit事件")
    $("#f").submit()
}
```

## 隐藏和显示的效果
用`hide`隐藏，`show`显示：
```html
<p id="a">abc</p>

<button id="h">hide</button>
<button id="s">show</button>
```

```js
$("#h").click(function(){
    $("#a").hide()
})

$("#s").click(function(){
    $("#a").show()
})
```

## 使用toggle显示和隐藏
用`toggle`切换显示和隐藏：
```html
<button id="t">toggle</button>
```

```js
$("#t").click(function(){
    $("#a").toggle()
})
```

## 给隐藏和显示增加执行时间和回调函数
给隐藏和显示增加执行时间和回调函数：
```js
$("#h").click(function(){
    $("#a").hide(3000, function(){
        $("#s").click()
    })
})

$("#s").click(function(){
    $("#a").show(1000)
})
```

## 淡入淡出fadeIn和fadeOut
用`fadeIn`淡入，`fadeOut`淡出，`fadeToggle`淡入淡出切换：
```js
$("#h").click(function(){
    $("#a").fadeOut(3000, function(){
        $("#s").click()
    })
})

$("#s").click(function(){
    $("#a").fadeIn(1000)
})

$("#t").click(function(){
    $("#a").fadeToggle()
})
```

## 滑入和滑出slideUp和slideDown
用`slideDown`划入，`slideUp`划出，`slideToggle`划入划出切换：
```js
$("#h").click(function(){
    $("#a").slideUp(3000, function(){
        $("#s").click()
    })
})

$("#s").click(function(){
    $("#a").slideDown(1000)
})

$("#t").click(function(){
    $("#a").slideToggle()
})
```

## 动画效果animate
### 移动
用`left`和`top`属性设置移动后的位置：
```html
<div style="background-color:#66ccff;width:200px;height:200px;position:relative;top:10px;right:10px" id="a">
    abc
</div>
```

```js
function move(){
    $("#a").animate({
        left:"200px",
        top:"300px",
    })
}
```

### 修改动画时间
修改动画时间为4秒：
```js
function move(){
    $("#a").animate({
        left:"+=200px",
        top:"+=300px",
    }, 4000)
}
```

### 动画修改字体大小
用`fontSize`属性修改字体大小，增加30px：
```js
function move(){
    $("#a").animate({
        left:"+=200px",
        top:"+=300px",
        fontSize:"+=30px",
    }, 4000)
}
```

### 动画修改宽高
用`width`和`height`属性修改宽高，减少60px：
```js
function move(){
    $("#a").animate({
        left:"+=200px",
        top:"+=300px",
        width:"-=60px",
        height:"-=60px",
    }, 4000)
}
```

## 学习视频
[一天学会JQuery](https://www.bilibili.com/video/BV1eb411n7Lw/) 
