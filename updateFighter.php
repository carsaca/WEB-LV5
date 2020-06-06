<?php

require "./controller/DbHandler.php";

use Db\DbHandler;

$db = new DbHandler();
$id = $_GET['id'];
$cats = $db->select("SELECT * FROM cats WHERE id = '$id'");

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
</head>

<body>
<div class="row mx-5 mt-2" style="position: relative;">
<h2>CFC 3 - UPDATE FIGHTER</h2>
</div>
    <form action="#" class="mx-5" >
    <div class="form-group row ">
    <label for="name" class="col-sm-1 col-form-label">Name</label>
        <input name="name" type="text" class="form-control col-sm-4 form-control-sm" require value="<?php foreach($cats as $cat) echo $cat['name'];?>"/>
    </div>
    <div class="form-group row" >
    <label for="age" class="col-sm-1 col-form-label">Age</label>
        <input name="age" type="number" class="form-control col-sm-4 form-control-sm" require value="<?php foreach($cats as $cat) {echo $cat['age'];}?>"/>
    </div>
    <div class="form-group row">
    <label for="info" class="col-sm-1 col-form-label">Cat info</label>
        <input name="info" type="text" class="form-control col-sm-4 form-control-sm" require value="<?php foreach($cats as $cat) {echo $cat['catInfo'];}?>"/>
    </div>

    <div class="form-group row">
    <label for="wins" class="col-sm-1 col-form-label">Wins</label>
        <input name="wins" type="number" class="form-control col-sm-1 form-control-sm" require value="<?php foreach($cats as $cat) {echo $cat['wins'];}?>"/>
    <div class="col-sm-1"></div>
    <label for="loss" class="col-sm-1 col-form-label">Loss</label>
        <input name="loss" type="number" class="form-control col-sm-1 form-control-sm" require value="<?php foreach($cats as $cat) {echo $cat['loss'];}?>"/>
    </div>

    <div class="form-group row">
    <label for="image" class="col-sm-1 col-form-label">Cat Image</label>
        <input name="image" type="file" class="form-control col-sm-4 form-control-sm"  value="<?php foreach($cats as $cat) {echo $cat['image'];}?>"/>
    </div>
    
    <input id="update" name="update" type="submit" value="Update" class="btn btn-primary"/>
    
    </form>
    
<div class="row mx-5 mt-1">
    <a href="./index.php" class="btn btn-secondary align-middle" style="position: relative;
    right: 0;">Back</a>   
    <div class="col-sm-5"></div>
    <button id="delete" type="delete" class="btn btn-secondary" style="float:right" name="delete" >Delete fighter</button>
</div>

<script type="text/javascript"> var catID = <?php echo $id;?>;  </script>
<script src="./src/updateCat.js"></script>
</body>

</html>
