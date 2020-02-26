/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

var numero;
var numerosPares = 0;
var numerosImpares = 0;
var UnoAlCien = 0;
var contadorDivisibles = 0;



function ComenzarIngreso(){
 numero= document.getElementById("numero").value;
    numero= parseInt(numero);
    if (numero <0|| isNaN(numero)){
        alert("Ingrese un número positivo");     
    }
     UnoAlCien = 0; 
     contadorDivisibles = 0; 
}
//Ejercicio A
function NumerosPares(){
   ComenzarIngreso();

    if(numero %2==0){
        numerosPares++;
    }else{
        numerosImpares++;
        }
     console.log("Numeros pares: "+ numerosPares);
}
//Ejercicio B
function NumerosImpares(){
   ComenzarIngreso()

    if(numero %2==0){
        numerosPares++;
    }else{
        numerosImpares++;
        }
           console.log("Numeros Impares:" + numerosImpares);
    }
//Ejercicio C
function NumerosDivisibles(){
    ComenzarIngreso()

    while(UnoAlCien!=100){
        if(UnoAlCien%numero == 0){
             console.log(UnoAlCien);
             contadorDivisibles++;
        }
        UnoAlCien++;
    }
    console.log("La cantiad de números que se pueden dividir por "+ numero + " es "+ contadorDivisibles);

}
//Ejercicio D
function VerificarPrimo(){
    ComenzarIngreso()

                    if(numero % 2== 0 && numero!= 2){
                    console.log("No es primo");
                }else{
                    if(numero % 3 == 0 && numero!=3){
                    console.log("No es primo");
                }else{
                    if(numero % 5== 0 && numero!=5){
                    console.log("No es primo");    
                }else{
                    if(numero % 7 == 0 && numero!=7){
                        console.log("No es primo");
                }else{
                    if(numero % 11== 0 && numero!=11){
                        console.log("No es primo");
                }else{
                        console.log("Es primo");
                    }
                }   
            }
        }
    }

//Ejecicio F
function NumerosPrimos()



}
