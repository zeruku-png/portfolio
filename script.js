$(document).ready(function () {
    $(window).scroll(function () {
        $(".fv-title").css("opacity", function () {
            return 1 - $(window).scrollTop() / 500;
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
            } else {
                $header.removeClass("sticky");
            }
        });
        $window.trigger("scroll");
    });
});
