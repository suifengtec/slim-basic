<?php
namespace App\Middlewares;

use App\Middlewares\Middleware;
use Slim\Http\Request;
use Slim\Http\Response;

/**
 * @Author: suifengtec
 * @Date:   2017-11-05 02:42:24
 * @Last Modified by:   suifengtec
 * @Last Modified time: 2017-11-05 03:07:36
 **/
class GeneralMiddleware extends Middleware {

	public function __invoke(Request $request, Response $response, callable $next): Response{

		$this->container->view->getEnvironment()->addGlobal('gm', [
			'appName' => 'Slim 测试',
			'cssMin' => '.min',
			'is_user_logged_in' => false,
			'redirect_url_for_logged_in' => '',
		]);

		return $next($request, $response);

	}
}
