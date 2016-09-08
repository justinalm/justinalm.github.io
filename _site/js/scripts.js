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

$(function(){

        $("#typed").typed({
            // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
            stringsElement: $('#typed-strings'),
            typeSpeed: 100,
            backDelay: 1500,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }