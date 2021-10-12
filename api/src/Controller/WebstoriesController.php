<?php
namespace Google\Component\WebStories\Api\Controller;
defined('_JEXEC') or die;

use Joomla\CMS\Factory;
use Joomla\CMS\MVC\Controller\ApiController;

class WebstoriesController extends ApiController 
{
    protected $contentType = 'webstories';

    protected $default_view = 'stories';
    protected function save($recordKey = null)
    {   
        $data = (array) json_decode($this->input->json->getRaw(), true);

        foreach (FieldsHelper::getFields('com_weblinks.weblink') as $field)
        {
            if (isset($data[$field->name]))
            {
                !isset($data['com_fields']) && $data['com_fields'] = [];

                $data['com_fields'][$field->name] = $data[$field->name];
                unset($data[$field->name]);
            }
        }

        $this->input->set('data', $data);

        return parent::save($recordKey);
    }
}