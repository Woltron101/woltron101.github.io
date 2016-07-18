$(document).ready(function () {

    $(".form_id").each(function () {
        var it = $(this);

        it.validate({
            rules: {
                phone: {
                    required: true
                }
            },
            messages: {

            },
            errorPlacement: function (error, element) {

            },
            submitHandler: function (form) {
                var thisForm = $(form);
                console.log(thisForm.serialize());
                $.ajax({
                    type: "POST",
                    url: thisForm.attr("action"),
                    data: thisForm.serialize()
                }).done(function () {
                    $(this).find("input").val("");
                    $.fancybox({
                        href: '#thanks',
                        wrapCSS: 'owrap'
                    });
                    console.log("good");
                    setTimeout(function () {
                        $.fancybox.close();
                    }, 4000);
                    $(".form_id").trigger("reset");
                });
                return false;
            },
            success: function () {

            },
            highlight: function (element, errorClass) {
                $(element).addClass('error');
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).removeClass('error');
            }
        })
    });

    $(".a_tobot").click(function (even) {

        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 500);
        return false;
    });
    $(".tabs_2").on("click", function () {

        if ($('.slider2').hasClass('slick-initialized')) {
            $('.slider2').slick('unslick');
            $('.slider2').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                dots: false,
                arrows: true,
                centerMode: true,
                speed: 200,
                prevArrow: "button.prev2",
                nextArrow: "button.next2",
                responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                    ]
            });
        } else {

            setTimeout(function () {
                $('.slider2').slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: false,
                    arrows: true,
                    centerMode: true,
                    speed: 200,
                    prevArrow: "button.prev2",
                    nextArrow: "button.next2",
                    responsive: [{
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                    ]
                });
            }, 1);
        }
    });
    $(".tabs_3").on("click", function () {


        if ($('.slider3').hasClass('slick-initialized')) {
            $('.slider3').slick("unslick");
            $('.slider3').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                dots: false,
                arrows: true,
                centerMode: true,
                speed: 200,
                prevArrow: "button.prev3",
                nextArrow: "button.next3",
                responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                    ]
            });
        } else {
            setTimeout(function () {
                $('.slider3').slick({
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: false,
                    arrows: true,
                    centerMode: true,
                    speed: 200,
                    prevArrow: "button.prev3",
                    nextArrow: "button.next3",
                    responsive: [{
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                    ]
                });
            }, .1);
        }

    });
    $(".tabs_1").on("click", function () {

        if ($('.slider1').hasClass('slick-initialized')) {
            $('.slider1').slick("unslick");
            $('.slider1').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                dots: false,
                arrows: true,
                centerMode: true,
                speed: 200,
                prevArrow: "button.prev1",
                nextArrow: "button.next1",
                responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                    ]
            });
        }
    });
    $('.slider1').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: true,
        centerMode: true,
        speed: 200,
        prevArrow: "button.prev1",
        nextArrow: "button.next1",
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                    ]
    });

    $("a.inline_form").fancybox({
        'autoDimensions': false,
        'height': 'auto',
        'transitionIn': 'none',
        'transitionOut': 'none',
        wrapCSS: 'wrap_modal_form',
        margin: 10,
        helpers: {
            overlay: {
                locked: false,
            }
        }
    });

    $(".slide a").fancybox();


    jQuery(function ($) {
        $("input[type=tel]").mask("+7 (999) 999-99-99");
    });

    $("a.toggle_reviews").click(function () {
        $(this).parent().toggleClass("auto_height");
        $(this).text(function (i, text) {
            return text === 'Прочитать весь отзыв' ? 'Свернуть отзыв' : 'Прочитать весь отзыв'
        });
        return false;
    });

    $("a.our_button").click(function () {
        $(".our_reviews").slideToggle();
        $(this).text(function (i, text) {
            return text === 'Ознакомьтесь со всеми отзывами:' ? 'Скрыть отзывы:' : 'Ознакомьтесь со всеми отзывами:'
        });
        return false;
    });
});