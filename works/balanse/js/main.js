$(document).ready(function() {
    if ($(window).width() < 500) {
        $(".wow").removeClass("wow");
    }
 

    $("a.inline_popap").fancybox();
    $("input[type=tel]").mask("+9 (999) 999-9999");


    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: function(box) {
            setTimeout(function() {
                console.log("ggg");
                $(".darts_arrow").addClass("animat");
            }, 1000)
        },
        scrollContainer: null
    });
    wow.init();


    // if($(window).width() < 768) {
    //     $(".big_slick").slick('slickFilter', '.big_slick ');
    // }



    $(".form_validate").each(function() {
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
                        wrapCSS: 'owrap'
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
                $(element).addClass('error');
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
            }
        })
    });



    
});
