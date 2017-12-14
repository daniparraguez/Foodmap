$(document).ready(function() {
	/*Aparece vista splash*/
	$("#splash").fadeIn('slow/400/fast').fadeOut(4000);
/*Aparece menú principal*/
$("#main").hide().fadeIn(7000).delay(10000);
/*Esconde menu categorías*/
$(".hindu").hide();
$(".chilena").hide();

/*Al hacer click en comida thai esconde los otros menu*/
$("#thai").click(function(){
	$(".thai").show();
	$(".hindu").hide();
	$(".chilena").hide();
});

$("#hindu").click(function(){
	$(".thai").hide();
	$(".hindu").show();
	$(".chilena").hide();
});

$("#chilena").click(function(){
	$(".thai").hide();
	$(".hindu").hide();
	$(".chilena").show();
});
/*Mouseover sobre los thumbnails de fotos*/
	$(".thumbnail").mouseover(function() {
		$(this).children(".caption").show();
	});
	$(".thumbnail").mouseout(function() {
		$(this).children(".caption").hide();
	});



});

