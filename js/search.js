var urls = new Array("https://www.baidu.com/s?wd=", "https://cn.bing.com/search?q=", "https://www.sogou.com/web?query=", "https://www.zhihu.com/search?q=", "http://www.youdao.com/w/eng/", "https://translate.google.cn/?sl=auto&&text=", "https://www.collinsdictionary.com/dictionary/english/", "https://www.ldoceonline.com/dictionary/", "https://www.merriam-webster.com/dictionary/", "https://www.wolframalpha.com/input/?i=");
var mouseover = () => enter.href = urls[select.selectedIndex] + text.value;
var keydown = (e) => {
    if (e.keyCode == 13) {
        mouseover();
        enter.click()
    }
}
document.write(`<style>.search{display:inline-block;margin:2.5px 12px}input{width:25vw;padding:2px 12px;border-radius:0;border:none;border-bottom:1px solid rgba(0,0,0,.12)}select{color:#212529;background:transparent;position:relative;display:inline-block;box-sizing:border-box;height:36px;padding-right:24px;padding-left:0;font-size:16px;vertical-align:middle;border:none;border-bottom:1px solid rgba(0,0,0,.12);outline:0;cursor:pointer;appearance:none;user-select:none}</style><div class="search"><select id="select"><option>百度</option><option>必应</option><option>搜狗</option><option>知乎</option><option>有道</option><option>谷歌翻译</option><option>柯林斯</option><option>朗文</option><option>韦氏</option><option>Wolfram</option></select><input type="text"class="form-control"id="text"placeholder="搜索内容"onkeydown="keydown(event)"><a class="btn"onmouseover="mouseover()"id="enter">搜索</a></div>`)