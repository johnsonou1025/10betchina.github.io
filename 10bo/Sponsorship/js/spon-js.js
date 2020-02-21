$(function() {
    // spon-photo select-menu
    $(".select-menu li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        $(".spon-photo .photo-wrap").eq($(this).index()).addClass("show").siblings().removeClass("show");
        $(".photo-wrap.show .grid").eq(0).addClass("active");
        $(".photo-wrap.show .grid").eq(1).addClass("active-next");
    })

    // photo-slide
    $(".photo-wrap.show .grid").eq(0).addClass("active");
    $(".photo-wrap.show .grid").eq(1).addClass("active-next");
    $(".photo-slide .next").click(function() {
        // $(this).parent().parent().addClass("active");
        if ($(".photo-wrap.show .grid").last().hasClass("active")) {
            // console.log("last one");
        } else {
            $(this).parent().parent().find(".grid.active-prev").removeClass("active-prev");
            $(this).parent().parent().find(".grid.active-next").removeClass("active-next");
            $(this).parent().parent().find(".grid.active").removeClass("active").next().addClass("active");
            $(this).parent().parent().find(".grid.active").prev().addClass("active-prev");
            $(this).parent().parent().find(".grid.active").next().addClass("active-next");
        }

    })
    $(".photo-slide .prev").click(function() {
        // $(this).parent().parent().removeClass("active");
        if ($(".photo-wrap.show .grid").first().hasClass("active")) {
            // console.log("no one be first");
        } else {
            $(this).parent().parent().find(".grid.active-prev").removeClass("active-prev");
            $(this).parent().parent().find(".grid.active-next").removeClass("active-next");
            $(this).parent().parent().find(".grid.active").removeClass("active").prev().addClass("active");
            $(this).parent().parent().find(".grid.active").prev().addClass("active-prev");
            $(this).parent().parent().find(".grid.active").next().addClass("active-next");
        }

    })

    // photo-popup
    $(".photo-wrap .photo img").click(function() {
        $(".spon-popup").addClass("show");
        $(this).addClass("active");
        $(".spon-popup .all-photo").empty();
        $(this).parents(".photo-wrap").find('img').each(function() {
            $(".spon-popup .all-photo").append($(this).clone());
        })
        $(".spon-popup .spon-popup-photo img").attr('src', $(".spon-popup .all-photo img.active").attr('src'));
    })
    $(".spon-popup .btn-close-popup").click(function() {
        $(".spon-popup").removeClass("show");
        $(".photo-wrap .photo img.active").removeClass("active");
    })
    $(".spon-popup-slide .next").click(function() {
        if ($(".spon-popup .all-photo img").last().hasClass("active")) {
            $(".spon-popup .all-photo img").first().addClass("active").siblings().removeClass("active");
        } else {
            $(".spon-popup .all-photo img.active").removeClass("active").next().addClass("active");
        }
        $(".spon-popup .spon-popup-photo img").attr('src', $(".spon-popup .all-photo img.active").attr('src'));
    })
    $(".spon-popup-slide .prev").click(function() {
        if ($(".spon-popup .all-photo img").first().hasClass("active")) {
            $(".spon-popup .all-photo img").last().addClass("active").siblings().removeClass("active");
        } else {
            $(".spon-popup .all-photo img.active").removeClass("active").prev().addClass("active");
        }
        $(".spon-popup .spon-popup-photo img").attr('src', $(".spon-popup .all-photo img.active").attr('src'));
    })


})