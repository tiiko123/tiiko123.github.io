<?php

    $servidor = "localhost";
    $usuario = "root";
    $contrasena = "password";
    $bd = "lugares";
    $port = 3308;


    $conexion = mysqli_connect($servidor, $usuario, $contrasena, $bd,$port);

    $id = $_GET["id"];
    $consulta = "SELECT idEstado, nombre FROM estados WHERE idPais = $id";
    $resultado = mysqli_query($conexion, $consulta);
    $i=0;
    $datosGenerales = Array();
    $datos = Array();
    if($resultado->num_rows>0){
        while($fila=$resultado->fetch_assoc()){
            array_push($datos, $fila["idEstado"],$fila["nombre"]);

            /*array_push($datosGenerales[$i], $datos);*/
        }
    }
  
    /*$tecnologias = array(
        'frontend'=>'html5,ccs3,javascript',
        'backend'=>'php,mysql,apache',
        'fullstack'=>'html5,ccs3,javascript,php,mysql,apache'
    );*/
    echo json_encode($datos);

?>