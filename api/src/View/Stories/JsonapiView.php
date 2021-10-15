<?php
namespace Google\Component\WebStories\Api\View\Stories;
defined('_JEXEC') or die;
use Joomla\CMS\MVC\View\JsonApiView as BaseApiView;

class JsonapiView extends BaseApiView
{
	protected $fieldsToRenderItem = [
		'id',
		'markup',
		'post_date',
		'title',
		'modified_date',
		'created_by',
		'published',
		'post_content_filtered',
	];
	
	/**
	 * @var string[] $fieldsToRenderList
	 */
	protected $fieldsToRenderList = [
		'id',
		'markup',
		'post_date',
		'title',
		'modified_date',
		'created_by',
		'published',
		'post_content_filtered',
	];
}
