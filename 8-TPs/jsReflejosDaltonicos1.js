/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var color;
var tiempoInicio;
var inicio 
var fin 
function comenzar()
{
    inicio = new Date();
    
    ColorSecreto= Math.floor(Math.random() * 6 + 1);

    switch (ColorSecreto) {
        case 1:
            color= "azul";
            break;
        case 2: 
            color= "amarillo";
            break;
        case 3: 
            color= "marron";
            break;
        case 4:
            color = "verde";
            break;
        case 5:
            color= "celeste";
            break;
        case 6: 
            color= "rojo";
            break;
    }
   

   
    document.getElementById("ColorElejido").value= "Color " + color;

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
    fin = new Date();
    tiempoInicio =  (fin - inicio) / 1000;
    tiempoInicio= parseInt(tiempoInicio);

	if (color == colorParametro){
        alert("Correcto, tardó " + tiempoInicio + " segundos" );
    }else{
        alert("incorrecto")
    }


}//FIN DE LA FUNCIÓN
