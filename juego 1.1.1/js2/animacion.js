
// funcion que anima el titulo intermitente
$(function() {

  animacion = function(){
      $("#titulo").animate({ color:'#fff'}).animate({color:'#DCFF0E'});
  }

setInterval(animacion, 500);
//setInterval(Animar_elemtntos_marcados, 1000);
  $("#ini").click(function(){

    cambiarboton();

  });


});

function finJuego(){

    var valor=$("#timer").text().trim();
    if($("#timer").text().trim()=="00:00"){
        $("#ini").html("Reiniciar");
          $('#tablero').remove();
        }
         play();
     }

function cambiarboton(){
  if($("#ini").html()=="Iniciar"){
    $("#ini").html("Reiniciar");
    Timer();
    setTimeout('finJuego()',200000);

  }else{
    $("#ini").html("Iniciar");
    Reiniciar();
  }


}
