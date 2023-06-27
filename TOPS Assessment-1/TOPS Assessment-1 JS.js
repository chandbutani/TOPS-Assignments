let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let mobile = document.getElementById("mobile");
let gender = document.getElementsByName("Gender");
let dob = document.getElementById("DOB");
let address = document.getElementById("Address");
let city = document.getElementById("city");
let pin = document.getElementById("PIN");
let state = document.getElementById("state");
let qualification = document.getElementById("Qualification");
let specialization = document.getElementsByName("Specialization");
let password = document.getElementById("Password");
// console.log(password);

function validform(event) {
  if (firstname.value == "") {
    // console.log('empty');
    document.getElementById("firstnameerror").innerHTML = "enter your Fisrt Name";
    // firstname.setCustomValidity("enter your name");
    event.preventDefault();
  } else if (firstname.value.length < 3) {
    document.getElementById("firstnameerror").innerHTML = "min 3 charachter";
    // firstname.setCustomValidity("min 3 charachter");
    event.preventDefault();
  } else if (firstname.value.length > 10) {
    document.getElementById("firstnameerror").innerHTML = "max 10 charachter";
    // firstname.setCustomValidity("max 6 charachter");
    event.preventDefault();
  } else {
    document.getElementById("firstnameerror").innerHTML = "";
  }

  if (lastname.value == "") {
    document.getElementById("lastnameerror").innerHTML = "enter your Last Name";
    event.preventDefault();
  } else if (lastname.value.length < 3) {
    document.getElementById("lastnameerror").innerHTML = "min 3 charachter";
    event.preventDefault();
  } else if (lastname.value.length > 10) {
    document.getElementById("lastnameerror").innerHTML = "max 10 charachter";
    event.preventDefault();
  } else {
    document.getElementById("lastnameerror").innerHTML = "";
  }

  if (mobile.value == "") {
    document.getElementById("mobileerror").innerHTML = "enter your Mobile Number";
    event.preventDefault();
  } else if (mobile.value.length !== 10) {
    document.getElementById("mobileerror").innerHTML = "only 10 number";
    event.preventDefault();
  } else {
    document.getElementById("mobileerror").innerHTML = "";
  }

  if (!gender[0].checked && !gender[1].checked && !gender[2].checked) {
    document.getElementById("gendererror").innerHTML = "Please select gender";
    event.preventDefault();
  } else {
    document.getElementById("gendererror").innerHTML = "";
  }

  if (address.value == "") {
    document.getElementById("addresserror").innerHTML = "enter your address";
    event.preventDefault();
  } else {
    document.getElementById("addresserror").innerHTML = "";
  }
  if (city.value == "") {
    document.getElementById("cityerror").innerHTML = "enter your city";
    event.preventDefault();
  } else {
    document.getElementById("cityerror").innerHTML = "";
  }

  if (pin.value == "") {
    document.getElementById("pinerror").innerHTML = "enter area pin";
    event.preventDefault();
  } else if (pin.value.length !== 6) {
    console.log("yes");
    document.getElementById("pinerror").innerHTML = "Pin code should be 6 digits";
    event.preventDefault();
  } else {
    document.getElementById("pinerror").innerHTML = "";
  }

  if (state.value == "") {
    document.getElementById("stateerror").innerHTML = "enter your state";
    event.preventDefault();
  } else {
    document.getElementById("stateerror").innerHTML = "";
  }

  if (qualification.value == "Select Qualification") {
    document.getElementById("qualificationerror").innerHTML = "please select qualification";
    event.preventDefault();
  } else {
    document.getElementById("qualificationerror").innerHTML = "";
  }

  if (
    !specialization[0].checked &&
    !specialization[1].checked &&
    !specialization[2].checked &&
    !specialization[3].checked
  ) {
    document.getElementById("specializationerror").innerHTML = "please select specialization";
    event.preventDefault();
  } else {
    document.getElementById("specializationerror").innerHTML = "";
  }

  if (password.value == "") {
    document.getElementById("passworderror").innerHTML = "please enter password";
    event.preventDefault();
  } else if (password.value.length < 8 || password.value.length > 15) {
    document.getElementById("passworderror").innerHTML = "Password must be between 8 and 15 characters";
    event.preventDefault();
  } else {
    document.getElementById("passworderror").innerHTML = "";
  }
}
