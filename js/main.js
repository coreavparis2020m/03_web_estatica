$(document).ready(function(){
    // Menú lateral
    $('#burger').click(function(){
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
        $('.menu nav a').toggleClass('abierto');
        $('.menu nav hr').toggleClass('abierto');
    });
    // Cambio header en index.html
    $(window).on('scroll', function(){
        let posicion = $('#primera').offset();
        if ($(window).scrollTop() > posicion.top) {
            $('header').removeClass('white');
        } else {
            $('header').addClass('white');
        }
    });
});

