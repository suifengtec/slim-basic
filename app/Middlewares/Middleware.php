<?php
namespace App\Middlewares;

/**
 * @Author: suifengtec
 * @Date:   2017-11-04 01:01:44
 * @Last Modified by:   suifengtec
 * @Last Modified time: 2017-11-05 02:42:09
 **/

class Middleware {

	protected $container;

	public function __construct($container) {
		$this->container = $container;
	}

}