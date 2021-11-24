<?php
namespace Google\Component\WebStories\Api\View\Stories;

defined('_JEXEC') or die;

use Joomla\CMS\MVC\View\JsonApiView as BaseApiView;
use Joomla\Component\Fields\Administrator\Helper\FieldsHelper;

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
    public function displayList(array $items = null)
    {
        foreach (FieldsHelper::getFields('com_webstories.webstories') as $field)
        {
            $this->fieldsToRenderList[] = $field->name;
        }

        return parent::displayList();
    }

    public function displayItem($item = null)
    {
        foreach (FieldsHelper::getFields('com_webstories.webstories') as $field)
        {
            $this->fieldsToRenderItem[] = $field->name;
        }
        return parent::displayItem();
    }

    protected function prepareItem($item)
    {
        foreach (FieldsHelper::getFields('com_webstories.webstories', $item, true) as $field)
        {
            $item->{$field->name} = isset($field->apivalue) ? $field->apivalue : $field->rawvalue;
        }

        return parent::prepareItem($item);
    }
}
