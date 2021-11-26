<?php
/**
 * @package    Joomla.Api
 * @subpackage webstories
 *
 * @author     Google
 * @copyright  Copyright 2020 Google LLC
 * @license    Apache License 2.0
 * @link       https://opensource.google.com/
 */
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
