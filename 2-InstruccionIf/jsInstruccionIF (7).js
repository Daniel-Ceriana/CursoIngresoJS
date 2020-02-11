function mostrar()
{
//tomo la edad  

var edad;
var estadoCivil;


estadoCivil= document.getElementById("estadoCivil").value;
edad= document.getElementById("edad").value;

if (edad< 18 && estadoCivil != "Soltero"){

alert("Es muy pequeño para no estar soltero");
}

}//FIN DE LA FUNCIÓN