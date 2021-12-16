
<?php
// No direct access to this file
defined('_JEXEC') or die('Restricted access');
use Joomla\CMS\Factory;
class pkg_WebstoriesInstallerScript
{
    /**
     * This method is called after a component is installed.
     *
     * @param  \stdClass $parent - Parent object calling this method.
     *
     * @return void
     */
    public function install($parent) 
    {
        $db = Factory::getDbo();
        $query = $db->getQuery(true);
        $query = "CREATE TABLE IF NOT EXISTS `#__webstories` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `post_date` datetime DEFAULT CURRENT_TIMESTAMP,
            `markup` longtext,
            `title` varchar(255) DEFAULT 'untitled',
            `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
            `created_by` int(11) NOT NULL,
            `published` tinyint(1) NOT NULL DEFAULT 0,
            `post_content_filtered` longtext,
            `story_description` varchar(200) DEFAULT '',
            `featured_media_url` text,
            PRIMARY KEY (`id`)
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 DEFAULT COLLATE=utf8mb4_unicode_ci;";
        $db->setQuery($query);
        $db->execute();
    }

    /**
     * This method is called after a component is uninstalled.
     *
     * @param  \stdClass $parent - Parent object calling this method.
     *
     * @return void
     */
    public function uninstall($parent) 
    {
    }

    /**
     * This method is called after a component is updated.
     *
     * @param  \stdClass $parent - Parent object calling object.
     *
     * @return void
     */
    public function update($parent) 
    {
        $db = Factory::getDbo();
        $query = $db->getQuery(true);
        $query = "CREATE TABLE IF NOT EXISTS `#__webstories` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `post_date` datetime DEFAULT CURRENT_TIMESTAMP,
            `markup` longtext,
            `title` varchar(255) DEFAULT 'untitled',
            `modified_date` datetime DEFAULT CURRENT_TIMESTAMP,
            `created_by` varchar(255) DEFAULT 'untitled',
            `published` tinyint(1) NOT NULL DEFAULT 0,
            `post_content_filtered` longtext,
            PRIMARY KEY (`id`)
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 DEFAULT COLLATE=utf8mb4_unicode_ci;";
        $db->setQuery($query);
        $db->execute();
    }

    /**
     * Runs just before any installation action is performed on the component.
     * Verifications and pre-requisites should run in this function.
     *
     * @param  string    $type   - Type of PreFlight action. Possible values are:
     *                           - * install
     *                           - * update
     *                           - * discover_install
     * @param  \stdClass $parent - Parent object calling object.
     *
     * @return void
     */
    public function preflight($type, $parent) 
    {
    }

    /**
     * Runs right after any installation action is performed on the component.
     *
     * @param  string    $type   - Type of PostFlight action. Possible values are:
     *                           - * install
     *                           - * update
     *                           - * discover_install
     * @param  \stdClass $parent - Parent object calling object.
     *
     * @return void
     */
    function postflight($type, $parent) 
    {
    }
}