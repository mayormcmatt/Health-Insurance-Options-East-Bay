// On page load, resize window to viewport height
$(document).ready(function(){
    var viewportHeight = $(window).height();

    $('#titleBanner').height(viewportHeight);
})
