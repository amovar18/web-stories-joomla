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
            'v1/webstories',
            'webstories.get_all_stories',
            ['component' => 'com_webstories']
        );
        $router->createCRUDRoutes(
            'v1/webstories/save',
            'webstories.saving',
            ['component'=>'com_webstories']
        );
        $router->createCRUDRoutes(
            'v1/webstories/update',
            'webstories.update',
            ['component'=>'com_webstories']
        );
        $router->createCRUDRoutes(
            'v1/webstories/save_file',
            'webstories.save_file',
            ['component'=>'com_webstories'],
        );
        $router->createCRUDRoutes(
            'v1/webstories/getimages',
            'webstories.getimages',
            ['component' => 'com_webstories'],
        );
        $router->createCRUDRoutes(
            'v1/webstories/getvideos',
            'webstories.getvideos',
            ['component' => 'com_webstories'],
        );
        $router->createCRUDRoutes(
            'v1/webstories/getall',
            'webstories.getall',
            ['component' => 'com_webstories'],
        );
        $router->createCRUDRoutes(
            'v1/webstories/duplicate',
            'webstories.duplicate',
            ['component' => 'com_webstories'],
        );
        $router->createCRUDRoutes(
            'v1/webstories/rename',
            'webstories.rename',
            ['component' => 'com_webstories'],
        );
        $router->createCRUDRoutes(
            'v1/webstories/getSingle',
            'webstories.getSingle',
            ['component' => 'com_webstories'],
        );
        $routes = [
            new Route(['DELETE'], 'v1/webstories/:id', 'webstories', ['id' => '(\d+)'])
        ];
        $router->addRoutes($routes);
        
    }
}