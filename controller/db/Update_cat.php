<?php
require __DIR__ . "./../DbHandler.php";
use Db\DbHandler;

$db = new DbHandler();

$id = $_GET['id'];
$name = $_POST['name'];
$age = $_POST['age'];
$catinfo = $_POST['info'];
$wins = $_POST['wins'];
$loss = $_POST['loss'];
$image = addslashes($_FILES['image']['tmp_name']);
if($image !==''){
    $image = file_get_contents($image);
    $image = base64_encode($image);
    echo "tuuu";
    $db->update("UPDATE cats SET name = '$name', age = '$age', catInfo = '$catinfo', wins = '$wins', loss = '$loss', image = '$image' WHERE id = '$id'");
}
else {

    echo "tuuuaa";
    $db->update("UPDATE cats SET name = '$name', age = '$age', catInfo = '$catinfo', wins = '$wins', loss = '$loss' WHERE id = '$id'");
}