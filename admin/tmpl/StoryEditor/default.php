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
use Joomla\CMS\WebAsset\WebAssetManager;
$wa = Factory::getApplication()->getDocument()->getWebAssetManager();
$wa->useStyle('com_webstories.vendors-edit-story-rtl');
$wa->useStyle('com_webstories.vendors-edit-story');
$wa->useStyle('com_webstories.edit-story-rtl');
$wa->useStyle('com_webstories.edit-story');
$wa->useScript('com_webstories.story-editor');
$wa->useScript('com_webstories.vendor-edit-story');  
?>
<script type="text/javascript">
    document.body.className += ' edit-story js';
</script>
<div class="app">
    <h1 class="screen-reader-text hide-if-no-js">Web Stories Ad Creation Tool</h1>
        <div id="web-stories-editor" class="web-stories-editor-app-container hide-if-no-js">
            <h1 class="loading-message align-center">Please wait...</h1>
        </div>
        <div class="hide-if-js web-stories-wp-no-js">
            <h1 class="web-stories-heading-inline">Web Stories</h1>
            <div class="web-stories-notice-no-js">
                <p>Web Stories Ad Creation Tool requires JavaScript. Please enable JavaScript in your browser settings.</p>
            </div>
        </div>
    </div>
</div>