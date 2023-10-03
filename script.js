$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});

$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        // Define um tempo de espera após a submissão
        setTimeout(function() {
            window.location.href = './agradecimento.html';
        }, 500); // espera meio segundo antes de redirecionar
    });
});


