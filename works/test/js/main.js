$(document).ready(function () {



    $('.slider').owlCarousel({
        margin: 0,
        loop: true,
        items: 1,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true
    });
    $('.questions').owlCarousel({
        margin: 0,
        loop: false,
        items: 1,
        dots: false,
        nav: false,
        lazyContent: false,
        touchDrag: false,
        mouseDrag: false,
    });

    //          Появление фиксированого меню при скроле

    var e = $("#menu");
    $(window).scroll(function () {
        $(this).scrollTop() > 500 && e.hasClass("header-menu") ? e.fadeOut("normal", function () {
            $(this).removeClass("header-menu").addClass("fixed-menu").fadeIn("normal")
        }) : $(this).scrollTop() <= 500 && e.hasClass("fixed-menu") && e.fadeOut("normal", function () {
            $(this).removeClass("fixed-menu").addClass("header-menu").fadeIn("normal")
        })
    })


    $("a.inline").fancybox({
        'autoDimensions': false,
        'height': 'auto',
        'transitionIn': 'none',
        'transitionOut': 'none',
        wrapCSS: 'oform',
        width: 555

    });

    $(".questions").find("li").click(function () {
        var owl = $('.owl-carousel');
        owl.trigger('next.owl.carousel')
    })


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
    $(".form_quest").each(function () {
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
                        href: '#thanks-test'
                    });
                    setTimeout(function () {
                        $.fancybox.close();
                        document.location.href = "index.html";
                    }, 3000);

                    $(".form_quest").trigger("reset");
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




});