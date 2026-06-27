function alertFunction() {
    alert("Button clicked");
}

const btn = document.querySelector("#btn");

btn.addEventListener("click",
    alertFunction
);

btn.addEventListener("click", function (e) {
    console.log(e.target);
    e.target.style.background = "blue";
    this.style.background = "red";
});

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", function (e) {
    alert(this.id)
  });
});