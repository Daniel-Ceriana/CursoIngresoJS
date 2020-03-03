function mostrar()
{

var letraIngresada;
var numeroIngresado;

var contadorNumerosPares = 0;
var contadorNumerosImpares = 0;
var contadorCeros;
var promedioPositivos;
var sumaNegativos;

var letraMaximo;
var letraMinimo;
var numeroMaximo;
var numeroMinimo;

var continuar =true;

while(continuar){ // verifica si el usuario quiere continuar

    letraIngresada = prompt("Ingrese una letra"); //.lenght
    while(!isNaN(letraIngresada)){
        letraIngresada = prompt("Ingrese una letra válida");
    }
    numeroIngresado = prompt("Ingrese un número del -100 al 100");
    numeroIngresado = parseInt(numeroIngresado);

    //confirma que el ingresado sea un numero valido
    while(isNaN(numeroIngresado)||numeroIngresado < -100 || numeroIngresado > 100){
        numeroIngresado = prompt("Ingrese un número válido desde el -100 al 100");
        numeroIngresado = parseInt(numeroIngresado);
    }


    if(numeroIngresado == 0){
        // a) numeros pares
        if (numeroIngresado % 2 == 0){
            contadorNumerosPares +=1
        }else if (numeroIngresado  != 0){
                contadorNumerosImpares += 1
            }

    }
    continuar = confirm("Desea continuar?");

}





}
