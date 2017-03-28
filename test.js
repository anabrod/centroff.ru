 <script type="text/javascript">
$(document).ready(function () {
   $('#foo1').click(function(){
      var badfild1 = [];
     if($('#form1 input.imortanttext1').val()=="") { badfild1[1]=1;}
     
     if($('#form1 input.imortanttext2').val()=="") { badfild1[2]=1;}
       badfild1.forEach(function(item, i, arr) {
           $('#form1 input.imortanttext' + i).css("border","1px solid #f00");
            });
             if($('#form1 input.imortanttext2').val()=="" || $('#form1 input.imortanttext2').val()=="")
       {
           return false; 
       }
       
      
        $(".loading").show();
        $(document).ajaxComplete(function() {
   $(".loading").hide();
   $("#form1").html("Сообщение отправлено!");
});
   });


    
});


  </script>

