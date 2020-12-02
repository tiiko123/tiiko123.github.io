
var btnCargar = document.getElementById('cargar');

function cargarContenidoAjax(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET","servidor.php",true);
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);
        if(xhr.readyState == 4 && xhr.status == 200){
            var json = JSON.parse(xhr.responseText);
            console.log(json);
         
            var contenido = document.getElementById('contenido');
            let listaPais = document.createElement("select");
            for(let i = 0; i < Object.keys(json).length; i+=2){
                let parrafo = document.createElement("p");

                parrafo.innerHTML = "idPais: "+json[i] + " Nombre: " + json[i+1];

                contenido.appendChild(parrafo);
                console.log("idPaiss: "+json[i] + " Nombre: " + json[i+1]);

                let elementoPais = document.createElement("option");

                elementoPais.setAttribute("value",json[i]);
                elementoPais.innerHTML = json[i+1];

                listaPais.appendChild(elementoPais);


                


            }

            contenido.appendChild(listaPais);
         

        
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

btnCargar.addEventListener('click', cargarContenidoAjax);