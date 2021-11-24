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
$db = Factory::getDbo();
$query = $db->getQuery(true);
$query
    ->select($db->quoteName(array('id')))
    ->from($db->quoteName('#__webstories'));
$db->setQuery($query);
$items = $db->loadObjectList();
?>
<h1> Dashboard</h1>
<script type='text/javascript'>
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
<div style="display:flex; flex-direction:column">
<?php 
    foreach ($items as $item) {
        echo "<div>";
        echo HTMLHelper::_(
            'link',
            Route::_('index.php?option=com_webstories&view=storyeditor&id='.$item->id),
            Text::_('Go to webstory'.$item->id),
            array('class' => 'alert-link')
        );
        echo "
        
        <button class='btn btn-primary' onclick='deleteStory(".$item->id.")'>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash-fill' viewBox='0 0 16 16'>
                <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z'/>
            </svg>
        </button>";
        echo "<div>";
        echo '<br>';
    }
    echo HTMLHelper::_(
        'link',
        Route::_('index.php?option=com_webstories&view=storyeditor&create_new=yes'),
        Text::_('Create New Story'),
        array('class' => 'alert-link')
    );
    echo '<br>';
?>
</div>

