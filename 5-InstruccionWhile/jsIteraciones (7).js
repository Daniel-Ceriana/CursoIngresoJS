function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	
	
	

	respuesta= NaN;
		while(isNaN(respuesta)){
			respuesta = prompt("Ingrese un numero");
			console.log(respuesta);
			contador++
			if (contador ==3){
				break;	
			}

		}



		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=acumulador/contador;


}//FIN DE LA FUNCIÓN