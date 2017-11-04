<?php

namespace App;

/**
 * @Author: suifengtec
 * @Date:   2017-11-05 02:47:56
 * @Last Modified by:   suifengtec
 * @Last Modified time: 2017-11-05 02:48:26
 **/
$container = $app->getContainer();

$container['HomeController'] = function ($container) {

	return new \App\Controllers\HomeController($container);

};
