'use strict';
window.onload = function(){
    setTimeout(function(){
        $(".rotate-loading").hide();
        $(".head-logo").addClass("head-logo-touch");
    },1500);
}

$(".head-logo").tap(function(){
    $(".layer-up").addClass("layer-up-remove");
    $(".layer-down").addClass("layer-down-remove");
    $(".head-logo").removeClass("head-logo-touch");
    $(".head-logo").addClass("head-logo-move");
})
