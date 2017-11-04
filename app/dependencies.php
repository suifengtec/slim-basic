<?php
namespace App;

use App\Models\User as User;
use Monolog;
use Monolog\Handler;
use Monolog\Processor;
use Slim\Views;

/**
 * @Author: suifengtec
 * @Date:   2017-11-05 01:50:39
 * @Last Modified by:   suifengtec
 * @Last Modified time: 2017-11-05 02:59:17
 **/
$container = $app->getContainer();

// monolog
$container['logger'] = function ($c) {
	$settings = $c->get('settings')['logger'];
	$logger = new Monolog\Logger($settings['name']);
	$logger->pushProcessor(new Monolog\Processor\UidProcessor());
	$logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
	return $logger;
};

// Twig
$container['view'] = function ($c) {

	$cfg = $c->get('settings')['view'];
	$v = new \Slim\Views\Twig($cfg['path'], $cfg['twig']);
	$v->addExtension(new \Slim\Views\TwigExtension(
		$c->router,
		$c->request->getUri()
	));

	return $v;
};
/*
404
 */
$container['notFoundHandler'] = function ($c) {

	return function ($request, $response) use ($c) {
		return $c['view']->render($response->withStatus(404), '404.twig', [
			"tipFor404" => "404=Not Found=啥都没有!",
		]);
	};
};
/*
Session
https://github.com/bryanjhv/slim-session

composer require bryanjhv/slim-session

 */
$container['session'] = function ($c) {
	return new \SlimSession\Helper;
};

/*
Database
https://www.slimframework.com/docs/cookbook/database-eloquent.html
composer require illuminate/database
 */

$capsule = new \Illuminate\Database\Capsule\Manager;
$capsule->addConnection($container['settings']['db']);
$capsule->setAsGlobal();
$capsule->bootEloquent();

$capsule->getContainer()->singleton(
	Illuminate\Contracts\Debug\ExceptionHandler::class,
	App\Exceptions\Handler::class
);

/*
DB Table
 */
$container['users'] = function ($c) {

	return new User;
};
