


// funcion que anima el titulo intermitente
$(document).ready(function() {

animacion = function(){
    $("#titulo").animate({ color:'#fff'}).animate({color:'#DCFF0E'});  
}

setInterval(animacion, 500);
// funciones pamanejar el despasamiento de celdas

 	
   




$(".sortable").sortable({
	change: function( event, ui ) {
		generar_matris();
		marcar_elementos(); // llmando a funcion js
		eliminar();
	}
});

   eliminar();
    
});




function eliminar() {

	setTimeout(function() {
		$(".marca").remove();
	}, 1500);
	
}
/*
 		Esta funcion sisrva para oredenar los elementos de la matriz y desplasar los elementos dulces hacia abajo

 */
