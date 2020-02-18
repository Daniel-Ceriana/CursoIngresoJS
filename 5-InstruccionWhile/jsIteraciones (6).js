function mostrar()
{

	var contador=0;
	var acumulador=0;
	var ingreso;
	

	while(contador <5){
		ingreso=prompt("Ingrese un número");
		ingreso= parseInt(ingreso);

		if (isNaN(numero)){
			alert("Error");
			continue;
		}

		contador++;
		acumulador+= ingreso;
	}
	/*

	while(contador<5){
		var numero= NaN

		while (isNaN(numero)){
			alert("Ingrese un numero");


		}
		contador++, etc

	}




	*/

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN