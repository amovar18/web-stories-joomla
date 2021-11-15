<?php
/**
 * @package     Joomla.Plugin
 * @subpackage  Fields.List
 *
 * @copyright   (C) 2017 Open Source Matters, Inc. <https://www.joomla.org>
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */
defined('_JEXEC') or die;

use Joomla\CMS\Language\Text;
$buffer = "
<iframe id='15' style='height:600px;width:360px' src='http://localhost:88/joomla-cms/index.php?option=com_webstories&view=Storyeditor&id=".$field->value."'></iframe>";
if(empty($field->value))
{
    return;
}
