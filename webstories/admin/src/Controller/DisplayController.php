<?php
namespace Google\Component\WebStories\Administrator\Controller;

defined('_JEXEC') or die;

use Joomla\CMS\MVC\Controller\BaseController;
use Joomla\CMS\Router\Route;
use Joomla\CMS\Factory;
use Joomla\CMS\HTML\HTMLHelper;
/**
 * @package     Joomla.Administrator
 * @subpackage  com_webstories
 *
 * @copyright   Copyright (C) 2020 John Smith. All rights reserved.
 * @license     GNU General Public License version 2; see LICENSE
 */

/**
 * Default Controller of Web_Stories component
 *
 * @package     Joomla.Administrator
 * @subpackage  com_webstories
 */
class DisplayController extends BaseController {
    /**
     * The default view for the display method.
     *
     * @var string
     */
    protected $default_view = 'dashboard';
    public function display($cachable = false, $urlparams = array()) {
        $view = $this->input->get('view');
        if ($view == 'storyeditor') {
            if (isset($_GET['create_new'])) {
                $db = Factory::getDbo();
                    // Create a new query object.
                    $query = $db->getQuery(true);
                    
                    // Insert columns.
                    $columns = array('published');
                    // Insert values.
                    $values = array('-1');
                    // Prepare the insert query.
                    $query
                        ->insert($db->quoteName('#__webstories'))
                        ->columns($db->quoteName($columns))
                        ->values(implode(',', $values));
            
                    // // Set the query using our newly populated query object and execute it.
                    $db->setQuery($query);
                    $db->execute();
                    $id=$db->insertid();
                    $this->setRedirect(Route::_('index.php?option=com_webstories&view=storyeditor&id='.$id, false));
            } else {
                $id = $this->input->get('id');
                // Somehow the person just went to the form - we don't allow that.
                if (preg_match('/[0-9]/', $_GET['id'])===0) {
                    $this->setRedirect(Route::_('index.php?option=com_webstories', false));
                }
            }
        }
        return parent::display($cachable, $urlparams);
    }
    
}
