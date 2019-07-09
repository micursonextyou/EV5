
// funcion que anima el titulo intermitente
$(document).ready(function() {




animacion = function(){
    $("#titulo").animate({ color:'#fff'}).animate({color:'#DCFF0E'});
}
setInterval(animacion, 500);
//setInterval(Animar_elemtntos_marcados, 1000);







});
function AnimarElemento(){
    $(".marca").animate({ opacity: 0.4},500).animate({ opacity: 1},500);
    setInterval("AnimarElemento()", 1000);
    eliminar();
}
function eliminar() {
	setTimeout(function() {
    //$(".marca").parent().addClass("VacioS");
		$(".marca").remove();
	}, 1500);

  TranspasarCandys();
  //AgregarCandy();
}
/* funcion para mostrar resultados de las partidas ellmina los elemento que forma las vectorColumnas
    y llama a la funcion GameOver para mos trar el panel final
*/
function finJuego(){

    var valor=$("#timer").text().trim();
    if($("#timer").text().trim()=="00:00"){
        $("#ini").html("Inicio");
        for(var i=0;i<7;i++){
          var div=vectorColumnas[i];
          $('#'+div).remove();
        }
        //GameOver();
         play();
        //setTimeout(Sumar,1000); //funcion que suma los puntos de la partida

    }
}
function drag(){
  $(".dragg").draggable({});
  $(".dropp").droppable({
    accept: '.ui-draggable',
    drop: function( event, ui ) {
      ui.draggable.parent().append($(this).children());
       $(this).append(ui.draggable);
       ui.draggable.css({
           left: '',
           top: ''

       });
       var mov = $("#movimientos-text").text();
       mov--;
       $("#movimientos-text").text(mov);
      /*
 			enLineaFilas();
 			enLineaColumnas();*/

    }

  });

}
function Vacios(elem){
  $('#'+elem).removeClass("VacioS");
}
function removerVacios(elem){
  $('#'+elem).removeClass("VacioS");
}
