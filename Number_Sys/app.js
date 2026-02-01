let input = document.querySelector(".temp_inp");
let from = document.querySelector("#from");
let to = document.querySelector("#to");
let btn = document.querySelector("button");

let left_one = document.querySelector(".left1");
let left_two = document.querySelector(".left2");
let right_one = document.querySelector(".right1");
let right_two = document.querySelector(".right2");


btn.addEventListener("click", () => {

  let value = input.value.trim();

  if (value === "") {
    alert("Please enter a number");
    return;
  }

  let fromBase, toBase;

  // Set bases
  if (from.value === "DEC") fromBase = 10;
  else if (from.value === "BIN") fromBase = 2;
  else if (from.value === "OCT") fromBase = 8;
  else if (from.value === "HEX") fromBase = 16;

  if (to.value === "DEC") toBase = 10;
  else if (to.value === "BIN") toBase = 2;
  else if (to.value === "OCT") toBase = 8;
  else if (to.value === "HEX") toBase = 16;


  // Convert input to decimal first
  let decimalValue = parseInt(value, fromBase);

  if (isNaN(decimalValue)) {
    alert("Invalid number for selected base!");
    return;
  }


  // Convert decimal to target base
  let result = decimalValue.toString(toBase).toUpperCase();


  // Show left side
  left_one.innerText = value;
  left_two.innerText = from.value;

  // Show right side
  right_one.innerText = result;
  right_two.innerText = to.value;

});
