<?php
  require_once './config.php';
  
  $name=$_POST["name"];
  $phno=$_POST["phno"];
  $email=$_POST["email"];
  $address=$_POST["address"];
  $search="select * from client_contact where (name='$name' and phno='$phno' and email='$email' and address='$address')";
  $result=mysql_query($search,$con);
  $row=mysql_fetch_array($result);
  if($row[0]){
  }else{
    $add_sql="insert into client_contact values ('$name','$phno','$email','$address')";
    mysql_query($add_sql,$con);
  }
  
  require_once './destruct.php';
?>