<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Client Contact</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="http://cdn.bootcss.com/twitter-bootstrap/3.0.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="style/mystyle.css">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="script/behaviour.js" type="text/javascript"></script>
  </head>
  <body>
    <div class="container">
    <div id="contact_list">
      <form class="navbar-form">
        <div class="form-group">
        <input type="text" name="cname" class="form-control input-lg" placeholder="Name" id="cname">
        </div>
        <button type="button" class="btn btn-default btn-lg" id="add">Add</button>
      </form>
      <div id="main">
      <ul class="list-group">
        <?php
          require_once './php/config.php';
		  
          $sql="select * from client_contact";
          $result=mysql_query($sql,$con);
          while($row=mysql_fetch_array($result)){
		?>
			<li><a class='list_name list-group-item'><?php echo $row['name']; ?></a></li>
		<?php
          }
          require_once './php/destruct.php';
		?>
      </ul>
      <span class='glyphicon glyphicon-chevron-down down'></span>
      <span class='glyphicon glyphicon-chevron-up up'></span>
      </div>
    </div>
    <div id="contact_detail">
      <div id="detail">
      </div>
      <div class="btn-group">
        <button type="button" id="edit" class="hide operate btn btn-default btn-lg">编辑</button>
        <button type="button" id="delete" class="hide btn btn-default btn-lg">删除</button>
      </div>
    </div>
    <div id="edit_tip"></div>
    </div>
  </body>
</html>