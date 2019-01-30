// variables
var matris_candys=[];// contiene todos los elementos dulces.
var fila=[]



/*
	 esta funcion gener un matris de elemento existentea.

*/
function generar_matris () {
	var vA=document.getElementById("A").getElementsByTagName('div');
	var vB=document.getElementById("B").getElementsByTagName('div');
	var vC=document.getElementById("C").getElementsByTagName('div');
	var vD=document.getElementById("D").getElementsByTagName('div'); 
	var vE=document.getElementById("E").getElementsByTagName('div'); 
	var vF=document.getElementById("F").getElementsByTagName('div');
	var vG=document.getElementById("G").getElementsByTagName('div');
	var p=document.getElementById("score-text").innerHTML;
	for (var i = 0 ; i<7; i++) {
		matris_candys[i]= new Array(vA[i].firstChild,vB[i].firstChild,vC[i].firstChild,vD[i].firstChild,vE[i].firstChild,vF[i].firstChild,vG[i].firstChild);
	}
	fila=matris_candys;

}

/* 
	esta funcion recorre la matriz for filas y luego por columas 
	si enecuentra elentos span de la misma clase consecutivos le agrega una clase "marca"
 */
function marcar_elementos() {
	// recorremos  filas buscando coicidencias.
	//var caso='';
	for(var i=0;i<5;i++){
		for(var j=0;j<5;j++){
			//var j2=j+1;
			//var j3=j2+1;
			var Aux1=fila[i][j].className;
			var Aux2=fila[i][j+1].className;
			var Aux3=fila[i][j+2].className;
			
			if(Aux1.valueOf()==Aux2.valueOf()){
				if (Aux2.valueOf()==Aux3.valueOf()) {
					mark(fila[i][j],fila[i][j+1],fila[i][j+2]);
					puntiacion (Aux1);					
				}
			}
		}
	}

	// buscamos coinsidencia por columnas.
	for(var i=0;i<5;i++){
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
	}



}
/*funcion que recibe elemento coincidente para marcar*/
function mark (elem, elem2, elem3) {
	var Aux1=elem.className;
	var Aux2=elem2.className;
	var Aux3=elem3.className;
	 if(Aux1.valueOf()==="marca"){
	 	elem.setAttribute("style", "animation: tras 700ms;animation-duration: 1s; animation-iteration-count: infinite;");
		elem.setAttribute("class", "marca");
	 }
	 if(Aux2.valueOf()==="marca"){
	 	elem2.setAttribute("style", "animation: tras 700ms;animation-duration: 1s; animation-iteration-count: infinite;");
		elem2.setAttribute("class", "marca");
	 }
	 if(Aux3.valueOf()==="marca"){
	 	elem3.setAttribute("style", "animation: tras 700ms;animation-duration: 1s; animation-iteration-count: infinite;");
		elem3.setAttribute("class", "marca");
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


function ordenarmatriz () {
	for(var i=0;i<5;i++){
		for(var j=0;j<5;j++){
			
			var Aux1=fila[i][j].className;
			var a=Aux1.innerHTML;
			if(i>0){// ignoro la segunda la posisicon 0
				if(a.valueOf()==""){ // evaluo si el elemento esta vacio
						var b=i-1;
						//busco un elemento de la posisio anterior;
						var elemtoAnterior=fila[b][j];
						var aux1=elemtoAnterior.innerHTML;
						if(aux1.valueOf()!=""){ // evaluo si el elemento esta vacio
							var child=elemtoAnterior.firstChild;
							elemtoAnterior.removeChild(child);
							Aux1.appendChild(child);
							i=0;// fuerzo al for a recorerse nuevamente cuando mueve un lemento;
						}
						
				}	
			}		

		}
	}

	
}










	 
