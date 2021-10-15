<?php
namespace Google\Component\WebStories\Api\Controller;
defined('_JEXEC') or die;

use Joomla\CMS\Factory;
use Joomla\CMS\MVC\Controller\ApiController;

class WebstoriesController extends ApiController 
{
    protected $contentType = 'webstories';

    protected $default_view = 'stories';
    public function saving()
    {   
        $data = (array)  json_decode($this->input->json->getRaw(), true);
        $db = Factory::getDbo();
        // Create a new query object.
        $query = $db->getQuery(true);

        // Insert columns.
        $columns = array('id','markup','post_date','title','modified_date','created_by','published','post_content_filtered');

        // Insert values.
        $values = array($data['id'],$db->quote($data['markup']), $db->quote($data['post_date']), $db->quote($data['title']),$db->quote($data['modified_date']), $db->quote($data['created_by']), $data['published'], $db->quote($data['post_content_filtered']));
        // Prepare the insert query.
        $query
            ->insert($db->quoteName('#__webstories'))
            ->columns($db->quoteName($columns))
            ->values(implode(',', $values));

        // // Set the query using our newly populated query object and execute it.
        $db->setQuery($query);
        $db->execute();
        echo json_encode(['message' => $db->insertid()]);
        exit;
        
    }
}