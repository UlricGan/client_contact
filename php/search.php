<?php
  require_once './config.php';
  
  $name=$_GET["name"];
  $sql="select * from client_contact where name like '%$name%'";
  $result=mysql_query($sql,$con);
  while($row=mysql_fetch_array($result)){
    echo "<ul>";
    echo "<li><a class='list_name'>" . $row['name'] . "</a></li>";
    echo "</ul>";
  }
  
  require_once './destruct.php';
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