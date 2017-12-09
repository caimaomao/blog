<?php
	require 'config.php';
	
	$query = "SELECT id,title,content,date FROM blog_blog ORDER BY date DESC LIMIT 0, 3";
	$result = @mysql_query($query) or die('SQL错误：'.mysql_error());
	
	while (!!$row = mysql_fetch_array($result,MYSQL_ASSOC)) {
		$json .= json_encode($row).',';
	}
	
	sleep(3);
	echo '['.substr($json, 0, strlen($json) - 1).']';
	
	mysql_close();
?>