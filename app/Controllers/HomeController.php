<?php
namespace App\Controllers;

use Slim\Http\Request;
use Slim\Http\Response;

/**
 * @Author: suifengtec
 * @Date:   2017-11-05 02:01:33
 * @Last Modified by:   suifengtec
 * @Last Modified time: 2017-11-05 02:25:39
 **/
/**
 * HomeController
 */
class HomeController extends Controller {

	public function fire(Request $request, Response $response, array $args) {
		$args['page'] = [

			'title' => '关于',
			'desc' => '假装这是关于页面的描述',
			'strs' => [
				'架构设计',
				'代码实现',
				'项目审计',
			],
		];

		return $this->container->view->render($response, 'home.twig', $args);
		/*return $this->container->view->render($response, 'about.twig', $args);*/
	}
}
