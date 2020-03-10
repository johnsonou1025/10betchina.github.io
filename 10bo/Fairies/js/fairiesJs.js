$(function() {
    // photos image open
    $(".fairies-photos .photos-img").click(function() {
        $(".popup-wrap").addClass("active");
        $(".slider-photos li").eq($(this).index(".photos-img")).addClass("active");
        if($('html').hasClass('IsMobile')) {
            $(".popup-wrap").css({'height':'713px'});
            $("#mob-wrapper",window.parent.document).css({'height':'713px','overflow':'hidden'});
            $(parent.window).scrollTop(0);  
        }
    })
    // popup photo slider next
    $(".slider-photos .slider-next").click(function() {
        if ($(".slider-photos li.active").next().length > 0) {
            $(".slider-photos li.active").removeClass("active").next().addClass("active");
        } else {
            $(".slider-photos li.active").removeClass("active");
            $(".slider-photos li:first").addClass("active");
        }
    })
    // popup photo slider previous
    $(".slider-photos .slider-prev").click(function() {
        if ($(".slider-photos li.active").prev().length > 0) {
            $(".slider-photos li.active").removeClass("active").prev().addClass("active");
        } else {
            $(".slider-photos li.active").removeClass("active");
            $(".slider-photos li:last").addClass("active");
        }
    })
    // popup photo close
    $(".popup-close").click(function() {
        $(".popup-wrap.active").removeClass("active");
        $(".slider-photos li").removeClass("active");
        if($('html').hasClass('IsMobile')) {
            $("#mob-wrapper",window.parent.document).css({'height':'auto','overflow':'auto'});  
            // $("#rnd-iframe",window.parent.document).css({'height':'auto','overflow':'auto'});  
        }
    })

    // nav animation
    navStart();
    navAnimtion();
    changePhotos($(".fairies-nav li.active").index());
    $(".fairies-nav li").click(function() {
        if ($(this).hasClass("disable")) {} else {
            $(".fairies-nav-inner").scrollLeft(0);
            $(this).addClass("active").siblings().removeClass("active");
            $(".fairies-kv li").removeClass("active").eq($(this).index()).addClass("active");
            navAnimtion();
            changePhotos($(".fairies-nav li.active").index());
            $(".fairies-photos").removeClass("fadeIn").delay(500).queue(function() {
                $(this).addClass("fadeIn").dequeue();
            })
        }

    });
    $(window).resize(function() {
        navAnimtion();
    })
})

// nav start from get month
function navStart() {
    var d = new Date();
    var m = d.getMonth();
    $(".fairies-nav li").eq(m).addClass("active").siblings().attr("class", "");
    for (var liNum = m + 1; liNum < 12; liNum++) {
        $(".fairies-nav li").eq(liNum).addClass("disable");
    }
}

// nav always stay center animation
function navAnimtion() {
    var scrollWidth = $(".fairies-nav").width();
    var ulWidth = $(".fairies-nav ul").width();
    var liLeft = $(".fairies-nav li.active").position().left;
    var liWidth = $(".fairies-nav li.active").outerWidth(true);
    $(".fairies-nav ul").removeAttr('class');
    if (liLeft + liWidth < scrollWidth / 2) {
        $(".fairies-nav ul").css("left", "0");
    } else if (ulWidth - (liLeft + liWidth) < scrollWidth / 2) {
        var liLeftLast = $(".fairies-nav li:last").position().left;
        var ulLeftEnd = (liLeftLast + liWidth - scrollWidth) / scrollWidth * 100;
        if (ulLeftEnd < 0) {
            $(".fairies-nav ul").css("left", "0");
        } else {
            $(".fairies-nav ul").css("left", -ulLeftEnd + "%");
        }
    } else {
        var ulLeft = (liLeft + liWidth / 2 - scrollWidth / 2) / scrollWidth * 100;
        $(".fairies-nav ul").css({ left: -ulLeft + "%" });
    }
}

// photos loading
function changePhotos(num) {
    $(".fairies-kv li").eq(num).addClass("active").siblings().removeClass("active");
    var photoNum = 1;
    var sliderNum = 1;
    $(".fairies-wrap .fairies-photos img").each(function() {
        $(this).attr("src", "https://content.100b108.com/fairies/images/Photos/" + (num + 1) + "/Photos-" + photoNum + ".jpg");
        photoNum++;
    })
    $(".fairies-wrap .slider-photos img").each(function() {
        $(this).attr("src", "https://content.100b108.com/fairies/images/Photos/" + (num + 1) + "/Photos-" + sliderNum + ".jpg");
        sliderNum++;
    })
}

// <!-- script end -->