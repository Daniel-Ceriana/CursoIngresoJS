/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


var primerNumero;
var segundoNumero;
var suma;
var resta;
var multiplicacion;
var division;

void  darValor();


function darValor ()// Esta funcion no es necesaria porque *,-,/ no requieren un parseInt
{
    primerNumero = document.getElementById("numeroUno").value;
    segundoNumero= document.getElementById("numeroDos").value;

    primerNumero = parseInt(primerNumero);
    segundoNumero= parseInt(segundoNumero);

}

function sumar()
{	
    darValor();
        suma = primerNumero + segundoNumero;
    alert("La suma es " + suma);
}

function restar()
{
    darValor();
    resta= primerNumero - segundoNumero;
    alert("La resta es " + resta); 
}

function multiplicar()
{ 
    darValor();
    multiplicacion = primerNumero * segundoNumero;
    alert("La multiplicación da " + multiplicacion);
}

function dividir()
{
    darValor();
    division= primerNumero / segundoNumero;
    alert("La división da " + division);
}

