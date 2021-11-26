<?php
// No direct access to this file
defined('_JEXEC') or die;
use Joomla\CMS\Factory;
/**
 * Script file of HelloWorld module
 */
class mod_webstoriesInstallerScript
{
	/**
	 * Method to install the extension
	 * $parent is the class calling this method
	 *
	 * @return void
	 */
	function install($parent) 
	{
		$db = Factory::getDbo();
        $query = $db->getQuery(true);
		$query = "UPDATE `#__extensions` set enabled = 1 where element='webstories' AND type = 'plugin'";
        $db->setQuery($query);
        $db->execute();
	}

	/**
	 * Method to uninstall the extension
	 * $parent is the class calling this method
	 *
	 * @return void
	 */
	function uninstall($parent) 
	{

	}

	/**
	 * Method to update the extension
	 * $parent is the class calling this method
	 *
	 * @return void
	 */
	function update($parent) 
	{
		$db = Factory::getDbo();
        $query = $db->getQuery(true);
		$query = "UPDATE `#__extensions` set enabled = 1 where element='webstories' AND type = 'plugin'";
        $db->setQuery($query);
        $db->execute();
	}

	/**
	 * Method to run before an install/update/uninstall method
	 * $parent is the class calling this method
	 * $type is the type of change (install, update or discover_install)
	 *
	 * @return void
	 */
	function preflight($type, $parent) 
	{
	}

	/**
	 * Method to run after an install/update/uninstall method
	 * $parent is the class calling this method
	 * $type is the type of change (install, update or discover_install)
	 *
	 * @return void
	 */
	function postflight($type, $parent) 
	{
	}
}