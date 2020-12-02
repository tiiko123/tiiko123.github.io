<?php
    $servidor = "localhost";
    $usuario = "root";
    $password = "password";
    $bd = "login";
    $port = 3308;


    $conexion = mysqli_connect($servidor, $usuario, $password, $bd,$port);

    if(!$conexion){
        die ('Conexion a la base '. $bd . 'fallo'. mysqli_connect_error);
    }


    function valida_usuario_bd($usuario, $contrasena, $conexion){
        $query =" select 1 as user_Valido from usuarios where usuario ='$usuario' and contrasena= MD5('$contrasena')";
        echo $query . '<br/>';

        $resultado = mysqli_query($conexion,$query) or die('Error al ejecutar la consulta');
        if(mysqli_num_rows($resultado)==0){
            return false;
        }else{
            return true;
        }


    }

    if(valida_usuario_bd('javier','javier123',$conexion)){
        echo "usuario valido";

    }else{
        echo "usuario no vlaido";
    }
?>