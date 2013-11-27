<?php
  require_once './config.php';
  
  $name=$_GET["name"];
  $sql="select * from client_contact where name like '%$name%'";
  $result=mysql_query($sql,$con);
  $js_result=array();
  while($row=mysql_fetch_array($result)){
    array_push($js_result, $row['name']);
  }
  echo json_encode($js_result);
  require_once './destruct.php';
?>
