$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});

$('#back-to-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});
