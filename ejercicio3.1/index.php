<?php
    //Esto es codigo php

    $edad =20;
    $nombre = "Juan Pérez";
    $trabaja = true;
    $altura = 1.80;

                    //0        1        2
    $colores = array("amarillo","rojo","azul");

    $alumnos = array(
        "123"=>"Juan Peres",
        "456"=>"Monita",
        "789"=>"Mario G"
    );

    $alumno1=(object)["Matricula" =>"1830275",
                    "Nombre"=>"Felipe Perez",
                    "Carrera"=>"ITI",
                    "Promedio"=>7.71,
                    "colores"=>$colores
                    ];


    echo "nombre: ". $nombre . "<br>";

    
    echo "edad: ". $edad . "<br>";

   

    echo "altura: ". $altura . "<br>";

    echo "trabaja: ". ($trabaja?"SI":"NO") . "<br>";
    
    echo "Color: ". $colores[0]. "<br>";
    
    echo "alumno: ". $alumnos["123"]. "<br>";
    

    var_dump($colores);

    echo "<br>";
    print_r($alumnos);
    echo "<br>";

    var_dump($alumno1);
    echo "<br>";

    for($i = 0; $i<10; $i++){
        echo "Ciclo For i=". $i. "<br>";
    }

    echo "<br>";
    $i=0;
    while($i<10){
        echo "Ciclo while i=". $i. "<br>";
        $i++;
    }
    echo "<br>";
    $j=0;
    do{
        echo "Ciclo dowhile j=". $j. "<br>";
        $j++;
        
        

    }while($j<10);
    echo "<br>";
    //$i=1;
    foreach ($colores as $color) {
        echo "Color $i: $color <br>";
      //  $i++;
    }



    echo "<br>";
  //  $i=1;
    foreach ($alumnos as $matricula => $nombre) {
        echo "Matricula $matricula: $nombre <br>";
       // $i++;
    }


    /*foreach ($alumnos as $key => $value) {
        # code...
    }*/
    /*
    if($trabaja == true){
        echo "Trabaja<br>";
    }else{
        echo "No trabaja<br>";
    }*/
 
  
  
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Aqui deben aparecer</h1>

    <?php

        for($i = 0; $i<10; $i++){
            echo "<h2> subtitulo". ($i+1)."</h2>";
        }



    ?>







</body>
</html>