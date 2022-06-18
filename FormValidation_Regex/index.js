console.log("travel desk");

let validName = false;
let validEmail = false;
let validPhone = false;
// $("#failure").hide();
// $("#success").hide();

//get all elements needed to be validate
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

//to check if we able to retrive fields
console.log(username, email, phone);

//now validating functions

//for user name
username.addEventListener("blur", () => {
  console.log("blurFired on name field");
  //validation
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,20}$/;
  let str = username.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Valid UserName");
    username.classList.add("is-valid");
    username.classList.remove("is-invalid");
    validName = true;
  } else {
    console.log("Try Valid UserName");
    username.classList.add("is-invalid");
    username.classList.remove("is-valid");
    validName = false;
  }
});

//for email
email.addEventListener("blur", () => {
  console.log("email event");
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  if (regex.test(str)) {
    console.log("Your Email is valid");
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    console.log("Invalid Email");
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    validEmail = false;
  }
});

//for phone
phone.addEventListener("blur", () => {
  console.log("phone validate event");
  let regex = /^([0-9]){10}$/;
  let str = phone.value;
  if (regex.test(str)) {
    console.log("Valid Phone Number");
    phone.classList.add("is-valid");
    phone.classList.remove("is-invalid");
    validPhone = true;
  } else {
    console.log("invalid phone number");
    phone.classList.add("is-invalid");
    phone.classList.remove("is-valid");
    validPhone = false;
  }
});

//for submit button to function
let submit = document.getElementById("submit");
let success = document.getElementById("success");
let failure = document.getElementById("failure");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
  console.log(validName, validEmail, validPhone);

  //submit form here

  if (validName && validEmail && validPhone) {
    console.log("form submitted successfully");
    success.classList.add("show");
    failure.classList.remove("show");
    $("#failure").hide();
    $("#success").show();
  } else {
    console.log("Error in fields!!");
    success.classList.remove("show");
    failure.classList.add("show");
    $("#failure").show();
    $("#success").hide();
  }
});
