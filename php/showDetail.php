<?php
  $name=$_GET["name"];
  $con=mysql_connect("127.0.0.1","root","0310");
  if(!$con){
    die('could not connect'. mysql_error());
  }
  mysql_query("set names 'utf8'");
  mysql_select_db("test",$con);
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
  mysql_close($con);
?>