$(document).ready(function(){

  $(window).load(function(){
    $.scrollIcon();
  });
  
  $('#main ul').scroll(function(){
    $.scrollIcon();
  });
  
  $("#cname").keyup(function(){
    var result=$("#cname").val();
    var url="php/search.php";
    url=url+"?name="+result;
    url=url+"&sid="+Math.random();
    $.ajax({
      url: url,
      type: 'get',
      success: function(data){
        $.searchNa(data);
      }
    });
  });
  
  $(document).on('click','#edit',function(){
    var old_address=$('#choiced_address').text();
    var old_email=$('#choiced_email').text();
    var old_phno=$('#choiced_phno').text();
    var old_name=$('#choiced_name').text();
    $("#detail").html("<form class='navbar-form'><div class='form-group'><label for='edit_name'>名字</label><input type='text' id='edit_name' disabled='disabled' class='form-control input-lg' value='"+old_name+"'><br><label for='edit_phno'>电话</label><input type='text' id='edit_phno' class='form-control input-lg' value='"+old_phno+"'><br><label for='edit_email'>电子邮件</label><input type='text' class='form-control input-lg' id='edit_email' value='"+old_email+"'><br><label for='edit_address'>地址</label><input type='text' id='edit_address' class='form-control input-lg' value='"+old_address+"'></div></form>"); 
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
        $.ajax({
          url: esurl,
          type: 'get',
          success: function(edit_data){
            $.showDl(edit_data);
          }
        });
      });
  });
  
  $(document).on('click','#delete',function(){
    var result=$("#cname").val();
    var delete_name=$('#choiced_name').text();
    url="php/delete.php?name="+delete_name+"&sid="+Math.random();
    var surl="php/search.php?name="+result+"&sid="+Math.random();
    $.get(url,function(data){
       $("#detail").html('');
       $('.operate').addClass('hide');
       $('#delete').addClass('hide');
       $.ajax({
         url: surl,
         type: 'get',
         success: function(datas){
           $.searchNa(datas);
          }
        });
    });
  });
  
  $("#add").click(function() {
     $("#detail").html("<form class='navbar-form'><div class='form-group'><label for='add_name'>名字</label><input type='text' id='add_name' class='form-control input-lg'><br><label for='add_phno'>电话</label><input type='text' id='add_phno' class='form-control input-lg'><br><label for='add_email'>电子邮件</label><input type='text' id='add_email' class='form-control input-lg'><br><label for='add_address'>地址</label><input type='text' id='add_address' class='form-control input-lg'></div></form>");
     $('.clicked').removeClass('clicked');
     $('#delete').removeClass('hide');
     $('.operate').removeClass('hide').attr('id','save').text("保存");
     alert($('#main ul').height()-$('#main li').height()+parseInt($('#main ul').css('borderTopWidth'))+parseInt($('#main ul').css('borderBottomWidth')));
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
        $.ajax({
          url: surl,
          type: 'get',
          success: function(add_data){
            $.showDl(add_data);
            $.ajax({
              url: curl,
              type: 'get',
              success: function(dataq){
                $.searchNa(dataq);
              }
            });
          }
        });
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
      success: function(click_data){
        $.showDl(click_data);
      }
    });
  });
  
  $.extend({showDl:function(data){
        $('#detail').html("<dl><dt>姓名:</dt><dd id='choiced_name'>"+$.parseJSON(data).name+"</dd><br><dt>电话:</dt><dd id='choiced_phno'>"+$.parseJSON(data).phno+"</dd><br><dt>电子邮件:</dt><dd id='choiced_email'>"+$.parseJSON(data).email+"</dd><br><dt>地址:</dt><dd id='choiced_address'>"+$.parseJSON(data).address+"</dd></dl>");
        $('.operate').removeClass('hide').attr('id','edit').text("编辑");
        $('#delete').removeClass('hide');
  }});
  
  $.extend({searchNa:function(data){
        var js_name=$.parseJSON(data);
        var list_item='';
        if(js_name.length){
          for(i=0;i<js_name.length;i++){
            list_item+="<li><a class='list_name list-group-item'>"+js_name[i]+"</a></li>";   
          }
          $('#main .list-group').html(list_item);
        }else{
          $('#main .list-group').html("");
        }
        $.scrollIcon();
        var nowClick=$('#choiced_name');
        if(nowClick){
          var nowClickText=nowClick.text();
          var listName=$('.list_name');
          listName.each(function(){
            if($(this).text()===nowClickText){
              if(!$(this).hasClass('clicked')){
                $(this).addClass('clicked');
                $(this).position().top=425;
                var firstLi=$('#main li:first').position().top;
                var clickLi=$(this).position().top;
                var cfLength=clickLi-firstLi;
                $('#main ul').scrollTop(cfLength-$('#main ul').height()/2);
              }
            }
          });
        }
  }});
  
  $.extend({scrollIcon:function(){
    var sIcon=$('#main .down');
    var uIcon=$('#main .up');
    var ul_bottom=$('#main ul').height()-$('#main li').height()+parseInt($('#main ul').css('borderTopWidth'))+parseInt($('#main ul').css('borderBottomWidth'));
    if($('#main li a').text()){
      if($('#main li:last-child').position().top<=ul_bottom){
        sIcon.addClass('hidden');
      }else{
        sIcon.removeClass('hidden');
      }
      if($('#main li:first-child').position().top<0){
        uIcon.removeClass('hidden');
      }else{
        uIcon.addClass('hidden');
      }
    }else{
        sIcon.addClass('hidden');
        uIcon.addClass('hidden');
    }
  }});
});