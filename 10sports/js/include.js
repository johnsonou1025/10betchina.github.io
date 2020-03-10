$(function() {
    $(".header").load("template.html .header>")
    $(".nav").load("template.html .nav>", function() {
        var num = $(".nav").attr("data-number");
        $(".nav li").eq(num).addClass("active").siblings().removeClass("active");
        $(".nav .bar").click(function() {
            $(this).toggleClass("bar-open")
            $(".nav ul").toggleClass("active");
        })
    })
    $(".single-article").load("template.html .single-article>")
    $(".single-article-n").load("template.html .single-article-n>")
    $(".single-article-s").load("template.html .single-article-s>")
    $(".single-article-l").load("template.html .single-article-l>")
    $(".pager").load("template.html .pager")
    $(".score-rank").load("template.html .score-rank>")
    $(".footer").load("template.html .footer>")
    // popup
    $(".popup-open").click(function(){
        $(".popup").addClass("show");
    })
    $(".popup").click(function(){
        $(".popup").removeClass("show");
    })
})
