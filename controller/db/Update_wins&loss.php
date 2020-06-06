<?php
require __DIR__ . "./../DbHandler.php";
use Db\DbHandler;

$db = new DbHandler();


$id = (int)$_POST['id'];
$loss = (int)$_POST['loss'];
$wins = (int)$_POST['wins'];

$db->update("UPDATE cats SET wins = '$wins', loss = '$loss' WHERE id = '$id'");