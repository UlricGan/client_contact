<?php
  require_once './config.php';

  $name=$_GET["name"];
  $sql="select * from client_contact where name like '%$name%'";
  $result=mysql_query($sql,$con);
  $row=mysql_fetch_array($result);
  $js_result=array("name"=>$row['name'], "phno"=>$row['phno'], "email"=>$row['email'], "address"=>$row['address']);
  echo json_encode($js_result);
  
  require_once './destruct.php';
?>