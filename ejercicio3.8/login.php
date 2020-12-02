<?php
    require 'conexion.php';
    $valido = false;
    if(isset($_POST['aceptar'])){
        $usuario =$_POST['usuario'];
        $contrasena = $_POST['contrasena'];

        if(!valida_usuario_bd($usuario,$contrasena,$conexion)){
            echo 'No es valido <br/>';
            $valido = false;
        }else{
            echo 'Si es valido <br/>';
            session_start();
            $valido = true;
            $_SESSION['usuario']= $usuario;
            header('Location.index.php');
        }

    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acceso</title>
</head>
<body>
    <div class="contenedor_login">
        <form method="POST" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>">
        
            <input type="text" class="form_ctrl" name ="usuario" placeholder="Usuario" required="Introduce el nombre"> 
            <input type="password" class="form_ctrl" name ="contrasena" placeholder="Contraseña" required>
            <input type="submit" class="btn" name="aceptar" value="Ingresar">

            <?php
                if(!$valido && isset($_POST['aceptar'])){
                    echo '<p class="alerta"> Usuario y/o contraseña no valido </p>';
                }else{
                    
                }


            ?>
    
        </form>



    </div>
</body>
</html>