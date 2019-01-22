


// funcion que anima el titulo intermitente
$(document).ready(function() {

animacion = function(){
    $("#titulo").animate({ color:'#fff'}).animate({color:'#DCFF0E'});  
}

setInterval(animacion, 500);


});




// funciones pamanejar el despasamiento de celdas
 
    $( ".sortable" ).sortable();
    $( ".sortable" ).disableSelection();

