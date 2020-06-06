let submit = document.querySelector("#submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    if(allFilled(form)) {
      const data = new FormData(form);
    fetch("controller/db/Add_cat.php", {
      method: "post",
      body: data,
    })
      .then((res) => res.text())
      .then((res) => (window.location.href = "./index.php"));
    }  
  });