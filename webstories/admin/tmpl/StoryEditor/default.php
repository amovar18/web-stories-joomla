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
use Joomla\CMS\Factory;
use Joomla\CMS\WebAsset\WebAssetManager;
use Joomla\CMS\HTML\HTMLHelper;

$wa = Factory::getApplication()->getDocument()->getWebAssetManager();
$wa->useStyle('com_webstories.vendors-edit-story-rtl');
$wa->useStyle('com_webstories.vendors-edit-story');
$wa->useScript('com_webstories.story-editor');
$wa->useScript('com_webstories.vendor-edit-story');
$id = $_GET['id'];
echo '<script type="text/javascript">
    var webStoriesEditorSettings = {"config":{
        "api":{
            "saveLink":"../api/index.php/v1/webstories/update",
            "getMedia":"../api/index.php/v1/webstories/getimages",
            "saveMedia":"../api/index.php/v1/webstories/saveimage",
            "getStoryById":"../api/index.php/v1/webstories/",
        },
        "storyId": '.$id.',
        "allowedAudioTypes":["aac","m4a","m4b","mp3","oga","ogg","wav"],
        "allowedAudioMimeTypes":["audio/mpeg","audio/aac","audio/wav","audio/ogg"],
        "allowedFileTypes":["gif","jpe","jpeg","jpg","m4v","mp4","png","svg","svgz","webm","webp"],
        "allowedImageFileTypes":["gif","jpe","jpeg","jpg","png","webp"],
        "allowedImageMimeTypes":["image/webp","image/png","image/jpeg","image/gif"],
        "allowedMimeTypes":{
            "image": ["image/webp","image/png","image/jpeg","image/gif","image/svg+xml"],
            "audio": [],
            "video": ["video/mp4","video/webm"]
        },
        "allowedTranscodableMimeTypes":["video/3gpp","video/3gpp2","video/MP2T","video/mp4","video/mpeg","video/ogg","video/quicktime","video/webm","video/x-flv","video/x-h261",
            "video/x-h263","video/x-m4v","video/x-matroska","video/x-mjpeg","video/x-ms-asf","video/x-msvideo","video/x-nut"],
        "autoSaveInterval": 60,
        "cdnURL": "https://wp.stories.google/static/main/",
        "ffmpegCoreUrl": "https://wp.stories.google/static/main/js/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js"

    }}
</script>';
echo HTMLHelper::_(
    'bootstrap.renderModal',
    'mediaModal',
    [
        'backdrop'    => 'static',
        'title' => 'Upload Media',
        'footer' => '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="close-button">Close</button>'
    ],
    '
        <form>
            <div style="display:flex;flex-direction:column">
                <div class="input-group">
                    <input type="file" onchange="embedPreview(this)" class="form-control" id="file-input-button" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                    <button class="btn btn-outline-secondary" onclick="submitImages()" type="button" id="successButton">Upload</button>
                </div>
                <div id="carousel">
                </div>
            </div>
        </form>
    ',
);
?>
<script type="text/javascript">
    document.body.className += ' edit-story js';
</script>
<script type="text/javascript">
    window.onload = function(){
        document.getElementById('wrapper').classList.replace('open', 'closed');
        document.getElementById('subhead-container').remove();
        document.getElementById('content').style.padding='0';
    }
</script>
<div class="app">
        <div id="web-stories-editor" class="web-stories-editor-app-container hide-if-no-js">
            <h1 class="loading-message align-center">Please wait...</h1>
        </div>
</div>