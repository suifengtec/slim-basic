<?php
namespace App;
use App\Middlewares\GeneralMiddleware;

/**
 * @Author: suifengtec
 * @Date:   2017-11-05 01:54:43
 * @Last Modified by:   suifengtec
 * @Last Modified time: 2017-11-05 02:49:40
 **/

$container = $app->getContainer();

$app->add(new \App\Middlewares\GeneralMiddleware($container));
// csrf
// http://hislim.com/bar/a%3Cscript%3Ealert('aa')%3C/script%3E
$container['csrf'] = function ($container) {
	return new \Slim\Csrf\Guard;
};
