var vectorColumnas=[
					document.getElementById("A").id,
					document.getElementById("B").id,
					document.getElementById("C").id,
					document.getElementById("D").id,
					document.getElementById("E").id,
					document.getElementById("F").id,
					document.getElementById("G").id,
					];



// Creo los div que van a contener las imagenes.

function CrearNodos(){

	var elemColumna;
	var elemPadre;
	var elemHijo;

	for (var ide = 0 ; ide<vectorColumnas.length; ide++) {
			elemPadre=document.getElementById(vectorColumnas[ide]);

		for(var i=0;i<7;i++){
			elemHijo=document.createElement("div");
      elemHijo.setAttribute("id", elemPadre.id+i);
			elemHijo.setAttribute("class", "dropp");
      elemHijo.setAttribute("style", "text-align:center;height: 14.28%; width: 90%;");
			elemPadre.appendChild(elemHijo);
			//array.push(elemHijo); //
			candys(elemHijo);
		}
	}

}
// creo los span y las imagenes de forma aleatoria
function candys (elemento) {
	var nuevo_img;
	var nuevo_ele;
	var imagen=0;

	//var vectorElementos=[];
	//vectorElementos=elemento;

	//for(var i=0;i<vectorElementos.length;i++){
		var elemPadre=elemento;

			imagen= Math.floor(Math.random()*4); // IMagen aleatorias

			//creando elemto Span
			nuevo_ele=document.createElement("span");
			elemPadre.appendChild(nuevo_ele);

			// creamos elemento img.
			nuevo_img=document.createElement("img");

			nuevo_ele.setAttribute("class", "I"+imagen+"  dragg");
						nuevo_img.setAttribute("src", "image/"+imagen+".png");
			nuevo_img.style.width = '80%';
			nuevo_ele.appendChild(nuevo_img);
	//}
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
	}
	AnimarElemento();
}







/*
funcion de recargar los nodos, en las psiciones vacias
mediante un for recoremos la matriz agregando elementos en las posicioens vacias.

*/

function AgregarCandy () {

	for(var i=0;i<vectorColumnas.length;i++){
		var elemento=document.getElementById(vectorColumnas[i]);
		for(var j=0;j<7;j++){
			var mi_div=elemento.getElementsByTagName("div")[j];
			var aa=mi_div.innerHTML;
			if(aa.valueOf()==""){ // evaluo si el elemento esta vacio

				candys(mi_div);
			}
		}
	}
	//GenerarMatris();

}



function TranspasarCandys() {

	for(var i=0;i<vectorColumnas.length;i++){
		var elemento=document.getElementById(vectorColumnas[i]);
		for(var j=0;j<7;j++){

			var div=elemento.getElementsByTagName("div")[j];
			if(j>0){
				var nombre=div.innerHTML;
				if(nombre.valueOf()==""){
					 var a=j-1;
				 	 var divAux=elemento.getElementsByTagName("div")[a];
					 var a=divAux.innerHTML;
					 if(a.valueOf()!=""){
					 		var chilDpasaR=divAux.firstChild;
					 		divAux.removeChild(chilDpasaR);
					 		div.appendChild(chilDpasaR);
					 			j=0// fuerzo al for a recorerse nuevamente cuando mueve un lemento;
					}

				}
			}
		}
	}
AgregarCandy ();

}
