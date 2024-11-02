import "slick-carousel/slick/slick.scss";
import $ from 'jquery';
import 'slick-carousel/slick/slick.min';

const Slider = (slider, options, toggle= false) => {
    const sliderEl = $(slider)
    const slideToggle = toggle

    let slick
    function initSlider() {
        if (sliderEl) {
            sliderEl.slick(options);
            slick = sliderEl.slick('getSlick')
            updateArrowsVisibility()
        }
    }
    function slickPrevArrow() {
        $('.slider-arrow-prev').on('click', function() {
            sliderEl.slick('slickPrev');
        });
    }
    function slickNextArrow() {
        $('.slider-arrow-next').on('click', function() {
            sliderEl.slick('slickNext');
        });
    }

    function updateArrowsVisibility() {
        if (slick && slick.options) {
            const slidesToShow = slick.options.slidesToShow
            const totalSlides = slick.slideCount

            if (slidesToShow >= totalSlides) {
                $('.slider-arrow-prev, .slider-arrow-next').hide();
                console.log(sliderEl)
                sliderEl.addClass('hide-arrows')
            } else {
                $('.slider-arrow-prev, .slider-arrow-next').show();
            }
        }
    }
    function toggleActive() {
        if (slideToggle) {
            sliderEl.on('click', '.slick-slide', function (e) {
                $('.slick-slide').removeClass('slick-current')
                $(this).addClass('slick-current');
            });
        }
    }

    initSlider()
    slickPrevArrow()
    slickNextArrow()
    toggleActive()
}

Slider('.suggestions__slider .carousel-wrapper', {
    mobileFirst: true,
    dots: true,
    arrows: false,
    settings: 'resize',
    responsive: [
        {
            breakpoint: 1040,
            settings: "unslick"
        }
    ]
})

Slider('.departments .carousel-wrapper', {
    mobileFirst: true,
    centerMode: true,
    dots: false,
    arrows: false,
    responsive: [
        {
        breakpoint: 750,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1040,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 1260,
            settings: {
                slidesToShow: 2,
            }
        },
        {
        breakpoint: 1380,
            settings: {
                slidesToShow: 2.5,
                centerMode: false,
            }
        }
    ]
}, true)




