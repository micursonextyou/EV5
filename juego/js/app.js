

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


/*     Funciones     */

// Funcion de asignacion aleatoari para cargar imagenes, Usando Mat

function generador_imagen_alaeatoria() {
	

	crear_nodos();

	
}



/* esta funcion crea todos los nodos de la matriz 
y los asigna por colunas, para moder recargar la
 matriz por por cada celda que falte en una acoluna */

function crear_nodos(){
	var  nuevoid='';
	var nuevaClase=''; 
	var elemPadre;
	var a='';
	var columna;
	var imagen=0;
	var nuevo_div_1;
	var nuevo_div_2;
	for (var ide = 0 ; ide<vectorColumnas.length; ide++) {
			elemPadre=document.getElementById(vectorColumnas[ide]);
			

		for(var i=0;i<7;i++){

			imagen= Math.floor(Math.random()*4);

			nuevaClase="indice";//+imagen;
			nuevoid=elemPadre.id+i;

			/*creando primer nodo*/
			

			/*agregamos dinamicamente contenido css*/
			


			/*creando 2ª nodo*/
			nuevo_div_2=document.createElement("div");
			nuevo_div_2.setAttribute("id",nuevoid);
			nuevo_div_2.setAttribute("class",nuevaClase);
			elemPadre.appendChild(nuevo_div_2);

			
			//

			/* creando 3ª nodo
			  	y agregamos imagens de forma aleatoria;
			*/
			var nuevo_img=document.createElement("img");
			nuevo_img.setAttribute("src", "image/"+imagen+".png");
			nuevo_img.style.width = '80%';
			nuevo_div_2.appendChild(nuevo_img);		
				
			
			
			 
		}

		break;
		
	}

}

