<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Client Contact</title>
    <link rel="stylesheet" href="style/mystyle.css">
    <script src="script/jquery-uncompressed-1.10.2.js" style="text/javascript"></script>
    <script src="script/behaviour.js" style="text/javascript"></script>
  </head>
  <body>
    <div id="contact_list">
      <form>
        <input type="text" name="cname" placeholder="Name" id="cname">
        <button type="button" class="button" id="add">Add</button>
      </form>
      <div id="main">
        <?php
          require_once './php/config.php';
		  
          $sql="select * from client_contact";
          $result=mysql_query($sql,$con);
          while($row=mysql_fetch_array($result)){
		?>
		<ul>
			<li><a class='list_name'><?php echo $row['name']; ?></a></li>
		</ul>
		<?php
          }
          require_once './php/destruct.php';
		?>
      </div>
    </div>
    <div id="contact_detail">
      <div id="detail">
      </div>
      <button type="button" id="edit" class="hide operate">编辑</button>
      <button type="button" id="delete" class="hide">删除</button>
    </div>
    <div id="edit_tip"></div>
  </body>
</html>