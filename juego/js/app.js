

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


//oyente de ventos click

document.getElementById("ini").addEventListener("click",RUN );


/*     Funciones     */

// Funcion de inico del juego invoca a funcie de control

function RUN() {
	

	
	botonInicioRinicio();
	timer ();
	crear_nodos();
	Tres_en_line ();

	
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
			

			//funcion asigna imagen de forma aleatorias
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
	
	}

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
  		
	}; 
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

				}
			}

			
		}

		

		
		

	}
}

// fin movimientos

