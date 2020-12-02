
function calculaIMC(){
    let vPeso = document.getElementById("peso").value;
    let vAltura = document.getElementById("altura").value;
    
    let resultado = vPeso/(vAltura*vAltura);

    resultado = resultado*100;
    resultado = Math.round(resultado);
    resultado = resultado/100;
    let vIMC=document.getElementById('imc');
    let vIMCNUMERO=document.getElementById('imcNumero');
    vIMCNUMERO.innerText=resultado;
    let vIMG=document.getElementById('imagen');


    if(resultado <18.5){
        vIMC.innerText = "Peso suficiente";
        document.getElementById("imagen").innerHTML='<img src="silueta1.jpg" />';

    }else if(resultado >= 18.5 && resultado <= 24.9){
        vIMC.innerText = "Normopeso";
        document.getElementById("imagen").innerHTML='<img src="silueta1.jpg" />';


    }else if(resultado >= 25 && resultado <= 26.9){
        vIMC.innerText = "Sobrepeso grado I";
        document.getElementById("imagen").innerHTML='<img src="silueta2.jpg" />';


    }else if(resultado >= 27 && resultado <= 29.9){
        vIMC.innerText = "Sobrepeso grado II (preobesidad)";
        document.getElementById("imagen").innerHTML='<img src="silueta2.jpg" />';

    }else if(resultado >= 30 && resultado <= 34.9){
        vIMC.innerText = "Obesidad de tipo I";
        document.getElementById("imagen").innerHTML='<img src="silueta3.jpg" />';

    }else if(resultado >= 35 && resultado <= 39.9){
        vIMC.innerText = "Obesidad de tipo II";
        document.getElementById("imagen").innerHTML='<img src="silueta3.jpg" />';

    }else if(resultado >= 40 && resultado <= 49.9){
        vIMC.innerText = "Obesidad de tipo III (mórbida)";
        document.getElementById("imagen").innerHTML='<img src="silueta4.jpg" />';


    }else if(resultado >= 50){
        vIMC.innerText = "Obesidad de tipo IV (extrema)";
        document.getElementById("imagen").innerHTML='<img src="silueta5.jpg" />';

    }
    
    





    
}