

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

var vectorColRem=[];
var vectorFilRem=[];
// Fin Definiendo Array


//// variable timer
	var mins = 2;  
    var segs = mins * 60;
    var transSec = 0;
    var currentMinutes = 0;

/// variable ed movimientos
    var movimietos=20;


// eleminamnos 3 en lina 
window.setTimeout(invocarSuprimir,3000);

//oyente de ventos click

document.getElementById("ini").addEventListener("click",RUN );





/*     Funciones     */

// Funcion de inico del juego invoca a funcie de control

function RUN() {
	
 var boton=document.getElementById("ini").innerHTML;
	if(boton.valueOf()=="Iniciar"){
		botonInicioRinicio();
		timer ();
		crear_nodos();
		seccionverticalyhorisontal ();
		//desplasar_elementos();		
		document.getElementById('movimientos-text').innerHTML=movimietos;
		
		recargarr();

		setTimeout(TimeOut,120000);


	}else{
		document.location.reload();
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
      uno.innerHTML =reiniciar;   

  }else{
  		 uno.innerHTML = iniciar;
  		
	} 
}
// fin cambiar texto boton




/*
	esta funcion invca funcion de eliminar nodos en linea, luego llama a reorganisar la cual desplasa
	los elementos para que no haya espacios vacios, luego invoca a recargar los nodos vacios.

*/
/*function invocarSuprimir () {


	elemininar(vectorColRem,vectorFilRem);
	desplasar_elementos();
	
	
	
}*/




/*
	funcion para buscar y marcar al menos 3 nodos el linea horizonta y vertical 
	y crea 2 vectores para uso posterior
*/

/*function seccionverticalyhorisontal () { 	
 	var a=Tres_en_linea_columna (); 	
 	var b=lineas_();
 	vectorColRem=a;
 	vectorFilRem=b;	
}*/



// Seccion Nodos

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
			elemPadre.setAttribute("style", "animation: efecto_caida 4s;");
			var array=[];
			array.push(elemPadre);

			NUEVOnodo(array);	
		}	
	}
}

/*
	funcion para crear nodos
*/
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
/*

		esta funcion carga nuevas imagenes en las posisiciones vacias

*/

function recargarr () {

	for (var i = 0; i < vectorColumnas.length; i++) {
		var contenedor=document.getElementById(vectorColumnas[i]);
		
		
			for (var ii=0; ii<7; ii++) {
				var elemento=document.getElementById(vectorColumnas[i]).getElementsByTagName("div")[ii];
				var a=elemento.innerHTML;
				if(ii>0){
					if(a.valueOf()==""){
						NUEVOnodo(a);
						ii=0;	
					}	
				}
			}
		}	
	}	



//// desplasar elementos
/*function desplasar_elementos() {

var index_vacios=[];
var nodosAdesplazar=[];
var expre='';
	for (var i = 0; i < vectorColumnas.length; i++) {
		var contenedor=document.getElementById(vectorColumnas[i]);
		
		
			for (var ii=0; ii<7; ii++) {
				//optengo primer elemento
				var elemento=document.getElementById(vectorColumnas[i]).getElementsByTagName("div")[ii];
				var a=elemento.innerHTML;
				if(ii>0){// ignoro la segunda la posisicon 0
					if(a.valueOf()==""){ // evaluo si el elemento esta vacio
						var b=ii-1;
						//busco un elemento de la posisio anterior;
						var elemtoAnterior=document.getElementById(vectorColumnas[i]).getElementsByTagName("div")[b];
						var aux1=elemtoAnterior.innerHTML;
						if(aux1.valueOf()!=""){ // evaluo si el elemento esta vacio
							var child=elemtoAnterior.firstChild;
							elemtoAnterior.removeChild(child);
							elemento.appendChild(child);
							ii=0;// fuerzo al for a recorerse nuevamente cuando mueve un lemento;

						}
						
					}	
				}
				
			}
			
		}	
	}

*/

// fin seccion  Nodos







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


// Esta funcion crea un div para mostrar los resultados cuando el cronometro llega a 0;

function TimeOut () {
	//eliminar nodos
	var aa=document.getElementById("mensajes");
	/*for(var i=0;i<vectorColumnas.length;i++){
		var aux1=vectorColumnas[i];
		aa.removeChild(aux1);
	}*/
	/*aa.removeChild(vectorColumnas[0]);
	aa.removeChild(vectorColumnas[1]);
	aa.removeChild(vectorColumnas[2]);
	aa.removeChild(vectorColumnas[3]);
	aa.removeChild(vectorColumnas[4]);
	aa.removeChild(vectorColumnas[5]);
	aa.removeChild(vectorColumnas[6]);*/

	
	// fin eliminar
	var movimietos=document.getElementById('movimientos-text');
	var timer=document.getElementById('timer');
	var puntos=	document.getElementById("score-text");
	
	var mensaje=document.createElement("div");
	mensaje.setAttribute("style", "width = 100%;");

	var divtitulo=document.createElement("div");
	var titulo= document.createElement("h1");
	var titulo2= document.createElement("h4");
	var titulo3= document.createElement("h4");
	var titulo4= document.createElement("h3");

	titulo.innerHTML="Puntuacion Final";
	titulo2.innerHTML="tiempo ------------  "  +timer.innerHTML;
	titulo3.innerHTML="tiempo ------------  "  +movimietos.innerHTML;
	titulo4.innerHTML="Tolal ---------------------------------------------"+puntos.innerHTML;
	
	divtitulo.appendChild(titulo);
	divtitulo.appendChild(titulo2);
	divtitulo.appendChild(titulo3);
	divtitulo.appendChild(titulo4);

	mensaje.appendChild(divtitulo);
	aa.appendChild(mensaje);
	timer.innerHTML="2:00";
	movimietos.innerHTML="0";
	puntos.innerHTML="0";

	 
}















//Funcion movimientos 3 el linea o mas 

/*
	En esta funcion se busca el elemento contenedor de todos los elementos Hijos de la columan,
	opteniendo cada HIJO en cada ciclo del segundo for una ves optenido el elemento,
	buscamos el elemento NIETO para optener su ID que coicide con nombre de la imagen asignada,
	SI se encuentran 3 elementos juntos, nieto e hijo, para posteriomet llamar a una funcion
*/

/*function Tres_en_linea_columna () {
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
					
					auxSegudoNivel[i].setAttribute("style", "animation: tras 700ms;animation-duration: 1s; animation-iteration-count: infinite;");
					auxSegudoNivel[a].setAttribute("style", "animation: tras 700ms; animation-duration: 1s; animation-iteration-count: infinite;");
					auxSegudoNivel[b].setAttribute("style", "animation: tras 700ms; animation-duration: 1s; animation-iteration-count: infinite;");
									

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
					vector[0]=auxSegudoNivel[i].parentNode;
					vector[1]=auxSegudoNivel[a].parentNode;
					vector[2]=auxSegudoNivel[b].parentNode;
					return vector;

					

				}
			}			
		}
	}

	//llamar cargar nodos


}
*/



 /* funcio genera una matriz de elementos la buscar y marcar 3 elentos el linea

*/


/*function lineas_ () {

	var vA=document.getElementById("A").getElementsByTagName('div');
	var vB=document.getElementById("B").getElementsByTagName('div');
	var vC=document.getElementById("C").getElementsByTagName('div');
	var vD=document.getElementById("D").getElementsByTagName('div'); 
	var vE=document.getElementById("E").getElementsByTagName('div'); 
	var vF=document.getElementById("F").getElementsByTagName('div');
	var vG=document.getElementById("G").getElementsByTagName('div');
	var p=document.getElementById("score-text").innerHTML;
	
	var puntos=parseInt(p);
	var fila=[];

	for (var i = 0 ; i<7; i++) {
		fila[i]= new Array(vA[i].firstChild,vB[i].firstChild,vC[i].firstChild,vD[i].firstChild,vE[i].firstChild,vF[i].firstChild,vG[i].firstChild);
	}
	
	

	//recorres matris
	for(var i=0;i<5;i++){
		for(var j=0;j<5;j++){
			var j2=j+1;
			var j3=j2+1;
			var Aux1=fila[i][j].className;
			var Aux2=fila[i][j2].className;
			var Aux3=fila[i][j3].className;
			//alert(Aux1+" "+Aux2+" "+Aux3);
			if(Aux1.valueOf()==Aux2.valueOf()){
				if (Aux2.valueOf()==Aux3.valueOf()) {
					fila[i][j].setAttribute("style", "animation: tras 700ms;animation-duration: 1s; animation-iteration-count: infinite;");
					fila[i][j2].setAttribute("style", "animation: tras 700ms;animation-duration: 1s; animation-iteration-count: infinite;");
					fila[i][j3].setAttribute("style", "animation: tras 700ms;animation-duration: 1s; animation-iteration-count: infinite;");
					
					var elemtosEliminar=[];
					elemtosEliminar[0]=fila[i][j].parentNode;
					elemtosEliminar[1]=fila[i][j2].parentNode;
					elemtosEliminar[2]=fila[i][j3].parentNode;
					return elemtosEliminar;

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
				}
			}
		}
	}	
}










//funcion para eleminar nodos marcados 3 en linea




function elemininar(columnas,filas){
	var a='';


	var vectorEliminar=[];
	//cargo vector 
	if(columnas!=null){
		for (var i=0;i<columnas.length;i++) {
			vectorEliminar.push(columnas[i]);
		}
	}
	//cargo vector 
	if(filas!=null){
		for (var i=0;i<filas.length;i++) {
			vectorEliminar.push(filas[i]);
		}
	}

	var v_e_filtrado=filtoDuplicado(vectorEliminar);

	//for para remover elementos
	if(v_e_filtrado!=null){
		for(var i=0; i<v_e_filtrado.length;i++){
			var elemAux=v_e_filtrado[i].firstChild;
		 	v_e_filtrado[i].removeChild(elemAux);
		}
	}
	
}


//// filtro para elemimniar objetos duplocas en vector
function filtoDuplicado(un_vector) {
	var aux1;
	var aux2;
	var vectorFiltrado=[];
	

    for(var i = 0; i < un_vector.length; i++) {
    	if(!vectorFiltrado.includes(un_vector[i])) {
       		vectorFiltrado.push(un_vector[i]);
    	}
    }
   	return vectorFiltrado;	
}
*/


/*function mover(){
	
	var num=movimietos;
	num--
	document.getElementById('movimientos-text').innerHTML=num;
	invocarSuprimir();
		
		desplasar_elementos();
		recargarr();


}*/







