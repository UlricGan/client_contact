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
    
   $.extend({showDl:function(data){
        $('#detail').html("<dl><dt>姓名:</dt><dd id='choiced_name'>"+$.parseJSON(data).name+"</dd><br><dt>电话:</dt><dd id='choiced_phno'>"+$.parseJSON(data).phno+"</dd><br><dt>电子邮件:</dt><dd id='choiced_email'>"+$.parseJSON(data).email+"</dd><br><dt>地址:</dt><dd id='choiced_address'>"+$.parseJSON(data).address+"</dd></dl>");
        $('.operate').removeClass('hide').attr('id','edit').text("编辑");
        $('#delete').removeClass('hide');
  }}); 
  });
</script>