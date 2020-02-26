function mostrar()
{

var precio;
var descuento;
var final;


precio= prompt("Ingrese el precio");
precio= parseInt(precio);

while(precio<0 || isNaN(precio)){
    precio= prompt("Ingrese un número para el precio");
}

descuento= prompt("Ingrese el porcentaje de descuento");
descuento = parseInt(descuento);

while (descuento<0 || isNaN(descuento)){
    descuento= prompt("Ingrese un número para el porcentaje de descuento");
}

final=precio - precio* (descuento/100);

document.getElementById("elPrecioFinal").value= final;


}
