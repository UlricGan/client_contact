<?php
  require_once './config.php';

  $name=$_GET["name"];
  $de_sql="delete from client_contact where name='$name'";
  mysql_query($de_sql,$con);
  $sql="select * from client_contact";
  $result=mysql_query($sql,$con);
  $js_result=array();
  while($row=mysql_fetch_array($result)){
    array_push($js_result, $row['name']);
  }
  echo json_encode($js_result);
  
  require_once './destruct.php';
?>