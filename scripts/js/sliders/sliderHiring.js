'use strict';

$(function() {


    // cache DOM elements
    var $slider             = $('.slider-hiring'),
        $slideContainer     = $('.container-hiring', $slider),
        $slides             = $('.person-hiring', $slider),
        $arrowLeft          = $('.arrow-left'),
        $arrowRight         = $('.arrow-right'),
        $dotsBar            = $('.dot-hiring-nav');

    // dinamic settings for slider
    var width = $slider.css('width'),
        animationSpeed  = 1000,
        pause           = 3000,
        currentSlide    = 1,
        slidesPerPage   = 4,
        pagination      = Math.ceil($slides.length/slidesPerPage);

    // =================================================
    // slide functions
    // =================================================
    
    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                //console.log('animate:', currentSlide); 
                if (currentSlide === pagination) {
                    currentSlide = 0;
                    $slideContainer.css('margin-left', 0);
                }
                //console.log('hiring');
                //console.log('current: ',currentSlide, 'margin: ',  $slideContainer.css('margin-left') ) ;
                currentSlide++;
            });
        }, pause);
    }

    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    // =================================================
    // arrows events 
    // =================================================

    $arrowRight
        .on('click',function(){

            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (currentSlide === pagination) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
                currentSlide++;
            });
        })
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    $arrowLeft

        .on('click',function(){
            
            $slideContainer.animate({'margin-left': '+='+width}, animationSpeed, function() {
                if (currentSlide === pagination) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
                currentSlide++;
            });
        })
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);;

    // =================================================
    // dots (nav) events
    // =================================================

    $dotsBar
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);


    startSlider();
    
});