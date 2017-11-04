<?php
namespace App\Controllers;

use Slim\Http\Request;
use Slim\Http\Response;

/**
 * @Author: suifengtec
 * @Date:   2017-11-04 02:11:11
 * @Last Modified by:   suifengtec
 * @Last Modified time: 2017-11-05 02:01:04
 **/

class Controller {

	protected $container;
	public function __construct($container) {
		$this->container = $container;
	}

	public function __get($prop) {
		if ($this->container->{$prop}) {
			return $this->container->{$prop};
		}
	}

	public function foo(Request $request, Response $response, array $args) {

	}
}