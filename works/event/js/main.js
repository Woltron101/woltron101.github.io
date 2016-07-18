$(document).ready(function() {
    if ($(window).width() < 1200) {
        $(".slick_items").removeClass('active_items');
        $('.slick_items').slick({
            fade: true,
            infinite: false,
            arrows: false,
            dots: true,
            customPaging: function(slider, i) {
                var thumb = $(slider.$slides[i]).data();
                return '<a href="#gallery">' + (i + 1) + '</a>';
            },
        });
    }
    if ($(window).width() >= 1200) {
        $(".active_items").removeClass('slick_items');
    }
    $(".toggle").click(function() {
        $(this).toggleClass('active');
        $(".collapce_nav").slideToggle(function() {
            $(this).stop(false, true);
        });
    });

    $("input[type=tel]").mask("+9 (999) 999-9999");

    $('.slider1').slick({
        infinite: true,
        slidesToShow: 1,
        draggable: true,
        fade: false,
        cssEase: 'linear',
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: true,
        pauseOnHover: true,

    });
    var content;
    // if($(window).width() < 768) {
    //     $(".big_slick").slick('slickFilter', '.big_slick ');
    // }
    var header_height = $(".header_top").outerHeight();
    $("header").css("padding-top", header_height);
    var e = $(".header_top");
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

    $(".ancor, .totop").on("click", function() {
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 1000);
        return false;
    });

    function nextItem() {
        var active_height = $(this).parents(".active_items").height();
        var data_height = $(this).data("height");
        var wrap_height = active_height + data_height;
        $(this).parents(".active_items").height(wrap_height);
        if ($(this).hasClass("animate")) {
            $(this).addClass('line_on').data("height", "").next(".item").fadeIn(500).addClass("animate");
        }
        $(this).parents(".active_items").find(".line_on").removeClass("animate");
    }

    $(".active_items .item").on("click", nextItem);
    $(".active_items .other").on("click", function() {
        var itemLength = $(this).parent().find(".item");
        itemLength.data("height", "");
        $(this).parent().addClass("wrap_height");

        console.log(itemLength);
        // setTimeout(function() {
        //       $(itemLength[5]).click();
        //    },  600);
        var top = $(this).parent().find(".item").offset().top + 1200;
        $("html, body").animate({
            scrollTop: top
        }, 5500);
        // return false;
        function doSetTimeout(i) {
            setTimeout(function() {
                $(itemLength[i]).click();
                console.log(i);
            }, i * 300 - 1200);
        }
        for (i = 5; i < itemLength.length; ++i)
            doSetTimeout(i);
    });


    $(".button_on").click(function() {
        $(this).parents(".container").find(".wrap_button").addClass('active');
    });



    $(".tabs a").on("click", function() {
        var hrefTab = $(this).attr("href");
        $(".tabs a").removeClass("active");
        $(this).addClass("active");
        $(".tab_el").parent().removeClass('active');
        $(hrefTab).fadeIn().addClass('active');
         $(hrefTab).children(".active").find(".slick_items").slick('unslick').slick({ fade: true, infinite: false, arrows: false, dots: true,
            customPaging: function(slider, i) {
                var thumb = $(slider.$slides[i]).data();
                return '<a href="#gallery">' + (i + 1) + '</a>';
            }, });
        return false;
    });
    if ($(window).width() > 1200) {
        $(".tab_el a").on("click", function() {
            var hrefTab = $(this).attr("href");
            $(this).parents(".wrap_big_tab").find(".tabbb").removeClass('active');
            $(this).parent().find("a").removeClass('active')
            $(this).addClass('active');
            $(hrefTab).parent().fadeIn().addClass('active');

            return false;
        });
    }
    if ($(window).width() <= 1200) {
        $(".tab_el a").on("click", function() {
              var hrefTab = $(this).attr("href");
            $(this).parents(".wrap_big_tab").find(".tabbb").removeClass('active');
            $(this).parent().find("a").removeClass('active')
            $(this).addClass('active');
            $(hrefTab).parent().fadeIn().addClass('active');
            $(hrefTab).slick('unslick');
            $(hrefTab).slick({ fade: true, infinite: false, arrows: false, dots: true,
            customPaging: function(slider, i) {
                var thumb = $(slider.$slides[i]).data();
                return '<a href="#gallery">' + (i + 1) + '</a>';
            }, });
            return false;
        });
        $(".slick_items .item").on("click", function() {
            $(this).parents(".slick_items").slick('slickNext');
        });
    }


    // if ($(window).width() > 768) {
    //     $("#reviews_toggle_button").on("click", function() {
    //         // $(".toggle_items").slideToggle();
    //         // $(this).text(function(i, text) {
    //         //     return text === 'еще' ? 'Свернуть' : 'еще'
    //         // });

    //         var length = $('.reviews_toggle').length - 1;
    //         $('.reviews_toggle').each(function(index) {
    //             if ($(this).hasClass('active') && index != length) {
    //                 $(this).removeClass('active').fadeOut(500).next('.reviews_toggle').addClass('active').fadeIn(500);

    //                 return false;

    //             } else if (index == length) {
    //                 $(this).removeClass('active').fadeOut(500);
    //                 $('.reviews_toggle').eq(0).addClass('active').fadeIn(500);
    //                 return false;
    //             }
    //         });

    //         var id = $(this).attr("href"),
    //             top = $(id).offset().top;
    //         $("html, body").animate({
    //             scrollTop: top
    //         }, 1000);
    //         return false;

    //     });
    // }

    if ($(window).width() > 768) {
        ymaps.ready(init);
        var myMap,
            myPlacemark;

        function init() {
            myMap = new ymaps.Map("map", {
                center: [55.668838, 37.410924],
                zoom: 11,
                controls: []
            });
            myPlacemark = new ymaps.Placemark([55.668838, 37.410924], {
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
            myMap.setCenter([55.668838, 37.213124]);
            myMap.behaviors.disable('scrollZoom');
            myMap.controls.add('zoomControl', { top: 150, left: 5 });
        };
    };
    if ($(window).width() < 768) {
        ymaps.ready(init);
        var myMap,
            myPlacemark;

        function init() {
            myMap = new ymaps.Map("map", {
                center: [55.668838, 37.410924],
                zoom: 11,
                controls: []
            });
            myPlacemark = new ymaps.Placemark([55.668838, 37.410924], {
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
            myMap.setCenter([55.668838, 37.410924]);
            myMap.behaviors.disable('scrollZoom');
            myMap.controls.add('zoomControl', { top: 150, left: 5 });
        };
    };

    $('a.inline_fancybox').fancybox({
        openEffect: "elastic",
        openMethod: "zoomIn",
        closeEffect: "elastic",
        closeMethod: "zoomOut",
        helpers: {
            overlay: {
                locked: false
            }
        }
    });


});
