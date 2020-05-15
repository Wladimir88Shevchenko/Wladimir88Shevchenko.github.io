function Slider(width_li, margin_right_li, col_view_img) {
    var step = width_li + margin_right_li,
        slider_box_with = col_view_img * step - margin_right_li + 20,
        $col_img = $("#slider_box>ul>li").length,
        col_main_left = 0,
        max_col_main_left = $col_img * step;
    $("#slider_box").width(slider_box_with);
    $("#slider_box>ul>li").width(width_li).css({
        "margin-right": margin_right_li / 2,
        "margin-left": margin_right_li / 2,
    });
    $("#right_nav").click(function() {
        if (-col_main_left == max_col_main_left - col_view_img * step) {
            col_main_left = 0;
        } else {
            col_main_left = col_main_left - step;
        }
        $("#slider_box>ul").css("margin-left", col_main_left + "px");
    });
    $("#left_nav").click(function() {
        if (col_main_left == 0) {
            col_main_left = -max_col_main_left + col_view_img * step;
        } else {
            col_main_left = col_main_left + step;
        }
        $("#slider_box>ul").css("margin-left", col_main_left + "px");
    });
}
$(Slider(385, 20, 2));

$(document).ready(function() {
    new WOW().init();

    var window_Width = parseInt(window.innerWidth);
    var window_Height = parseInt(window.innerHeight);
    var scrollTop = $(window).scrollTop();


    var scrolled_top = false;
    $(".up_btn").click(function() {
        $('body,html').animate({ scrollTop: 0 }, 1000, function() {
            scrolled_top = true;
        });
        $(".up_btn").animate({
            "bottom": "100%",
        }, 500);
    });

    $(window).scroll(function() {
        scrollTop = $(window).scrollTop();
        if (scrollTop > 500) {
            if (scrolled_top) {
                $(".up_btn").css("bottom", "");
                scrolled_top = false;
            }
            $(".up_btn").fadeIn(1000);
        } else {
            $(".up_btn").fadeOut(1000);
            scrolled_top = true;
        };

    })




    $("nav").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });





    // открытие попап
    $('button').click(function() {
        $('.popup_bg').fadeIn();
        // $(".wrapper").css("filter", 'blur(5px)');
        if (parseInt($(".popup_form").css('height')) + 20 > parseInt(window.innerHeight)) {
            $(".popup_form").css('position', 'absolute');
            $(".popup_bg").fadeIn(500, function() {
                $(".popup_form").show().css({
                    "bottom": "auto",
                    "top": $(window).scrollTop() - 70,
                }).animate({
                    "top": $(window).scrollTop() + 30,
                    "opacity": '1'
                }, 500);
            });
        } else {
            $(".popup_bg").fadeIn(500, function() {
                $(".popup_form").css({
                    'top': '-70px',
                    "position": "fixed",
                    "bottom": "0",
                }).show().animate({
                    "top": "0px",
                    "opacity": '1'
                }, 500);
            });

        }
    });

    // открытие попап


    // закрытие
    var timer;
    $(".popup_bg, img.close").click(function() {
        // $(".wrapper").css("filter", '');
        $("#done2").fadeOut();
        $(".popup_form").stop(true).animate({
            "top": "+=100px",
            "opacity": '0',
        }, 500, function() {
            $(this).hide().css("top", '');
            $(".popup_bg").fadeOut();
        });
        $("#done").animate({
            "top": "+=100px",
            "opacity": '0'
        }, 500, function() {
            $(this).hide().css("top", '');
        });
        clearTimeout(timer);
    });
    // закрытие


    $("form").submit(function(event) {
        event.preventDefault();

        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            if (form_now == "popup") {
                $(".popup_form").animate({
                    "top": "+=100px",
                    "opacity": '0'
                }, 500, function() {
                    $(this).hide().css("top", '');
                });
            }
            // $(".wrapper").css("filter", 'blur(5px)');
            $(".popup_bg").fadeIn(500, function() {
                $("#done").css({
                    'top': parseInt(window.innerHeight) / 2 - 125 + "px",
                }).show().animate({
                    "top": parseInt(window.innerHeight) / 2 - 25 + "px",
                    "opacity": '1'
                }, 500);
            });

            timer = setTimeout(function() {
                $("#done").animate({
                    "top": "+=100px",
                    "opacity": '0'
                }, 500, function() {
                    $(this).hide().css("top", '');
                });
                $(".popup_bg").fadeOut();
                // $(".wrapper").css("filter", '');
            }, 5000);
            $("form").trigger("reset");
        });
        return false;
    });
    // попап







})