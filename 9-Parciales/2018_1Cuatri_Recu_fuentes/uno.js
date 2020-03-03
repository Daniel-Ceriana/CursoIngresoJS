
function mostrar()
{
var nombre;
var edad;
var sexo;//("f" o "m")
var pasaje;//("urbano", "nacional" o "internacional")
var continuar = true;    

//variables para ejercicio A)
var nombreMenor;
var menorEdad;
var pasajeJoven;
//Variables para ejercicio B)
var sexoViejo;
var mayorEdad;
var pasajeViejo;

var primeraVez= true;
//Contador ejercicio C)
var contadorMujeresNacionalOUrbano = 0;

var sumaEdadMujeres = 0;
var promedioEdadMujeres = 0;
var contadorMujeres = 0;

var contadorHombres = 0;
var sumaEdadHombres = 0;
var promedioEdadHombres = 0;

while(continuar){

    do{
        nombre= prompt("Ingrese un nombre");
    }while(!isNaN(nombre));

    do{
        edad= prompt("Ingrese una edad válida");
        edad= parseInt(edad);
    }while(edad<18);

    while(isNaN(edad)){
        edad= prompt("Ingrese una edad válida");
        edad = parseInt(edad);
    }

    do{
        sexo= prompt("Ingrese f o m para femenino o masculino");
        sexo= sexo.toLowerCase();
    }while(sexo != "f" && sexo != "m");

    do {
        pasaje= prompt("Ingrese un pasaje válido(Urbano, Nacional o internacional)");
        pasaje= pasaje.toLowerCase();
    }while(pasaje!= "urbano"&& pasaje != "nacional" && pasaje != "internacional");
    
    





    if(primeraVez){
        //Datos para ejercicio A
        nombreMenor = nombre;
        menorEdad = edad;
        pasajeJoven = pasaje;
        //Datos para ejercicio B
        sexoViejo = sexo;
        pasajeViejo = pasaje;
    }else{
            //Ejercicio A, cambio de variables
        if(edad<=menorEdad && pasaje == "nacional" && sexo =="m"){
            nombreMenor = nombre;
            menorEdad = edad;
            pasajeJoven = pasaje;
        }else{
            if(edad >= mayorEdad){
                mayorEdad = edad;
                sexoViejo = sexo;
                pasajeViejo = pasaje;
            }
        }
    }   
    //Ejercicio C, contador
    if (sexo== "f" && (pasaje== "urbano" || pasaje == "nacional"))  {
        contadorMujeresNacionalOUrbano += 1
    }

    //Ejercicio D, sin sacar promedio
    if(sexo == "f"){
        contadorMujeres += 1;
        sumaEdadMujeres += edad;
    }
    
    

    if (sexo =="m" && pasaje == "internacional"){
        contadorHombres += 1;
        sumaEdadHombres += edad;
    }


continuar = confirm("Desea continuar?");
}



//Ejercicio A
console.log("El nombre del pasajero más joven con pasaje nacional es: " + nombreMenor);

//Ejercicio B
console.log("El sexo del pasajero más viejo es: " +sexoViejo + " Su pasaje es: "+ pasajeViejo);


//Ejercicio C
console.log("La cantidad de mujeres con pasaje nacional o urbano es de: "+contadorMujeresNacionalOUrbano);



//Ejercicio D, promedio
if (contadorMujeres != 0){
    promedioEdadMujeres = sumaEdadMujeres/ contadorMujeres;
    console.log("El promedio de la edad de las mujeres es: " + promedioEdadMujeres);
} else{
    console.log("No se ingresaron mujeres");
}


//Ejercicio E, promedio

if(contadorHombres != 0){
    promedioEdadHombres = sumaEdadHombres / contadorHombres;
    console.log("El promedio de la edad de los hombres con pasaje internacional es: " + promedioEdadHombres);
}else{
    console.log("No se ingresaron hombres");
}


}
