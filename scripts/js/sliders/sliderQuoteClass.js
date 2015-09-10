// Create the defaults once
var defaultOptions = {
        animationSpeed: 1000,
        pauseDuration:  3000,
        currentSlide: 0
    }

    defaultElements = {
        slider: 'slider',
        slidesContainer: 'container',
        slides: 'slide',
        navBar: 'navBar',
        dot: 'dot',
        activeClass: 'active'
    };

var Slider = function (elements, options) {
    
    // extend elements and options into empty objects
    this.element = $.extend({}, defaultElements, elements);
    this.options = $.extend({}, defaultOptions, options);
}

Slider.prototype.init = function () {

    // chache DOM elements
    this.$slider            = $('#' + this.element.slider);
    this.$slidesContainer   = $('.' + this.element.slidesContainer, this.$slider);
    this.$slides            = $('.' + this.element.slides, this.$slider);
    this.$navBar            = $('.' + this.element.navBar, this.$slider);
    this.$dot               = $('.' + this.element.dot, this.$slider);
    this.$first             = this.$slides.first().clone(true);
    this.$last              = this.$slides.last().clone(true);
    this.width              = this.$slider.css('width');
    this.pagination         = this.$slides.length;

    // duplicate first and last slides for slick loop transitions

    this.$slidesContainer.append(this.$first);
    this.$slidesContainer.prepend(this.$last);

    // start from the real 1st slide
    this.$slidesContainer.css('margin-left', '-=' + this.width);

    // recalculate the # of slides
    this.$slides = $('.' + this.element.slides, this.$slider);
    this.pagination = this.$slides.length;

    // generate the nav dots
    var toAppend = '<div class="' + this.element.dot +'"></div>'
    for (var i = 0; i < this.pagination; i++ ) {
        this.$navBar.append(toAppend);
    };

    this.toggleDotClass(this.options.currentSlide, true);

    // add ^ in functions

    // call the functions here

    this.events();

    this.startSlider();
}

// =================================================
// start the slider interval
// =================================================

Slider.prototype.startSlider = function () {


    this.interval = setInterval(this.animate.bind(this), this.pauseDuration);
};

// =================================================
// called from the setTimeout
// =================================================

Slider.prototype.animate = function () {
    
    var changedDot;

    console.log(this.$slidesContainer);

    this.$slidesContainer.animate({'margin-left': '-=' + this.width}, this.animationSpeed, function(){

        if (this.currentSlide === this.pagination - 3) {
            this.toggleDotClass(this.currentSlide, false);
            this.toggleDotClass(0, false);
            this.currentSlide = 0;

            this.$slidesContainer.css('margin-left', '-' + this.with);
            changedDot = true;
        }

        if (!changedDot) {
            this.toggleDotClass(this.currentSlide, false);
            this.currentSlide++;
            this.toggleDotClass(this.currentSlide, true);
        }
    });
};

// =================================================
// events 
// =================================================
Slider.prototype.events = function () {
    // modify this.width when windows resizes
    var resizeTimer;
    $(window).on('resize', function(){
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
            this.restartSlider();
        }, 500)
    });

    // mouse hover interaction
    this.$slidesContainer
        .on('mouseenter', this.pauseSlider)
        .on('mouseleave', this.startSlider);
    this.$navBar
        .on('mouseenter', this.pauseSlider)
        .on('mouseleave', this.startSlider);

    // navigation
    this.$dot
        .on('click', function (){
            this.jumpToSlide($(this).index());
        });
};

// =================================================
// pause
// =================================================
Slider.prototype.pauseSlider = function () {
    clearInterval(this.interval);
}

// =================================================
// restart the slider again
// =================================================

Slider.prototype.restartSlider = function () {
    this.pauseSlider();
    this.width = this.$slider.css('width');
    this.toggleDotClass(this.currentSlide, false);
    this.toggleDotClass(0, true);
    this.currentSlide = 0;
    this.slidesContainer.css('margin-left', '-' + this.width);
    this.startSlider();
}

// =================================================
// move to slide
// =================================================

Slider.prototype.jumpToSlide = function (slideNumber) {
    var width = parseInt(this.width);
    var slideMargin = slideNumber * width + width;

    this.$slidesContainer.animate({'margin-left' : '-' + slideMargin}, this.options.animationSpeed, function(){
        this.toggleDotClass(this.currentSlide, false);
        this.toggleDotClass(slideNumber, true);
        this. currentSlide = slideNumber;
    });
}

// =================================================
// toggle dot active class
// =================================================

Slider.prototype.toggleDotClass = function (index, state) {
    var dot = this.element.dot + ':ed(' + index + ')';
    $(dot).toggleClass(this.element.activeClass, state);
}



var thisElements = {
        slider: 'slider-desafio',
        slidesContainer: 'container-desafio',
        slides: 'quote',
        navBar: 'dot-desafio-nav',
        dot: 'dot-desafio',
        activeClass: 'active'   
    },
    thisOptions = {
        animationSpeed: 300,
        pauseDuration: 800        
    };

var quotes = new Slider(thisElements, thisOptions);

quotes.init();