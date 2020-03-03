function mostrar()
{
    var notaIngresada;
    var sumaNotasIngresadas = 0;
    var promedio;
    var sexo;
    var sexoNotaBaja;
    var notaMasBaja = 10;
    var varonesSeisOMas = 0;
    var contadorPersonas= 0;

    //Limite de 5 personas
    for(contadorPersonas;contadorPersonas<5;contadorPersonas++){
        notaIngresada = prompt("Ingrese la nota");
        notaIngresada= parseInt(notaIngresada);
        //Validar Numero
        while(isNaN(notaIngresada) || notaIngresada <0 || notaIngresada> 10){
            notaIngresada=  prompt("Intente ingresando un número del 0 al 10");
            notaIngresada= parseInt(notaIngresada);
        }
        //La suma de las notas para hacer el promedio
        sumaNotasIngresadas+= notaIngresada;

        //validad sexo
        while (sexo != "f" && sexo!="m"){
            sexo= prompt("Ingrese el sexo de la persona(f o m)");
            sexo= sexo.toLowerCase(); 

            if (sexo == "m" && notaIngresada >= 6){
                varonesSeisOMas += 1
            }


            //corregir nota más baja
            if(notaIngresada<= notaMasBaja){
                notaMasBaja= notaIngresada;
                sexoNotaBaja = sexo;
                sexo = 0;
                break;
            }
            sexo= 0;
            break;
        }
    console.log(contadorPersonas);
    }
  
    // A) promedio
    promedio= sumaNotasIngresadas / contadorPersonas;
    alert("El promedio es de: " + promedio );

    // B) Nota más baja y sexo
    console.log(sexoNotaBaja);
    switch(sexoNotaBaja){
        case "f":
            alert("La nota más baja es: " + notaMasBaja + " Y la obtuvo una mujer");
            break;
        case "m":
            alert("La nota más baja es: " + notaMasBaja + " Y la obtuvo un hombre");
            break;
    }
    
    // C) Varones con nota mayor o igual a 6
   alert("La cantidad de varones con nota mayor o igual a 6 es: " + varonesSeisOMas);
}
