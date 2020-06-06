<?php
require __DIR__ . "./../DbHandler.php";
use Db\DbHandler;

$db = new DbHandler();

$name = $_POST['name'];
$age = $_POST['age'];
$catinfo = $_POST['info'];
$wins = $_POST['wins'];
$loss = $_POST['loss'];
$image = addslashes($_FILES['image']['tmp_name']);
$image = file_get_contents($image);
$image = base64_encode($image);

$db->insert("INSERT INTO cats(name, age, catInfo, wins, loss, image) VALUES ('$name', '$age', '$catinfo', '$wins', '$loss', '$image')");
