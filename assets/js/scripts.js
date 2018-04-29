$(window).scroll(function(){

    var wScroll = $(this).scrollTop();  

    $('#logo').css({
        'transform':'translate(0px, '+ wScroll /5 +'%)'
    });

    $('.header-img').css({
        'transform':'translate(0px, -'+ wScroll /45 +'%)'
    }); 
    
    if(wScroll > 570) {
        $('#down-button').css({ opacity: 0 });
    } else {
        $('#down-button').css({ opacity: 0.8 });
    }
    
})


// Firefox back to top button
$(window).bind('DOMMouseScroll', function(e){
   if(e.originalEvent.detail > 0) {
       //scroll down

     if($('.up-button').hasClass('show')) {
       $('.up-button').removeClass('show');
     } else {
       console.log("already removed");
     }; 

   } else {
       //scroll up

     if($('.up-button').hasClass('show')) {
       console.log("already shown");
     } else {
       $('.up-button').addClass('show');
     };
   };
});

$(document).ready(function(){
  
    $('#down-button').click(function() {
        $('html,body').animate({
            scrollTop: $(".page-content").offset().top},
            1000);
    });
  
    $('.up-button').click(function(){
        $('html,body').animate({
            scrollTop: 0},
            1000);
    })
  
});



