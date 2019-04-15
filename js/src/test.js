(function($){
    var num=1;

    $('#box1').on('mouseover',function(){
        num=0;
       

    });

    $('#box2').on('mouseover',function(){
        num=1; 
        

    });


  var fn= (function(){

    console.log(num);
          $('#wrap').css({backgroundColor:'#ddd'});
          if(num == 1){
              $('#wrap').css({backgroundColor:'#102'});

          }
      


});


fn();



 
  
    

})(jQuery);