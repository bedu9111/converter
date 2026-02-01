let input = document.querySelector(".temp_inp");
let from = document.querySelector("#from");
let to = document.querySelector("#to");
let btn = document.querySelector("button");

let left_one = document.querySelector(".left1");
let left_two = document.querySelector(".left2");
let right_one = document.querySelector(".right1");
let right_two = document.querySelector(".right2");


/*
  Base currency: USD
  Rates are approximate
*/

const rates = {
  USD: 1,
  INR: 83.0,
  NPR: 132.5,
  EUR: 0.92
};


btn.addEventListener("click", () => {

  let value = Number(input.value);

  // Validation
  if (isNaN(value) || value <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  let fromCurrency = from.value;
  let toCurrency = to.value;

  // Show left side
  left_one.innerText = value;
  left_two.innerText = fromCurrency;

  /*
    Step 1: Convert to USD
    Step 2: Convert USD to target
  */

  let valueInUSD = value / rates[fromCurrency];
  let finalValue = valueInUSD * rates[toCurrency];

  // Show right side
  right_one.innerText = finalValue.toFixed(3);
  right_two.innerText = toCurrency;

});
