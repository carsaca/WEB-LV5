<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
</head>

<body>
<div class="row mx-5 mt-2" style="position: relative;">
<h2>CFC 3 - ADD FIGHTER</h2>
</div>
    <form action="#" class="mx-5" >
    <div class="form-group row ">
    <label for="name" class="col-sm-1 col-form-label">Name</label>
        <input name="name" type="text" required  class="form-control col-sm-4 form-control-sm"/>
    </div>
    <div class="form-group row" >
    <label for="age" class="col-sm-1 col-form-label">Age</label>
        <input name="age" type="number" required  class="form-control col-sm-4 form-control-sm"/>
    </div>
    <div class="form-group row">
    <label for="info" class="col-sm-1 col-form-label">Cat info</label>
        <input name="info" type="text" required  class="form-control col-sm-4 form-control-sm"/>
    </div>

    <div class="form-group row">
    <label for="wins" class="col-sm-1 col-form-label">Wins</label>
        <input name="wins" type="number" required  class="form-control col-sm-1 form-control-sm"/>
    <div class="col-sm-1"></div>
    <label for="loss" class="col-sm-1 col-form-label">Loss</label>
        <input name="loss" type="number" required  class="form-control col-sm-1 form-control-sm"/>
    </div>

    <div class="form-group row">
    <label for="image" class="col-sm-1 col-form-label">Cat Image</label>
        <input name="image" type="file" required  class="form-control col-sm-4 form-control-sm"/>
    </div>
    
    <input id="submit" name="submit" type="submit" value="Submit" class="btn btn-primary"/>
    
    </form>
    
<div class="row mx-5 mt-2">
    <a href="./index.php" class="btn btn-secondary align-middle" style="position: relative;
    right: 0;">Back</a>   
</div>

<script src="./src/addCat.js"></script>
</body>

</html>
