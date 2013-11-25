<?php
  require_once './config.php';

  $name=$_GET["name"];
  $de_sql="delete from client_contact where name='$name'";
  mysql_query($de_sql,$con);
  $sql="select * from client_contact";
  $result=mysql_query($sql,$con);
  while($row=mysql_fetch_array($result)){
    echo "<ul>";
    echo "<li><a class='list_name'>" . $row['name'] . "</a></li>";
    echo "</ul>";
  }
  
  require_once './destruct.php';
?>