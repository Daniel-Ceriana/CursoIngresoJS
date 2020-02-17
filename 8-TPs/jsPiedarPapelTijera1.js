/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var casoRandom;
function comenzar()
{
	casoRandom= Math.floor(Math.random()*3+1);
    console.log(casoRandom);
    switch(casoRandom){
        case 1 : eleccionMaquina = "piedra";
            break;
        case 2 : eleccionMaquina = "papel";
            break;
        case 3 : eleccionMaquina = "tijera";
            break;
    }
    

}//FIN DE LA FUNCIÓN
function piedra()
{
    switch(eleccionMaquina){
        case "piedra": 
        alert("Empató");
            break;
        case "papel": 
        alert("Perdió");
            break;
        case "tijera": 
        alert("Ganó");
            break;

    }

}//FIN DE LA FUNCIÓN
function papel()
{
    switch(eleccionMaquina){
        case "piedra": 
        alert("Ganó");
            break;
        case "papel": 
        alert("Empató");
            break;
        case "tijera": 
        alert("Perdió");
            break;

    }

}//FIN DE LA FUNCIÓN
function tijera()
{
	
    switch(eleccionMaquina){
        case "piedra": 
        alert("Perdió");
            break;
        case "papel": 
        alert("Ganó");
            break;
        case "tijera": 
        alert("Empató");
            break;

    }
}//FIN DE LA FUNCIÓN