$(document).ready(function() {

    $(".toggle").click(function() {
        $(".nav").slideToggle(function() {
            $(this).stop(false, true);
        });
    });


    $("input[type=tel]").mask("+9 (999) 999-9999");
    $('.slider-slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrows: true
    });
    $('.advantages_mobile_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: false,
        dots: false,
        arrows: false,
        swipe: false
    });
    $('.reviews_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

        draggable: false,
        fade: true,
        cssEase: 'linear',
        autoplay: false,
        dots: false,
        arrows: false,
        swipe: false
    });
    $(".advantages_toggle_button").on("click", function() {

        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 500);
        return false;
    });
    $(".advantages_toggle_button_slider").on("click", function() {

        $(".advantages_mobile_slider").slick('slickNext');

        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 500);
        setTimeout(function() {
            $(".slick-active .wrapper_item").addClass('active');
        }, 500);
        return false;
    });
    $('.shapka_slider').slick({
        infinite: true,
        slidesToShow: 1,
        draggable: false,
        fade: true,
        cssEase: 'linear',
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        pauseOnHover: false,
        responsive: [{
                breakpoint: 500,
                settings: {
                    autoplay: false,

                }

            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    var content;
    if ($(window).width() < 1024) {

        content = $(".big_slick .mobile_slide").detach();
        content.appendTo('.big_slick');
        $(".mobile_delete").remove();
    }

    $('.big_slick').slick({
        draggable: false,
        swipe: false,
        infinite: true,
        // fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        customPaging: function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a href="#gallery">' + (i + 1) + '</a>';
        },
        arrows: false,
        // responsive: [{
        //         breakpoint: 768,
        //         settings: {
        //             // slide: '.mobile_slide',
        //             // slidesToShow: 1,
        //             // slidesToScroll: 1,

        //         }

        //     }
        //     // You can unslick at a given breakpoint now by adding:
        //     // settings: "unslick"
        //     // instead of a settings object
        // ]
    })


    // if($(window).width() < 768) {
    //     $(".big_slick").slick('slickFilter', '.big_slick ');
    // }
    $('.slider_team').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    var e = $("nav");
    $(window).scroll(function() {
        $(this).scrollTop() > 500 && e.hasClass("header-menu") ? e.fadeOut("normal", function() {
            $(this).removeClass("header-menu").addClass("fixed-menu").fadeIn("normal")
        }) : $(this).scrollTop() <= 500 && e.hasClass("fixed-menu") && e.fadeOut("normal", function() {
            $(this).removeClass("fixed-menu").addClass("header-menu").fadeIn("normal")
        });
    });

    $(".form_id").each(function() {
        var it = $(this);
        it.validate({
            rules: {
                phone: {
                    required: true
                }
            },
            messages: {},
            errorPlacement: function(error, element) {},
            submitHandler: function(form) {
                var thisForm = $(form);
                console.log(thisForm.serialize());
                $.ajax({
                    type: "POST",
                    url: thisForm.attr("action"),
                    data: thisForm.serialize()
                }).done(function() {
                    $(this).find("input").val("");
                    $.fancybox({
                        href: '#thanks',
                        wrapCSS: 'owrap',
                        openEffect: "elastic",
                        openMethod: "zoomIn",
                        closeEffect: "elastic",
                        closeMethod: "zoomOut",
                    });
                    console.log("good");
                    setTimeout(function() {
                        $.fancybox.close();
                    }, 2000);
                    $(".form_id").trigger("reset");
                });
                return false;
            },
            success: function() {},
            highlight: function(element, errorClass) {
                $(element).parent().addClass('error');
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).parent().removeClass('error');
            }
        })
    });

    $('.toggle_items').eq(0).addClass('active').fadeIn(1000);
    $(".advantages_toggle_button").on("click", function() {
        // $(".toggle_items").slideToggle();
        // $(this).text(function(i, text) {
        //     return text === 'еще' ? 'Свернуть' : 'еще'
        // });
        // return false;
        var length = $('.toggle_items').length - 1;
        $('.toggle_items').each(function(index) {
            if ($(this).hasClass('active') && index != length) {
                $(this).removeClass('active').fadeOut(500).next('.toggle_items').addClass('active').fadeIn(500);

                return false;

            } else if (index == length) {
                $(this).removeClass('active').fadeOut(500);
                $('.toggle_items').eq(0).addClass('active').fadeIn(500);
                return false;
            }
        });
    });


    $("a[data-rel='PageScroll']").mPageScroll2id({
        offset: 0
    });
    $("#reviews_toggle_button").on("click", function() {
        $(".reviews_slider").slick('slickNext');
        return false;
    });
    $("#reviews_toggle_button").on("click", function() {
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 1000);
        return false;
    });
   
    if($(window).width() < 768) {
        $("#reviews_toggle_button").attr('href', '#reviews_slider_ancor');
    }
    $('.reviews_toggle').eq(0).addClass('active').fadeIn(1000);
    if ($(window).width() > 768) {
        $("#reviews_toggle_button").on("click", function() {
            // $(".toggle_items").slideToggle();
            // $(this).text(function(i, text) {
            //     return text === 'еще' ? 'Свернуть' : 'еще'
            // });

            var length = $('.reviews_toggle').length - 1;
            $('.reviews_toggle').each(function(index) {
                if ($(this).hasClass('active') && index != length) {
                    $(this).removeClass('active').fadeOut(500).next('.reviews_toggle').addClass('active').fadeIn(500);

                    return false;

                } else if (index == length) {
                    $(this).removeClass('active').fadeOut(500);
                    $('.reviews_toggle').eq(0).addClass('active').fadeIn(500);
                    return false;
                }
            });

            var id = $(this).attr("href"),
                top = $(id).offset().top;
            $("html, body").animate({
                scrollTop: top
            }, 1000);
            return false;

        });
    }

    if ($(window).width() > 500) {
        ymaps.ready(init);
        var myMap,
            myPlacemark;

        function init() {
            myMap = new ymaps.Map("map", {
                center: [53.906756, 27.532537],
                zoom: 16,
                controls: []
            });
            myPlacemark = new ymaps.Placemark([53.906756, 27.532537], {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'images/gps.png',
                // Размеры метки.
                iconImageSize: [105, 87],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-55, -70]
            });
            myMap.geoObjects.add(myPlacemark);
            myMap.setCenter([53.906756, 27.5280000]);
            myMap.behaviors.disable('scrollZoom');
            myMap.controls.add('zoomControl', { top: 150, left: 5 });
        };
    };


    $('a.inline_fancybox').fancybox({
        openEffect: "elastic",
        openMethod: "zoomIn",
        closeEffect: "elastic",
        closeMethod: "zoomOut",
    });
    $('a.inline_gallery').fancybox({
        openEffect: "fade",
        openMethod: "zoomIn",
        closeEffect: "elastic",
        closeMethod: "zoomOut",
        wrapCSS: "wrap-gallery"

    });
    // };
    $(".slick-dots a").click(function(even) {

        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 1000);

    });
});
