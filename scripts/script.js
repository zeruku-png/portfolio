$(document).ready(function () {
    $(window).scroll(function () {
        $(".fv-title").css("opacity", function () {
            if (0 > 1 - $(window).scrollTop() / ($(window).height() / 3)) {
                $(".fv-title").addClass("show");
                return;
            } else {
                $(".fv-title").removeClass("show");
            }
            return 1 - $(window).scrollTop() / ($(window).height() / 3);
        });
    });
});


window.onload = function () {
    const spinner = document.getElementById("loading");
    spinner.classList.add("loaded");
};

$(function () {
    $("header").each(function () {
        var $window = $(window),
            $header = $(this),
            headerBoxTop = $header.offset().top;
        galleryTop = $(".gallery").offset().top;

        $window.on("scroll", function () {
            if ($window.scrollTop() > headerBoxTop) {
                $header.addClass("sticky");
                $(".fd-stc").addClass("show");
            } else {
                $header.removeClass("sticky");
                $(".fd-stc").removeClass("show");
            }

            if ($window.scrollTop() > galleryTop) {
                $(".item-profile").removeClass("big");
                $(".item-gallery").addClass("big");
            } else {
                $(".item-profile").addClass("big");
                $(".item-gallery").removeClass("big");
            }

            $("body").css("background-position-y", function () {
                if ($window.scrollTop() < headerBoxTop) {
                    return -$(window).scrollTop() / 5;
                } else {
                    return;
                }
            });
        });
        $window.trigger("scroll");
    });
});
