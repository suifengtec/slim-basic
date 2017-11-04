<?php
namespace App;
/**
 * @Author: suifengtec
 * @Date:   2017-11-05 01:45:00
 * @Last Modified by:   suifengtec
 * @Last Modified time: 2017-11-05 02:48:41
 **/

session_start();

require __DIR__ . DIRECTORY_SEPARATOR . '../vendor/autoload.php';

$settings = require __DIR__ . DIRECTORY_SEPARATOR . 'settings.php';

$app = new \Slim\App($settings);

require_once __DIR__ . DIRECTORY_SEPARATOR . 'dependencies.php';
require_once __DIR__ . DIRECTORY_SEPARATOR . 'middlewares.php';
require_once __DIR__ . DIRECTORY_SEPARATOR . 'controllers.php';
require_once __DIR__ . DIRECTORY_SEPARATOR . 'routes.php';

$app->run();