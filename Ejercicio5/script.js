

let cantidadUsuarios= prompt("Cuantos usuarios quieres capturar");
let arregloContactos=[];

let contacto

for(let i = 0; i < cantidadUsuarios; i++){
    let contacts={
        id: i,
        nombre:prompt("Nombre para el contacto"+i),
        telefono:prompt("numero")
    }
   

    arregloContactos[i]=contacts;
}

for(let i = 0; i < arregloContactos.length; i++){
    document.write(arregloContactos[i].id);
    
    document.write(arregloContactos[i].nombre);
    document.write(arregloContactos[i].telefono);

    document.write("<br>")
}

/*let matreiculaVariable="1830275";
let nombreVariable="Francisco Javier";

let alumno={
    matricula: matreiculaVariable,
    nombre: nombreVariable,
    carrera: "ITI",
    promedio: 9.2,

    pasatiempos: ["leer","dormir","cantar"],

    direccion: {
        calle: "victoria",
        numero: 2342,
        colonia: "tamatan",
        cp:8706
    }
}



document.write(alumno.matricula);*/
