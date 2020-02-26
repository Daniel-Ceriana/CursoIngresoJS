function mostrar()
{
var numeroUno;
var numeroDos;
var resultado;




numeroUno = prompt("Ingrese el primer número");
numeroUno = parseInt(numeroUno);

    while(isNaN(numeroUno)){
        numeroUno= prompt("Ingrese un número válido");
        numeroUno= parseInt(numeroUno);
    }

numeroDos = prompt("Ingrese el segundo número");
numeroDos = parseInt(numeroDos);

    while(isNaN(numeroDos)){
        numeroDos = prompt("Ingrese un número válido");
        numeroDos=parseInt(numeroDos);
    }

    if (numeroUno== numeroDos){
        alert(numeroUno + ", " + numeroDos );
    } else{
        if( numeroUno> numeroDos){
            resultado= numeroUno-numeroDos;
            alert("La resta de ambos números da: " + resultado);
        }else{
            resultado = numeroUno+numeroDos;
                if(resultado>10){
                    alert("La suma es " + resultado + " y superó el 10");
                }else{
                    alert("La suma da: " + resultado);
                }
        }
    }
}
