<?php 
require_once 'settings.php';

//echo csvToJson('adress.csv');
dbtest();												
									

/* Connects to MYSQL database and sets the UTF8 format. 
   Then calls the Json converter function with SQL command. */
function dbTest () 
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
    return json_encode($table);
}

/* Generates Keys from first line of the CSV input file.
   Returns JSon encoded string with Key/Value pairs from CSV */
function csvToJson($file) 
{
	$handle 	= fopen($file,r);
	$keyList 	= array();
	$table 		= array();
	if (($keyList = fgetcsv($handle))!= FALSE) {
    	while ($currentLine = fgetcsv($handle)) {		
			$table[] = engageCSVKeys($currentLine, $keyList);	
		}
	}
	return json_encode ($table);
}

// Generates associative Key/Value Array needed for JSON encode
function engageCSVKeys($nakedList, $fieldNames)
{
	$engagedList = array();
	for ($i = 0; $i < count($nakedList); $i++) {
		$key = $fieldNames[$i];
		$engagedList[$key] = $nakedList[$i];
	}
	return $engagedList;
}
