$(document).ready(function() {

    $(".toggle").click(function() {
        $(".nav").slideToggle(function() {
            $(this).stop(false, true);
        });
    });

    $('.slider-slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        arrows: true
    });
    $('.big_slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        customPaging: function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<button>' + (i + 1) + '</button>';
        },
        arrows: false
    });

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

    $("#advantages_toggle_button").on("click", function() {
        $(".toggle_items").slideToggle();
        $(this).text(function(i, text) {
            return text === 'еще' ? 'Свернуть' : 'еще'
        });
        return false;
    });

    $("#reviews_toggle_button").on("click", function() {
        $(".reviews_toggle").slideToggle();
        $(this).text(function(i, text) {
            return text === 'смотреть больше' ? 'Свернуть' : 'смотреть больше'
        });
        return false;
        // event.preventDefault();
    });
    // if ($(window).width() > 500) {
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

    $("a[data-rel='PageScroll']").mPageScroll2id({
        offset: 0
    });

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
    });
    // };
});
