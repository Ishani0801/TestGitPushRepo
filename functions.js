// function sayHello(a) {
//   a = a || "absurd value";
//   alert(a);
// }

// sayHello("Hello");
// sayHello(""); //absurd value
// sayHello(" ");
// sayHello(undefined); //absurd value
// sayHello(null); //absurd value
// sayHello(false); //absurd value

// let result = confirm("Are you sure?");
// alert(result);

// function checkAge(age) {
//   return age > 18 ? true : confirm("Did parents allow you?");
// }
// alert(checkAge(19));
// alert(checkAge(12));

// function checkAge(age) {
//   return age > 18 || confirm("Did parents allow you?");
// }

// alert(checkAge(19));
// alert(checkAge(12));

// function min(a, b) {
//   return a < b ? a : b;
// }

// alert(min(2, 3));
// alert(min(-2, 3));
let x = prompt("x?");
let n = prompt("n?");
function pow(x, n) {
  return Math.pow(x, n);
}

alert(pow(x, n));
