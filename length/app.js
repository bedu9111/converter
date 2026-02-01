let input = document.querySelector("input");
let from = document.querySelector("#from");
let to  = document.querySelector("#to");
let btn = document.querySelector("button");
let left_one = document.querySelector(".left1");
let left_two = document.querySelector(".left2");
let right_one = document.querySelector(".right1");
let right_two = document.querySelector(".right2");

btn.addEventListener("click", () => {
  let value = input.value * 1;
  // ---------- FROM METER ----------
  if (from.value == 'M') {
    left_two.innerText = from.value;
    left_one.innerText = value;

    if (to.value == 'M') {
      right_two.innerText = to.value;
      right_one.innerText = value;
    } 
    else if (to.value == 'KM') {
      right_two.innerText = to.value;
      right_one.innerText = value / 1000;
    } 
    else if (to.value == 'CM') {
      right_two.innerText = to.value;
      right_one.innerText = value * 100;
    } 
    else if (to.value == 'I') {
      right_two.innerText = to.value;
      right_one.innerText = value * 39.3701;
    } 
    else if (to.value == 'F') {
      right_two.innerText = to.value;
      right_one.innerText = value * 3.28084;
    }
  }

  // ---------- FROM KILOMETER ----------
  else if (from.value == 'KM') {
    left_two.innerText = from.value;
    left_one.innerText = value;

    if (to.value == 'M') {
      right_two.innerText = to.value;
      right_one.innerText = value * 1000;
    } 
    else if (to.value == 'KM') {
      right_two.innerText = to.value;
      right_one.innerText = value;
    } 
    else if (to.value == 'CM') {
      right_two.innerText = to.value;
      right_one.innerText = value * 100000;
    } 
    else if (to.value == 'I') {
      right_two.innerText = to.value;
      right_one.innerText = value * 39370.1;
    } 
    else if (to.value == 'F') {
      right_two.innerText = to.value;
      right_one.innerText = value * 3280.84;
    }
  }

  // ---------- FROM CENTIMETER ----------
  else if (from.value == 'CM') {
    left_two.innerText = from.value;
    left_one.innerText = value;

    if (to.value == 'M') {
      right_two.innerText = to.value;
      right_one.innerText = value / 100;
    } 
    else if (to.value == 'KM') {
      right_two.innerText = to.value;
      right_one.innerText = value / 100000;
    } 
    else if (to.value == 'CM') {
      right_two.innerText = to.value;
      right_one.innerText = value;
    } 
    else if (to.value == 'I') {
      right_two.innerText = to.value;
      right_one.innerText = value / 2.54;
    } 
    else if (to.value == 'F') {
      right_two.innerText = to.value;
      right_one.innerText = value / 30.48;
    }
  }

  // ---------- FROM INCH ----------
  else if (from.value == 'I') {
    left_two.innerText = from.value;
    left_one.innerText = value;

    if (to.value == 'M') {
      right_two.innerText = to.value;
      right_one.innerText = value * 0.0254;
    } 
    else if (to.value == 'KM') {
      right_two.innerText = to.value;
      right_one.innerText = value * 0.0000254;
    } 
    else if (to.value == 'CM') {
      right_two.innerText = to.value;
      right_one.innerText = value * 2.54;
    } 
    else if (to.value == 'I') {
      right_two.innerText = to.value;
      right_one.innerText = value;
    } 
    else if (to.value == 'F') {
      right_two.innerText = to.value;
      right_one.innerText = value / 12;
    }
  }

  // ---------- FROM FOOT ----------
  else if (from.value == 'F') {
    left_two.innerText = from.value;
    left_one.innerText = value;

    if (to.value == 'M') {
      right_two.innerText = to.value;
      right_one.innerText = value * 0.3048;
    } 
    else if (to.value == 'KM') {
      right_two.innerText = to.value;
      right_one.innerText = value * 0.0003048;
    } 
    else if (to.value == 'CM') {
      right_two.innerText = to.value;
      right_one.innerText = value * 30.48;
    } 
    else if (to.value == 'I') {
      right_two.innerText = to.value;
      right_one.innerText = value * 12;
    } 
    else if (to.value == 'F') {
      right_two.innerText = to.value;
      right_one.innerText = value;
    }
  }
});