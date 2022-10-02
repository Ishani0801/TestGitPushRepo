// let enteredName = prompt(`What's the "official" name of JavaScript?`);

// if (enteredName == "ECMAScript") {
//   alert("Right!");
// } else {
//   alert(`You don't know? "ECMAScript"!`);
// }

// let enteredNumber = prompt(`Please input a number: `);

// if (enteredNumber == 0) {
//   alert(0);
// } else if (enteredNumber > 0) {
//   alert(1);
// } else if (enteredNumber < 0) {
//   alert(-1);
// }

// let result;

// if (a + b < 4) {
//   result = "Below";
// } else {
//   result = "Over";
// }
let a = 1,
  b = 1;
let result = a + b < 4 ? "Below" : "Over";

// let message;

// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }
let login;
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";

// if (age >= 14 && age <= 90) {
// }

// if (age <= 14 || age >= 90) {
// }
// if (!(age >= 14 && age <= 90)) {
// }
// if (!(age >= 14 && age <= 90){

// }
// if (age < 14 || age > 90){}

let userName = prompt(`Who's there?`);

if (userName == "" || userName == null) {
  alert("Canceled");
} else if (userName != "Admin") {
  alert(`I don't know you`);
} else if (userName == "Admin") {
  let password = prompt(`Password?`);

  if (password == "" || password == null) {
    alert("Canceled");
  } else if (password != "TheMaster") {
    alert("Wrong Password");
  } else if (password == "TheMaster") {
    alert("Welcome!");
  }
}
