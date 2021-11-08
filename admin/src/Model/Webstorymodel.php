<?php
declare(strict_types=1);
/**
 * Helloapi
 *
 * @package    Webstories
 *
 * @author     Alexandre ELISÉ <contact@alexandre-elise.fr>
 * @copyright  Copyright(c) 2009 - 2021 Alexandre ELISÉ. All rights reserved
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 * @link       https://alexandre-elise.fr
 */

namespace Google\Component\WebStories\Administrator\Model;

defined('_JEXEC') or die;
use Joomla\CMS\Factory;
use Joomla\CMS\Language\Associations;
use Joomla\CMS\Language\LanguageHelper;
use Joomla\CMS\MVC\Model\AdminModel;

/**
 * Methods supporting a list of helloapi records.
 *
 * @since  0.1.0
 */
class WebstoryModel extends AdminModel
{
        /**
     * Method to get the row form.
     *
     * @param   array    $data      Data for the form.
     * @param   boolean  $loadData  True if the form is to load its own data (default case), false if not.
     *
     * @return  \JForm|boolean  A \JForm object on success, false on failure
     *
     * @since  0.1.0
     */
    public function getForm($data = array(), $loadData = true)
    {
        // Get the form.
        $form = $this->loadForm('com_webstories.webstories', 'webstories', array('control' => 'jform', 'load_data' => $loadData));

        if (empty($form))
        {
            return false;
        }

        return $form;
    }
    public function getTable($name = '', $prefix = 'joomla_', $options = array())
    {
        return parent::getTable('webstories', $prefix, $options);
    }
    /**
     * Method to get a single record.
     *
     * @param integer $pk The id of the primary key.
     *
     * @return mixed  Object on success, false on failure.
     *
     * @since 0.1.0
     */
    public function getItem($pk = null)
    {
        $story_id = (int)$this->getState($this->getName() . '.id');
        $db = Factory::getDbo();
        $query = $db->getQuery(true);
        $query
            ->select($db->quoteName(array('id','markup','post_date','title','modified_date','created_by','published','post_content_filtered')))
            ->from($db->quoteName('#__webstories'))
            ->where($db->quoteName('id') . '=' . $story_id);
            $db->setQuery($query);
        $item = $db->loadObjectList();
        echo json_encode($item);
        exit;
    }
    /**
     * Method to delete one or more records.
     *
     * @param array $pks An array of record primary keys.
     *
     * @return boolean  True if successful, false if an error occurs.
     *
     * @since 1.6
     */
    public function delete(&$pks)
    {
        $story_id = $pks;
        $db =  Factory::getDBO();   
        $query = $db->getQuery(true);
        $query->delete($db->quoteName('#__webstories'));             
        $query->where($db->quoteName('id').'='.$story_id);             
        $db->setQuery($query);
        $result = $db->execute(); 
        echo json_encode($result);
        exit;
    }
}
