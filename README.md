**1.为什么需要 webpack?**

> 1. 打包后的 html 文件不直接引入一个 js 文件？

    答：因为一个文件可能会造成加载时间过程而导致白屏、作用域问题

2.  如何解决作用域问题？
    答：立即调用函数表达式（grunt 和 gulp 的解决方式）:当函数变成一个立即调用函数表达式的时候，函数的外面是不能访问函数内部的变量，也就解决了作用域的问题
3.  如何解决代码拆分的问题？
    答：node 诞生引入了 commonJs（module.exports, require）
4.  如何让浏览器支持模块
