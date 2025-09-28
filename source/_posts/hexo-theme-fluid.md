---
title: 手把手教你搭建 Hexo Fluid 主题博客
abbrlink: d94eae67
date: 2025-09-28 14:28:17
tags: hexo
excerpt: 搭建 Hexo Fluid 主题博客
---
# 搭建 Hexo 博客
## 应用程序要求
- [Node.js](https://nodejs.org/zh-cn)（选比较新的版本）
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)

## 安装 Hexo
使用 npm 安装 Hexo：`npm install -g hexo-cli`

## 新建博客文件夹
新建并打开一个文件夹，在文件夹地址栏输入`cmd`以在当前文件夹路径打开 CMD。执行下列命令新建博客文件夹（将`<folder>`替换成文件夹名，如果没有设置 folder，Hexo 默认在当前文件夹建站）：
```SH
hexo init <folder>
cd <folder>
npm install
```

## 博客目录结构
经过初始化，博客目录结构如下：
```txt
.
├── .github # 工作流配置
├── node_modules # 项目依赖模块
├── scaffolds # 模版文件夹
├── source # 资源文件夹
|   └── _posts # 文章文件夹
├── themes # 主题文件夹
├── _config.landscape.yml # 默认主题配置文件
├── _config.yml # 网站配置文件
├── package.json # 项目配置和依赖管理
└── package-lock.json # 锁定依赖版本
```

## 网站配置文件
可以在`_config.yml`文件中修改配置，如：
|设置|说明|
|-|-|
|title|网站标题|
|subtitle|网站副标题|
|description|网站描述|
|keywords|网站的关键词|
|author|作者名字|
|language|网站使用的语言，简体中文的代码是`zh-CN`|
|url|网址|
|permalink|文章的永久链接格式|
|theme|网站主题名称|

## 常用指令
|指令|说明|
|-|-|
|`hexo new <title>`|新建文章（如果标题 title 带空格，标题需要加"双引号"）|
|`hexo new draft <title>`|新建草稿|
|`hexo publish draft <title>`|发布草稿|
|`hexo g`或`hexo generate`|生成静态文件|
|`hexo s`或`hexo server`|启动服务器进行预览|
|`hexo clean`|清除缓存文件和已生成的静态文件|

## 写作设置
Hexo 支持用 Markdown 写作
在 VS Code 中安装 Markdown 预览扩展：`Markdown All in One`和`Markdown Preview Enhanced`

通过修改`.md`文件开头的 Front-matter，配置写作设置：
|设置|说明|
|-|-|
|title|标题|
|date|建立日期|
|updated|更新日期|
|tags|标签|
|categories|分类|
|excerpt|摘要|

# 使用 Fluid 主题
## 安装 Fluid
进入博客目录，通过 npm 安装 Fluid：`npm install --save hexo-theme-fluid
`
在博客目录下创建`_config.fluid.yml`，将主题的 [_config.yml](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/_config.yml) 内容复制进去
当需要更新主题时，执行命令：`npm update --save hexo-theme-fluid`

## 指定主题
修改博客目录下的`_config.yml`文件，设置`theme: fluid`

## 创建关于页
通过hexo创建关于页：`hexo new page about`
然后修改`/source/about/index.md`的 layout 属性和正文，在 Front-matter 中添加`layout: about`

## 一些主题配置
|设置|说明|
|-|-|
|font.font_size|主题字体大小|
|index.slogan.text|首页副标题|
|navbar.blog_title|导航栏标题|
|narbar.menu|导航栏菜单|
|footer.content|页脚|
|about|关于页|
|links.items|友链|
|post.copyright|版权声明|
|index.banner_mask_alpha|头图黑色蒙版|

图片存放路径：`\source\img`
如果图片比较大，可以用一下图片压缩工具：[Imagine](https://github.com/meowtec/Imagine)

# 部署博客
接下来我们通过 GitHub Actions 来实现博客的自动化部署。第一次部署完成后，每次向代码仓库推送更改将自动触发部署

- 登录 [GitHub](https://github.com/) 后，新建代码仓库`<username>.github.io`（将`<username>`替换成用户名）。如果访问慢，可以用 [Watt Toolkit](https://steampp.net/) 或 [Steamcommunity 302](https://www.dogfight360.com/blog/?s=Steamcommunity+302)
- 将博客目录中的文件上传到代码仓库的默认分支， 默认分支名称通常是 main 或 master
- 查看 Node.js 版本，记下主要版本（如 v22.x.y 的主要版本是 22）：`node --version`
- 在代码仓库中前往`Settings > Pages > Source`，将 source 更改为 GitHub Actions 后保存
- 在代码仓库中新建文件`.github/workflows/pages.yml`，并填入以下内容 (将第 17 和 22 行中的 22 替换成前面记下的版本)：
```yml
name: Pages

on:
  push:
    branches:
      - main # default branch

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          # If your repository depends on submodule, please see: https://github.com/actions/checkout
          submodules: recursive
      - name: Use Node.js 22
        uses: actions/setup-node@v4
        with:
          # Examples: 20, 18.19, >=16.20.2, lts/Iron, lts/Hydrogen, *, latest, current, node
          # Ref: https://github.com/actions/setup-node#supported-version-syntax
          node-version: "22"
      - name: Cache NPM dependencies
        uses: actions/cache@v4
        with:
          path: node_modules
          key: ${{ runner.OS }}-npm-cache
          restore-keys: |
            ${{ runner.OS }}-npm-cache
      - name: Install Dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public
  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

完成以上步骤后，可以前往`<username>.github.io`查看网页

# 参考链接
- [Hexo文档](https://hexo.io/zh-cn/docs/)
- [Fluid文档](https://hexo.fluid-dev.com/docs/)
