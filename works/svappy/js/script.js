$(document).ready(function() {
    $(".recipes-slider").owlCarousel({
            items: 1,
            dots: !1,
            nav: !0,
            navText: !0,
            loop: !0,
            autoplay: !0,
            autoplayTimeout: 4e3
        }),
        $(function(e) {
            e.mask.definitions["~"] = "[+-]",
                e("input[type=tel]").mask("+7(999) 999-9999")
        }),
        $(".header-menu-wrap a, .arrow-up a, a.arrow_variants").mPageScroll2id({
            scrollSpeed: 500,
            offset: 55
        }),
        $(".send-form").each(function() {
            var e = $(this);
            e.validate({
                rules: {
                    name: {
                        required: !0
                    },
                    phone: {
                        required: !0
                    },
                    email: {
                        required: !0,
                        email: !0
                    }
                },
                messages: {},
                errorPlacement: function(e, a) {},
                submitHandler: function(e) {
                    var a = $(e);
                    return $.ajax({
                        type: "POST",
                        url: a.attr("action"),
                        data: a.serialize()
                    }).done(function() {
                        $(this).find("input").val(""),
                            $.fancybox({
                                href: "#thanks"
                            }),
                            setTimeout(function() {
                                $.fancybox.close()
                            }, 3e3),
                            $(".send-form").trigger("reset")
                    }), !1
                },
                success: function() {},
                highlight: function(e, a) {
                    $(e).addClass("error")
                },
                unhighlight: function(e, a, o) {
                    $(e).removeClass("error")
                }
            })
        }),
        ymaps.ready(function() {
            var e = new ymaps.Map("map", {
                    center: [59.9703639, 30.3215475],
                    zoom: 10
                }, {
                    searchControlProvider: "yandex#search"
                }),
                a = new ymaps.Placemark([59.840655, 30.31753], {
                    hintContent: "",
                    balloonContent: "<h4>Универсам Пулковский</h4><p>Санкт-Петербург Пулковское шоссе д. 3 (м. Московская)"
                }, {
                    iconLayout: "default#image",
                    iconImageHref: "img/map-point.png",
                    iconImageSize: [49, 78],
                    // balloonContentSize: [253, 202],
                    // balloonLayout: "default#imageWithContent",
                    // balloonImageHref: "img/map-point-balloon.png",
                    // balloonImageOffset: [10, -139],
                    // balloonImageSize: [253, 202],
                    // balloonShadow: !1
                });
            myPlacemark2 = new ymaps.Placemark([59.928379, 30.322489], {
                hintContent: "",
                balloonContent: "<h4>Магазин ADI вегетарианский продуктов</h4><p>Санкт-Петербург ул. Гороховая 36"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],
                // balloonContentSize: [253, 202],
                // balloonLayout: "default#imageWithContent",
                // balloonImageHref: "img/map-point-balloon2.png",
                // balloonImageOffset: [10, -139],
                // balloonImageSize: [253, 202],
                // balloonShadow: !1
            });
            myPlacemark3 = new ymaps.Placemark([59.989841, 30.202564], {
                hintContent: "",
                balloonContent: "<h4>Супермаркет Чайка</h4><p>Санкт-Петербург ул. туристкая 10</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            });
            myPlacemark4 = new ymaps.Placemark([59.929272, 30.352124], {
                hintContent: "",
                balloonContent: "<h4>Магазин VEGANBUNKER</h4><p>Санкт-Петербург ул. Поварской пер. 12А</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            });
            myPlacemark5 = new ymaps.Placemark([59.927166, 30.309957], {
                hintContent: "",
                balloonContent: "<h4>Магазин Ludakuca</h4><p>Санкт-Петербург ул. Гражданская, 24</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            });
            myPlacemark6 = new ymaps.Placemark([59.829374, 30.381726], {
                hintContent: "",
                balloonContent: "<h4>Сеть армянских продуктов Дары Армении</h4><p>Балканская площадь, 5 продуктовый рынок</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            });
            myPlacemark7 = new ymaps.Placemark([59.925678, 30.318093], {
                hintContent: "",
                balloonContent: "<h4>Сеть армянских продуктов Дары Армении</h4><p>Московский пр.4а(Сенной рынок)</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            });
            myPlacemark8 = new ymaps.Placemark([59.969821, 30.388946], {
                hintContent: "",
                balloonContent: "<h4>Сеть армянских продуктов Дары Армении</h4><p>Полюстровский пр.45</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            });
            myPlacemark9 = new ymaps.Placemark([59.847969, 30.339512], {
                hintContent: "",
                balloonContent: "<h4>Сеть армянских продуктов Дары Армении</h4><p>Гагарина 34</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            })
            myPlacemark10 = new ymaps.Placemark([59.938843, 30.365886], {
                hintContent: "",
                balloonContent: "<h4>Сеть армянских продуктов Дары Армении</h4><p>Некрасова 52</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            })
            myPlacemark11 = new ymaps.Placemark([59.891011, 30.387679], {
                hintContent: "",
                balloonContent: "<h4>Сеть армянских продуктов Дары Армении</h4><p>Улица Салова,52</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            })
            myPlacemark12 = new ymaps.Placemark([59.739427, 30.581374], {
                hintContent: "",
                balloonContent: "<h4>Сеть армянских продуктов Дары Армении</h4><p>Г. Колпино. Ул. В. Слуцкой 46/2 лит. А</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            })
            myPlacemark13 = new ymaps.Placemark([59.861756, 30.24715], {
                hintContent: "",
                balloonContent: "<h4>Сеть армянских продуктов Дары Армении</h4><p>Ленсовета,101 ТРК Континент. М. Звездная</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            })
            myPlacemark14 = new ymaps.Placemark([59.938982, 30.284741], {
                hintContent: "",
                balloonContent: "<h4>Сеть армянских продуктов Дары Армении</h4><p>Большой проспект В. О. 18 ( Андреевский рынок )</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            })
            myPlacemark15 = new ymaps.Placemark([59.842052, 30.253327], {
                hintContent: "",
                balloonContent: "<h4>Сеть армянских продуктов Дары Армении</h4><p> Бульвар Новаторов,71( м. Ветеранов выход на Дачный проспект)</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            })
            myPlacemark16 = new ymaps.Placemark([60.027647, 30.315096], {
                hintContent: "",
                balloonContent: "<h4>Сеть армянских продуктов Дары Армении</h4><p>Комендантский пр. 43 кор. 3. Т.К. Ферма Маркет</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            })
            myPlacemark17 = new ymaps.Placemark([59.9422, 30.243877], {
                hintContent: "",
                balloonContent: "<h4>Магазин Худеть вкусно</h4><p>Санкт-Петербург Варшавская ул, д. 94 (м. Парк победы)</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            })
            myPlacemark18 = new ymaps.Placemark([59.935462, 30.328346], {
                hintContent: "",
                balloonContent: "<h4>Магазин MAKSONA.RU</h4><p>Санкт-Петербург пр. Невский 32 (м. Невский проспект)</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            })
            myPlacemark19 = new ymaps.Placemark([59.702209, 30.381499], {
                hintContent: "",
                balloonContent: "<h4>Магазин Забота</h4><p>г. Пушкин, ул. Полковая д.1/25 пом 531</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            })
            myPlacemark20 = new ymaps.Placemark([59.972262, 30.34721], {
                hintContent: "",
                balloonContent: "<h4>Магазин Глютена-Нет</h4><p>Санкт-Петербург Лесной проспект д. 32</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            })
            myPlacemark21 = new ymaps.Placemark([59.928379, 30.322489], {
                hintContent: "",
                balloonContent: "<h4>Магазин ADI вегетарианский продуктов</h4><p>Санкт-Петербург ул. Гороховая 36</p>"
            }, {
                iconLayout: "default#image",
                iconImageHref: "img/map-point.png",
                iconImageSize: [49, 78],

            })
            myPlacemark22 = new ymaps.Placemark([59.989841, 30.202564], {
                    hintContent: "",
                    balloonContent: "<h4>Супермаркет Чайка</h4><p>Санкт-Петербург ул. туристкая 10</p>"
                }, {
                    iconLayout: "default#image",
                    iconImageHref: "img/map-point.png",
                    iconImageSize: [49, 78],

                })
             myPlacemark23 = new ymaps.Placemark([59.702209, 30.381499], {
                    hintContent: "",
                    balloonContent: "<h4>Магазин Эко-Забота</h4><p>г. Пушкин, ул. Полковая д.1/25 пом 531</p>"
                }, {
                    iconLayout: "default#image",
                    iconImageHref: "img/map-point.png",
                    iconImageSize: [49, 78],

                }),
                e.controls.add("zoomControl"),
                e.geoObjects.add(a),
                e.geoObjects.add(myPlacemark2),
                e.geoObjects.add(myPlacemark3),
                e.geoObjects.add(myPlacemark4),
                e.geoObjects.add(myPlacemark5),
                e.geoObjects.add(myPlacemark6),
                e.geoObjects.add(myPlacemark7),
                e.geoObjects.add(myPlacemark8),
                e.geoObjects.add(myPlacemark9),
                e.geoObjects.add(myPlacemark10),
                e.geoObjects.add(myPlacemark11),
                e.geoObjects.add(myPlacemark12),
                e.geoObjects.add(myPlacemark13),
                e.geoObjects.add(myPlacemark14),
                e.geoObjects.add(myPlacemark15),
                e.geoObjects.add(myPlacemark16),
                e.geoObjects.add(myPlacemark17),
                e.geoObjects.add(myPlacemark18),
                e.geoObjects.add(myPlacemark19),
                e.geoObjects.add(myPlacemark20),
                e.geoObjects.add(myPlacemark21),
                e.geoObjects.add(myPlacemark22),
                 e.geoObjects.add(myPlacemark23)

        });
    var e = $("#menu");
    $(window).scroll(function() {
            $(this).scrollTop() > 100 && e.hasClass("header-menu") ? e.fadeOut("normal", function() {
                $(this).removeClass("header-menu").addClass("fixed-menu").fadeIn("normal")
            }) : $(this).scrollTop() <= 100 && e.hasClass("fixed-menu") && e.fadeOut("normal", function() {
                $(this).removeClass("fixed-menu").addClass("header-menu").fadeIn("normal")
            })
        }),
        $(window).scroll(function() {
            $(this).scrollTop() > 500 && $(".arrow-up").fadeIn(),
                $(this).scrollTop() < 500 && $(".arrow-up").fadeOut()
        });
    $("a.inline_form").fancybox();

    var scrollpane;
    $("a.inline_map").fancybox({
        'wrapCSS': 'owrap',
        "helpers": {
            overlay: {
                locked: false
            }
        },
        'afterShow': (function() {
            scrollpane = $('.scroll').jScrollPane({ showArrows: true }).data().jsp;
        }),
        'afterClose': (function() {
            scrollpane.destroy();
        }),

    });

    $("#cityes").change(function() {
        var gorod = $(this).val();
        $("#popap_map").find("ul").css("display", "none");
        if ($("#popap_map").find("ul").hasClass(gorod)) {
            $("." + gorod).css("display", "block");
            scrollpane.destroy();
            scrollpane = $('.scroll').jScrollPane({ showArrows: true }).data().jsp;
        }


    });
    // $('.scroll').show().jScrollPane({
    //     showArrows: true,
    //     arrowScrollOnHover: true

    // });

});
