<?php
  $name=$_GET["name"];
  $con=mysql_connect("127.0.0.1","root","0310");
  if(!$con){
    die('could not connect'. mysql_error());
  }
  mysql_query("set names 'utf8'");
  mysql_select_db("test",$con);
  $de_sql="delete from client_contact where name='$name'";
  mysql_query($de_sql,$con);
  $sql="select * from client_contact";
  $result=mysql_query($sql,$con);
  while($row=mysql_fetch_array($result)){
    echo "<ul>";
    echo "<li><a class='list_name'>" . $row['name'] . "</a></li>";
    echo "</ul>";
  }
  mysql_close($con);
?>