$(window).scroll(function(){

    var wScroll = $(this).scrollTop();
//    console.log(wScroll);

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


$(document).ready(function(){
    $('#down-button').click(function() {
        $('html,body').animate({
            scrollTop: $(".content").offset().top},
            1000);
    });
});



