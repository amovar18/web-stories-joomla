<?php
defined('_JEXEC') or die('Restricted access');
use Joomla\CMS\Form\FormHelper;
FormHelper::loadFieldClass('list');

// The class name must always be the same as the filename (in camel case)
class JFormFieldWebstories extends JFormFieldList {

	//The field class must know its own type through the variable $type.
	protected $type = 'Webstories';

	public function getLabel() {
		return '<span>Select a web story</span>';
	}

	public function getOptions() {
		$app = JFactory::getApplication(); //country is the dynamic value which is being used in the view
        $db = JFactory::getDbo();
        $query = $db->getQuery(true);
        $query->select($db->quoteName(array('id', 'title')))->from('#__webstories');
		$rows = $db->setQuery($query)->loadObjectlist();
        foreach($rows as $row){
            $stories[] = JHTML::_('select.option', $row->id, $row->id . " (" . $row->title . ")");
        }
		$options = array_merge(parent::getOptions(), $stories);
        return $options;
	}
}