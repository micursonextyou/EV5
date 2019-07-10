var mins = 2;
	var segs = mins*60;
	var transSec = 0;
	var currentMinutes = 0;
	var StopTime;

/*
	esta funcion inica una cuenta regresiva para el juego
*/

	function Timer () {	    setTimeout(Decrement,1000);    }


    /* funcion que esn invocada por taimer para hacer la cuenta regresiva se segundos */

    function Decrement() {

        currentMinutes = Math.floor(segs / 60);
        transSec = segs % 60;
        if(transSec <= 9) transSec = "0" + transSec;
        segs--;

        document.getElementById("timer").innerHTML ="0"+ currentMinutes + ":" + transSec;
        if(segs !== -1) {
					StopTime=setTimeout('Decrement()',1000); // detenemos timer
				}else{
					finJuego();
				}
    }
