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
        $columns = array('markup','post_date','title','modified_date','created_by','published','post_content_filtered');
        $json = json_encode($data['post_content_filtered']);
        // Insert values.
        $values = array(json_encode($data['markup']), $db->quote($data['post_date']), $db->quote($data['title']),$db->quote($data['modified_date']), $db->quote($data['created_by']), $data['published'], $db->quote($json) );
        // Prepare the insert query.
        $query
            ->insert($db->quoteName('#__webstories'))
            ->columns($db->quoteName($columns))
            ->values(implode(',', $values));

        // // Set the query using our newly populated query object and execute it.
        $db->setQuery($query);
        $db->execute();
        echo json_encode(['storyId' => $db->insertid()]);
        exit;
        
    }
    public function update()
    {   
        $data = (array)  json_decode($this->input->json->getRaw(), true);
        $db = Factory::getDbo();
        // Create a new query object.
        $query = $db->getQuery(true);
        $fields = array();
        $json = json_encode($data['post_content_filtered']);
        // Insert columns.
        $columns = array(
            $db->quoteName('markup').'='.json_encode($data['markup']),
            $db->quoteName('title').'='.$db->quote($data['title']),
            $db->quoteName('modified_date').'='.$db->quote($data['modified_date']),
            $db->quoteName('created_by').'='.$db->quote($data['created_by']),
            $db->quoteName('published').'='.$data['published'],
            $db->quoteName('post_content_filtered').'='.$db->quote($json)
        );
        $conditions = array(
            $db->quoteName('id').'='.$data['id']
        );

        // Insert values.
        // Prepare the insert query.
        $query
            ->update($db->quoteName('#__webstories'))
            ->set($db->quoteName($columns))
            ->where($conditions);

        // // Set the query using our newly populated query object and execute it.
        $db->setQuery($query);
        $db->execute();
        echo json_encode(
            [
                'storyId' => $db->insertid(),
            ]
        );
        exit;
    }
}