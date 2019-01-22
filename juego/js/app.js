

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

// Funcion de asignacion aleatoari para cargar imagenes, Usando Mat

function RUN() {
	

	
	botonInicioRinicio();
	crear_nodos();
	timer ();

	
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
			nuevo_img.setAttribute("src", "image/"+imagen+".png");
			//nuevo_img.setAttribute("style","position: absolute");
			nuevo_img.style.width = '80%';
			nuevo_ele.appendChild(nuevo_img);
				
			
			
			 
		}

		
		
	}

}

//// Funcion de cambiar texto del boton
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
	
