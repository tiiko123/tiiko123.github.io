
<?php

$tabla=5;
$resultados=10;






?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
 



    <table border="2">
        <tr>
            <td>numero</td>
            <td>multiplicar</td>
            <td>resultado</td>
        </tr>
            <?php
                for($i = 0; $i<=$resultados;$i++){
                   echo" <tr>";
                            echo "<td>". $i   ."</td>";
                            echo "<td> x $tabla   </td>";
                            echo "<td> =". ($i*$tabla)."</td>";
                    echo "</tr>";
                }
            ?>
    </table>
    <?php




    ?>
    
</body>
</html>