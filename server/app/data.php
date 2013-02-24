<?php 
require_once dirname(__FILE__).'/../../settings.php';
//echo csvToJson('adress.csv');
$action = $_GET;

if ($action['action'] == 'read') { 
    read();
}

if ($action['action'] == 'create') {

}

if ($action['action'] == 'update') {

}

if ($action['action'] == 'write') {

}

/* Connects to MYSQL database and sets the UTF8 format. 
   Then calls the Json converter function with SQL command. */
function read () 
{
    $settings = $GLOBALS['settings'];
	mysql_connect($settings['db']['host'], $settings['db']['username'], $settings['db']['password']) or die(mysql_error());		
    mysql_select_db($settings['db']['tablename']) or die(mysql_error());						
	mysql_query('SET NAMES utf8');												
	echo sqlToJson('SELECT * FROM adresses');
}

/* Executes SQL command (only tested for 'SELECT * FROM')
   Converts db into associative array, returns Json encoded string. */
function sqlToJson ($sqlcommand)
{
    $result = mysql_query($sqlcommand) or die(mysql_error());  
    $table = array();
    while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
        $table[] = $row; 
    }  
    $result = array ('success'=>true, 'data'=>$table);
    return json_encode($result);
}
