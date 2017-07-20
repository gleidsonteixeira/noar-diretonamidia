$(document).ready(function(){

	$(".button-collapse").sideNav({
		closeOnClick: true
	});
	menu();

})
$(window).resize(function(){

})
$(window).scroll(function(){
	menu();
})
$(window).load(function(){
	
})


function quadrado(e){
	return $(e).height($(e).width());
}

function menu(){
	var a = window.pageYOffset;

	if(a > 50){
		$("#topo header").addClass("active");
		$(".button-collapse").css({"color":"#f8992a"});
	}else{
		$("#topo header").removeClass("active");
		$(".button-collapse").css({"color":"white"});
	}
}

