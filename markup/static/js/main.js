$(document).on('click', '[href="#"]', function(e) {
    return e.preventDefault();
});
// var linkTop = $('.footer__scrollTop');
// linkTop.click(function () {
//     $('html, body').animate({ scrollTop: 0 }, 500);
// });


function heightBlockContainer() {
    $('.block-container').each(function(){
        var _this = $(this),
            content = _this.find('.block-container__content'),
            size = _this.find('.block-container__size');
        size.height(content[0].clientHeight);
    });
}
heightBlockContainer();
$(window).on({
    load: function () {
        checkFooterHeight();
        // checkHeaderFix();
        heightBlockContainer();

    },
    scroll: function () {
        // var scrollTop = $(window).scrollTop();
        // if(scrollTop > 200){
        //     linkTop.addClass('active');
        // }else{
        //     linkTop.removeClass('active');
        // }
        // checkHeaderFix();
    },
    resize: function () {
        heightBlockContainer();
        // checkHeaderFix();
        checkFooterHeight();
    }
});
// $('#callback').modal('show')
if ($.fn.slick) {

//     $bottom__slider.slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: true,
//         arrows: true,
//         autoplay: true,
//         autoplaySpeed: 4000,
//         adaptiveHeight: true,
//         appendDots: '.header-bottom__slider-dots',
//         prevArrow: '.header-bottom__slider-arrows.previous',
//         nextArrow: ".header-bottom__slider-arrows.next",
//     }).on('afterChange', checkBg);
//     checkBg();
//
    $('.header__slider-el').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: $('.header__slider .slick-prev'),
        nextArrow: $('.header__slider .slick-next'),
        appendDots: $('.header__sliderDots')
        // autoplay: true,
        // autoplaySpeed: 3000,
        // adaptiveHeight: true,
    });

    $('.itemListSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        infinite: false,
        prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-prev' width='8px' height='15px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-prev'></use></svg></button>",
        nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-next' width='8px' height='15px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrow-next'></use></svg></button>",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 518,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    });

    var itemDetaliSlider = $('.slider__view-list');
    var itemDetaliSliderPreview = $('.slider__preview');
    itemDetaliSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: false,
        adaptiveHeight: true,
        asNavFor: itemDetaliSliderPreview,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // prevArrow: "<button class='slick-prev slick-arrow'><i class='s-arrow-prev'></i></button>",
        // nextArrow: "<button class='slick-next slick-arrow'><i class='s-arrow-next'></i></button>",
    });
//
    itemDetaliSliderPreview.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        // vertical: true,
        // verticalSwiping: true,
        infinite: false,
        arrows: false,
        asNavFor: itemDetaliSlider,
        focusOnSelect: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-top' width='19px' height='19px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrowTop'></use></svg></button>",
        // nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-bottom' width='19px' height='19px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrowBottom'></use></svg></button>",
        responsive: [
            {
                breakpoint: 436,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    });
}

if ($.fn.zoom) {
    if ($(window).width() > 990) {
        $('.zoom').each(function() {
            var _this, imgBig;
            _this = $(this);
            imgBig = _this.data('img');
            return _this.zoom({
                url: imgBig,
                callback: function() {}
            });
        });
    }
}

if($.fn.selectpicker){
    $('select').selectpicker({
        style: '',
        size: 7
    }).selectpicker('setStyle', 'btn', 'remove');
}
if ($.fn.magnificPopup) {
    var magnificPopupObj = {
        delegate: 'a',
        type: 'image',
        tLoading: "",
        mainClass: "",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },
        iframe: {
            // markup: '<div class="mfp-iframe-scaler">' +
            // '<div class="mfp-close"></div>' +
            // '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            // '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                }
            }
        }
    };

    $('.magnificPopup').each(function () {
        $(this).magnificPopup(magnificPopupObj);
    })
}

// $('.catalog-category-list a').click(function(e){
//     var _this = $(this),
//         list = _this.next('ul'),
//         parent = _this.parent(),
//         className = 'active',
//         time = 300;
//
//     if(list[0]){
//         e.preventDefault();
//         parent.toggleClass(className);
//         list.slideToggle(time);
//
//         parent.siblings().removeClass(className)
//             .find('li').removeClass(className)
//             .end()
//             .find('ul').slideUp(time);
//     }
// });


$('.collapse').find('.collapse__item-head').click(function(e){
    e.preventDefault();
    var _this = $(this),
        content = _this.next(),
        parentContent = _this.closest('.collapse'),
        time = 300,
        className = 'active';

    content.slideToggle(time);
    _this.parent().toggleClass(className);

    parentContent.find('.collapse__item-content').not(content).stop().slideUp(time);
    parentContent.find('.collapse__item-head').not(_this).parent().removeClass(className);
});

$('.modal-show').modal('show');

$('.filter-toggle-btn').click(function () {
    $('.filter-toggle-btn').toggleClass('active');
    $('.catalog-filter-toggle').slideToggle(300);
});

function scrollTop(offsetTop) {
    var headerMobileHix = $('.header-mobile-fix');

    offsetTop -= 10;

    if(headerMobileHix[0]){
        offsetTop -= headerMobileHix[0].clientHeight;
    }

    $('html, body').animate({ scrollTop: offsetTop }, 200);
}

$('.tabs-labels__list').find('a').click(function(e){
    e.preventDefault();
    var _this = $(this),
        href = _this.attr('href'),
        parent = _this.parent(),
        parentNode = _this.closest('.tabs-labels'),
        block = $(href),
        time = 300,
        className = 'active';

    parentNode.find('.tabs-labels__content-item').not(block).fadeOut(time);
    block.delay(time).fadeIn(time, function(){
        var self = $(this),
            slider = self.find('.slick-slider');

        if(slider[0]){
            var getSlick = slider.slick('getSlick'),
                options = getSlick.options,
                slickCurrentSlide = slider.slick('slickCurrentSlide');
            if(getSlick.$slideTrack.find('.slick-slide').eq(0).width() <= 100){
                slider.slick('unslick');
                slider.slick(options);
                if(slickCurrentSlide>0){
                    slider.slick('slickGoTo', slickCurrentSlide);
                }
            }
        }

        if($(window).width()<768) scrollTop(block.offset().top);
    });
    parent.addClass(className).siblings().removeClass(className);
});






















