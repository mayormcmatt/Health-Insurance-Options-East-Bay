// On page load, resize window to viewport height
function resizeTopBanner() {
    var viewportHeight = $(window).height();
    $('#titleBanner').height(viewportHeight - 200);
}

$('#servicesLink').click(function() {
    $('html, body').animate({
        scrollTop: $('#servicesRow').offset().top}, 'fast'
    );
});

$(document).ready(function() {
    resizeTopBanner();
});
