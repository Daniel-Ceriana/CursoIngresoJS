function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero= 0;
	var bandera= 0;
	

	while (numero != null){
	
		numero =prompt("Ingrese un número, cancelar para cerrar");
		
		if(isNaN(numero)){
			alert("Error");
			continue;
		}

		if (numero== null){
			break;
		}

		//console.log(numero);
		numero= parseInt(numero);
		//console.log(numero);
		acumulador += numero;
		contador++;
		bandera+=1
	}

	if (bandera!= 0){
		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=acumulador/contador;

	}
		

		

//se puede usar confirm()
}//FIN DE LA FUNCIÓN