
let peso = prompt("Teclea el peso");
let altura = prompt("Teclea la altura en metros ejemplo 1.80");
let imc;

imc = peso/((altura)*(altura));

if(imc<16.5){
    document.write("Intrapeso -IMC: "+imc+ "<br>");
}else if(imc >=16.5 && imc <= 24.9){
    document.write("peso normal -IMC: " +imc+"<br>");
}else if(imc >=25 && imc <= 29){
    document.write("sobre peso -IMC: "+imc+"<br>");
}else if(imc >=30 && imc <= 34){
    document.write("obesidad -IMC: "+imc+"<br>");
}else if(imc >=35){
    document.write("obesidad morbida -IMC: "+imc+"<br>");
}