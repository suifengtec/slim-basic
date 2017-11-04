<?php
namespace App;

use PDO;

/**
 * @Author: suifengtec
 * @Date:   2017-11-05 01:48:06
 * @Last Modified by:   suifengtec
 * @Last Modified time: 2017-11-05 02:24:20
 **/

return [
	'settings' => [
		/*
			            是否输出错误
		*/
		'displayErrorDetails' => true, // set to false in production
		'addContentLengthHeader' => false, // Allow the web server to send the content-length header

		// Renderer settings
		'renderer' => [
			'template_path' => __DIR__ . '/../templates/',

		],

		'view' => [
			'path' => __DIR__ . '/../templates/twig/',
			'template_path' => __DIR__ . '/../templates/twig/',
			'twig' => [
				'cache' => false,
			],
			'twig_cache_path' => __DIR__ . '/../cache/twig/',

		],
		// Monolog settings
		'logger' => [
			'name' => 'slim-app',
			'path' => isset($_ENV['docker']) ? 'php://stdout' : __DIR__ . '/../logs/app.log',
			'level' => \Monolog\Logger::DEBUG,
		],

		// CSRF
		/*      'csrf' => [
	            'name' => 'slim-csrf',
*/

		// Cookies Encryption
		'cookies.encrypt' => true,
		'cookies.secret_key' => '53cr3t',
		'cookies.cipher' => defined('OPENSSL_CIPHER_AES_256_CBC') ? OPENSSL_CIPHER_AES_256_CBC : 'fUet54tgErtr54eA56hT3fwJ433tgf2',
		'cookies.cipher_mode' => MCRYPT_MODE_CBC,

		'pdo' => [
			'engine' => 'mysql',
			'host' => 'localhost',
			'database' => 'hislim0',
			'username' => 'hislim0',
			'password' => 'H39S5p@N[5',
			'charset' => 'utf8',
			'collation' => 'utf8_general_ci',

			'options' => [
				PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
				PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
				PDO::ATTR_EMULATE_PREPARES => true,
			],
		], /*PDO*/
		'db' => [
			'driver' => 'mysql',
			'host' => 'localhost',
			'port' => '3306',
			'database' => 'hislim0',
			'username' => 'hislim0',
			'password' => 'H39S5p@N[5',
			'charset' => 'utf8',
			'collation' => 'utf8_general_ci',
		], /*DB*/

		'upload' => [
			'dir' => __DIR__ . '/../public/uploads/',

		], /*//UPLOAD*/
	], /*END*/

];
