$(window).load(function() {
    $container.isotope('layout');
    $gallery.isotope('shuffle');
})
$(document).ready(function() {
    if ($(window).width() < 650) {
        $(".rooms_item").removeClass('leyout_on');
        $(".rooms").removeClass('isotope');
    }
    $(".popap_gallery").fancybox();
    $(".button_tobot").on("click", function() {
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 1000);
        return false;
    });
    if ($(".slidee").length > 8) {
        $(this).addClass('large-dots');
    }
    $('.slider_right').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        autoplay: true,
        dots: false,
        arrows: true,
        autoplaySpeed: 4000,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false
        //         }
        //     }

        //     // You can unslick at a given breakpoint now by adding:
        //     // settings: "unslick"
        //     // instead of a settings object
        // ]
    });
    // $(".small .wrap_text").dotdotdot({
    //     ellipsis: '...',
    //     wrap: 'word',
    //     fallbackToLetter: true,
    //     after: null,
    //     watch: false,
    //     height: 200,
    //     tolerance: 0,
    //     lastCharacter: {
    //         remove: [' ', ',', ';', '.', '!', '?'],
    //         noEllipsis: []
    //     }
    // });
    $('#menu').mmenu({
        title: "Меню",
        counters: true,

        "extensions": [
            "pagedim-black"
        ],
        offCanvas: {
            "position": "left"
        }

    });
    var API = $("#menu").data("mmenu");
    $("button.toggle").on("click", function() {
        if ($("html").hasClass("mm-opened")) {
            API.close();
        } else {
            API.open();
        }
    });
    $(".tab_content .active").fadeIn(200);
    // $(".section2_leisure .tabs a").on("click", function() {
    //     $(".section2_leisure .tabs a").removeClass("active");
    //     $(this).addClass("active");
    //     var thisHref = $(this).attr("href");
    //     $(".section2_leisure .tab_content>div").fadeOut(200).removeClass("active");
    //     setTimeout(function() {
    //         $(".section2_leisure .tab_content").find(thisHref).fadeIn(200).addClass('active');
    //     }, 200);
    //     return false;
    // });
    $(".tabs a").on("click", function() {
        $(this).addClass("active").parent().find("a").not(this).removeClass("active");

        var thisHref = $(this).attr("href");
        $(this).parents(".wrap_tabs").find(".tab_content>div").css("display", "none").removeClass("active");

        $(".tab_content").find(thisHref).fadeIn(200).addClass('active');

        return false;
    });
    $container = $('.isotope');
    $container.isotope({
        itemSelector: '.leyout_on',
        animationEngine: 'best-available',
        layoutMode: 'fitRows',
        itemPositionDataEnabled: true,
        transitionDuration: '0.8s',
        getSortData: {
            number: '.number parseInt'
        },
        sortBy: 'number'
    });
    var numbers_start;
    var ids_start = [];

    function isotopeChangeOpenElements(element) {
        element.children('.small').fadeOut(300, function() {
            $('.isotope_slick').slick('unslick');
            $(this).parent().addClass('open');
            $(this).siblings('.large').show();
            numbers = $('.leyout_on').children('.number').map(function() {
                return parseInt($(this).text(), 10);
            }).get();
            minNumber = Math.min.apply(null, numbers) - 1;
            $(this).siblings('.number').text(minNumber);
            $container.isotope('updateSortData', $(".leyout_on"));
            console.log("sort");
            $('.isotope_slick').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 700,
                autoplay: true,
                dots: true,
                arrows: true,
                autoplaySpeed: 4000,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }]


            });

            $container.isotope('layout');

            $container.isotope({ sortBy: 'number' });




        });

    }
    $('.leyout_on .small').click(function() {

        if ($(this).parent().hasClass('open')) {} else {
            this_item = $(this).parent();
            open_item = $('.isotope').find('.leyout_on.open');
            if (open_item.length > 0) {
                open_item.children('.large').fadeOut(300, function() {
                    $('.leyout_on').removeClass('open');
                    $('.leyout_on').children('.small').fadeIn();
                    $container.isotope('layout');
                    isotopeChangeOpenElements(this_item);
                });
            } else {
                isotopeChangeOpenElements(this_item);
            }


            var position = $(this).parent().data('isotope-item-position');

            $('html,body').scrollTo('.isotope', {
                duration: 200,
                offset: 0
            });


        }
        return false;

    });
    numbers_start = $('.leyout_on').children('.number').map(function() {
        return parseInt($(this).text(), 10);
    }).get();
    $('.leyout_on').each(function() {
        ids_start.push($(this).attr('id'));
    })
    $('.leyout_on a.close').click(function(e) {
        for (var i = 0; i < ids_start.length; i++) {
            $('#' + ids_start[i] + ' .number').text(numbers_start[i]);
            console.log($('#' + ids_start[i]));

        }
        $('.leyout_on').children('.large').fadeOut(300, function() {
            $(this).parent().removeClass('open');
            $(this).siblings('.small').fadeIn();
            $container.isotope('updateSortData', $container.children());
            $container.isotope({ sortBy: 'number' })
            $container.isotope('layout');
        });



        return false;
    });
    $('.isotope_slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 700,
        autoplay: true,
        dots: true,
        arrows: true,
        autoplaySpeed: 4000,
        responsive: [


            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });

    $("a.inline_popap").fancybox();
    $("input[type=tel]").mask("+9 (999) 999-9999");
    $('.shapka_slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        dots: true,
        arrows: true,
        autoplaySpeed: 4000,
        responsive: [


            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
    $('.section2__slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrows: false,
        responsive: [

            {
                breakpoint: 1200,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                }
            }

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $(".slide_prev").on("click", function() {
        $(".section2__slick").slick("slickPrev");
    });
    $(".slide_next").on("click", function() {
        $(".section2__slick").slick("slickNext");
    });
    $gallery = $('.gallery_isotope');
    $gallery.isotope({
        itemSelector: '.gallery_item',
        animationEngine: 'best-available',
        layoutMode: 'fitRows',
    });

    var filterFns = {
        // show if number is greater than 50

        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };
    $(".gallery_but_filter").on("click", function() {
        var filter_iso = $(this).data("filter");
        $(".gallery_but_filter").removeClass('active');
        filter_iso = filterFns[filter_iso] || filter_iso;
        $gallery.isotope('shuffle');
        $gallery.isotope({ filter: filter_iso });
        $(this).addClass('active');

        return false;
    });
$.datepicker.setDefaults(

$.extend($.datepicker.regional["ru"])

);
    $(".datapicker").datepicker({
       
    });

});
