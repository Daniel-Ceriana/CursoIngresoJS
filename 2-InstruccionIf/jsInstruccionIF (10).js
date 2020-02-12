function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota= Math.floor(Math.random()*10)+1;

	console.log(nota);
	
	if (nota>=9){
		alert("Excelente, su nota es de " +	 nota);		
	}else{
		if (nota<=4){
			alert("Vamos, para la próxima puede")
		}
		else{ 
			alert("Aprobó, su nota es de " + nota);			
		}
	}

}//FIN DE LA FUNCIÓN