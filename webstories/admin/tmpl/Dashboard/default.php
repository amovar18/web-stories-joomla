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
$app = Factory::getApplication();
$wa->useStyle('com_webstories.joomla-props-to-save');
$wa->useStyle('com_webstories.joomla-props-to-save-rtl');
$wa->useStyle('com_webstories.joomla-story-editor-rtl');
$wa->useStyle('com_webstories.joomla-story-editor');

$wa->useScript('com_webstories.dashboard');
$wa->useScript('com_webstories.vendors-dashboard');
$wa->useScript('com_webstories.resize-observer');
$wa->useScript('com_webstories.vendor-shared-js');
$wa->useScript('com_webstories.get-story-props-to-save-shared');
$wa->useScript('com_webstories.get-story-props-to-save');
$db = Factory::getDbo();
$query = $db->getQuery(true)
		->select($db->qn('profile_value'))
		->from($db->qn('#__user_profiles'))
		->where($db->qn('profile_key') . ' = "joomlatoken.token"')
		->where($db->qn('user_id') . ' = 215');
$db->setQuery($query);
$item = $db->loadAssoc();
$tokenSeed = $item['profile_value'];
$siteSecret = $app->get('secret');
if (empty($siteSecret))
{
	return '';
}
$rawToken  = base64_decode($tokenSeed);
$tokenHash = hash_hmac('sha256', $rawToken, $siteSecret);
$message   = base64_encode("sha256:215:$tokenHash");
echo '<script type="text/javascript">
var dashboardSettings = {
    "token":"'.$message.'"
};
</script>';
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

