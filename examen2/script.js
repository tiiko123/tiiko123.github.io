



 
function operar(){


    
    let resultados = document.getElementsByClassName("resultados");
    resultados[0].innerHTML="";
    let tablaa = document.getElementById("tablaa").value;

    let resultado = document.getElementById("resultados").value;


    let alerta = document.getElementsByClassName("alerta");
    



    if(parseInt(tablaa) >0 && parseInt(tablaa) < 51){
        if(parseInt(resultado) >0 && parseInt(resultado) < 21){



        let tablas = document.createElement("table");
        tablas.setAttribute("border","2");

        let fila = document.createElement("tr");

        let columna1=document.createElement("td");
        let columna2=document.createElement("td");
        let columna3=document.createElement("td");
        let columna4=document.createElement("td");



        columna1.innerHTML="numero";

            columna2.innerHTML="operador";
            
            columna3.innerHTML="multiplicar";
            
            columna4.innerHTML="resultado";


        fila.appendChild(columna1);

            fila.appendChild(columna2);

            fila.appendChild(columna3);
            fila.appendChild(columna4);

            tablas.appendChild(fila);

            resultados[0].appendChild(tablas);
        for(let i = 0; i < resultado; i++){
            let fila = document.createElement("tr");

            let columna1=document.createElement("td");
            let columna2=document.createElement("td");
            let columna3=document.createElement("td");
            let columna4=document.createElement("td");

            columna1.innerHTML=i;

            columna2.innerHTML="x";
            
            columna3.innerHTML=tablaa;
            
            columna4.innerHTML="= "+parseInt(i*tablaa);
            fila.appendChild(columna1);

            fila.appendChild(columna2);

            fila.appendChild(columna3);
            fila.appendChild(columna4);

            tablas.appendChild(fila);

            resultados[0].appendChild(tablas);



        }
        alerta[1].innerHTML="";
        alerta[0].innerHTML="";

        let saltar=document.createElement("br");

        resultados[0].appendChild(saltar);
    
    }else{
        alerta[1].innerHTML="Escriba valores de 1 y 20 en resultados";

    }

    }else{
        alerta[0].innerHTML="Escriba valores de 1 y 50";

    }









}