function mostrar()
{
//tomo la edad  

var edad;

edad= document.getElementById("edad").value;

if (edad>= 18){
    alert("Es mayor de edad, tiene " + edad);
    }else{
    alert("No es mayor de edad, tiene " + edad);
}

}//FIN DE LA FUNCIÓN