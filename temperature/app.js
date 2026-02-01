let inp = document.querySelector("input");
let from = document.querySelector("#from");
let to  = document.querySelector("#to");
let btn = document.querySelector("button");
let left1 = document.querySelector(".left1");
let left2 = document.querySelector(".left2");
let right1 = document.querySelector(".right1");
let right2 = document.querySelector(".right2");


btn.addEventListener( 'click' , function() {

    if( from.value == 'C') {
         left2.innerText = from.value;
         left1.innerHTML = `${inp.value}<sup>o</sup>`;

        if( to.value == 'C' ) {
            right2.innerText = to.value;
            right1.innerHTML = `${inp.value}<sup>o</sup>`;
        }
        else if( to.value == 'F' ) {
            right2.innerText = to.value;
            right1.innerHTML = `${inp.value * 9/5 + 32}<sup>o</sup>`;
        }
        else if( to.value == 'K' ) {
            right2.innerText = to.value;
            right1.innerHTML = `${inp.value * 1 + 273.15}<sup>o</sup>`;
        }

    }

    else if( from.value == 'K' ) {
        left2.innerText = from.value;
        left1.innerHTML = `${inp.value}<sup>o</sup>`;
        if( to.value == 'C' ) {
            right2.innerText = to.value;
             right1.innerHTML = `${inp.value - 273.15}<sup>o</sup>`;
            
        }
        else if( to.value == 'F' ) {
            right2.innerText = to.value;
               right1.innerHTML = `${(inp.value - 273.15) * 9/5 + 32}<sup>o</sup>`;
        }
        else if( to.value == 'K' ) {
           right2.innerText = to.value;
              right1.innerHTML = `${inp.value * 1}<sup>o</sup>`;
           
        }
    }

    else if( from.value == 'F' ) {
        left1.innerHTML = `${inp.value}<sup>o</sup>`;
        left2.innerText = from.value;
         if( to.value == 'C' ) {
             right2.innerText = to.value;
              right1.innerHTML = `${(inp.value - 32) * 5/9}<sup>o</sup>`;
        }
       else if( to.value == 'F' ) {
            right2.innerText = to.value;
             right1.innerHTML = `${inp.value * 1}<sup>o</sup>`;
        }
       else  if( to.value == 'K' ) {
            right2.innerText = to.value;
             right1.innerHTML = `${(inp.value - 32) * 5/9 + 273.15}<sup>o</sup>`;
        }
    }
} )