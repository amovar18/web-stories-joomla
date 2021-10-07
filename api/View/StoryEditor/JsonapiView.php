<?php
use Joomla\CMS\MVC\View\JsonApiView as BaseApiView;

class JsonApiView extends BaseApiView
{
    protected $fieldsToRenderItem = [
        'id',
        'catid',
        'title',
        'alias',
        'url',
        'xreference',
        'tags',
    ];

    protected $fieldsToRenderList = [
        'id',
        'title',
        'alias',
    ];
    public function displayList(array $items = null)
    {
        foreach (FieldsHelper::getFields('com_weblinks.weblink') as $field)
        {
            $this->fieldsToRenderList[] = $field->name;
        }

        return parent::displayList();
    }

    public function displayItem($item = null)
    {
        foreach (FieldsHelper::getFields('com_weblinks.weblink') as $field)
        {
            $this->fieldsToRenderItem[] = $field->name;
        }

        return parent::displayItem();
    }

    protected function prepareItem($item)
    {
        foreach (FieldsHelper::getFields('com_weblinks.weblink', $item, true) as $field)
        {
            $item->{$field->name} = isset($field->apivalue) ? $field->apivalue : $field->rawvalue;
        }

        return parent::prepareItem($item);
    }
}