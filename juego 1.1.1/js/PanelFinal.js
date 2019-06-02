function GameOver(){
  var nuevopanel=document.createElement("div");//contenedor

  var panelleyendas=document.createElement("div");
  var panelpuntuaacion=document.createElement("div");
  var panel1=document.createElement("div");
  var panel2=document.createElement("div");


  var leyentapuntuacion=document.createElement("h2");
  var leyendamoviementos=document.createElement("h2");
  var leyendatotal=document.createElement("h2");

  var datopuntuacion=document.createElement("h2");
  var datomoviementos=document.createElement("h2");
  var datototal=document.createElement("h2");

  document.getElementById("tablero").setAttribute("style", "padding: 0.3em;")
  document.getElementById("tablero").appendChild(nuevopanel);

  nuevopanel.setAttribute("style", "width: 98%;");
  panelleyendas.setAttribute("style", "width: 59%;height:100%;display:inline-block;padding-top: 15%;");
  panelpuntuaacion.setAttribute("style", "width: 39%;height:100%; float:right;padding-top: 15%;");

  panel1.setAttribute("style", " width: 100%;height:100%;display:block;");
  leyentapuntuacion.setAttribute("class", "data-titulo");
  leyendamoviementos.setAttribute("class", "data-titulo");
  leyendatotal.setAttribute("class", "data-titulo");

  leyentapuntuacion.appendChild(document.createTextNode("Puntuacion"));
  leyendamoviementos.appendChild(document.createTextNode("Movimentos"));
  leyendatotal.appendChild(document.createTextNode("Total"));

  panel2.setAttribute("style", "width: 100%;height:100%;display:block;");
  datopuntuacion.setAttribute("class", "data-titulo");
  datopuntuacion.setAttribute("id", "puntuacion");
  datomoviementos.setAttribute("class", "data-titulo");
  datomoviementos.setAttribute("id", "moviementos");
  datototal.setAttribute("class", "data-titulo");
  datototal.setAttribute("id", "total");

  datopuntuacion.appendChild(document.createTextNode("0"));
  datomoviementos.appendChild(document.createTextNode("0"));
  datototal.appendChild(document.createTextNode("0"));



  nuevopanel.appendChild(panelleyendas);

  panel1.appendChild(leyentapuntuacion);
  panel1.appendChild(leyendamoviementos);
  panel1.appendChild(leyendatotal);
  panelleyendas.appendChild(panel1);

  nuevopanel.appendChild(panelpuntuaacion);

  panel2.appendChild(datopuntuacion);
  panel2.appendChild(datomoviementos);
  panel2.appendChild(datototal);
  panelpuntuaacion.appendChild(panel2);
  document.getElementById("ini").innerHTML = "Jugar";
  document.getElementById("ini").disabled = true;




}
var puntos=1000;//parseInt(document.getElementById('movimientos-text').innerHTML);
var a=0;b=0;
var moves=document.getElementById('movimientos-text').innerHTML;
var moves1=20;
var tot=0;
function Sumar(){
  a++;
  document.getElementById('puntuacion').innerHTML=a;
  puntos--;
  if(puntos !== 0) {
    setTimeout('Sumar()',0.01);
}else{
  setTimeout(PasarMovimentos,1000);
}

}

function PasarMovimentos(){
  b++;

  document.getElementById('moviementos').innerHTML=b;
  moves--;
  document.getElementById('movimientos-text').innerHTML=moves;
  if(moves !== 0) {
    setTimeout('PasarMovimentos()',2);
  }else{
    setTimeout(Total,1000);
  }


}
function Total(){
  var mov=document.getElementById('moviementos').innerHTML;
  var pun=document.getElementById('puntuacion').innerHTML;
   tot=pun*mov;
   document.getElementById("total").innerHTML=tot;
   setTimeout(NewGame,1000);


}

function NewGame(){
  document.getElementById("ini").disabled = false;
  alert("Puede Volver a Jugar");

}
