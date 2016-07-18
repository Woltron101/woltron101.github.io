$(document).ready(function() {



    var clock1 = $("#defaultCountdown1"),
        clock2 = $("#defaultCountdown2");


    // Set dates.
    var futureDate = new Date("April 30, 2016 12:02 PM EDT"),
        currentDate = new Date();

    // Calculate the difference in seconds between the future and current date
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    // Calculate day difference and apply class to .clock for extra digit styling.
    function dayDiff(first, second) {
        return (second - first) / (1000 * 60 * 60 * 24);
    }

    if (dayDiff(currentDate, futureDate) < 100) {
        clock1.addClass('twoDayDigits');
    } else {
        clock1.addClass('threeDayDigits');
    }

    if (diff < 0) {
        diff = 0;
    }

    // Instantiate a coutdown FlipClock
    clock = clock1.FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true,
        language: 'ru',


    });
    clock.start();




    if (dayDiff(currentDate, futureDate) < 100) {
        clock2.addClass('twoDayDigits');
    } else {
        clock2.addClass('threeDayDigits');
    }

    if (diff < 0) {
        diff = 0;
    }

    // Instantiate a coutdown FlipClock
    clock = clock2.FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true,
        language: 'ru',


    });
    clock.start();



    //          Появление фиксированого меню при скроле

    var e = $("#menu");
    $(window).scroll(function() {
        $(this).scrollTop() > 500 && e.hasClass("header-menu") ? e.fadeOut("normal", function() {
            $(this).removeClass("header-menu").addClass("fixed-menu").fadeIn("normal")
        }) : $(this).scrollTop() <= 500 && e.hasClass("fixed-menu") && e.fadeOut("normal", function() {
            $(this).removeClass("fixed-menu").addClass("header-menu").fadeIn("normal")
        })
    })


    $("a.inline").fancybox({
        'autoDimensions': false,
        'height': 'auto',
        'transitionIn': 'none',
        'transitionOut': 'none',
        helpers: {
            overlay: {
                locked: false,
            }
        }
    });
    $("a#inline_form").fancybox({
        'autoDimensions': false,
        'height': 'auto',
        'transitionIn': 'none',
        'transitionOut': 'none',
        helpers: {
            overlay: {
                locked: false,
            }
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
            messages: {

            },
            errorPlacement: function(error, element) {

            },
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
                        href: '#thanks'
                    });
                    setTimeout(function() {
                        $.fancybox.close();
                    }, 3000);
                    $(".send-form").trigger("reset");
                });
                return false;

            },
            success: function() {

            },
            highlight: function(element, errorClass) {
                $(element).addClass('error');
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
            }
        })
    });
    $(".form_id2").each(function() {
        var it = $(this);

        it.validate({
            rules: {
                phone: {
                    required: true
                }
            },
            messages: {

            },
            errorPlacement: function(error, element) {

            },
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
                        href: '#thanks'
                    });
                    setTimeout(function() {
                        $.fancybox.close();


                        window.downloadFile = function(a) {
                            if (/(iP)/g.test(navigator.userAgent)) return alert("Your device does not support files downloading. Please try again in desktop browser."), !1;
                            if (window.downloadFile.isChrome || window.downloadFile.isSafari) {
                                var b = document.createElement("a");
                                if (b.href = a, void 0 !== b.download) {
                                    var c = a.substring(a.lastIndexOf("/") + 1, a.length);
                                    b.download = c
                                }
                                if (document.createEvent) {
                                    var d = document.createEvent("MouseEvents");
                                    return d.initEvent("click", !0, !0), b.dispatchEvent(d), !0
                                }
                            }
                            return -1 === a.indexOf("?") && (a += "?download"), window.open(a, "_self"), !0
                        }, window.downloadFile.isChrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1, window.downloadFile.isSafari = navigator.userAgent.toLowerCase().indexOf("safari") > -1;




                        downloadFile('gps.png');
                    }, 3000);




                    $(".send-form").trigger("reset");
                });
                return false;

            },
            success: function() {

            },
            highlight: function(element, errorClass) {
                $(element).addClass('error');
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
            }
        })
    });

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
            hintContent: 'г. Минск, ул. Кальварийская, д. 16, офис 239.',
            balloonContent: 'г. Минск, ул. Кальварийская, д. 16, офис 239.'
        }, {
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


    jQuery(function($) {
        $("input[type=tel]").mask("+375 (99) 999-99-99");
    });
});
