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
}
