
var matris_candys=[];// contiene todos los elementos dulces.
var fila=[];
var puntos=0;

function GenerarMatris() {

	var p=document.getElementById("score-text").innerHTML;
	for (var i = 0 ; i<7; i++) {
		matris_candys[i]= new Array(document.getElementById("A").getElementsByTagName('div')[i],document.getElementById("B").getElementsByTagName('div')[i],document.getElementById("C").getElementsByTagName('div')[i],document.getElementById("D").getElementsByTagName('div')[i],document.getElementById("E").getElementsByTagName('div')[i],document.getElementById("F").getElementsByTagName('div')[i],document.getElementById("G").getElementsByTagName('div')[i]);
	}
	fila=matris_candys;

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
			var e0,e1,e2;
			var en0,en1,en2;
			// descompongo el vector
			e0=vector[0];e1=vector[1];e2=vector[2];e3=vector[3];e4=vector[4];e5=vector[5];e6=vector[6];
			// Asigno el nombre de clase de un elemnto a variables para evaluar sus pociciones consecutivas.
			en0=e0.className; en1=e1.className; en2=e2.className; en3=e3.className; en4=e4.className;	en5=e5.className; en6=e6.className;
			// casos de coincidencias

			if(en0.valueOf()==en1.valueOf() && en1.valueOf()==en2.valueOf() ){
						puntuacion(en0); var vector3=[e0,e1,e2];	mark(vector3);

			}
			if(en0.valueOf()==en1.valueOf() && en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf() ){
						puntuacion(en0);	var vector4=[e0,e1,e2,e3];						mark(vector4);
			}
			if(en0.valueOf()==en1.valueOf() && en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf()){
						puntuacion(en0);		var vector5=[e0,e1,e2,e3,e4];			mark(vector5);

			}
			if(en0.valueOf()==en1.valueOf() && en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf()){
						puntuacion(en0);var vector6=[e0,e1,e2,e3,e4,e5];mark(vector6);

			}
			if(en0.valueOf()==en1.valueOf() && en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf() && en5.valueOf()==en6.valueOf()){
						puntuacion(en0);var vector7=[e0,e1,e2,e3,e4,e5,e6];mark(vector7);

			}
			if(en1.valueOf() && en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf() && en5.valueOf()==en6.valueOf()){
						puntuacion(en1);var vector6a=[e1,e2,e3,e4,e5,e6];mark(vector6a);

			}
			if( en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf() && en5.valueOf()==en6.valueOf()){
						puntuacion(en2);var vector5a=[e2,e3,e4,e5,e6];mark(vector5a);

			}
			if(en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf() && en5.valueOf()==en6.valueOf()){
						puntuacion(en3);var vector4a=[e3,e4,e5,e6];mark(vector4a);
			}
			if(en4.valueOf()==en5.valueOf() && en5.valueOf()==en6.valueOf()){
						puntuacion(en4);	var vector3a=[e4,e5,e6];mark(vector3a);

			}
			if(en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf()){
						puntuacion(en1);	var vector5es=[e1,e2,e3,e4,e5];	mark(vector5es);

			}
			if(en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf()){
					 	puntuacion(en2);var vector3es=[e2,e3,e4];		mark(vector3es);

			}
			if(en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf()){
					 puntuacion(en2);	var vector3esa=[e1,e2,e3];	mark(vector3esa);

			}
			if(en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf()){
						puntuacion(en3);	var vector3esb=[e3,e4,e5];	mark(vector3esb);

			}



		/*for(var i=0;i<5;i++){
			var a=i+1;
			var b=a+1;
			var aux1=vector[i].className;
			var aux2=vector[a].className;
			var aux3=vector[b].className;
			if(aux1.valueOf()== aux2.valueOf()  && aux2.valueOf()== aux3.valueOf() ){
				var vec=[vector[i],vector[a],vector[b]];
				puntuacion(aux1);
				mark(vec);
			}

		}*/



}



// se aumenta la puntuacion por los tipode dulses.

function puntuacion(expre) {

	var newexpre="";
	if(expre.indexOf("I0")){newexpre="I0";}
	if(expre.indexOf("11")){newexpre="I1";}
	if(expre.indexOf("I2")){newexpre="I2";}
	if(expre.indexOf("I3")){newexpre="I3";}

	switch (newexpre) {
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



/*	// declaracion de variables
		var e0,e1,e2;
		var en0,en1,en2;
		// descompongo el vector
		e0=vector[0];e1=vector[1];e2=vector[2];e3=vector[3];e4=vector[4];e5=vector[5];e6=vector[6];
		// Asigno el nombre de clase de un elemnto a variables para evaluar sus pociciones consecutivas.
		en0=e0.className; en1=e1.className; en2=e2.className; en3=e3.className; en4=e4.className;	en5=e5.className; en6=e6.className;
		// casos de coincidencias

		if(en0.valueOf()==en1.valueOf() && en1.valueOf()==en2.valueOf() ){
					puntuacion(en0); var vector3=[e0,e1,e2];	mark(vector3);

		}
		if(en0.valueOf()==en1.valueOf() && en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf() ){
					puntuacion(en0);	var vector4=[e0,e1,e2,e3];						mark(vector4);
		}
		if(en0.valueOf()==en1.valueOf() && en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf()){
					puntuacion(en0);		var vector5=[e0,e1,e2,e3,e4];			mark(vector5);

		}
		if(en0.valueOf()==en1.valueOf() && en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf()){
					puntuacion(en0);var vector6=[e0,e1,e2,e3,e4,e5];mark(vector6);

		}
		if(en0.valueOf()==en1.valueOf() && en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf() && en5.valueOf()==en6.valueOf()){
					puntuacion(en0);var vector7=[e0,e1,e2,e3,e4,e5,e6];mark(vector7);

		}
		if(en1.valueOf() && en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf() && en5.valueOf()==en6.valueOf()){
					puntuacion(en1);var vector6a=[e1,e2,e3,e4,e5,e6];mark(vector6a);

		}
		if( en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf() && en5.valueOf()==en6.valueOf()){
					puntuacion(en2);var vector5a=[e2,e3,e4,e5,e6];mark(vector5a);

		}
		if(en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf() && en5.valueOf()==en6.valueOf()){
					puntuacion(en3);var vector4a=[e3,e4,e5,e6];mark(vector4a);
		}
		if(en4.valueOf()==en5.valueOf() && en5.valueOf()==en6.valueOf()){
					puntuacion(en4);	var vector3a=[e4,e5,e6];mark(vector3a);

		}
		if(en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf()){
					puntuacion(en1);	var vector5es=[e1,e2,e3,e4,e5];	mark(vector5es);

		}
		if(en2.valueOf()==en3.valueOf() && en3.valueOf()==en4.valueOf()){
				 	puntuacion(en2);var vector3es=[e2,e3,e4];		mark(vector3es);

		}
		if(en1.valueOf()==en2.valueOf() && en2.valueOf()==en3.valueOf()){
				 puntuacion(en2);	var vector3esa=[e1,e2,e3];	mark(vector3esa);

		}
		if(en3.valueOf()==en4.valueOf() && en4.valueOf()==en5.valueOf()){
					puntuacion(en3);	var vector3esb=[e3,e4,e5];	mark(vector3esb);

		}*/
