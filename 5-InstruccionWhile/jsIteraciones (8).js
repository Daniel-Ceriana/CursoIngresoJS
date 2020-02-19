function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numeroIngresado = 0;
	var respuesta='si';

	
	while (numeroIngresado!=null){
		numeroIngresado= prompt("Ingrese un número, cancelar para ver resultados");
		
		if (numeroIngresado== null){
			continue;
		}

		if (isNaN(numeroIngresado)){
			alert("Error");
			contador++;
			if (contador== 3){
				
				break;
			}
			continue;
		}


			numeroIngresado= parseInt(numeroIngresado);
		if (numeroIngresado<0){
			negativo *= numeroIngresado;
		}else if (numeroIngresado>0){
				positivo += numeroIngresado;
			}	

	}	

if (contador>= 3){
	alert("Muchos errores");
}else{
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}


}//FIN DE LA FUNCIÓN