// Basic FitVids Test
$(".vendor").fitVids();
// Custom selector and No-Double-Wrapping Prevention Test
$(".vendor").fitVids({ customSelector: "iframe[src^='http://socialcam.com']"});

$(function(){
       $("a").each(function(){
               if ($(this).attr("href") == window.location.pathname){
                       $(this).addClass("selected");
               }
       });
});$(function(){
       $("a").each(function(){
               if ($(this).attr("href") == window.location.pathname){
                       $(this).addClass("selected");
               }
       });
});