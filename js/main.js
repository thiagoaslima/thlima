(function ($) {
    "use strict";

    if ($("html").hasClass("svg")) {
        var imgs = $(".i_svg"),
            i = imgs.length,
            src,
            src2;

        while (i) {
            i -= 1;
            src = $(imgs[i]).attr("src");
            src2 = src.replace("png", "svg");

            $(imgs[i]).attr("src", src2);
        }
    }

}(jQuery));
