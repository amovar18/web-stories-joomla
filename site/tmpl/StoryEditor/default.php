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
$wa->useScript('com_webstories.story-editor');
$wa->useScript('com_webstories.vendor-edit-story');  
?>
<script type="text/javascript">
    document.body.className += ' edit-story js';
</script>
<h2>Edit Story</h2>