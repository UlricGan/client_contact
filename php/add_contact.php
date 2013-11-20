<?php
  $name=$_POST["name"];
  $phno=$_POST["phno"];
  $email=$_POST["email"];
  $address=$_POST["address"];
  $con=mysql_connect("127.0.0.1","root","0310");
  if(!$con){
    die('could not connect'. mysql_error());
  }
  mysql_query("set names 'utf8'");
  mysql_select_db("test",$con);
  $search="select * from client_contact where (name='$name' and phno='$phno' and email='$email' and address='$address')";
  $result=mysql_query($search,$con);
  $row=mysql_fetch_array($result);
  if($row[0]){
    echo "<p> 已存在</p>";
  }else{
    $sql="insert into client_contact values ('$name','$phno','$email','$address')";
    mysql_query($sql,$con);
    echo "<p>成功！</p>";
  }
  mysql_close($con);
?>