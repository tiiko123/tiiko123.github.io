
<?php
        require 'conexion.php';
       

?>


<html>
    <head>
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
        <meta charset="UTF-8">
        <script ></script>
    </head>
    <body>
        <main>
            <h1>Lista de libros</h1>
            <form method='POST' action ='registrar.php'>
                <button type='submit' title='modifi' name='valorModificar' value=''> Nuevo</button>
   
            </form>
            
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Precio</th>
                        <th>Editorial</th>
                        <th>Enlace</th>
                        <th>Eliminar</th>
                        <th>Modificar</th>
                    </tr>
                </thead>
                <tbody>
                    <?php

                        $q = "SELECT id,titulo,autor,editorial,precio,enlace FROM libros";
                        $consulta = $conexion->query($q);
                        $numero = $consulta->num_rows;
                        for ($i = 0; $i < $numero; $i++) {
                            $fila = $consulta->fetch_object();
                            echo "<tr class ='f$fila->id'>";
                                echo "<td class ='$fila->id'> $fila->titulo </td>";
                                echo "<td class ='$fila->id'> $fila->autor </td>";
                                echo "<td class ='$fila->id'> $fila->precio </td>";
                                echo "<td class ='$fila->id'> $fila->editorial </td>";
                                echo "<td class ='$fila->id'> $fila->enlace </td>";
                                echo "<td>  </td>";
                              
                                echo "<td> <form method='POST' action ='registrar.php'> <button type='submit' title='modifi' name='valorModificar' value='$fila->id'> $fila->id </button></form></td>";
                               
                            echo "</tr>";
                        }                   
                     
                    ?>
                </tbody>
            </table>
        </main>
    </body>

</html>