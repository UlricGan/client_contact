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
  
  $("#add_submit").click(function(){
    event.preventDefault();
    var add_name=$("#add_cname").val();
    var add_phno=$("#add_phno").val();
    var add_email=$("#add_email").val();
    var add_address=$("#add_address").val();
    url="php/add_contact.php";
    $.post(url,{
      name:add_name, 
      phno:add_phno, 
      email:add_email, 
      address:add_address
      },function(data){
        $("#add_tip").html(data);
      });
  });
  
  $(document).on('click','.operate',function(){
    var operate=$(this).parent();
    var address=operate.prev().text();
    var email=operate.prev().prev().text();
    var phno=operate.prev().prev().prev().text();
    var name=operate.prev().prev().prev().prev().text();
    $(this).parent().parent().html("<td><a class='delete'>删除</a></td><td>"+name+"</td><td><input type='text' value='"+phno+"'></td><td><input type='text' value='"+email+"'></td><td><input type='text' value='"+address+"'></td><td><a class='edit'>保存</a></td>");    
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
    $(this).parent().parent().html("<td><a class='delete'>删除</a></td><td>"+edit_name+"</td><td>"+edit_phno+"</td><td>"+edit_email+"</td><td>"+edit_address+"</td><td><a class='operate'>编辑</a></td>");
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
  
});