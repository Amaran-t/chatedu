<?php

include 'connect.php';

if($_POST['text']){
    $text = $_POST['text'];

    $sql = "INSERT INTO text (message) VALUES ('".$text."')";
    $conn->query($sql);
}

if($_POST['get']){
    $sql = "SELECT * FROM text ORDER BY id DESC";
    $result = $conn->query($sql);

    while($row = $result->fetch_assoc()){
        echo "<li class='list-group-item's>".$row['message']."</li>";
    }
}
