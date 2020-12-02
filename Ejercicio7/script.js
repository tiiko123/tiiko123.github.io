let i=1;
function cambiarFondo(){
    let body = document.querySelector("body");


    body.setAttribute("style","background-image:url(img/"+i+")");
    i++;
    if(i==4){
        i=1;
    }
}

function empezar(){
    inicio= window.setInterval(cambiarFondo,3000);
}
function detener(){
    clearTimeout(inicio);
}