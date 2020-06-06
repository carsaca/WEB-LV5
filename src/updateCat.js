//var: catID

let updateButton = document.querySelector("#update");

updateButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    const form = document.querySelector("form");
    const data = new FormData(form);
    console.log(data);
    fetch("controller/db/Update_cat.php"+'?id='+ catID, {
      method: "post",
      body: data,
    })
      .then((res) => res.text())
      .then(res=> console.log(res))
      .then((res) => (window.location.href = "./index.php"));
    
  });


  let deleteButton = document.querySelector("#delete");

  deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(catID);
    
    
    fetch("controller/db/Delete_cat.php"  +'?id='+ catID)
      .then((res) => res.text())
      .then(res=> console.log(res))
      .then((res) => (window.location.href = "./index.php"));
    
  });