
// 1 dar inicio
// 2 funciones automaticas ¿como implentear estas acciones?
// 3 llamar a funciones con jq ui cundo realiso maovimientos.


var movimientos=20;

// funcion que da inicia ol Juego
document.getElementById("ini").addEventListener("click",Jugar );

function Jugar() {

	document.getElementById('movimientos-text').innerHTML=movimientos;
	if(document.getElementById("ini").innerHTML.valueOf()=="Iniciar"){
      RenombrarBoton();
      Timer();
			CrearNodos();
			drag();
			GenerarMatris();
			setInterval("enLineaFilas()",1600);
			setInterval("enLineaColumnas()",1800);



	}else if(document.getElementById("ini").innerHTML.valueOf()=="Reiniciar"){
		Reiniciar();
	}else{
		location.reload();
	}
}

/*
	funcion que cambia el texto del boton inicio
*/

function RenombrarBoton() {
    if (document.getElementById("ini").innerHTML == "Iniciar"){
      document.getElementById("ini").innerHTML ="Reiniciar";
  }else{
  		 document.getElementById("ini").innerHTML = "Iniciar";
	}
}

function Reiniciar(){

  clearTimeout(StopTime);
  mins = 2;
  segs = mins * 60;
  document.getElementById('movimientos-text').innerHTML=0;
  document.getElementById('timer').innerHTML="02:00";
  document.getElementById('score-text').innerHTML=0;
  document.getElementById("ini").innerHTML="Iniciar";

	for (var ide = 0 ; ide<vectorColumnas.length; ide++) {
			var elemPadre=document.getElementById(vectorColumnas[ide]);
			elemPadre.innerHTML="";


	}




}
