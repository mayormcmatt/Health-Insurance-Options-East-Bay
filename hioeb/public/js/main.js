// On page load, resize window to viewport height
function resizeTopBanner() {
    var viewportHeight = $(window).height();
    $('#titleBanner').height(viewportHeight - 200);
}

function scrollToServices() {
    $('html, body').animate({
        scrollTop: $('#servicesRow').offset().top}, 'slow'
    );
}

function scrollToContact() {
    $('html, body').animate({
        scrollTop: $('#contactRow').offset().top}, 'fast'
    );
}

$(document).ready(function() {
    resizeTopBanner();
});
