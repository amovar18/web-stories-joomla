<?php

/**
 * @package     Joomla.Administrator
 * @subpackage  com_webstories
 *
 * @copyright   Copyright (C) 2020 John Smith. All rights reserved.
 * @license     GNU General Public License version 2; see LICENSE
 */
defined('_JEXEC') or die;
use Joomla\CMS\Router\Route;
use Joomla\CMS\HTML\HTMLHelper;
use Joomla\CMS\Language\Text;
use Joomla\CMS\Factory;
use Joomla\CMS\WebAsset\WebAssetManager;

$wa = Factory::getApplication()->getDocument()->getWebAssetManager();
$wa->useStyle('com_webstories.joomla-story-editor');
$wa->useStyle('com_webstories.joomla-story-editor-rtl');
$wa->useScript('com_webstories.vendor-shared-js');
$wa->useScript('com_webstories.resize-observer');
$wa->useScript('com_webstories.dashboard');
$db = Factory::getDbo();
$query = $db->getQuery(true);
$query
    ->select($db->quoteName(array('id')))
    ->from($db->quoteName('#__webstories'));
$db->setQuery($query);
$items = $db->loadObjectList();
?>
<h1> Dashboard</h1>
<script type="text/javascript">
    window.onload = function(){
        document.getElementById('wrapper').classList.replace('open', 'closed');
        document.getElementById('subhead-container').remove();
        document.getElementById('content').style.padding='0';
    }
</script>
<script type='text/javascript'>
    document.body.className += ' js web-story_page_stories-dashboard';
    function deleteStory(id){
        var xhr1 = new XMLHttpRequest();
        xhr1.open('DELETE', "http://localhost:88/joomla-cms/api/index.php/v1/webstories/"+id, true);
        xhr1.setRequestHeader ("Authorization", "Bearer c2hhMjU2OjIxNTo4YWEzMzIyOTgwYjJmY2YwYjY1NTFiZDJjNTJiN2JjNzhiYzQzZGZlYWY2NjFmOGM4OTVmN2FhOGNlYzJkMGVk");
        xhr1.onreadystatechange = function() {
            if (this.status == 200 && this.readyState == 4) {
                window.location.reload();
            };//end onreadystate
        }
        xhr1.send();
    }
</script>
<div class="app">
<div class="web-stories-wp">
    <h1 class="screen-reader-text hide-if-no-js">Web Stories</h1>
    <div id="web-stories-dashboard" class="web-stories-dashboard-app-container hide-if-no-js">
    </div>
</div>
</div>

