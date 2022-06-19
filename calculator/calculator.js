console.log("calculator");
let screen = document.getElementById("screen");
//selecting all buttons
let buttons = document.querySelectorAll("button");
//setting screen value
let screenValue = "";
for (let items of buttons) {
  items.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    console.log(`button text is ${buttonText}`);

    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
