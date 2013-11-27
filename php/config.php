<?php
  $con=mysql_connect("127.0.0.1","root","");
  if(!$con){
    die('could not connect'. mysql_error());
  }
  mysql_query("set names 'utf8'");
  mysql_select_db("test",$con);
?>