<?php
defined('_JEXEC') or die;

use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\CMS\Router\ApiRouter;
use Joomla\Router\Route;

class PlgWebservicesWebstories extends CMSPlugin
{
    protected $autoloadLanguage = true;
    public function onBeforeApiRoute(&$router)
	{
		$router->createCRUDRoutes(
			'v1/webstories/all',
			'webstories',
			['component' => 'com_webstories']
		);
		$router->createCRUDRoutes( 'v1/webstories/save', 'webstories.save',['component'=>'com_webstories']);

		
	}
}