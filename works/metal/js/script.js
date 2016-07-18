$(document).ready(function() {

    // 
    $(".question-item-txt").click(function() {
        $(this).parents().siblings(".question-item").children(".question-item-answer").slideUp();
        $(this).parents().siblings(".question-item").children(".question-item-txt").removeClass("active");
        $(this).toggleClass("active").siblings(".question-item-answer").slideToggle();
    });

    $(function(e) {
        e.mask.definitions["~"] = "[+-]",
            e("input[type=tel]").mask("+7(999) 999-9999")
    });


    $(".send-form").each(function() {
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
                    window.location.replace("thanks.html");
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
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        items: 1,
        themeClass: "owl-theme"
    });

    $("a.inline").fancybox({

    });
    $("a.work_inline").fancybox({
        wrapCSS: 'owrap'
    });


});
