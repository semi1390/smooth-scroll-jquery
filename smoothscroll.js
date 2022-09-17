// Smoothscroll Script...
$('nav ul li a').click(function (){
    var thisSection = $(this).attr('href');
    var thisLink = $(this)
     
    $('html').stop().animate({
        scrollTop: $(thisSection).offset().top - 200
    }, 400, 'easeOutCirc', function(){
        $('nav ul li a').removeAttr('class');
        $(thisLink).addClass('selected');
    })
   
});

