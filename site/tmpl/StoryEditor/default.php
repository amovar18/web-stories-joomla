<?php

/**
 * @package     Joomla.Administrator
 * @subpackage  com_webstories
 *
 * @copyright   Copyright (C) 2020 John Smith. All rights reserved.
 * @license     GNU General Public License version 2; see LICENSE
 */
defined('_JEXEC') or die;
use Joomla\CMS\Factory;
if(!isset($_GET['id'])&&empty($_GET['id'])){
    return;
}
$db = Factory::getDbo();
$query = $db->getQuery(true);
$query
    ->select($db->quoteName('markup'))
    ->from($db->quoteName('#__webstories'))
    ->where($db->quoteName('id') . '=' . $_GET['id']);
$db->setQuery($query);
$item = $db->loadAssoc();

?>
<script type="text/javascript">
    const header = document.getElementsByClassName('header container-header full-width');
    const footer = document.getElementsByClassName('container-footer footer full-width');
    header[0].remove();
    footer[0].remove();
</script>
<?php var_dump($item['markup']);?>