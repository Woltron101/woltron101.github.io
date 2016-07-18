
$(document).ready(function() {
    $("a.inline-fancybox").fancybox();
    $(".tabs").slick({
        infinite: false,
        slidesToShow: 5,
        draggable: true,
        slidesToScroll: 1,
        swipe: true,
        // speed: 700,
        // fade: true,
        // cssEase: 'linear',
        centerMode: false,
        dots: false,
        autoplay: false,
        arrows: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,

                }
            },

            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 3,


                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $(".form_calc").submit(function() {
        $(".input_calc").val() === "";
        if ($("#input_top").hasClass("active")) {
            $("#inp_secl_top").val($(".inp_secl_top").val() + "м");
        }
        if ($("#input_left").hasClass("active")) {
            $("#inp_secl_left").val($(".inp_secl_left").val() + "м");
        }
        if ($("#input_bot").hasClass("active")) {
            $("#inp_secl_bot").val($(".inp_secl_bot").val() + "м");
        }
        if ($("#input_right").hasClass("active")) {
            $("#inp_secl_right").val($(".inp_secl_right").val() + "м");
        }

    });

    $(".tab").on("click", function() {
        $(".tab").removeClass("active");
        $(this).addClass("active");
        var imgTab = $(this).children("img").attr("src");
        $(".calc_center").find("img").attr("src", imgTab);
        var tabHreff = $(this).data("tabs");
        $(".range_slider").removeClass("active");
        $(".range_slider").find("input").removeClass("active");
        $("." + tabHreff).addClass("active");
        $("." + tabHreff).find("input").addClass("active");
        var tabName = $(this).find("p").text();
        $("#inp_secl_type").val(tabName);
        return false;
    });
    $("#slider_top .next").on("click", function() {
        var valInp = +$("#input_top").val() + 0.5;
        $("#input_top").val(valInp);
        sliderTop.noUiSlider.set(valInp);
        return false;
    });
    $("#slider_top .prev").on("click", function() {
        var valInp = +$("#input_top").val() - 0.5;
        $("#input_top").val(valInp);
        sliderTop.noUiSlider.set(valInp);
        return false;
    });
    $("#slider_left .next").on("click", function() {
        var valInp = +$("#input_left").val() - 0.5;
        $("#input_left").val(valInp);
        sliderLeft.noUiSlider.set(valInp);
        return false;
    });
    $("#slider_left .prev").on("click", function() {
        var valInp = +$("#input_left").val() + 0.5;
        $("#input_left").val(valInp);
        sliderLeft.noUiSlider.set(valInp);
        return false;
    });
    $("#slider_right .next").on("click", function() {
        var valInp = +$("#input_right").val() - 0.5;
        $("#input_right").val(valInp);
        sliderRight.noUiSlider.set(valInp);
        return false;
    });
    $("#slider_right .prev").on("click", function() {
        var valInp = +$("#input_right").val() + 0.5;
        $("#input_right").val(valInp);
        sliderRight.noUiSlider.set(valInp);
        return false;
    });
    $("#slider_bot .next").on("click", function() {
        var valInp = +$("#input_bot").val() + 0.5;
        $("#input_bot").val(valInp);
        sliderBot.noUiSlider.set(valInp);
        return false;
    });
    $("#slider_bot .prev").on("click", function() {
        var valInp = +$("#input_bot").val() - 0.5;
        $("#input_bot").val(valInp);
        sliderBot.noUiSlider.set(valInp);
        return false;
    });

    $('.slider_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
     
    });
    $('.big_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider_nav',
        swipe: false,
        draggable: false
     
    });
   
    $("a[data-rel='PageScroll']").mPageScroll2id({
        offset: 50
    });
    $('.slider_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.big_slider',
 dots: false,
     
        centerMode: true,
        focusOnSelect: true,
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerMode: false
                }
            }, {
                breakpoint: 645,
                settings: {
                    slidesToShow: 2,
                    centerMode: false
                }
            }, {


                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            }
        ]
    });

    $(".toggle").click(function() {
        $(this).toggleClass("active")
        $(".nav ul").slideToggle(function() {
            $(this).stop(false, true);
        });
    });
    $(".toggle_form").click(function() {
        $(this).slideUp();
        $(".shapka .wrapper_form").slideToggle(function() {
            $(this).stop(false, true);
        });
    });


    $("input[name=tel]").mask("+7 (999) 999-9999");




    if ($(window).width() < 1024) {

        content = $(".big_slick .mobile_slide").detach();
        content.appendTo('.big_slick');
        $(".mobile_delete").remove();
    }




    $(window).scroll(function() {


        var $menu = $(".nav");

        if ($(this).scrollTop() > 1025 && $menu.hasClass("default")) {
            $menu.removeClass("default").addClass("fixed");
        } else if ($(this).scrollTop() <= 1025 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }

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
                    window.location.href = "thanks.html";
                    console.log("good");
                    $(".form_id").trigger("reset");
                });
                return false;
            },
            success: function() {},
            highlight: function(element, errorClass) {
                $(element).addClass('error');
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
            }
        })
    });





    if ($(window).width() > 1024) {
        ymaps.ready(init);
        var myMap,
            myPlacemark;

        function init() {
            myMap = new ymaps.Map("map", {
                center: [57.749168, 40.970274],
                zoom: 16,
                 behaviors: [],
                controls: []
            });
            myPlacemark = new ymaps.Placemark([57.749168, 40.970274], {
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
            myMap.setCenter([57.749168, 40.970274]);
            myMap.behaviors.disable('scrollZoom');
            // myMap.controls.add('zoomControl', { top: 150, left: 5 });
        };
    };
    if ($(window).width() < 1025) {
        ymaps.ready(init);
        var myMap,
            myPlacemark;

        function init() {
            myMap = new ymaps.Map("map", {
                center: [57.749168, 40.970274],
                zoom: 16,

                controls: []
            });
            myPlacemark = new ymaps.Placemark([57.749168, 40.970274], {
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
            myMap.setCenter([57.751168, 40.970274]);
            myMap.behaviors.disable('scrollZoom');
            // myMap.controls.add('zoomControl', { top: 150, left: 5 });
        };
    };

});
