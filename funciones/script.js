

decidir(prompt("1.- potencia , 2.- factorial"));



function decidir(opcion){

	if(opcion == 1){
		document.write("la potencia es: " +potencia(prompt("base"), prompt("exponente")));
	}else if (opcion == 2){

		document.write("El factorial es: "+factorial(prompt("numero para el factorial")));
		//document.write("a:"+medida);




	}

}
 function potencia(n1,n2){

	return Math.pow(n1,n2);

 }

 function factorial(n1){ 
	
	if (n1 == 0){ 
		return 1; 
	}
	
	return n1 * factorial(n1-1); 
}

/*
function suma(n1,n2){
	let resultado = parseInt(n1)+parseInt(n2);
		return resultado;
}
document.write("La suma es:"+ suma(prompt("numero1:"), prompt("numero2: ")));
document.write("<br>")




const producto = function multi(a,b){
							return a*b;	
	
}
document.write("El producto es: " + producto(6,5));
	producto = 3;
							
document.write("El producto es: " + producto(6,5));*/