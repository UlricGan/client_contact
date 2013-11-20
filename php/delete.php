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
    echo "<tr>";
    echo "<td><a class='delete'>删除</a></td>";
    echo "<td >" . $row['name'] . "</td>";
    echo "<td>" . $row['phno'] . "</td>";
    echo "<td>" . $row['email'] . "</td>";
    echo "<td>" . $row['address'] . "</td>";
    echo "<td><a class='operate'>编辑</a></td>";
    echo "</tr>";
  }
  mysql_close($con);
?>