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
            'webstories',
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
            'v1/webstories/saveimage',
            'webstories.save_image',
            ['component'=>'com_webstories'],
        );
        $router->createCRUDRoutes(
            'v1/webstories/getimages',
            'webstories.getimages',
            ['component' => 'com_webstories'],
        );
        $routes = [
            new Route(['GET'], 'v1/webstories/:id', 'webstories', ['id' => '(\d+)']),
            new Route(['DELETE'], 'v1/webstories/:id', 'webstories', ['id' => '(\d+)'])
        ];
        $router->addRoutes($routes);
        
    }
}