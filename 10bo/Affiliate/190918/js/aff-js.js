$(function() {
    // header
    $(".aff-header .aff-menu li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        id = $(this).children("a").attr("href");
        $('html,body').animate({
            scrollTop: $(id).offset().top - 84
        }, 'slow');
    })

    // faq
    $(".aff-faq .select-menu li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        $(".aff-faq .select-content li").eq($(".aff-faq .select-menu li.active").index()).addClass("active").siblings().removeClass("active");
    })
    $(".aff-faq-intro a").click(function(){
        $(".faq-select-wrap").toggleClass("show");
    })

    // popup
    $(".aff-wrap .faq-more").click(function() {
        $(".aff-wrap .aff-popup").addClass("show");
    })
    $(".aff-wrap .aff-popup .btn-close-popup").click(function() {
        $(".aff-wrap .aff-popup").removeClass("show");
    })
    $(".aff-popup .select-menu>ul>li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        $(".aff-popup .select-content>ul>li").eq($(".aff-popup .select-menu>ul>li.active").index()).addClass("active").siblings().removeClass("active");
    })

    //goTop
    $(".btn-goTop").click(function(){
    	$(".aff-header .aff-menu li").eq(0).addClass("active").siblings().removeClass("active");
    	$('html,body').animate({
            scrollTop: 0
        }, 'slow');
    })
    $(window).scroll(function() {
        if ($(window).scrollTop()>=300) {
        	$(".btn-goTop").addClass("show");
        }else{
        	$(".btn-goTop").removeClass("show");
        }
    })
})