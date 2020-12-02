

<?php

    $host="localhost";
    $usuario="root";
    $clave="password";
    $bd = "personas";
    $port = 3308; //poner en caso de que marque error en la conexion


    $conexion = mysqli_connect($host,$usuario,$clave,$bd,$port);




    $consulta ="SELECT id, nombre, edad, direccion FROM registros";

    if($registros->num_rows>0){
        while($fila - $ registros->fetch){
            
        }
    }

    $registros=mysqli_query

?>