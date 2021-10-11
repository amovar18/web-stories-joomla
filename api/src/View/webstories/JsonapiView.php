<?php
namespace Google\Component\WebStories\Api\View\Stories;
defined('_JEXEC') or die;
use Joomla\CMS\MVC\View\JsonApiView as BaseApiView;

class JsonapiView extends BaseApiView
{
	/**
	 * @var string[] $fieldsToRenderItem
	 */
	protected $fieldsToRenderItem = 'hello world';
	
	/**
	 * @var string[] $fieldsToRenderList
	 */
	protected $fieldsToRenderList = 'hello world';
}
