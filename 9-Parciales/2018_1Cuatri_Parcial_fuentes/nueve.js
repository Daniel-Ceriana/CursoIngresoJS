/*
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.
*/



function mostrar()
{
var marca;
var peso;
var temperatura;

var continuar= true;
var primeraVez = true;

var marcaPesada;
var pesoMaximo;
var pesoMinimo;

var contadorTemperaturasPares = 0;
var contadorBajoCero = 0;
var contadorProductos = 0;

var sumaPeso = 0;
var promedioPeso = 0;

while(continuar){
    do{
    marca= prompt("Ingrese la marca del producto");
    }while(!isNaN(marca));

    do{
        peso = prompt("Ingrese un peso válido entre 1 y 100");
        peso = parseInt(peso);
    } while(isNaN(peso) || (peso < 1 || peso > 100));

    do{
        temperatura = prompt("Ingrese una temperatura válida entre -30 y 30");
        temperatura = parseInt(temperatura);
    } while(isNaN(temperatura) || (temperatura < -30 || temperatura > 30));

    //Ejercicio A)
    if(temperatura %2 == 0){ 
        contadorTemperaturasPares += 1;
    }

    if(primeraVez){
        marcaPesada = marca;
        pesoMaximo = peso;
        pesoMinimo = peso;
        primeraVez = false;
    }else if(peso >= pesoMaximo){ 
        pesoMaximo = peso; // Ejercicio B)
        marcaPesada = marca; // Ejercicio F)
    }else if(peso <= pesoMinimo){
        pesoMinimo = peso; // Ejercicio F)
    }

    if(temperatura < 0){
        contadorBajoCero +=1; // Ejercicio c)
    }
sumaPeso += peso;
contadorProductos += 1
continuar= confirm("Desea continuar?");
}

promedioPeso = sumaPeso / contadorProductos; // Ejercicio D)

//Creo que está terminado, la verdad no lo probé lo suficiente para verificarlo pero deberia funcionar
document.write("Cantidad de temperaturas pares: " + contadorTemperaturasPares + "<br>");//A)
document.write("La marca del producto más pesado es: " + marcaPesada + "<br>");//B)
document.write("Cantidad de productos conservados bajo cero: " + contadorBajoCero + "<br>");//C)
document.write("Promedio de peso de productos: " + promedioPeso + "<br>");//D)
document.write("El peso máximo es:  " + pesoMaximo+ ", y el mínimo:  " + pesoMinimo + "<br>");//F)

}
