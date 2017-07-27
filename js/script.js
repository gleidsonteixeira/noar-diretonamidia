$(document).ready(function(){$(".button-collapse").sideNav({closeOnClick:true}); menu(); expandir(); showVideo();});$(window).resize(function(){});$(window).scroll(function(){menu()});$(window).load(function(){});function quadrado(e){return $(e).height($(e).width())}function menu(){var a=window.pageYOffset;if(a>50){$("#topo header").addClass("active");$(".button-collapse").css({"color":"#f8992a"})}else{$("#topo header").removeClass("active");$(".button-collapse").css({"color":"white"})};} function expandir(){ $("#cases ul li a").click(function(){ $(this).offsetParent().offsetParent().find(".expandir").addClass("active"); }); $(".expandir i").click(function(){ $(this).offsetParent().removeClass("active"); });}
function showVideo(){
    $(".banner ul li a").click(function(){
        var a = $(this).attr("data-url");
        $(".exibir").addClass("active");
        $(".banner").css({"z-index":"999"});
        $(".exibir .frame").html('<iframe width="800" height="450" src="'+a+'" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>')
    })

    $(".exibir i").click(function(){
        $(this).offsetParent().removeClass("active");
        $(".exibir .frame").html("");
        $(".banner").css({"z-index":"1"});
    })
}
