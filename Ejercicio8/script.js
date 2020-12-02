

let minuto = 60;
let inicio;
let entro=false;

let ver=true;

function reiniciar(){
    
}
function iniciar(){
    
    
    if(entro == false){
        let main = document.getElementById("main");



        let divContenedor = document.createElement("div");
        divContenedor.setAttribute("class","contenedor");



        /*for(let i = 1; i <= 3; i++){
            let divMemo = document.createElement("img");
            divMemo.src="img/"+i;




            divMemo.setAttribute("class","imagenesCartas");
        

            divContenedor.appendChild(divMemo);
            main.appendChild(divContenedor);
        }    */







        
        for(let i = 1; i <= 16; i++){
            
            let divMemo = document.createElement("div");
            divMemo.setAttribute("class","cartas");
            
            let img = document.createElement("img");
            /*img.src="img/"+i;
*/
            img.setAttribute("id",i);
            img.setAttribute("class","imagenesCartas");
            divMemo.setAttribute("onClick","vizualizar("+i+");");

            

            divMemo.appendChild(img);
            
            divContenedor.appendChild(divMemo);
            main.appendChild(divContenedor);
        }

        asignarImagenes();
       
        inicio = window.setInterval(reducirTiempo,1000);
        entro = true;
    }



    









}
function namas(){

}

function reducirTiempo(){
    let tiempo = document.getElementById("tiempo");
    let imagenes = document.getElementById("img");


    tiempo.innerHTML= minuto;   
    minuto--;
    if(minuto<0){
        let divMemo = document.getElementsByTagName("div");

        for(let i =0; i<divMemo.length;i++){
            divMemo[i].removeAttribute("onClick");
            //imagenes[i].setAttribute("onClick","");
        }
        detener();
    }
}
//imagenes[i].src="img/"+numeroRandomParaImagen;
//numeroRandomParaImagen = parseInt(Math.random() * (9 - 1) + 1); 

let contador=0;
function asignarImagenes(){
    let imagenes = document.getElementsByTagName("img");
    let numeros = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    numeros = numeros.sort(function() {return Math.random() - 0.5});


    for(let i=0; i < imagenes.length; i++){
        imagenes[i].src="img/"+numeros[i]+".png";
    }
    
}

let contadorImg=0;
let guardarIdAnterior;
let guardarIdNuevo;

let puntuacion=0;
function vizualizar(id){
    let puntuacionn= document.getElementById("puntuacion");

    if(contadorImg==0){

        let imagenOcultar = document.getElementById(id);
        imagenOcultar.setAttribute("class","imagenesCartas2");
            //ver = false;
    
            
        anterior = imagenOcultar.src.substring(4,imagenOcultar.src.length-4);
        guardarIdAnterior=id;
        contadorImg++;
        
    }else if(contadorImg==1){
        let imagenOcultar = document.getElementById(id);
        imagenOcultar.setAttribute("class","imagenesCartas2");

        nuevo = imagenOcultar.src.substring(4,imagenOcultar.src.length-4);
        guardarIdNuevo=id;

        if(anterior==nuevo){
            puntuacion++;
            puntuacionn.innerHTML=puntuacion;
            if(puntuacion== 8){
                detener();
            }
            contadorImg=0;
        }else{
            setTimeout(function() { 
                let imagenOcultar1 = document.getElementById(guardarIdAnterior);
                imagenOcultar1.setAttribute("class","imagenesCartas");
            }, 300); 
         
            
            setTimeout(function() { 
                let imagenOcultar2 = document.getElementById(guardarIdNuevo);
            imagenOcultar2.setAttribute("class","imagenesCartas");
            }, 300); 
            
            contadorImg=0;

        }
    }
    
    
    
    
    /*else{
        let imagenOcultar = document.getElementById(id);
        imagenOcultar.setAttribute("class","imagenesCartas");
        ver = true;
    }*/

}

function detener(){
    clearTimeout(inicio);
    entro = false;

}




