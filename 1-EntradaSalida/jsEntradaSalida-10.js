/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var descuento;

    importe= document.getElementById("importe").value;
    importe= parseInt(importe);

    descuento = 0.75 * importe;

    document.getElementById("resultado").value = descuento;




}
