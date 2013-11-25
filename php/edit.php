<?php
  require_once './config.php';
  
  $name=$_POST["name"];
  $phno=(int)$_POST["phno"];
  $email=$_POST["email"];
  $address=$_POST["address"];
  $update="update client_contact set phno='$phno', email='$email', address='$address' where name='$name'";
  mysql_query($update,$con);
  
  require_once './destruct.php';
?>