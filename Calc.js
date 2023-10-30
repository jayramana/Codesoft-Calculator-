function isDigitString(input) {
  return /^[0-9]+$/.test(input);
}
let on = document.querySelector(".on");

let off = document.querySelector(".off");
let message = document.querySelector(".message");
let del = document.querySelector(".c");
let inputallow = true;
let expr = document.querySelector(".inp");
let str = "";

const updateInputDisplay = () => {
  expr.textContent = str;
};

on.addEventListener("click", () => {
  const msg = () => {
    // Show the message
    message.style.display = "block";
    inputallow = true;

    // Set a timer to hide the message after 3 seconds (3000 milliseconds)
    setTimeout(function () {
      message.style.display = "none";
    }, 3000);
  };
  msg();


  let btn = document.querySelectorAll(".btn");
  let output = document.querySelector(".output");
  let eql = document.querySelector(".equal");
  let AC = document.querySelector(".ac");
  AC.addEventListener("click", () => {
    let output = document.querySelector(".output");
    let expr = document.querySelector(".inp");
    str = "";
    expr.textContent = "";
    output.textContent = "";
    console.log(10);
  });
  del.addEventListener("click", () => {
    if (str.length > 0) {
      str = str.slice(0, -1);
      updateInputDisplay();
    }
  });

  if (inputallow) {
    btn.forEach((each) => {
      let expr = document.querySelector(".inp");
      each.addEventListener("click", () => {
        if (each.textContent == 0 && str == "") {
          console.log(10);
        } else {
          str += each.textContent;
        }
        console.log(str);
        if (
          !str[str.length - 1] == isDigitString(str[str.length - 1]) &&
          !str[str.length - 2] == isDigitString(str[str.length - 2])
        ) {
          output.textContent = "Error";
        }
        expr.textContent = str;
      });
    });
  }

  eql.addEventListener("click", () => {
    let ans = eval(str);
    output.textContent = ans;
  });
  off.addEventListener("click", () => {
    inputallow = false;
    // btn.forEach((each) => {
    //   each.removeEventListener("click", buttonClickHandler);
    // });
    let output = document.querySelector(".output");
    let expr = document.querySelector(".inp");
    str = "";
    expr.textContent = "";
    output.textContent = "";
    msg();
    console.log(10);
  });
});

del.addEventListener("click", () => {
  console.log("Del");
});
