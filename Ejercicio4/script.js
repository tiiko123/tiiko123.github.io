
function numeroIngresado(caracter){
 
    let pruebas = document.getElementById("pruebas");
    let barra1 = document.getElementById("barra1").textContent;
    let barra = document.getElementById("barra").textContent;
    let barra2 = document.getElementById("barra2").textContent;
    let body = document.getElementById("body");
    let main = document.getElementById("main");


   // let contadorSimbolo=0;
    /*if(barra == 0){
        if(caracter != 'x' && caracter != '/' && caracter != '+' && caracter != '-'){
            document.getElementById("barra").innerHTML = caracter;  
        }
    }else{
        if(caracter == 'x' || caracter == '/' || caracter == '+' || caracter == '-' && contadorSimbolo==0){
            document.getElementById("barra").innerHTML = barra.concat(caracter);  
            contadorSimbolo++;
        }else if(caracter != 'x' && caracter != '/' && caracter != '+' && caracter != '-'){
            document.getElementById("barra").innerHTML = barra.concat(caracter);  

        }

    }*/
    
  
    let cadena1;
    let cadena2;
    let operador;
    if(barra == 0){
        if(caracter != 'x' && caracter != '/' && caracter != '+' && caracter != '-'&& caracter != "="){
            document.getElementById("barra").innerHTML = caracter;  
        }
    }else if(caracter != 'x' && caracter != '/' && caracter != '+' && caracter != '-'  && caracter != "="){

        document.getElementById("barra").innerHTML = barra.concat(caracter);


    }else if(caracter == 'x' || caracter == '/' || caracter == '+' || caracter == '-'){
        operador = caracter;
        cadena1=barra;
        document.getElementById("barra2").innerHTML = operador;
        document.getElementById("barra1").innerHTML = barra;
        document.getElementById("barra").innerHTML = 0;


    }else if(caracter == "="){

    
        if(barra2 == "+"){
            document.getElementById("barra1").innerHTML = parseInt(document.getElementById("barra1").innerHTML) + parseInt(document.getElementById("barra").innerHTML);
            document.getElementById("barra").innerHTML = 0;
            document.getElementById("barra2").innerHTML = "operador";
        }else if(barra2 == "-"){
            document.getElementById("barra1").innerHTML = parseInt(document.getElementById("barra1").innerHTML) - parseInt(document.getElementById("barra").innerHTML);
            document.getElementById("barra").innerHTML = 0;
            document.getElementById("barra2").innerHTML = "operador";
        }else if(barra2 == "x"){
            document.getElementById("barra1").innerHTML = parseInt(document.getElementById("barra1").innerHTML) * parseInt(document.getElementById("barra").innerHTML);
            document.getElementById("barra").innerHTML = 0;
            document.getElementById("barra2").innerHTML = "operador";
        }else if(barra2 == "/"){
            document.getElementById("barra1").innerHTML = parseInt(document.getElementById("barra1").innerHTML) / parseInt(document.getElementById("barra").innerHTML);
            document.getElementById("barra").innerHTML = 0;
            document.getElementById("barra2").innerHTML = "operador";
        }
                

        
        /*document.getElementById("barra1").innerHTML = cadena1 
        
        document.getElementById("barra1").innerHTML = barra1*/  
        
    }
    








    main.appendChild(pruebas);
    main.appendChild(barra);
    main.appendChild(parrafo);
    body.appendChild(main);

    
}

