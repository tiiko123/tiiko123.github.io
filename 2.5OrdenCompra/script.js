


var id = 1;
function agregar(){
    
    let prueba = document.getElementById("prueba");


    let producto = document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;
    let unidades = document.getElementById("unidades").value;
    let tabla = document.getElementById("tabla");
    let tbodyyy = document.getElementById("tbodyy");

    let subtotal = document.getElementById("subtotal");
    let iva = document.getElementById("iva");
    let total = document.getElementById("total");


  

    //objeto.addEventListener("click","agregar();");

    let fila = document.createElement("tr");
    let columna1 = document.createElement("th");
    let columna2 = document.createElement("th");
    let columna3 = document.createElement("th");
    let columna4 = document.createElement("th");
    let columna5 = document.createElement("th");

    let columnaBotonEliminar = document.createElement("th");
    let columnaBotonModificar = document.createElement("th");

    let botonEliminar = document.createElement("input");
    let botonEliminbotonModificarar = document.createElement("input");

    columna1.className="id";
    columna5.className="precios";


    botonEliminar.setAttribute("type","button");
    botonEliminar.setAttribute("value","Eliminar")
    //botonEliminar.setAttribute("onClick","agregar("+"");")
    

    columnaBotonEliminar.appendChild(botonEliminar);



    columna1.innerHTML=id++;
    columna2.innerHTML=producto;
    columna3.innerHTML=precio;
    columna4.innerHTML=unidades;
    columna5.innerHTML=(precio*unidades);
    
    if((id%2)==0){
        columna1.style.backgroundColor="#48705C";
        columna2.style.backgroundColor="#48705C";
        columna3.style.backgroundColor="#48705C";
        columna4.style.backgroundColor="#48705C";
        columna5.style.backgroundColor="#48705C";
        //columnaBotonEliminar.style.backgroundColor="#48705C";

    }


  
    
/*
    let costos = document.getElementsByTagName("th");

    
  */

    tbodyyy.appendChild(fila);
    tbodyyy.appendChild(columna1);
    tbodyyy.appendChild(columna2);
    tbodyyy.appendChild(columna3);
    tbodyyy.appendChild(columna4);
    tbodyyy.appendChild(columna5);
 //   tbodyyy.appendChild(columnaBotonEliminar);




    

    tabla.appendChild(tbodyyy);

    
    let listaPrecios = document.getElementsByClassName("precios");
    let acumular = 0;

    for(var i = 0; i < listaPrecios.length; i++){
        acumular = parseFloat(acumular)+parseFloat(listaPrecios[i].textContent);
        
    }
    iva.innerHTML = acumular*0.16;

    subtotal.innerHTML=acumular;

    total.innerHTML= acumular+(acumular*.16);

}

function eliminar(){
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






}

function modificar(){
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




}
