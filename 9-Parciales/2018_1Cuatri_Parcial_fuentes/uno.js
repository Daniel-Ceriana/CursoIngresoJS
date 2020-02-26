
function mostrar()
{
var ancho;
var alto;
var perimetro;

ancho= prompt("Ingresar ancho");
ancho= parseInt(ancho);
while(ancho<= 0 || isNaN(ancho)){
ancho= prompt("Ingresa un número válido para el ancho");
}




alto= prompt("Ingresar alto");
alto= parseInt("alto");
while(alto<= 0 || isNaN(alto)){
alto= prompt("Ingresa un número válido para el alto");
}
perimetro= ancho*2 + alto*2;
alert("El perímetro es: " + perimetro);

}
