var id = 1;
function agregar(){
    
    let producto = document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;
    let unidades = document.getElementById("unidades").value;
    let tabla = document.getElementById("tabla");
    let tbodyyy = document.getElementById("tbodyy");

    //objeto.addEventListener("click","agregar();");
    let fila = document.createElement("tr");
    let columna1 = document.createElement("td");
    let columna2 = document.createElement("td");
    let columna3 = document.createElement("td");
    let columna4 = document.createElement("td");
    let columna5 = document.createElement("td");
    let columnaBotonEliminar = document.createElement("td");
    let columnaBotonModificar = document.createElement("td");

    let botonEliminar = document.createElement("img");
    let botonModificarar = document.createElement("img");

    fila.className=id;
    columna1.className="id";
    columna2.className="producto"+id;
    columna3.className="precioUnitario"+id;
    columna4.className="monto"+id;
    columna5.className="precio";

    botonEliminar.setAttribute("type","button");
    botonEliminar.setAttribute("value","Eliminar");
    botonEliminar.setAttribute("onClick","eliminar("+id+");");
    botonEliminar.setAttribute("src","borrarr.png");
    botonEliminar.className="botE";

    botonModificarar.setAttribute("type","button");
    botonModificarar.setAttribute("value","Modificar");
    botonModificarar.setAttribute("onClick","modificar("+id+");");
    botonModificarar.setAttribute("src","editarr.png");
    botonModificarar.className="botM";

    columnaBotonEliminar.appendChild(botonEliminar);
    columnaBotonModificar.appendChild(botonModificarar);

    columna1.innerHTML=id++;
    columna2.innerHTML=producto;
    columna3.innerHTML="$"+precio;
    columna4.innerHTML=unidades;
    columna5.innerHTML="$"+(precio*unidades);
    
    fila.appendChild(columna1);
    fila.appendChild(columna2);
    fila.appendChild(columna3);
    fila.appendChild(columna4);
    fila.appendChild(columna5);
    fila.appendChild(columnaBotonEliminar);
    fila.appendChild(columnaBotonModificar);

    tbodyyy.appendChild(fila);
    tabla.appendChild(tbodyyy);

    document.getElementById("precio").value="";
    document.getElementById("unidades").value="";

    actualizar();
    colocarPrecios();
}

function colocarPrecios(){
    let listaPrecios = document.getElementsByClassName("precio");
    let acumular = 0;

    for(var i = 0; i < listaPrecios.length; i++){
        acumular = parseFloat(acumular)+parseFloat(listaPrecios[i].textContent.substring(1,listaPrecios[i].textContent.length));
    }

    iva.innerHTML = "$"+acumular*0.16;
    subtotal.innerHTML="$"+acumular;
    total.innerHTML= "$"+acumular+(acumular*.16);
}

function eliminar(idEliminar){
    let tbodyyy = document.getElementById("tbodyy");
    let listaColumnas = document.getElementsByClassName(idEliminar);
    tbodyyy.removeChild(listaColumnas[0]);



    actualizar();
    colocarPrecios();

/*
    let subtotal = document.getElementById("subtotal");
    let iva = document.getElementById("iva");
    let total = document.getElementById("total");
    let listaPrecios = document.getElementsByClassName("precios");
    var idEliminar= prompt("Ingrese el numero a eliminar");;
    let acumular=0;
    let tabla = document.getElementById("tabla");
    let tbodyyy = document.getElementById("tbodyy");
    let filas = document.getElementsByTagName("th");
    for(let i = 0; i < 5; i++){
        tbodyyy.removeChild(filas[(idEliminar*5)+6]);
    }
    for(var i = 0; i < listaPrecios.length; i++){
        acumular = parseFloat(acumular)+parseFloat(listaPrecios[i].textContent);
    }
    iva.innerHTML = acumular*0.16;
    subtotal.innerHTML=acumular;
    total.innerHTML= acumular+(acumular*.16);
*/

}

function actualizar(){
    let listaBotonesEliminar = document.getElementsByClassName("botE");
    let listaBotonesModificar = document.getElementsByClassName("botM");
    let idLista = document.getElementsByClassName("id");
    let filas = document.getElementsByTagName("tr");
    for(let i = 0; i < idLista.length; i++){
        idLista[i].innerHTML=i+1;
    }


    for(let i = 0; i < listaBotonesEliminar.length; i++){
        listaBotonesEliminar[i].setAttribute("onClick","eliminar("+parseInt(i+1)+");");
       
    }

    for(let i = 0; i < listaBotonesModificar.length; i++){
        listaBotonesModificar[i].setAttribute("onClick","modificar("+parseInt(i+1)+");");
       
    }

    let contador=1;;
    for(let i = 4; i < filas.length; i++){

        filas[i].className=contador;
        contador++;
       
    }

  
}


function modificar(idModificar){
    let listaId = document.getElementsByClassName("id");
    let filas = document.getElementsByTagName("td");

    for(var i = 0; i < listaId.length; i++){

       
        if(idModificar == listaId[i].textContent){
            idModificar=idModificar-1;

            idModificar=idModificar*7;
            filas[(idModificar+1)].innerHTML=prompt("Computadora, Celular, Laptop, Audifonos");

            precio =prompt("Precio")
            filas[(idModificar+2)].innerHTML="$"+precio;
            unidades =prompt("unidades")
            filas[(idModificar+3)].innerHTML=unidades;

            filas[(idModificar+4)].innerHTML="$"+(precio*unidades);


        }

    }

    actualizar();
    colocarPrecios();














    /*
    let prueba = document.getElementById("prueba");
    let listaId = document.getElementsByClassName("id");
    var numeroModificar= prompt("Ingrese el numero a eliminar");;
    let filas = document.getElementsByTagName("th");
    let acumular=0;

    let subtotal = document.getElementById("subtotal");
    let iva = document.getElementById("iva");
    let total = document.getElementById("total");
    let listaPrecios = document.getElementsByClassName("precios");
    let precio,unidades;



    for(var i = 0; i < listaId.length; i++){

       
        if(numeroModificar == listaId[i].textContent){
     
            

            
            
            filas[(numeroModificar*5)+7].innerHTML=prompt("Computadora, Celular, Laptop, Audifonos");

            precio =prompt("Precio")
            filas[(numeroModificar*5)+8].innerHTML=precio;
            unidades =prompt("unidades")
            filas[(numeroModificar*5)+9].innerHTML=unidades;

            filas[(numeroModificar*5)+10].innerHTML=(precio*unidades);


        }

    }

    for(var i = 0; i < listaPrecios.length; i++){
        acumular = parseFloat(acumular)+parseFloat(listaPrecios[i].textContent);
        
    }
    subtotal.innerHTML=acumular;
    iva.innerHTML = acumular*0.16;
    total.innerHTML= acumular+(acumular*.16);

*/


}
