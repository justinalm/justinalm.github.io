$(".vendor").fitVids();

$(".vendor").fitVids({ customSelector: "iframe[src^='http://socialcam.com']" });

$(function() { $("a").each(function() { if ($(this).attr("href") == window.location.pathname) { $(this).addClass("selected"); } }); });

/* Scroll to next figure */
$(window).keydown(function(e) {
    
    var targetElement;
    //down
    if (e.keyCode == 40) {
        $targetElement = $('.active').next('figure');
    }
    //up
    else if (e.keyCode == 38) {
        $targetElement = $('.active').prev('figure');
    }
    if (!$targetElement.length) {return;}
    $('.active').removeClass('active');
    $targetElement.addClass('active');
    
    //scroll element into view    
    $('html, body').clearQueue().animate({scrollTop: $targetElement.offset().top - 20 }, 200);
});