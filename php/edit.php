<?php
  $name=$_POST["name"];
  $phno=(int)$_POST["phno"];
  $email=$_POST["email"];
  $address=$_POST["address"];
  $con=mysql_connect("127.0.0.1","root","0310");
  if(!$con){
    die('could not connect'. mysql_error());
  }
  ;
  mysql_query("set names 'utf8'");
  mysql_select_db("test",$con);
  $update="update client_contact set phno='$phno', email='$email', address='$address' where name='$name'";
  mysql_query($update,$con);
  mysql_close($con);
?>