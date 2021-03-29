$(document).ready(function(){
    $(window).scroll(function(){
            var ancho = $(window).width();
            console.log(scroll,ancho);

            if( ancho > 930){
                var scroll = $(window).scrollTop();

                $('header .textos').css({
                    'transform': 'translate('+scroll/7+'%, 0px)'
                })

                $('.main .acerca-de article').css({
                    'transform':'translate(0px, -'+scroll/4+'%)'
                })
            }
    });

    $(window).resize(function(){
        var ancho = $(window).width();
        if(ancho < 930){
            $('.main .acerca-de article').css({
                'transform':'translate(0px,0px  )'
            })
        }
    });
});