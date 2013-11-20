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
  $search="update client_contact set phno='$phno',email='$email',address='$address' where name='$name'";
  mysql_query($search,$con);
  echo "<p>成功！</p>";
  mysql_close($con);
?>