function mostrar()
{

var letraIngresada;
var numeroIngresado;

var contadorNumerosPares = 0;
var contadorNumerosImpares = 0;
var contadorCeros = 0;
var contadorPositivos = 0;
var numerosPositivos = 0;
var numerosNegativos = 0;
var promedioPositivos;
//var sumaNegativos = 0;

var primeraVez = true;
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

    //C) contador ceros 
    if (numeroIngresado == 0){ 
        contadorCeros +=1;
    }else{
        // a) numeros pares
        if (numeroIngresado % 2 == 0){
            contadorNumerosPares +=1
        }else if (numeroIngresado  != 0){ // B) contador impares
                contadorNumerosImpares += 1
            }
    }
    
    //D) Contador de positivos para despues sacar promedio
    if (numeroIngresado > 0){
        contadorPositivos += 1;
        numerosPositivos += numeroIngresado;
    } else{
        //E) Suma de numeros negativos
        numerosNegativos += numeroIngresado;
    }


    if(primeraVez){ //bandera para que todos tengan un valor inicial
        numeroMaximo = numeroIngresado;
        numeroMinimo = numeroIngresado;
        letraMaximo = letraIngresada;
        letraMinimo = letraIngresada;
        primeraVez = false;
    }else if(numeroMaximo <= numeroIngresado){ //Indica la letra del valor maximo
        numeroMaximo = numeroIngresado;
        letraMaximo = letraIngresada;
    }else if(numeroMinimo >= numeroIngresado){//indica la letra del valor minimo
        numeroMinimo = numeroIngresado;
        letraMinimo = letraIngresada;
    }



   
    continuar = confirm("Desea continuar?");

}









document.write("La cantidad de números pares es: " + contadorNumerosPares + "<br>");//Ejercicio A
document.write("La cantidad de números impares es: " + contadorNumerosImpares + "<br>");//Ejercicio B
document.write("La cantidad de ceros ingresados es:  " + contadorCeros + "<br>");//Ejercicio C
//D) Promedio de numeros positivos
if (contadorPositivos == 0){
    document.write("No se ingresaron números positivos");
}else{
    promedioPositivos = numerosPositivos / contadorPositivos;
    document.write("El promedio de los números positivos ingresados es: " + promedioPositivos+ "<br>");//Ejercicio D
}
document.write("La suma de los números negativos da: " + numerosNegativos + "<br>");//Ejercicio E
document.write("El número y letra del máximo son: (" + letraMaximo +", " +  numeroMaximo +")" + "<br>");//Ejercicio F
document.write("El número y letra del minimoo son: (" + letraMinimo +", " +  numeroMinimo +")" + "<br>");


}
