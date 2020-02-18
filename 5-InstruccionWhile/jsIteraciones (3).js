function mostrar()
{

var clave = prompt("ingrese el número clave.");
var contador= 0;

     clave= clave.toLowerCase();

    while(clave != "utn750"){
        contador++;
        if (contador == 3){
            break;
        }


        var clave = prompt("ingrese el número clave.");
        clave= clave.toLowerCase();

    }

    if (clave== "utn750"){
        alert("Bienvenido");
    }else{
        alert("Error, muchos intentos");
    }
    
}//FIN DE LA FUNCIÓN
