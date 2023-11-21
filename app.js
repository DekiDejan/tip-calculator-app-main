let bill = document.querySelector(".bill-wrap input");
let btn = document.querySelectorAll(".btn");
let custom = document.querySelector(".custom");
let people = document.querySelector(".number-of-people-wrap input");
let reset = document.querySelector(".reset");
let price = document.querySelector(".tip-amount-price");
let total = document.querySelector(".total-price");
let zero = document.querySelector(".zero");

let tip = 0;
btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    tip = e.target.value;
  });
});

custom.addEventListener("keyup", () => {
  tip = custom.value;
});

people.addEventListener("keyup", () => {
  if (people.value == 0) {
    zero.style.visibility = "visible";
  } else {
    let amountPerson = (bill.value * tip) / 100 / people.value;
    price.innerHTML = `$${amountPerson.toFixed(2)}`;
    let totalPerson = ((bill.value * tip) / 100 + +bill.value) / people.value;
    total.innerHTML = `$${totalPerson.toFixed(2)}`;
    zero.style.visibility = "hidden";
  }
});

reset.addEventListener("click", () => {
  price.innerHTML = "$0.00";
  total.innerHTML = "$0.00";
  bill.value = "";
  custom.value = "";
  people.value = "";
  zero.style.visibility = "hidden";
});
