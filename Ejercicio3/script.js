
function agregarElementos(){
    let body = document.getElementById("body");
    let numero = document.getElementById("numero").value;
    let multiplay = document.getElementById("multiply").value;
    let tabla = document.createElement("table");
    tabla.setAttribute("border","3")

    let parrafo = document.createElement("p");
    parrafo.innerText=numero;
    body.appendChild(parrafo);


    let fila = document.createElement("tr");
    let columna1 = document.createElement("th");
    let columna2 = document.createElement("th");
    let columna3 = document.createElement("th");



    columna1.innerText = "Cantidad";
    columna2.innerText = "Multiplicación";
    columna3.innerText = "Resultado";
    tabla.appendChild(columna1);
    tabla.appendChild(columna2);
    tabla.appendChild(columna3);
    body.appendChild(tabla);

    for(let i =0; i <= multiplay; i++){

        let fila = document.createElement("tr");
        let columna1 = document.createElement("th");
        let columna2 = document.createElement("th");
        let columna3 = document.createElement("th");
        
        columna1.innerText =i;
        columna2.innerText =i+"*" + numero + "=" ;
        columna3.innerText =(i*numero);

        tabla.appendChild(fila);
        
        tabla.appendChild(columna1);
        tabla.appendChild(columna2);
        tabla.appendChild(columna3);


        body.appendChild(tabla);

    }

}