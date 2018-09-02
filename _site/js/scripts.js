$(".vendor").fitVids();

$(".vendor").fitVids({ customSelector: "iframe[src^='http://socialcam.com']" });

$(function() { $("a").each(function() { if ($(this).attr("href") == window.location.pathname) { $(this).addClass("selected"); } }); });