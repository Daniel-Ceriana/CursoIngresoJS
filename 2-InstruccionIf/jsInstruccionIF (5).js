function mostrar()
{
//tomo la edad  
//13 y 17 años

var edad

edad = document.getElementById("edad").value;
//tambien funciona: !(edad>=13 && edad <=17)
if(edad <13 || edad >17){
    alert("No es adolescente");

}

}//FIN DE LA FUNCIÓN