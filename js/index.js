$(document).ready(function () {

    //Efecto menu
    var $menu = $('.menu a');
    $menu.each(function (index, elemento) {
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({top:'0px'},1000+(index*150))

    });

    //Efecto header

    if($(window).width() > 800){
        $('header .textos').css({
            opacity:0,
            marginTop:0
        });
        $('header .textos').animate({
            opacity:1,
            marginTop:'-150px'
        },1000);


    }

    //scroll

    var acercaDe = $('#acerca-de').offset().top;
    var menuCompra = $('#menu-compra');

    
    var btnGaleria = $('#btn-galeria');
    var btnUbicacion = $('#btn-ubicacion');
    var btnAcercaDe = $("#btn-acerca-de");


    btnAcercaDe.click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe
        },500);
    });

    $('#btn-menu').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:menuCompra.offset().top+660
        },500)
    });

    btnGaleria.click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#galeria').offset().top
        },500);
    });

    btnUbicacion.click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#ubicacion').offset().top
        },500);
    });
});