let input = document.querySelector("input");
let from = document.querySelector("#from");
let to = document.querySelector("#to");
let btn = document.querySelector("button");

let left_one = document.querySelector(".left1");
let left_two = document.querySelector(".left2");
let right_one = document.querySelector(".right1");
let right_two = document.querySelector(".right2");

btn.addEventListener("click", () => {

  let value = Number(input.value);

  // Validation
  if (isNaN(value) || value === "") {
    alert("Please enter a valid number");
    return;
  }

  let result;

  // Show left side
  left_one.innerText = value;
  left_two.innerText = from.value;

  // ---------- FROM KILOGRAM ----------
  if (from.value === "Kg") {

    if (to.value === "Kg") {
      result = value;
    }
    else if (to.value === "G") {
      result = value * 1000;
    }
    else if (to.value === "lb") {
      result = value * 2.20462;
    }

  }

  // ---------- FROM GRAM ----------
  else if (from.value === "G") {

    if (to.value === "Kg") {
      result = value / 1000;
    }
    else if (to.value === "G") {
      result = value;
    }
    else if (to.value === "lb") {
      result = value / 453.592;
    }

  }

  // ---------- FROM POUND ----------
  else if (from.value === "lb") {

    if (to.value === "Kg") {
      result = value / 2.20462;
    }
    else if (to.value === "G") {
      result = value * 453.592;
    }
    else if (to.value === "lb") {
      result = value;
    }

  }

  // Show right side
  right_one.innerText = result.toFixed(3);
  right_two.innerText = to.value;

});
