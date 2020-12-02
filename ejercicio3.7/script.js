
var btnCargar = document.getElementById('cargar');

let listaPais = document.getElementById("cargar");
listaPais.setAttribute("id","cargar");
listaPais.setAttribute("value","cargar");


let listaEstado = document.getElementById("cargarEstado");
listaEstado.setAttribute("id","cargarEstado");
listaEstado.setAttribute("value","cargarEstado");

let listaCiudad = document.getElementById("cargarCiudad");
listaCiudad.setAttribute("id","cargarCiudad");
listaCiudad.setAttribute("value","cargarCiudad");



let numeroPais;
let numeroEstado;
let anteriorPais;

let siCambiar;
function cargarContenidoAjax(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET","servidor.php",true);
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);


        if(xhr.readyState == 4 && xhr.status == 200){
            var json = JSON.parse(xhr.responseText);
            console.log(json);
         
            var contenido = document.getElementById('contenido');
           

            

            numeroPais =  document.getElementById("cargar").value;
         
            if(listaPais.getAttribute("class") != 1){
                listaPais.setAttribute("class","1");
                for(let i = 0; i < Object.keys(json).length; i+=2){
                    /*let parrafo = document.createElement("p");
    
                    parrafo.innerHTML = "idPais: "+json[i] + " Nombre: " + json[i+1];
    
                    contenido.appendChild(parrafo);
                    console.log("idPaiss: "+json[i] + " Nombre: " + json[i+1]);*/
    
                    let elementoPais = document.createElement("option");
    
                    elementoPais.setAttribute("value",json[i]);
                    elementoPais.innerHTML = json[i+1];
                    
                    listaPais.appendChild(elementoPais);

    
                }
    
                contenido.appendChild(listaPais);
                
            }

            if(anteriorPais == numeroPais){
                siCambiar = 0;
            }else{
                anteriorPais = numeroPais;
                siCambiar = 1;
            }
            
            console.log("CAAAAAAMBIA: "+siCambiar);
          
            console.log("Numero paisss"+ numeroPais);
      


            
        

        
       /* <select name="productos" id="producto">
            <option value="Computadora">Computadora</option>
            <option value="Celular">Celular</option>
            <option value="Laptop">Laptop</option>
            <option value="Audifonos">Audifonos</option>

        </select>*/
        }
    }
    xhr.send();
}


function cargarContenidoAjaxEstado(){
  
  

    var xhr = new XMLHttpRequest();

    xhr.open("GET","servidor2.php?id="+numeroPais,true);
    xhr.onreadystatechange = function(){
    console.log(xhr.readyState);


        if(xhr.readyState == 4 && xhr.status == 200){
            var json = JSON.parse(xhr.responseText);
            console.log(json);
         
            var contenido = document.getElementById('contenido');
           

            

     
            //if(listaEstado.getAttribute("class") != 1){
                listaEstado.innerHTML="";
                listaEstado.setAttribute("class","1");
            
                
                //listaEstado[0].innerHTML="";
                for(let i = 0; i < Object.keys(json).length; i+=2){
                    /*let parrafo = document.createElement("p");
    
                    parrafo.innerHTML = "idPais: "+json[i] + " Nombre: " + json[i+1];
    
                    contenido.appendChild(parrafo);
                    console.log("idPaiss: "+json[i] + " Nombre: " + json[i+1]);*/
    
                    let elementoEstado = document.createElement("option");
                    elementoEstado.setAttribute("id","valor");
                    elementoEstado.setAttribute("value",json[i]);
                    elementoEstado.innerHTML = json[i+1];
    
                    listaEstado.appendChild(elementoEstado);

    
                }
    
                contenido.appendChild(listaEstado);
           // }
           numeroEstado =  document.getElementById("cargarEstado").value;
           console.log("NUMERO ESTAD_"+numeroEstado);

        }
    }
    xhr.send();
}


function cargarContenidoAjaxCiudad(){
  
  

    var xhr = new XMLHttpRequest();

    xhr.open("GET","servidor3.php?id="+numeroEstado,true);
    xhr.onreadystatechange = function(){
    console.log(xhr.readyState);


        if(xhr.readyState == 4 && xhr.status == 200){
            var json = JSON.parse(xhr.responseText);
            console.log(json);
         
            var contenido = document.getElementById('contenido');
           

            

     
            //if(listaEstado.getAttribute("class") != 1){
                listaCiudad.innerHTML="";
                listaCiudad.setAttribute("class","1");
                //listaEstado[0].innerHTML="";
                for(let i = 0; i < Object.keys(json).length; i+=2){
                    /*let parrafo = document.createElement("p");
    
                    parrafo.innerHTML = "idPais: "+json[i] + " Nombre: " + json[i+1];
    
                    contenido.appendChild(parrafo);
                    console.log("idPaiss: "+json[i] + " Nombre: " + json[i+1]);*/
    
                    let elementoCiudad = document.createElement("option");
                    elementoCiudad.setAttribute("id","valor");
                    elementoCiudad.setAttribute("value",json[i]);
                    elementoCiudad.innerHTML = json[i+1];
    
                    listaCiudad.appendChild(elementoCiudad);

    
                }
    
                contenido.appendChild(listaCiudad);
           // }

        }
    }
    xhr.send();
}
btnCargar.addEventListener('click', cargarContenidoAjax);
listaPais.addEventListener('click', cargarContenidoAjax);
listaEstado.addEventListener('click', cargarContenidoAjaxEstado);
listaCiudad.addEventListener('click', cargarContenidoAjaxCiudad);