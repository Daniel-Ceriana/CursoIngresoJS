/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo;
var ancho;

var perimetro;
var cantidadAlambre;

var radio;

var bolsaCemento;
var bolsaCal;


function Rectangulo () 
{
    largo= document.getElementById("Largo").value;
    ancho= document.getElementById("Ancho").value;

    largo= parseInt(largo);
    ancho= parseInt(ancho);


    perimetro = largo*2 + ancho*2;
    cantidadAlambre= perimetro *3;
    alert(cantidadAlambre);
    

}
function Circulo () 
{
    radio= document.getElementById("Radio").value;
    radio= parseInt(radio);
    //2*pi*radio
    perimetro= 2* 3.1415926589793 * radio;
    cantidadAlambre = perimetro * 3;
    alert(cantidadAlambre);


}
function Materiales () 
{
    
    largo= document.getElementById("Largo").value;
    ancho= document.getElementById("Ancho").value;

    largo= parseInt(largo);
    ancho= parseInt(ancho);

    bolsaCemento= largo * ancho * 2;
    bolsaCal= largo* ancho * 3;
    
    alert("Se necesitan " + bolsaCemento + " bolsas de cemento, y " + bolsaCal + " bolsas de Cal");
    
}