// variables
var matris_candys=[];// contiene todos los elementos dulces.
var fila=[];

var puntos=0;



var vectorColumnas=[
					document.getElementById("A").id,
					document.getElementById("B").id,
					document.getElementById("C").id,
					document.getElementById("D").id,
					document.getElementById("E").id,
					document.getElementById("F").id,
					document.getElementById("G").id,

					];



/// variable de movimientos
    var movimietos=20;
   


//// variable timer
	var mins = 2;  
    var segs = mins * 60;
    var transSec = 0;
    var currentMinutes = 0;


document.getElementById("ini").addEventListener("click",run );


/*
	 esta funcion genera un matris de elemento existentea.

*/
function generar_matris() {
	
	var p=document.getElementById("score-text").innerHTML;
	for (var i = 0 ; i<7; i++) {
		matris_candys[i]= new Array(document.getElementById("A").getElementsByTagName('div')[i],document.getElementById("B").getElementsByTagName('div')[i],document.getElementById("C").getElementsByTagName('div')[i],document.getElementById("D").getElementsByTagName('div')[i],document.getElementById("E").getElementsByTagName('div')[i],document.getElementById("F").getElementsByTagName('div')[i],document.getElementById("G").getElementsByTagName('div')[i]);
	}
	fila=matris_candys;

}

// funcion que inica el juego.
function run () {
	document.getElementById('movimientos-text').innerHTML=movimietos;
	generar_matris ();
	var boton=document.getElementById("ini").innerHTML;
	if(boton.valueOf()=="Iniciar"){
		change(); // cambiomos el tecto del boton para la funcion de reinicio
		timer (); // inicia el time out 
		crear_nodos(); // carga la matris con la imagenes
		marcar_elementos(); // marga los elementos que estam en linea
		eliminar(); // llamano a funcion jquery para eleminar nodos marcados despues de un delay
		 //ordenar()
		//rellenar_espacios(); // crea nuevos nodos en posisciones vacias.

		
		//setTimeout(TimeOut,120000);


	}else{
		document.location.reload();
	}	
}


/*
	funcion que cambia el texto del boton inicio
*/

function change() {
	
  var uno = document.getElementById("ini");
  var reiniciar="Reiniciar";
  var iniciar="Iniciar";

  if (uno.innerHTML == "Iniciar"){   	
      uno.innerHTML =reiniciar;   

  }else{
  		 uno.innerHTML = iniciar;
  		
	} 
}

/*
	esta funcion inica una cuenta regresiva para el juego
*/

	function timer () {
	    setTimeout(Decrement,1000);
    }


    /* funcion que esn invocada por taimer para hacer la cuenta regresiva se segundos */

    function Decrement() {
        currentMinutes = Math.floor(segs / 60);
        transSec = segs % 60;
        if(transSec <= 9) transSec = "0" + transSec;
        segs--;
        document.getElementById("timer").innerHTML = currentMinutes + ":" + transSec; 
        if(segs !== -1) setTimeout('Decrement()',1000);
    }
	 

// Creamos los nodos de los div

function crear_nodos(){
	
	var elemColumna;
	var elemPadre;
	var nuevo_ele;
	
	for (var ide = 0 ; ide<vectorColumnas.length; ide++) {
			elemColumna=document.getElementById(vectorColumnas[ide]);			

		for(var i=0;i<7;i++){
			elemPadre= document.getElementById(elemColumna.id).getElementsByTagName('div')[i];
			elemPadre.setAttribute("style", "animation: efecto_caida 800ms;");
			var array=[];
			array.push(elemPadre); // 
			candys(array);			
		}	
		

	}
}





/* 
	esta funcion recorre la matriz for filas y luego por columas 
	si enecuentra elentos span de la misma clase consecutivos le agrega una clase "marca"
 */
function marcar_elementos() {
	// recorremos  filas buscando coicidencias.

	var caso='';
	for(var i=0;i<5;i++){
		for(var j=0;j<5;j++){
			//var j2=j+1;
			//var j3=j2+1;
			var Aux1=fila[i][j].firstChild.className;
			
			var Aux2=fila[i][j+1].firstChild.className;
			var Aux3=fila[i][j+2].firstChild.className;
			
			if(Aux1.valueOf()==Aux2.valueOf()){
				if (Aux2.valueOf()==Aux3.valueOf()) {
					mark(fila[i][j],fila[i][j+1],fila[i][j+2]);
					puntiacion (Aux1);					
				}
			}
		}
	}

	// buscamos coinsidencia por columnas.
	/*for(var i=0;i<5;i++){
		for(var j=0;j<5;j++){
			//var j2=j+1;
			//var j3=j2+1;
			var Aux1=fila[i][j].className;
			var Aux2=fila[i+1][j].className;
			var Aux3=fila[i+2][j].className;
			
			if(Aux1.valueOf()==Aux2.valueOf()){
				if (Aux2.valueOf()==Aux3.valueOf()) {
					mark(fila[i][j],fila[i+1][j],fila[i+2][j]);
					puntiacion (Aux1);					
				}
			}
		}
	}*/



}
/*funcion que recibe elemento coincidente para marcar*/
function mark (elem, elem2, elem3) {
	var Aux1=elem.className;
	var Aux2=elem2.className;
	var Aux3=elem3.className;
	
	 if(Aux1.valueOf()!="marca"){
	 	
	 	elem.firstChild.setAttribute("style", "animation: tras 1s;animation-duration: 1s; animation-iteration-count: infinite;");
		elem.firstChild.setAttribute("class", "marca");
	 }
	 if(!Aux2.valueOf()!="marca"){
	 	elem2.firstChild.setAttribute("style", "animation: tras 1s;animation-duration: 1s; animation-iteration-count: infinite;");
		elem2.firstChild.setAttribute("class", "marca");
	 }
	 if(!Aux3.valueOf()!="marca"){
	 	elem3.firstChild.setAttribute("style", "animation: tras 1s;animation-duration: 1s; animation-iteration-count: infinite;");
		elem3.firstChild.setAttribute("class", "marca");
	 }

	
				
	
		
}


// se aumenta la puntuacion por los tipode dulses.

function puntiacion (expre) {
	switch (expre) {
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
			break;
		}
	
}
/* funcion para ordenar la matriz se ejectura de foma automatica, cono esto desplaso los elemento para no dejar espacion vacios*/


setTimeout(ordenar,2000);
function ordenar() {
	
	for(var i=0;i<vectorColumnas.length;i++){
		var elemento=document.getElementById(vectorColumnas[i]);
		for(var j=0;j<7;j++){
			var mi_div=elemento=document.getElementById(vectorColumnas[i]).getElementsByTagName("div")[j];
			var aa=mi_div.innerHTML;
			if(j>0){
				if(aa.valueOf()==""){ // evaluo si el elemento esta vacio
					//alert(aa);
					var b=j-1;
					//busco un elemento de la posisio anterior;
					var elemtoAnterior=document.getElementById(vectorColumnas[i]).getElementsByTagName("div")[b];
					var aux1=elemtoAnterior.innerHTML;
					if(aux1.valueOf()!=""){ // evaluo si el elemento esta vacio
						var child=elemtoAnterior.firstChild;
						elemtoAnterior.removeChild(child);
						elemento.appendChild(child);
						j=0;// fuerzo al for a recorerse nuevamente cuando mueve un lemento;

					}
				}

			}

		}		

	}

	 rellenar_espacios();

}
 


 
 	
/*

Funcion para crear los elementos de de la 4 imagenes ultilisadas 

*/


function candys (elemento) {
	var nuevo_img;
	var nuevo_ele;
	var imagen=0; 

	var vectorElementos=[];
	vectorElementos=elemento;

	for(var i=0;i<vectorElementos.length;i++){
		var elemPadre=vectorElementos[i];

			imagen= Math.floor(Math.random()*4); // IMagen aleatorias

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






/*
funcion de recargar los nodos, en las psiciones vacias 
mediante un for recoremos la matriz agregando elementos en las posicioens vacias.

*/


function rellenar_espacios () {

	for(var i=0;i<vectorColumnas.length;i++){
		var elemento=document.getElementById(vectorColumnas[i]);
		for(var j=0;j<7;j++){
			var mi_div=elemento=document.getElementById(vectorColumnas[i]).getElementsByTagName("div")[j];
			var aa=mi_div.innerHTML;
			if(aa.valueOf()==""){ // evaluo si el elemento esta vacio
				var arry=[];
				arry.push(mi_div);
				candys(arry);
			}
		}
	}
}





