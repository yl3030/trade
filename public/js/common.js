let tabNum = $(".tab-main li").length;
let tabWidth = 100 / tabNum;
$(".tab-main li").each(function(){
    $(this).css("width",tabWidth + "%");
})

$(".search_content_delete").click(function(){
    $(this).parents(".search_content").find("input").val("");
})

$(".btn-back").click(function(){
    history.back();
})

$("#modalArrange .modal_list>li").click(function(){
    let text = $(this).text();
    $(this).addClass("active").siblings("li").removeClass("active");
    $(".arrange").find("span").text(text);
})

$("#modalAccount .modal_list>li").click(function(){
    let text = $(this).text();
    $(this).addClass("active").siblings("li").removeClass("active");
    $(".contract").find("p").text(text);
})

$(".member_news_like").click(function(){
    $(this).toggleClass("active");
})

$(".docu-setting_type li").click(function(){
    $(this).addClass("active").siblings("li").removeClass("active");
})

$(".checkCircle").click(function(){
    $(this).toggleClass("active");
})

$(".assets_money_search_icon").click(function(){
    $(this).parents(".assets_money_search").addClass("active");
})

$(".assets_money_search_cancel").click(function(){
    $(this).parents(".assets_money_search").removeClass("active");
})