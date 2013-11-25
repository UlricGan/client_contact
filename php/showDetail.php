<?php
  require_once './config.php';

  $name=$_GET["name"];
  $sql="select * from client_contact where name like '%$name%'";
  $result=mysql_query($sql,$con);
  while($row=mysql_fetch_array($result)){
    echo "<dl>";
    echo "<dt>姓名:</dt><dd id='choiced_name'>" . $row['name'] . "</dd><br>";
    echo "<dt>电话:</dt><dd id='choiced_phno'>" . $row['phno'] . "</dd><br>";
    echo "<dt>电子邮件:</dt><dd id='choiced_email'>" . $row['email'] . "</dd><br>";
    echo "<dt>地址:</dt><dd id='choiced_address'>" . $row['address'] . "</dd>";
    echo "</dl>";
  }
  
  require_once './destruct.php';
?>