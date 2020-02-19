function mostrar()
{

	var sumaNegativos=0;
	var sumaPositivos=0;

	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCero = 0;
	var contador=0;
	var contadorPares = 0;
	var contadorImpares = 0;
	//declarar contadores y variables 
	
	var respuesta=true;
	var numeroIngresado;

	var promedioPositivos = 0;
	var promedioNegativos = 0;

	var diferencia;

while(respuesta = true){

	numeroIngresado= prompt("Ingrese un número");
		if(isNaN(numeroIngresado)){
			alert("Ingrese un número válido");
			break;
		}	

		numeroIngresado= parseInt(numeroIngresado);

		

		if (numeroIngresado > 0 ){// positivos
			// punto 2 
			sumaPositivos += numeroIngresado;
			// punto 3
			contadorPositivos++; 
		}else if (numeroIngresado<0){ // negativos
			// Punto 1
			sumaNegativos+=numeroIngresado; 
			// punto 4
			contadorNegativos++; 
		}else{//numero 0 
		// punto 5
		contadorCero++;
		}

		if(numeroIngresado %2 == 0){
			//punto 6
			contadorPares++;
		}


		respuesta= confirm("Desea continuar ingresando números?");
		console.log(respuesta);
		if (respuesta == "false"){
			break;
		}

}//fin while

//punto 7
promedioPositivos = sumaPositivos / contadorPositivos ;

//punto 8 
promedioNegativos = sumaNegativos / contadorNegativos;

//punto 9 
diferencia = sumaPositivos - sumaNegativos;


document.write("La suma de negativos da: " + sumaNegativos + "<br>");
document.write("La suma de positivos da: "+ sumaPositivos + "<br>");
document.write("La cantidad de números positivos es: " + contadorPositivos + "<br>");
document.write("La cantidad de números negativos es: " + contadorNegativos + "<br>");
document.write("La cantidad de ceros es: " + contadorCero + "<br>");
document.write("La cantidad de números pares es: " + contadorPares + "<br>");
document.write("El promedio de los positivos es: " + promedioPositivos + "<br>");
document.write("El promedio de los negativos es: " + promedioNegativos + "<br>");
document.write("La diferencia entre positivos y negativos es: " + diferencia + "<br>");

}




//FIN DE LA FUNCIÓN