<?php
/**
 *
 * Per identity smtp settings
 *
 * Description
 *
 * @version 0.1
 * @author elm@skweez.net, ritze@skweez.net, mks@skweez.net
 * @url skweez.net
 *
 * MIT License
 *
 **/

class jjpanda extends rcube_plugin
{
	public $task = 'mail|settings';
	private $from_identity;

	function init()
	{
		$this->include_script('jjpanda.js');
	}

}
?>
