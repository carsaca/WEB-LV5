<?php
require __DIR__ . "./../DbHandler.php";

use Db\DbHandler;
$db = new DbHandler();
$id = $_GET['id'];
$db->delete("$id");