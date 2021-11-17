<?php
namespace Google\Component\WebStories\Api\Controller;
defined('_JEXEC') or die;

use Joomla\CMS\Factory;
use Joomla\CMS\MVC\Controller\ApiController;

class WebstoriesController extends ApiController 
{
    protected $contentType = 'webstories';

    protected $default_view = 'stories';
    public function saving()
    {   
        $data = (array)  json_decode($this->input->json->getRaw(), true);
        $db = Factory::getDbo();
        // Create a new query object.
        $query = $db->getQuery(true);
        
        // Insert columns.
        $columns = array('markup','post_date','title','modified_date','created_by','published','post_content_filtered');
        $json = json_encode($data['post_content_filtered']);
        // Insert values.
        $values = array(json_encode($data['markup']), $db->quote($data['post_date']), $db->quote($data['title']),$db->quote($data['modified_date']), $db->quote($data['created_by']), $data['published'], $db->quote($json) );
        // Prepare the insert query.
        $query
            ->insert($db->quoteName('#__webstories'))
            ->columns($db->quoteName($columns))
            ->values(implode(',', $values));

        // // Set the query using our newly populated query object and execute it.
        $db->setQuery($query);
        $db->execute();
        echo json_encode([
            'storyId' => $db->insertid(),
            'status' => 'publish',
            'slug' => '',
            'link' => '',
            'preview_link'=> '',
            'edit_link'=> '',
            'embed_post_link'=> '',
            'featured_media'=> '',
        ]);
        exit;
        
    }
    public function update()
    {   
        $data = (array)  json_decode($this->input->json->getRaw(), true);
        $db = Factory::getDbo();
        // Create a new query object.
        $query = $db->getQuery(true);
        $fields = array();
        $json = json_encode($data['post_content_filtered']);
        // Insert columns.
        $columns = array(
            $db->quoteName('markup').'='.json_encode($data['markup']),
            $db->quoteName('title').'='.$db->quote($data['title']),
            $db->quoteName('modified_date').'='.$db->quote($data['modified_date']),
            $db->quoteName('created_by').'='.$db->quote($data['created_by']),
            $db->quoteName('published').'='.$data['published'],
            $db->quoteName('post_content_filtered').'='.$db->quote($json)
        );
        $conditions = array(
            $db->quoteName('id').'='.$data['id']
        );

        // Insert values.
        // Prepare the insert query.
        $query
            ->update($db->quoteName('#__webstories'))
            ->set($db->quoteName($columns))
            ->where($conditions);

        // // Set the query using our newly populated query object and execute it.
        $db->setQuery($query);
        $db->execute();
        echo json_encode(
            [
                'storyId' => $db->insertid(),
            ]
        );
        exit;
    }
    public function save_image()
    {
        $data = (array)  $this->input->files->get('image');
        $file_data = file_get_contents($data['tmp_name']);
        $image=base64_encode($file_data);
        $result = file_put_contents('../images/'.basename($data['name']), $file_data);
        echo json_encode($result);
        exit;
    }
    public function getimages()
    {
        if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')   
            $url = "https://";   
        else  
            $url = "http://"; 
        $url.= $_SERVER['HTTP_HOST'].'/joomla-cms/images/';
        $response = [];
        $imagetype=['png', 'jpg', 'jpeg', 'webp'];
        $videotype=['mov', 'mp4', 'webm'];
        $count = 0;
        foreach ($imagetype as $filetype) {
            $mimetype='image/'.$filetype;
            foreach (glob(realpath("../images")."/*.".$filetype) as $filename) {
                array_push($response, $this->getImageData((explode(',', basename($filename))[0]), $url.basename($filename), getimagesize($filename)[0], getimagesize($filename)[1], $mimetype, $count, $filetype ));
                $count++;
            }
            
        }  
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
}