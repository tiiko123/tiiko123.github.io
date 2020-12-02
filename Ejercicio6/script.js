let inicio;
function saludar(nombre){
    alert("hola "+nombre+"!!")
}

/*
fin parametros
function empezar(){
    inicio=window.setInterval(saludar,3000,prompt("Ingrese su nombre"));
}*/

/*
Con parametros

function empezar(){
    inicio=window.setInterval(function(){saludar(prompt("ingrese su nombre"));},3000);
}
*/

function cambiarFondo(){
    let body = document.querySelector("body");


    body.style.backgroundColor= body.style.backgroundColor=="lime" ? body.style.backgroundColor="navy" : body.style.backgroundColor="lime";
}

function empezar(){
    inicio= window.setInterval(cambiarFondo,3000);
}
function detener(){
    clearTimeout(inicio);
}