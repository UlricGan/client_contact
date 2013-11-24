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
    echo "<ul>";
    echo "<li><a class='list_name'>" . $row['name'] . "</a></li>";
    echo "</ul>";
  }
  mysql_close($con);
?>

<script src="script/jquery-uncompressed-1.10.2.js" style="text/javascript"></script>
<script>
  $(document).ready(function(){
    var nowClick=$('#choiced_name');
    if(nowClick){
      var nowClickText=nowClick.text();
      var listName=$('.list_name');
      listName.each(function(){
        if($(this).text()===nowClickText){
          if(!$(this).hasClass('clicked')){
            $(this).addClass('clicked');
          }
        }
      });
    }
  });
</script>