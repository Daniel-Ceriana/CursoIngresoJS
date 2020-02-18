function mostrar()
{

var sexo = prompt("ingrese f ó m .");
sexo= sexo.toLowerCase();
var contador = 0;


while(sexo != "f" && sexo != "m"){
    contador++
    if (contador== 3){
        break;
    }
   sexo = prompt("ingrese f ó m .");
   sexo= sexo.toLowerCase();
}
if (contador== 3){
    alert("Error, se han realizado muchos intentos");

}else{
    document.getElementById('Sexo').value=sexo;
}
   


}//FIN DE LA FUNCIÓN