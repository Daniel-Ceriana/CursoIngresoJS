/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numeroUno;
var numeroDos;
var operadorRandom;
var resultado;
function comenzar()
{

    numeroUno = Math.floor(Math.random()*10 + 1);
    numeroDos = Math.floor(Math.random() *10 + 1);
    operadorRandom = Math.floor(Math.random()*4 + 1); 
    /*
    1= Suma
    2= Resta
    3= Division
    4= Multiplicación
    */

    console.log(numeroUno,numeroDos,operadorRandom);

    document.getElementById("PrimerNumero").value= numeroUno;
    document.getElementById("SegundoNumero").value= numeroDos;

   
    switch(operadorRandom){
        case 1 : 
            document.getElementById("Operador").value= "+";
            resultado = numeroUno + numeroDos;
            break;
        case 2:
            document.getElementById("Operador").value= "-";
            resultado = numeroUno - numeroDos;
            break;
        case 3: 
            document.getElementById("Operador").value= "*";
            resultado = numeroUno * numeroDos;
            break;
        case 4:
            document.getElementById("Operador").value= "/";
            resultado = numeroUno / numeroDos;
            break;
    }

    resultado= parseInt(resultado);
    console.log(resultado);

}//FIN DE LA FUNCIÓN
function Responder()
{
    respuesta = document.getElementById("Respuesta").value;
    
	if(resultado == respuesta){
         alert("Correcto");
    }else{
        alert("Incorrecto");
    }

}//FIN DE LA FUNCIÓN
