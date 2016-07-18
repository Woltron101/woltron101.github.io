$(document).ready(function () {



    $('.owl-carousel').owlCarousel({
        margin: 25,
        loop: true,
        autoWidth: true,
        items: 6,
        dots: false,
        nav: true
    });
    jQuery(function ($) {
        $("input[type=tel]").mask("+7 (999) 999-9999");
    });
    //      АНИМИРОВАНЫЕ ЯКОРЯ

    $(".nav").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 800);
    });

    //          Появление фиксированого меню при скроле

    var $menu = $(".wrapper_nav");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 630 && $menu.hasClass("default")) {
            $menu.removeClass("default").addClass("fixed");
        } else if ($(this).scrollTop() <= 630 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }
    });

    $("a.inline").fancybox({
        'autoDimensions': false,
        'width': 1000,
        'height': 'auto',
        'transitionIn': 'none',
        'transitionOut': 'none',
        wrapCSS: 'oform'
    });

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
                        wrapCSS: 'thanks',
                        href: '#thanks'
                    });
                    setTimeout(function () {
                        $.fancybox.close();
                    }, 3000);
                    $(".send-form").trigger("reset");
                });
                return false;

            },
            success: function () {

            },
            highlight: function (element, errorClass) {
                $(element).parent().addClass('error');
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).parent().removeClass('error');
            }
        })
    });

    ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init() {
        myMap = new ymaps.Map("map", {
            center: [59.892198, 30.238667],
            zoom: 12
        });

        myPlacemark = new ymaps.Placemark([59.892198, 30.238667], {
            hintContent: 'г. Санкт-Петербург Гладкий остров  д.1',
            balloonContent: 'г. Санкт-Петербург Гладкий остров  д.1'
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.setCenter([59.882198, 30.158667], 12);
    }





});