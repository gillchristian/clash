'use strict';
$(function() {

    // cache DOM elements
    var $sliderQuote            = $('#slider-desafio'),
        $slideQuoteContainer    = $('.container-desafio', $sliderQuote),
        $slidesQuote            = $('.quote', $sliderQuote);

    var paginationQuote = $slidesQuote.length;

    // we only initialize the slider if there is more than one slide
    if (paginationQuote > 1) {

        // dinamic settings for slider
        var widthQuote          = $sliderQuote.css('width'),
            animationSpeedQuote = 1000,
            pauseQuote          = 4000,
            currentSlideQuote   = 0;

        // duplicate first and last elements for slick looped transitions
        var $first =     $slidesQuote.first().clone(true),
            $last =      $slidesQuote.last().clone(true);
        
        $slideQuoteContainer.append($first);
        $slideQuoteContainer.prepend($last);
        
        // change the margin so we start on the real first slide
        $slideQuoteContainer.css('margin-left', '-='+widthQuote);
       
        $slidesQuote = $('.quote', $sliderQuote);
        paginationQuote = $slidesQuote.length;

        // =================================================
        // slide functions
        // =================================================
        
        // generate the dots for the navigation
        var $navBarQuote = $('.dot-desafio-nav');

        (function (){
            var toAppend =  '<div class="dot-desafio"></div>';
            
            for(var i = 2; i < paginationQuote; i++ ) {

                $navBarQuote.append(toAppend);
            }

        })();

        // init the first dot with class active
        toggleDotClass(0, true);

        // we create an interval to animate the slider
        // we use - margin-left animation to animate through the slides
        var intervalQuote;

        function startQuoteSlider() {
            intervalQuote = setInterval(function() {
                var change;

                $slideQuoteContainer.animate({'margin-left': '-='+widthQuote}, animationSpeedQuote, function() {
                    change = true;

                    if (currentSlideQuote === paginationQuote - 3) {
                        toggleDotClass(currentSlideQuote, false);
                        toggleDotClass(0, true);
                        currentSlideQuote = 0;
                    
                        $slideQuoteContainer.css('margin-left', '-'+widthQuote);
                        change = false;                    
                    }
                    if (change){
                        toggleDotClass(currentSlideQuote, false);
                        currentSlideQuote++;
                        toggleDotClass(currentSlideQuote, true);
                    }

                });

            }, pauseQuote);
        }

        // clearing the interval pauses the slider
        function pauseQuoteSlider() {
            clearInterval(intervalQuote);
        }

        // starts the slider from the first - we restart the width since this function is called on window.resize
        function restartQuoteSlider() {
            pauseQuoteSlider();
            widthQuote = $sliderQuote.css('width');
            toggleDotClass(currentSlideQuote, false);
            toggleDotClass(0, true);
            currentSlideQuote = 0;
            $slideQuoteContainer.css('margin-left', '-'+widthQuote);
            startQuoteSlider();
        }

        // jump to slide, called on click of the navigation dots
        function jumpToQuoteSlider (pageNumber) {

            var width = parseInt(widthQuote);
            var slideMargin = pageNumber * width + width;

            $slideQuoteContainer.animate({'margin-left': '-'+slideMargin}, animationSpeedQuote, function() {
                toggleDotClass(currentSlideQuote, false);
                toggleDotClass(pageNumber, true);
                currentSlideQuote = pageNumber;
            });
        }

        // call jQuery toggleClass dot to (un)set active class
        function toggleDotClass(index, state){
            $('.dot-desafio:eq('+ index + ')').toggleClass('active', state);
        }
        // =================================================
        // events
        // =================================================
        
        // wait untile resize finishen, then restar slider
        var resizeTimer;

        $(window).on('resize', function() {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function() {
                restartQuoteSlider();
          }, 500);
        });

        // pause slider on mouse enter, restar on mouse leave
        $slideQuoteContainer
            .on('mouseenter', pauseQuoteSlider)
            .on('mouseleave', startQuoteSlider);

        $navBarQuote
            .on('mouseenter', pauseQuoteSlider)
            .on('mouseleave', startQuoteSlider);

        // trigger jumpToQuoteSlider
        $('.dot-desafio')
            .on('click', function (event){
                jumpToQuoteSlider($(this).index());

        });

        // init the slider
        startQuoteSlider();        
    }

});