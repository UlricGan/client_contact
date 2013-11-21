$(document).ready(function(){
  $("#submit").click(function(){
    event.preventDefault();
    var result=$("#cname").val();
    var url="php/contact.php";
    url=url+"?name="+result;
    url=url+"&sid="+Math.random();
    $.get(url,function(data){
        $("#contact").html(data);
      });
  });
  
  $(document).on('click','.operate',function(){
    var operate=$(this).parent();
    var address=operate.prev().text();
    var email=operate.prev().prev().text();
    var phno=operate.prev().prev().prev().text();
    var name=operate.prev().prev().prev().prev().text();
    $(this).parent().parent().html("<td><a class='change delete'>删除</a></td><td>"+name+"</td><td><input type='text' value='"+phno+"'></td><td><input type='text' value='"+email+"'></td><td><input type='text' value='"+address+"'></td><td><a class='edit change'>保存</a></td>");    
  });
  
  $(document).on('click','.edit',function(){
    var operate=$(this).parent();
    var edit_address=operate.prev().children().val();
    var edit_email=operate.prev().prev().children().val();
    var edit_phno=operate.prev().prev().prev().children().val();
    var edit_name=operate.prev().prev().prev().prev().text();
    url="php/edit.php";
    $.post(url,{
      name:edit_name,
      phno:edit_phno,
      email:edit_email,
      address:edit_address
      },function(data){
        $("#edit_tip").html(data);
      });
    $(this).parent().parent().html("<td><a class='change delete'>删除</a></td><td>"+edit_name+"</td><td>"+edit_phno+"</td><td>"+edit_email+"</td><td>"+edit_address+"</td><td><a class='operate change'>编辑</a></td>");
  });
  
  $(document).on('click','.delete',function(){
    var delete_name=$(this).parent().next().text();
    url="php/delete.php"
    url=url+"?name="+delete_name;
    url=url+"&sid="+Math.random();
    $.get(url,function(data){
       $("#contact").html(data);
    });
  });
  
  $("#add").click(function() {
    event.preventDefault();
    $("#contact").prepend("<tr><td><a class='change delete'>删除</a></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><input type='text'></td><td><a class='change save'>保存</a></td></tr>;");
  });

  $(document).on('click','.save',function(){
    var add_name=$(this).parent().prev().prev().prev().prev().children().val();
    var add_phno=$(this).parent().prev().prev().prev().children().val();
    var add_email=$(this).parent().prev().prev().children().val();
    var add_address=$(this).parent().prev().children().val();
    url="php/add.php";
    $.post(url,{
      name:add_name, 
      phno:add_phno, 
      email:add_email, 
      address:add_address
      },function(data){
        $("#contact").html(data);
      });
  });
});