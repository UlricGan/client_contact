$(document).ready(function(){
  $("#cname").keyup(function(){
    var result=$("#cname").val();
    var url="php/search.php";
    url=url+"?name="+result;
    url=url+"&sid="+Math.random();
    $.ajax({
      url: url,
      type: 'get',
      beforeSend:function(){
        $('#loading').addClass('load_c');
      },
      success: function(data){
        $('#main').html(data);
        $('#loading').removeClass('load_c');
      }
    });
  });
  
  $(document).on('click','#edit',function(){
    var old_address=$('#choiced_address').text();
    var old_email=$('#choiced_email').text();
    var old_phno=$('#choiced_phno').text();
    var old_name=$('#choiced_name').text();
    $("#detail").html("<label for='edit_name'>名字</label><input type='text' id='edit_name' disabled='disabled' value='"+old_name+"'><br><label for='edit_phno'>电话</label><input type='text' id='edit_phno' value='"+old_phno+"'><br><label for='edit_email'>电子邮件</label><input type='text' id='edit_email' value='"+old_email+"'><br><label for='edit_address'>地址</label><input type='text' id='edit_address' value='"+old_address+"'>"); 
    $('.operate').attr('id','edit_save').text("保存");
  });
  
  $(document).on('click','#edit_save',function(){
    var edit_address=$('#edit_address').val();
    var edit_email=$('#edit_email').val();
    var edit_phno=$('#edit_phno').val();
    var edit_name=$('#edit_name').val();
    eurl="php/edit.php";
    var aresult=edit_name;
    esurl="php/showDetail.php?name="+aresult+"&sid="+Math.random();
    $.post(eurl,{
      name:edit_name,
      phno:edit_phno,
      email:edit_email,
      address:edit_address
      },function(datae){
        $("#edit_tip").html(datae);
      });
    $.ajax({
      url: esurl,
      type: 'get',
      success: function(datac){
        $('#detail').html(datac);
        $('.operate').removeClass('hide').attr('id','edit').text("编辑");
        $('#delete').removeClass('hide');
      }
    });
  });
  
  $(document).on('click','#delete',function(){
    var delete_name=$('#choiced_name').text();
    url="php/delete.php"
    url=url+"?name="+delete_name;
    url=url+"&sid="+Math.random();
    $.get(url,function(data){
       $("#main").html(data);
       $("#detail").html('');
       $('.operate').addClass('hide');
       $('#delete').addClass('hide');
    });
  });
  
  $("#add").click(function() {
     $("#detail").html("<label for='add_name'>名字</label><input type='text' id='add_name'><br><label for='add_phno'>电话</label><input type='text' id='add_phno'><br><label for='add_email'>电子邮件</label><input type='text' id='add_email'><br><label for='add_address'>地址</label><input type='text' id='add_address'>");
     $('.clicked').removeClass('clicked');
     $('#delete').removeClass('hide');
     $('.operate').removeClass('hide').attr('id','save').text("保存");
  });

  $(document).on('click','#save',function(){
    var add_name=$('#add_name').val();
    var add_phno=$('#add_phno').val();
    var add_email=$('#add_email').val();
    var add_address=$('#add_address').val();
    aurl="php/add.php";
    var aresult=add_name;
    surl="php/showDetail.php?name="+aresult+"&sid="+Math.random();
    var cresult=$("#cname").val();
    var curl="php/search.php?name="+cresult+"&sid="+Math.random();
    $.post(aurl,{
      name:add_name, 
      phno:add_phno, 
      email:add_email, 
      address:add_address
      },function(datas){
        $("#contact").html(datas);
      });
    $.ajax({
      url: curl,
      type: 'get',
      beforeSend:function(){
        $('#loading').addClass('load_c');
      },
      success: function(dataq){
        $('#main').html(dataq);
        $('#loading').removeClass('load_c');
      }
    });
    $.ajax({
      url: surl,
      type: 'get',
      success: function(datac){
        $('#detail').html(datac);
        $('.operate').removeClass('hide').attr('id','edit').text("编辑");
        $('#delete').removeClass('hide');
      }
    });
  });
  
  $(document).on('click','.list_name',function(){
    var clickName=$(this);
    var lastclick=$('.clicked');
    if(lastclick){
      lastclick.removeClass('clicked');
    };
    clickName.addClass('clicked');
    var result=clickName.text();
    url="php/showDetail.php?name="+result+"&sid="+Math.random();
    $.ajax({
      url: url,
      type: 'get',
      success: function(data){
        $('#detail').html(data);
        $('.operate').removeClass('hide').attr('id','edit').text("编辑");
        $('#delete').removeClass('hide');
      }
    });
  });
});