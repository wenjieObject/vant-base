# vant-base

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## 1.移动端自适应屏幕rem



index.html 输入

三个步骤，以后像素都使用rem单位来书写

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link rel="icon" href="<%= BASE_URL %>favicon.ico">
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>

<body>
  <noscript>
    <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled.
      Please enable it to continue.</strong>
  </noscript>
  <script>
    // 三个步骤:
    // 1.获取html的宽,
    let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth; 
    //有些浏览器documentElement获取不到,那就使用后面的body
    console.log(htmlwidth);

    // 2.htmlDom
    let htmlDom = document.getElementsByTagName("html")[0]
    console.log(htmlDom);

    //3.设置根元素样式
    htmlDom.style.fontSize = htmlwidth / 20 + 'px'; //记住这个20是等份的意思,这样每一份是16px,即1rem=16px;
  </script>
  <div id="app"></div>
  <!-- built files will be auto injected -->
</body>

</html>
```



## 2.vant自定义主题



1. 在src-assets 下新建文件resetui.less 这里存放要修改的主题，默认所有属性在`https://github.com/youzan/vant/blob/dev/src/style/var.less`中

   示例

   ```less
   // Component Colors
   @text-color: @gray-8;
   @active-color: @gray-2;
   @active-opacity: 0.7;
   @disabled-opacity: 0.5;
   @background-color: @gray-1;
   @background-color-light: #fafafa;
   @text-link-color: #576b95;
   ```

   

2. 在 babel.config.js中修改引入

   ```js
   module.exports = {
     plugins: [
       [
         'import',
         {
           libraryName: 'vant',
           libraryDirectory: 'es',
           // 指定样式路径
           style: (name) => `${name}/style/less`,
         },
         'vant',
       ],
     ],
   };
   ```

   

3. 在根目录新建vue.config.js,在hack中引入resetui.less的绝对路径

   ```js
   // vue.config.js
   module.exports = {
       css: {
         loaderOptions: {
           less: {
             // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
             lessOptions: {
               modifyVars: {
                 // 直接覆盖变量
                 'text-color': '#111',
                 'border-color': '#eee',
                 // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                 hack: `true; @import "./src/assets/resetui.less";`,
               },
             },
           },
         },
       },
     };
   ```

   4. 以后要修改主题，可以在resetui.less中做修改

   

   

   