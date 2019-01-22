

// Definiendo Array: Usamos un  array por columna para establecer una matriz de 7x7
;
var matriz= new Array(6);
var vectorColumnas=[
					document.getElementById("A").id,
					document.getElementById("B").id,
					document.getElementById("C").id,
					document.getElementById("D").id,
					document.getElementById("E").id,
					document.getElementById("F").id,
					document.getElementById("G").id,

					];

// Fin Definiendo Array


//// variable timer
	var mins = 2;  
    var segs = mins * 60;
    var transSec = 0;
    var currentMinutes = 0;

/// variable ed movimientos
    var movimietos=20;


//oyente de ventos click
onmouseup
document.getElementById("ini").addEventListener("click",RUN );


// ayentes A
document.getElementById("A0").addEventListener("onmouseup",MOVIMIENTOS_MOUSE);
document.getElementById("A1").addEventListener("onmouseup",MOVIMIENTOS_MOUSE);
document.getElementById("A2").addEventListener("onmouseup",MOVIMIENTOS_MOUSE);
document.getElementById("A3").addEventListener("onmouseup",MOVIMIENTOS_MOUSE);
document.getElementById("A4").addEventListener("onmouseup",MOVIMIENTOS_MOUSE);
document.getElementById("A5").addEventListener("onmouseup",MOVIMIENTOS_MOUSE);
document.getElementById("A6").addEventListener("onmouseup",MOVIMIENTOS_MOUSE);

// Oyentes de B
document.getElementById("B0").addEventListener("onmouseup",movimientos);
document.getElementById("B1").addEventListener("onmouseup",movimientos);
document.getElementById("B2").addEventListener("onmouseup",movimientos);
document.getElementById("B3").addEventListener("onmouseup",movimientos);
document.getElementById("B4").addEventListener("onmouseup",movimientos);
document.getElementById("B5").addEventListener("onmouseup",movimientos);
document.getElementById("B6").addEventListener("onmouseup",movimientos);

// Oyentes de C
document.getElementById("C0").addEventListener("onmouseup",movimientos);
document.getElementById("C1").addEventListener("onmouseup",movimientos);
document.getElementById("C2").addEventListener("onmouseup",movimientos);
document.getElementById("C3").addEventListener("onmouseup",movimientos);
document.getElementById("C4").addEventListener("onmouseup",movimientos);
document.getElementById("C5").addEventListener("onmouseup",movimientos);
document.getElementById("C6").addEventListener("onmouseup",movimientos);


// Oyentes de D
document.getElementById("D0").addEventListener("onmouseup",movimientos);
document.getElementById("D1").addEventListener("onmouseup",movimientos);
document.getElementById("D2").addEventListener("onmouseup",movimientos);
document.getElementById("D3").addEventListener("onmouseup",movimientos);
document.getElementById("D4").addEventListener("onmouseup",movimientos);
document.getElementById("D5").addEventListener("onmouseup",movimientos);
document.getElementById("D6").addEventListener("onmouseup",movimientos);

// Oyentes de E
document.getElementById("E0").addEventListener("onmouseup",movimientos);
document.getElementById("E1").addEventListener("onmouseup",movimientos);
document.getElementById("E2").addEventListener("onmouseup",movimientos);
document.getElementById("E3").addEventListener("onmouseup",movimientos);
document.getElementById("E4").addEventListener("onmouseup",movimientos);
document.getElementById("E5").addEventListener("onmouseup",movimientos);
document.getElementById("E6").addEventListener("onmouseup",movimientos);

//Oyentes de F
document.getElementById("F0").addEventListener("onmouseup",movimientos);
document.getElementById("F1").addEventListener("onmouseup",movimientos);
document.getElementById("F2").addEventListener("onmouseup",movimientos);
document.getElementById("F3").addEventListener("onmouseup",movimientos);
document.getElementById("F4").addEventListener("onmouseup",movimientos);
document.getElementById("F5").addEventListener("onmouseup",movimientos);
document.getElementById("F6").addEventListener("onmouseup",movimientos);

// Oyentes de G
document.getElementById("G0").addEventListener("onmouseup",movimientos);
document.getElementById("G1").addEventListener("onmouseup",movimientos);
document.getElementById("G2").addEventListener("onmouseup",movimientos);
document.getElementById("G3").addEventListener("onmouseup",movimientos);
document.getElementById("G4").addEventListener("onmouseup",movimientos);
document.getElementById("G5").addEventListener("onmouseup",movimientos);
document.getElementById("G6").addEventListener("onmouseup",movimientos);










/*     Funciones     */

// Funcion de inico del juego invoca a funcie de control

function RUN() {
	
 var boton=document.getElementById("ini").innerHTML;
	if(boton.valueOf()=="Iniciar"){
		botonInicioRinicio();
		timer ();
		crear_nodos();
		Tres_en_line ();
		document.getElementById('movimientos-text').innerHTML=movimietos;
	}else{
		document.location.reload();
	}


	
}



/* esta funcion crea todos los nodos de la matriz 
y los asigna por colunas, para moder recargar la
 matriz por por cada celda que falte en una acoluna */

function crear_nodos(){
	var  nuevoid='';
	var nuevo_img=''; 
	var elemColumna;
	var elemPadre;
	var a='';
	var columna;
	var imagen=0;
	var nuevo_ele;
	var nuevo_div_2;

	for (var ide = 0 ; ide<vectorColumnas.length; ide++) {
			elemColumna=document.getElementById(vectorColumnas[ide]);
			

		for(var i=0;i<7;i++){
			elemPadre= document.getElementById(elemColumna.id).getElementsByTagName('div')[i];
			elemPadre.setAttribute("style", "animation: efecto_caida 600ms;");
			var array=[];
			array.push(elemPadre);

			NUEVOnodo(array);

			//funcion asigna imagen de forma aleatorias
			/*imagen= Math.floor(Math.random()*4);

			//creando elemto Span
			nuevo_ele=document.createElement("span");
			elemPadre.appendChild(nuevo_ele);


			// creamos elemento img.
			nuevo_img=document.createElement("img");
			nuevo_ele.setAttribute("class", "I"+imagen);
			nuevo_img.setAttribute("src", "image/"+imagen+".png");
			
			nuevo_img.style.width = '80%';
			nuevo_ele.appendChild(nuevo_img);		*/
			 
		}
	
	}

}



function NUEVOnodo (elemento) {
	var vectorElementos=[];
	vectorElementos=elemento;
	for(var i=0;i<vectorElementos.length;i++){
		var elemPadre=vectorElementos[i];

			imagen= Math.floor(Math.random()*4);

			//creando elemto Span
			nuevo_ele=document.createElement("span");
			elemPadre.appendChild(nuevo_ele);


			// creamos elemento img.
			nuevo_img=document.createElement("img");
			nuevo_ele.setAttribute("class", "I"+imagen);
			nuevo_img.setAttribute("src", "image/"+imagen+".png");
			
			nuevo_img.style.width = '80%';
			nuevo_ele.appendChild(nuevo_img);
	}

	// body... 
}

//// Funcion de cambiar texto del boton
/*
	funcion que cambia el texto del boton inicio
*/


function botonInicioRinicio() {
	
  var uno = document.getElementById("ini");
  var reiniciar="Reiniciar";
  var iniciar="Iniciar";

  if (uno.innerHTML == "Iniciar"){   	
      uno.innerHTML =reiniciar ;   

  }else{
  		 uno.innerHTML = iniciar;
  		
	} 
}
// fin cambiar texto boton



//// Funcion del timer

/*
	esta funcion inica una cuenta regresiva para el juego
*/

	function timer () {
	    setTimeout(Decrement,1000);
    }

    function Decrement() {
        currentMinutes = Math.floor(segs / 60);
        transSec = segs % 60;
        if(transSec <= 9) transSec = "0" + transSec;
        segs--;
        document.getElementById("timer").innerHTML = currentMinutes + ":" + transSec; 
        if(segs !== -1) setTimeout('Decrement()',1000);
    }
/// fin timer	
	


// Funcion movimientos 3 el linea o mas 

/*
	En esta funcion se busca el elemento contenedor de todos los elementos Hijos de la columan,
	opteniendo cada HIJO en cada ciclo del segundo for una ves optenido el elemento,
	buscamos el elemento NIETO para optener su ID que coicide con nombre de la imagen asignada,
	SI se encuentran 3 elementos juntos, nieto e hijo, para posteriomet llamar a una funcion



*/

function Tres_en_line () {
	var elemColumna;
	var elemPrimerNivel;
	var elemSegundoNivel;
	
	var p=document.getElementById("score-text").innerHTML;
	var puntos=parseInt(p);

	

	for (var ide = 0 ; ide<vectorColumnas.length; ide++) {
		
		elemColumna=document.getElementById(vectorColumnas[ide]); //optengo columan

		var auxiliar= document.getElementById(elemColumna.id).getElementsByTagName('div');// dame tu array elemetos.		
		var auxSegudoNivel=[];
		
		for(var i=0;i<auxiliar.length;i++){
			var eleAux=auxiliar[i].firstChild;			
			auxSegudoNivel.push(eleAux);
		}
		//alert(auxSegudoNivel.length);
		for(var i=0;i<5;i++){


			var a=i+1;
			var b=a+1;
			var Aux1=auxSegudoNivel[i].className;
			var Aux2=auxSegudoNivel[a].className;
			var Aux3=auxSegudoNivel[b].className;

			if(Aux1.valueOf()==Aux2.valueOf()){
				//alert(1);
				if (Aux2.valueOf()==Aux3.valueOf()) {
					//alert(2);
					elemPrimerNivel=auxSegudoNivel[i].parentNode;
					var elemPrimerNivel2=auxSegudoNivel[a].parentNode;
					var elemPrimerNivel3=auxSegudoNivel[b].parentNode;
					elemPrimerNivel.removeChild(auxSegudoNivel[i]);
					elemPrimerNivel2.removeChild(auxSegudoNivel[a]);
					elemPrimerNivel3.removeChild(auxSegudoNivel[b]);

					switch (Aux1) {
						case "I0":
							puntos=puntos+30;
							document.getElementById("score-text").innerHTML=puntos;
							break;
						case "I1":
							puntos=puntos+40;
							document.getElementById("score-text").innerHTML=puntos;
							break;	
						case "I2":
							puntos=puntos+50;
							document.getElementById("score-text").innerHTML=puntos;
							break;
						case "I4":
							puntos=puntos+60
							document.getElementById("score-text").innerHTML=puntos;
							break;	

						default:
							// statements_def
							break;
					}
					var vector=[];
					vector[0]=elemPrimerNivel;
					vector[1]=elemPrimerNivel2;
					vector[2]=elemPrimerNivel3;

					NUEVOnodo(vector);


				}
			}			
		}
	}

	//llamar cargar nodos


}

// fin 3 en linea;


// funcion movimientos mouse

function MOVIMIENTOS_MOUSE () {

	movimientos--;
	alert();
	Tres_en_line();
	// body... 
}


// fin funcion movimientos mouse


