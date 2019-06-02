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

	var boton=document.getElementById("ini").innerHTML;
	if(boton.valueOf()=="Iniciar"){

		change(); // cambiomos el tecto del boton para la funcion de reinicio
		timer (); // inicia el time out
		crear_nodos(); // carga la matris con la imagenes
		generar_matris ();
		enLineaFilas();
		enLineaColumnas();
		//setTimeout("elementosENlineas() ",1100);
		console.log("llama");

		setTimeout("ordenar() ",1100);


	}else{
		document.location.reload();
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
	Funcion para buscar elementos en linea
 */
 function enLineaFilas(){

 			for (var i = 0; i < 7; i++) {
 				var vectorFilas=[];
 				for (var j = 0; j <7; j++) {
 						vectorFilas.push(fila[i][j].firstChild);
 				}
 				buscarCoincidencias(vectorFilas);
 			}
 }
 function enLineaColumnas(){

 			for (var i = 0; i < 7; i++) {
 				var vectorFilas=[];
 				for (var j = 0; j <7; j++) {
 						vectorFilas.push(fila[j][i].firstChild);
 				}
 				buscarCoincidencias(vectorFilas);
 			}
 }

/*
descompongo el vector en variables para poder determinar los jugadas comunes y
 especiales por ejemplo 111 000 2 en la misma fila,

*/
function buscarCoincidencias(vector){
	// declaracion de variables
		var e0,e1,e2,e3,e4,e5,e6;
		var en0,en1,en2,en3,en4,en5,en6;
		// descompongo el vector
		e0=vector[0];e1=vector[1];e2=vector[2];e3=vector[3];e4=vector[4];e5=vector[5];e6=vector[6];
		// Asigno el nombre de clase de un elemnto a variables para evaluar sus pociciones consecutivas.
		en0=e0.className; en1=e1.className; en2=e2.className; en3=e3.className; en4=e4.className;	en5=e5.className; en6=e6.className;
		// casos de coincidencias

		if(en0.valueOf()==en1.valueOf() && en1.valueOf()==en2.valueOf() ){
				console.log("condicon1");
				puntuacion(en0);
				var vector3=[e0,e1,e2];
				mark(vector3);

		}
		if(en0.valueOf()==en1.valueOf() && en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf() ){
						console.log("condicon2");
						puntuacion(en0);
						var vector4=[e0,e1,e2,e3];
						mark(vector4);
		}
		if(en0.valueOf()==en1.valueOf() && en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf()){

								console.log("condicon3");
								puntuacion(en0);
								var vector5=[e0,e1,e2,e3,e4];
								mark(vector5);

		}
		if(en0.valueOf()==en1.valueOf() && en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf()){
								console.log("condicon4");
								puntuacion(en0);
								var vector6=[e0,e1,e2,e3,e4,e5];
								mark(vector6);

		}
		if(en0.valueOf()==en1.valueOf() && en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf() && en5.valueOf()==en6.valueOf()){
								console.log("condicon5");
								puntuacion(en0);
								var vector7=[e0,e1,e2,e3,e4,e5,e6];
								mark(vector7);

		}
		if(en1.valueOf() && en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf() && en5.valueOf()==en6.valueOf()){
							console.log("condicon6");
							puntuacion(en0);
							var vector6a=[e1,e2,e3,e4,e5,e6];
							mark(vector6a);

		}
		if( en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf() && en5.valueOf()==en6.valueOf()){
						console.log("condicon7");
						puntuacion(en0);
						var vector5a=[e2,e3,e4,e5,e6];
						mark(vector5a);

		}
		if(en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf() && en5.valueOf()==en6.valueOf()){

					console.log("condicon8");
					puntuacion(en0);
					var vector4a=[e3,e4,e5,e6];
					mark(vector4a);
		}
		if(en4.valueOf()==en5.valueOf() && en5.valueOf()==en6.valueOf()){
				console.log("condicon9");
				puntuacion(en0);
				var vector3a=[e4,e5,e6];
				mark(vector3a);

		}
		if(en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf()){

						console.log("condicon10");
						puntuacion(en0);
						var vector5es=[e1,e2,e3,e4,e5];
						mark(vector5es);

		}
		if(en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf()){

				console.log("condicon11");
				puntuacion(en0);
				var vector3es=[e2,e3,e4];
				mark(vector3es);

		}
		if(en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf()){

				console.log("condicon12");
				puntuacion(en0);
				var vector3esa=[e1,e2,e3];
				mark(vector3esa);

		}
		if(en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf()){

				console.log("condicon13");
				puntuacion(en0);
				var vector3esb=[e3,e4,e5];
				mark(vector3esb);

		}

}


/*
				funcion que recice un arrarr_indices,arr_auxay y genera una exprecion para los distintas cantidad de elementos en linea
*/
function mark(array){
	for (var i = 0; i < array.length; i++) {
		var elemento=array[i];
		if(elemento.innerHTML.indexOf("marca")==-1){
				elemento.setAttribute("class", "marca");
		}
		//Animar_marcados();
		elemento.setAttribute("style", "animation: tras 700ms;animation-duration: 1s; animation-iteration-count: infinite;");
	}
	eliminar();

}
// se aumenta la puntuacion por los tipode dulses.

function puntuacion(expre) {
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
	generar_matris();
}
