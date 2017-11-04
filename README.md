
## 这是？

基于 PHP 开发框架 Slim 的一个基础项目的一部分基础,卧槽... 说的有点儿麻烦。
![Slim 3](https://raw.githubusercontent.com/suifengtec/slim-basic/master/screenshot/1.png)
![Slim 3](https://raw.githubusercontent.com/suifengtec/slim-basic/master/screenshot/2.png)
![Slim 3](https://raw.githubusercontent.com/suifengtec/slim-basic/master/screenshot/3.png)
![Slim 3](https://raw.githubusercontent.com/suifengtec/slim-basic/master/screenshot/4.png)
![Slim 3](https://raw.githubusercontent.com/suifengtec/slim-basic/master/screenshot/5.png)
![Slim 3](https://raw.githubusercontent.com/suifengtec/slim-basic/master/screenshot/6.png)
![Slim 3](https://raw.githubusercontent.com/suifengtec/slim-basic/master/screenshot/7.png)

## 前端
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

## 使用

```

git clone https://github.com/suifengtec/slim-basic
cd slim-basic
composer install
cd public
php -S 0.0.0.0:6666
```

浏览器打开
```
localhost:6666
```



## 发现

数据表的自增 ID , 在大小写不同时, `illuminate/database` 会区别对待: 大写时,可能更新失败了,但是返回的还是成功。


