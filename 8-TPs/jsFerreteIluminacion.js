/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var precioLampara;
     var descuento;
     var valorConDescuento;
     var cantidad;
     var marca;
     var impuesto;

    precioLampara = 35;
    
    cantidad= document.getElementById("Cantidad").value;
    marca= document.getElementById("Marca").value;
    cantidad= parseInt(cantidad);

    if (cantidad >=6){
        descuento= 0.5;
    }else if (cantidad == 5 && marca== "ArgentinaLuz"){
        descuento = 0.4;            
    }else if (cantidad == 5){
        descuento= 0.3
    }else if(cantidad == 4){
        if (marca== "ArgentinaLuz" || marca== "FelipeLamparas"){
            descuento= 0.25;           
        }else {
            descuento =0.20;
        }            
    }else if(cantidad== 3){
        if (marca== "ArgentinaLuz"){
            descuento= 0.15;
        }else if( marca== "FelipeLamparas"){
            descuento= 0.10;
        }else {
            descuento= 0.05;
        }
    }else{
        descuento = 0;
    }

    valorConDescuento= precioLampara* (cantidad-(cantidad * descuento));

    if (valorConDescuento>=120){
            impuesto= valorConDescuento * 0.10;
            valorConDescuento= valorConDescuento*1.10;

           valorConDescuento= parseInt(valorConDescuento);
           impuesto= parseInt(impuesto);

           document.getElementById("precioDescuento").value= " Usted pago $" + impuesto + " de impuesto."
            alert("IIBB Usted pago $" + valorConDescuento );
    }else{
        alert("Usted pagó "+ valorConDescuento);
    }




}
