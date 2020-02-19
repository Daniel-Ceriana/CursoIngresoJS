function mostrar()
{

	var contador=0;
	// declarar variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta="si";
	var bandera= false;

	while(respuesta!="no")
	{
		
		numeroIngresado= prompt("Ingrese un número");
		
		if(isNaN(numeroIngresado)){
			alert("El número no es válido, vuelva a intentarlo");
			continue;
		}
		numeroIngresado= parseInt(numeroIngresado);

		


		if (bandera==false){
			numeroMinimo = numeroIngresado;
			numeroMaximo = numeroIngresado;
			bandera = true;
		}

		if (numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;
		}else{
		 	if(numeroIngresado<numeroMinimo){
				numeroMinimo = numeroIngresado;
			}
		}
		respuesta= prompt("Desea continuar?");
		respuesta= respuesta.toLowerCase();

		if (respuesta== "no"){
			break;
		}

	}

	document.getElementById("maximo").value=numeroMaximo;
	document.getElementById("minimo").value=numeroMinimo;


}//FIN DE LA FUNCIÓN