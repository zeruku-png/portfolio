$(document).ready(function () {
    $(window).scroll(function () {
        $(".fv-title").css("opacity", function () {
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

        $window.on("scroll", function () {
            if ($window.scrollTop() > headerBoxTop) {
                $header.addClass("sticky");
                $(".fd-stc").addClass("show");
                $(".item-profile").removeClass("big");
            } else {
                $header.removeClass("sticky");
                $(".fd-stc").removeClass("show");
                $(".item-profile").addClass("big");
            }
        });
        $window.trigger("scroll");
    });
});
