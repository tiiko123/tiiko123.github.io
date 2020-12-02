<?php
   
    require 'conexion.php';
    session_start();
    if(isset($_POST['valorModificar'])){
        $_SESSION['id']=$_POST['valorModificar'];
        $id=$_SESSION['id'];
        echo $_SESSION['id'];
    }else{
        $id=$_SESSION['id'];
       // echo $id;
    }
  /*  if(isset($_POST['valorModificar'])){
        require 'guardar.php';
        
        $guardar = $id;
    }else{
        $id=$guardar;
    }
*/
    
   
    //$id = $guardar;
?>
<?php
    if($id == ''){
?>

    <html>
        <head>
            <meta charset="UTF-8">
            <title>Document</title>
            <link rel="stylesheet" href="style.css">
        </head>
    <body>
        <main class="registar">
            <form  method="POST">

                <div>
                    <label class="etiquetas" for="titulo">Título:</label>
                    <input class="controles" type="text" name="titulo" required>
                </div>
                <div>
                    <label class="etiquetas" for="autor">Autor:</label>
                    <input class="controles" type="text" name="autor" required>
                </div>
                <div>
                    <label class="etiquetas" for="editorial">Editorial:</label>
                    <input class="controles" type="text" name="editorial" required>
                </div>
                <div>
                    <label class="etiquetas" for="precio">Precio:</label>
                    <input class="controles" type="number" step="0.01" name="precio" required>
                </div>

                <div>
                    <label class="etiquetas" for="enlace">Enlace:</label>
                    <input class="controles" type="text"  name="enlace" required>
                </div>


                <?php

                ?>
                <button type="submit" title="Log In" name="registar" >registrar</button>
            </form>

            <?php
                
                if (isset($_POST['registar'])){
                    require 'conexion.php';
                   
                    $titulo = $_POST['titulo'];
                    $autor = $_POST['autor'];
                    $editorial = $_POST['editorial'];
                    $precio = $_POST['precio'];
                    $enlace = $_POST['enlace'];
                    $q = "INSERT INTO libros (titulo, autor, editorial, precio, enlace) VALUES ('$titulo', '$autor', '$editorial', '$precio','$enlace');";
                    $consulta = mysqli_query($conexion,$q);
                    header("location: index.php");
                }else if(isset($_POST['modificar'])){

                }

                ?>
        </main>
    </body>
    </html>

<?php


    }else{
        $q = "SELECT id,titulo,autor,editorial,precio,enlace FROM libros WHERE id = '$id'";
        $consulta = $conexion->query($q);
        $fila = $consulta->fetch_object();
?>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Document</title>
            <link rel="stylesheet" href="style.css">
        </head>
    <body>
        <main class="modificar">
            <form  method="POST">

                <div>
                    <label class="etiquetas" for="titulo">Título:</label>
                    <input class="controles" type="text" name="titulo" value = "<?php echo $fila->titulo  ?>" required >
                </div>
                <div>
                    <label class="etiquetas" for="autor">Autor:</label>
                    <input class="controles" type="text" name="autor" value = "<?php echo $fila->autor  ?>" required>
                </div>
                <div>
                    <label class="etiquetas" for="editorial">Editorial:</label>
                    <input class="controles" type="text" name="editorial" value = "<?php echo $fila->editorial  ?>" required>
                </div>
                <div>
                    <label class="etiquetas" for="precio">Precio:</label>
                    <input class="controles" type="number" step="0.01" name="precio"  value = "<?php echo  $fila->precio  ?>" required>
                </div>
                <div>
                    <label class="etiquetas" for="enlace">Enlace:</label>
                    <input class="controles" type="text"  name="enlace"  value = "<?php echo  $fila->enlace  ?>" required>
                </div>
 
                <button type="submit" title="Log In" name="modificar" >modificar</button>
             
            </form>

            <?php
                
                if (isset($_POST['modificar'])){
                    
                    $titulo = $_POST['titulo'];
                    $autor = $_POST['autor'];
                    $editorial = $_POST['editorial'];
                    $precio = $_POST['precio'];
                    $enlace = $_POST['enlace'];
                    $q = "UPDATE libros SET titulo='$titulo',autor='$autor',editorial='$editorial',precio='$precio',enlace='$enlace' WHERE id = '$id';";
                    $consulta = mysqli_query($conexion,$q);

                    header("location: index.php");
                }

                ?>
        </main>
    </body>
    </html>
       

<?php
        echo $fila->id;
        echo $fila->titulo;
    }


?>
