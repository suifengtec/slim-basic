
## 这是？

基于 PHP 开发框架 Slim 的一个基础项目的一部分基础,卧槽... 说的有点儿麻烦。

# 前端
基于 PureCSS.

# 依赖的组件
```
composer require slim/slim
composer reuire slim/twig-view
composer require slim/csrf
composer require monolog/monolog
composer require bryanjhv/slim-session
composer require illuminate/database
```

## 发现

数据表的自增 ID , 在大小写不同时, `illuminate/database` 会区别对待: 大写时,可能更新失败了,但是返回的还是成功。


