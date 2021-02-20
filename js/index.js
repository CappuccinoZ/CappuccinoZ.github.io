var heroBottom, _window = $(window),
    _header = $(".menu_wrapper");
_window.on("scroll", function() {
    heroBottom = $(".main_contents_wrapper").height(), _window.scrollTop() > heroBottom ? _header.addClass("_fixed") : _header.removeClass("_fixed")
}), _window.trigger("scroll");
var urls = new Array("https://www.baidu.com/s?wd=", "https://cn.bing.com/search?q=", "https://www.sogou.com/web?query=", "https://www.zhihu.com/search?q=", "http://www.youdao.com/w/", "https://translate.google.cn/?sl=auto&&text=", "https://www.collinsdictionary.com/dictionary/english/", "https://www.ldoceonline.com/dictionary/", "https://www.merriam-webster.com/dictionary/", "https://www.wolframalpha.com/input/?i=");
var mouseover = () => enter.href = urls[select.selectedIndex] + text.value;
var keydown = (e) => {
    if (e.keyCode == 13) {
        mouseover();
        enter.click()
    }
}
console.log("( #╹╹# )")