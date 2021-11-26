<?php
/**
 * @package    Joomla.Api
 * @subpackage webstories
 *
 * @author     Google
 * @copyright  Copyright 2020 Google LLC
 * @license    Apache License 2.0
 * @link       https://opensource.google.com/
 */
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
namespace Google\Component\WebStories\Api\Controller;
defined('_JEXEC') or die;

use Joomla\CMS\Factory;
use Joomla\CMS\MVC\Controller\ApiController;
class WebstoriesController extends ApiController 
{
    protected $contentType = 'webstories';

    protected $default_view = 'stories';
    public function update()
    {   
        $data = (array)  json_decode($this->input->json->getRaw(), true);
        $db = Factory::getDbo();
        // Create a new query object.
        $query = $db->getQuery(true);
        $fields = array();
        $json = $db->quote(json_encode($data['post_content_filtered']));
        // Insert columns.
        
        $query = "UPDATE `#__webstories` SET `markup`=".json_encode($data['markup']).",`title`='".$data['title']."',`modified_date`='".$data['modified_date']."',`created_by`='".$data['created_by']."',`published`='".$data['published']."', `post_content_filtered`=".$json." WHERE id=".$data["id"];
        

        // // Set the query using our newly populated query object and execute it.
        $db->setQuery($query);
        $db->execute();
        echo json_encode(
            [
              'storyId' => $data['id'],
              'status' => 'publish',
              'slug' => '',
              'link' => '',
              'preview_link'=> 'http://localhost:88/joomla-cms/index.php?option=com_webstories&view=storyeditor&id='.$data['id'],
              'edit_link'=> '/joomla-cms/administrator/index.php?option=com_webstories&view=storyeditor&id='.$data['id'],
              'embed_post_link'=> '',
              'featured_media'=> '',
            ]
        );
        exit;
    }
    public function save_file()
    {
        if (!file_exists('../images/webstories/images')) {
          mkdir('../images/webstories/images', 0777, true);
        }
        if (!file_exists('../images/webstories/videos')) {
          mkdir('../images/webstories/videos', 0777, true);
        }
        $data = (array)  $this->input->files->get('image');
        $file_data = file_get_contents($data['tmp_name']);
        $image=base64_encode($file_data);
        $extension = pathinfo($data['name'], PATHINFO_EXTENSION);
        $images=['png', 'jpg', 'jpeg', 'webp'];
        if (in_array($extension, $images)) {
          $result = file_put_contents('../images/webstories/images/'.basename($data['name']), $file_data);
          echo json_encode($result);
          exit;
        }
        $videos = ['mov', 'mp4', 'webm'];
        if (in_array($extension, $videos)) {
          $result = file_put_contents('../images/webstories/videos/'.basename($data['name']), $file_data);
          echo json_encode($result);
          exit;
        }
    }
    public function getimages()
    {
        if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')   
            $url = "https://";   
        else  
            $url = "http://"; 
        $url.= $_SERVER['HTTP_HOST'].'/joomla-cms/images/webstories/images/';
        $response = [];
        $imagetype=['png', 'jpg', 'jpeg', 'webp'];
        $count = 0;
        foreach ($imagetype as $filetype) {
            $mimetype='image/'.$filetype;
            foreach (glob(realpath("../images/webstories/images")."/*.".$filetype) as $filename) {
                array_push($response, $this->getImageData((explode(',', basename($filename))[0]), $url.basename($filename), getimagesize($filename)[0], getimagesize($filename)[1], $mimetype, $count, $filetype ));
                $count++;
            }
            
        }  
        header("X-WP-Total:".$count);
        header("X-WP-TotalPages:1");
        echo json_encode($response);
        exit;
    }
    public function getvideos()
    {
        if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')   
            $url = "https://";   
        else  
            $url = "http://"; 
        $url.= $_SERVER['HTTP_HOST'].'/joomla-cms/images/webstories/videos/';
        $response = [];
        $videotype=['mov', 'mp4', 'webm'];
        $count = 0;
        foreach ($videotype as $filetype) {
            $mimetype='video/'.$filetype;
            foreach (glob(realpath("../images/webstories/videos")."/*.".$filetype) as $filename) {
                $path_parts = pathinfo($url.'videos/'.basename($filename));
                array_push($response, $this->getVideoData($mimetype, $url.basename($filename), $path_parts['filename'], (explode(',', basename($filename))[0]), $url.$path_parts['filename'].'.jpeg' ));
                $count++;
            }
            
        }
        header("X-WP-Total:".$count);
        header("X-WP-TotalPages:1");  
        echo json_encode($response);
        exit;
    }
    public function getall()
    {
      if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')   
            $url = "https://";   
        else  
            $url = "http://"; 
        $url.= $_SERVER['HTTP_HOST'].'/joomla-cms/images/webstories/';
        $response = [];
        $imagetype=['png', 'jpg', 'jpeg', 'webp'];
        $videotype=['mov', 'mp4', 'webm'];
        $count = 0;
        foreach ($videotype as $filetype) {
            $mimetype='video/'.$filetype;
            foreach (glob(realpath("../images/webstories/videos")."/*.".$filetype) as $filename) {
                $path_parts = pathinfo($url.'videos/'.basename($filename));
                array_push($response, $this->getVideoData($mimetype, $url.'videos/'.basename($filename), $path_parts['filename'], (explode(',', basename($filename))[0]), $url.'videos/'.$path_parts['filename'].'.jpeg'));
                $count++;
            } 
        }  
        foreach ($imagetype as $filetype) {
            $mimetype='image/'.$filetype;
            foreach (glob(realpath("../images/webstories/images")."/*.".$filetype) as $filename) {
                array_push($response, $this->getImageData((explode(',', basename($filename))[0]), $url.'images/'.basename($filename), getimagesize($filename)[0], getimagesize($filename)[1], $mimetype, $path_parts['filename'], $filetype ));
                $count++;
            }
        }  
        header("X-WP-Total:".$count);
        header("X-WP-TotalPages:1");
        echo json_encode($response);
        exit;
    }
    public function getImageData($title, $src, $width, $height, $mimetype, $id, $filetype)
    {
        return [
            'type'=> 'image',
            'mimeType'=>$mimetype,
            'creationDate'=> '2021-10-29T11:43:38',
            'src'=>$src,
            'width'=>$width,
            'height'=>$height,
            'id'=>$id,
            'alt'=> $title,
            'sizes'=> [
                'medium'=> [
                  'file'=> $title.'-300x84.'.$filetype,
                  'width'=> 300,
                  'height'=> 84,
                  'mime_type'=>$mimetype,
                  'source_url'=> $src,
                ],
                'large'=> [
                    'file'=> $title.'-1024x288.'.$filetype,
                    'width'=> 1024,
                    'height'=> 288,
                    'mime_type'=>$mimetype,
                    'source_url'=> $src,
                ],
                'thumbnail'=> [
                  'file'=> $title.'-150x150.'.$filetype,
                  'width'=> 150,
                  'height'=> 150,
                  'mime_type'=>$mimetype,
                  'source_url'=> $src,
                ],
                'medium_large'=> [
                  'file'=> $title.'-768x216.'.$filetype,
                  'width'=> 768,
                  'height'=> 216,
                  'mime_type'=>$mimetype,
                  'source_url'=> $src,
                ],
                '1536x1536'=> [
                  'file'=> $title.'-1536x432.'.$filetype,
                  'width'=> 1536,
                  'height'=> 432,
                  'mime_type'=>$mimetype,
                  'source_url'=> $src,
                ],
                '2048x2048'=> [
                  'file'=> $title.'-2048x576.'.$filetype,
                  'width'=> 2048,
                  'height'=> 576,
                  'mime_type'=>$mimetype,
                  'source_url'=> $src,
                ],
                'post-thumbnail'=> [
                  'file'=> $title.'-1568x441.'.$filetype,
                  'width'=> 1568,
                  'height'=> 441,
                  'mime_type'=>$mimetype,
                  'source_url'=> $src,
                ],
                'web-stories-poster-portrait'=> [
                  'file'=> $title.'-640x853.'.$filetype,
                  'width'=> 640,
                  'height'=> 853,
                  'mime_type'=>$mimetype,
                  'source_url'=> $src,
                ],
                'web-stories-publisher-logo'=> [
                  'file'=> $title.'-96x96.'.$filetype,
                  'width'=> 96,
                  'height'=> 96,
                  'mime_type'=>$mimetype,
                  'source_url'=> $src,
                ],
                'web-stories-thumbnail'=> [
                  'file'=> $title.'-150x42.'.$filetype,
                  'width'=> 150,
                  'height'=> 42,
                  'mime_type'=>$mimetype,
                  'source_url'=> $src,
                ],
                'full'=> [
                  'file'=> $title,
                  'width',
                  'height',
                  'mime_type'=>$mimetype,
                  'source_url'=> $src,
                ],
              ],
              'local'=> true,
              'isPlaceholder'=> false,
              'isOptimized'=> false,
              'isMuted'=> false,
              'isExternal'=> false,
        ];
    }
    public function getVideoData($mimeType, $src, $id, $title, $poster)
    {
      return [
        'type'=> 'video',
        'mimeType'=>$mimeType,
        'creationDate'=> '2021-10-29T11:56:33',
        'src'=> $src,
        'width'=> 100,
        'height'=> 200,
        'poster'=>  $poster,
        'posterId'=> 57,
        'id'=> $id,
        'length'=> 10,
        'lengthFormatted'=> '0:10',
        'alt'=> $title,
        'sizes'=> [],
        'local'=> false,
        'isPlaceholder'=> false,
        'isOptimized'=> false,
        'isMuted'=> false,
        'isExternal'=> false,
        'trimData'=> [
          'original'=> 0,
        ],
      ];
    }
    public function rename()
    {
      $data = (array)  json_decode($this->input->json->getRaw(), true);
      $db = Factory::getDbo();
      // Create a new query object.
      $query = $db->getQuery(true);
      // Insert columns.
      
      $query = "UPDATE `#__webstories` SET `title`= '".$data["title"]."' WHERE id=".$data["id"];
      $db->setQuery($query);
      $db->execute();
      $query = "select * from #__webstories where id = ".$data['id'];
      $db->setQuery($query);
      $item = $db->loadAssoc();
      $db->execute();
      $single_story=array(
        'id'=>$item['id'],
        'status'=>$item['published'] === 1 ? 'published' : 'draft',
        'title'=>$item['title'],
        'created'=>$item['post_date'],
        'createdGmt'=>$item['modified_date'],
        'author'=>[
          'name'=>$item['created_by'],
          'id'=>1,
        ],
        'featuredMediaUrl'=>'',
      );
      echo json_encode($single_story);
      exit;
  }
  public function duplicate()
  {
      $data = (array)  json_decode($this->input->json->getRaw(), true);
      $story_id = $data['id'];
      $db = Factory::getDbo();
      $query = $db->getQuery(true);
      $query
          ->select($db->quoteName(array('id','markup','post_date','title','modified_date','created_by','published','post_content_filtered')))
          ->from($db->quoteName('#__webstories'))
          ->where($db->quoteName('id') . '=' . $story_id);
      $db->setQuery($query);
      $item = $db->loadAssoc();
      $story_data = !empty($item['post_content_filtered']) ? json_decode($item['post_content_filtered']) : [];
      // Insert duplicate story into table.
      $query = "insert into #__webstories (markup,post_content_filtered,published,title, created_by) values (".json_encode($item['markup']).",".json_encode($item['post_content_filtered']).",0,'".$item['title']."(Copy)','".$item['created_by']."')";
      $db->setQuery($query);
      $db->execute();
      $single_story=array(
        'id'=>$item['id'],
        'status'=>'draft',
        'title'=>$item['title'].'(Copy)',
        'created'=>date('Y-m-d H:i:s'),
        'createdGmt'=>date('Y-m-d H:i:s'),
        'author'=>[
          'name'=>$item['created_by'],
          'id'=>1,
        ],
        'featuredMediaUrl'=>'',
      );
      echo json_encode($single_story);
      exit;
  }
  public function get_all_stories()
  {
        $stories_page = 20;
        $data = (array)  json_decode($this->input->json->getRaw(), true);
        $db = Factory::getDbo();
        $query = $db->getQuery(true);
        $query
            ->select($db->quoteName(array('id','post_date','title','modified_date','created_by','published')))
            ->from($db->quoteName('#__webstories'))
            ->setLimit($stories_page, $story_page*(int)$data['page']-1);
        $db->setQuery($query);
        $items = $db->loadAssocList();
        $db->setQuery($query);
        $db->execute();
        $response=[];
        $stories=[];
        $fetchedStoryIds=[];
        $published=0;
        $draft=0;
        foreach ($items as $item ) {
          if((int)$item['published']!==-1){
            $single_story=array(
              'id'=>$item['id'],
              'status'=>$item['published']===1 ? 'published' : 'draft',
              'title'=>$item['title'],
              'created'=>$item['post_date'],
              'createdGmt'=>$item['post_date'],
              'author'=>[
                'name'=>$item['created_by'],
                'id'=>1,
              ],
              'capabilities'=>[
                'hasEditAction'=>true,
                'hasDeleteAction'=>true
              ],
              'modified'=>$item['modified_date'],
              'modifiedGmt'=>$item['modified_date'],
              'editStoryLink'=>'/joomla-cms/administrator/index.php?option=com_webstories&view=storyeditor&id='.$item['id'],
              'previewLink'=> 'http://localhost:88/joomla-cms/index.php?option=com_webstories&view=storyeditor&id='.$item['id'],
              'featuredMediaUrl'=>'',
            );
            $stories[$item['id']]= $single_story;
            array_push($fetchedStoryIds, $item['id']);
            $item['published']===1 ? $published++ : $draft++;
          }
        }
        $totalStoriesByStatus =[ 'all'=>$published+$draft,'published'=>$published];
        $response['totalStoriesByStatus']= $totalStoriesByStatus;
        $response['stories']=$stories;
        $response['fetchedStoryIds']=$fetchedStoryIds;
        echo json_encode($response);
        exit;
  }
  /**
     * Method to get a single record.
     *
     * @return mixed  Object on success, false on failure.
     *
     * @since 0.1.0
     */
    public function getSingle()
    {
        if(isset($_GET['id']) && !empty($_GET['id']) ){
          $story_id = (int)$_GET['id'];
          $db = Factory::getDbo();
          $query = $db->getQuery(true);
          $query
              ->select($db->quoteName(array('id','markup','post_date','title','modified_date','created_by','published','post_content_filtered')))
              ->from($db->quoteName('#__webstories'))
              ->where($db->quoteName('id') . '=' . $story_id);
          $db->setQuery($query);
          $item = $db->loadAssoc();
          $story_data = !empty($item['post_content_filtered']) ? json_decode($item['post_content_filtered']) : [];
          echo json_encode([
              'title'=>[
                  'raw'=>$item['title'],
              ],
              'excerpt'=>[
                'raw'=>''
              ],
              'status'=>$item['published'] === 1 ? 'published' : 'draft',
              'slug'=>'',
              'date'=>$item['post_date'],
              'modified'=>$item['modified_date'],
              'story_data'=>$story_data,
              'link' => '',
              'preview_link'=> 'http://localhost:88/joomla-cms/index.php?option=com_webstories&view=storyeditor&id='.$story_id,
              'edit_link'=> '/joomla-cms/administrator/index.php?option=com_webstories&view=storyeditor&id='.$story_id,
              'embed_post_link'=> '',
              'featured_media'=> '',
              'author'=>$item['created_by'],
              'lock_user'=> '',
              'featured_media'=> '',
              'publisher_logo'=> '',
              'taxonomies'=>[],
              'terms'=>[],
              'style_presets'=>[],
              'permalink_template'=>'http://localhost:88/joomla-cms/index.php?option=com_webstories&view=storyeditor&id=%pagename%'
          ]);
          exit;
        }
    }
        /**
     * Method to delete one or more records.
     *
     * @param array $pks An array of record primary keys.
     *
     * @return boolean  True if successful, false if an error occurs.
     *
     * @since 1.6
     */
    public function deleteSingle()
    {
        $data = (array)  json_decode($this->input->json->getRaw(), true);
        $story_id = $data['id'];
        $db =  Factory::getDBO();   
        $query = $db->getQuery(true);
        $query->delete($db->quoteName('#__webstories'));             
        $query->where($db->quoteName('id').'='.$story_id);             
        $db->setQuery($query);
        $result = $db->execute(); 
        echo json_encode($result);
        exit;
    }
    public function create_story_from_template(){  
        $data = (array)  json_decode($this->input->json->getRaw(), true);
        $db = Factory::getDbo();
        // Create a new query object.
        $query = $db->getQuery(true);
        $fields = array();
        $json = $db->quote(json_encode($data['storyData']));
        $markup = json_encode($data['content']);
        $query = "INSERT into `#__webstories` (markup,post_content_filtered,published,title,created_by) VALUES (".$markup.",".$json.",-1,'','wordpress'); ";
        $db->setQuery($query);
        $db->execute();
        echo json_encode([
          'editLink'=> '/joomla-cms/administrator/index.php?option=com_webstories&view=storyeditor&id='.$db->insertid()
        ]);
      exit;
    }
}