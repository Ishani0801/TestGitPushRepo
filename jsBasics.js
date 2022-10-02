// var person = {
//   name: "Ishani",
//   age: 27,
//   isAlive: true,
//   getName: function () {
//     console.log("The name of the person is " + this.name);
//   },
// };

// console.log(Object.keys(person)); //returns an array of keys.

// for (var key in person) {
//   console.log(key); // returns keys
// }

// for (var key in person) {
//   console.log(person.key); //undefined 4 times
// }

// for (var key in person) {
//   console.log(person["key"]); //undefined 4 times
// }

// for (var key in person) {
//   console.log(person[key]); // returns values (for function returns the definition)
// }

// person.getName();
// person["getName"]();

// // setInterval(function () {
// //   console.log("Ishani");
// // }, 1000);

// setTimeout(function () {
//   console.log("Ishani");
// }, 1000);

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

// console.log(factorial(3));

// function print() {
//   console.log("Hello World");
// }

// var result = print();
// console.log(result);

// function addition(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(addition([1, 2, -1, 6, 3]));

//Alert => U have a button "Who am I?", when u click the button,
// u have to display "I am the best" in an h1 tag;
//------------------------done-------------------------
//Counter => 0 Increment Decrement
//-------------------------done----------------------------
//Alarm   => Set a date and time usign var.
//If time crosses the set value, u have to print Alarm ringing

// function handleClick() {
//   var el = document.createElement("h1");
//   el.setAttribute("id", "heading");
//   el.innerText = "I am the best";
//   document.getElementById("root").appendChild(el);
//   document.getElementById("heading").style.color = "green";
// }

// function handleClearClick() {
//   var ele = document.getElementById("root");
//   ele.innerText = "";
// }

// document.getElementById("btn").addEventListener("click", handleClick);
// document.getElementById("clr-btn").addEventListener("click", handleClearClick);
// var count = 0;
// function handleIncrementClick() {
//   var el = document.getElementById("root");
//   el.innerText = ++count;
// }

// function handleDecrementClick() {
//   var el = document.getElementById("root");
//   el.innerText = --count;
// }

// document
//   .getElementById("increment")
//   .addEventListener("click", handleIncrementClick);
// document
//   .getElementById("decrement")
//   .addEventListener("click", handleDecrementClick);

let person = {
  firstName: "Ishani",
  lastName: "Tiwari",
  getFullName: function () {
    console.log(this.firstName + this.lastName);
    var test = function (role) {
      console.log(this);
      console.log(role);
    }.apply(this, ["Developer"]);
  },
};

person.getFullName();

const obj = {
  name: "Ishani",
};
Object.freeze(obj);
obj.age = 27;

console.log(obj.age);
console.log(obj);

const a = [1, 2, 3];
const b = a;
//const b = [...a];

b[0] = 4;
console.log(a);

//alarm - input type datetime-local ---- use setinterval of 1sec

let el = document.createElement("input");
el.setAttribute("type", "datetime-local");
document.getElementById("input-tag").appendChild(el);

document
  .getElementById("input-tag")
  .addEventListener("change", function (event) {
    let intervalId = setInterval(function () {
      let currenttime = new Date().getTime();
      let selectedTime = event.target.value;
      let selectedTimeInMilliseconds = new Date(selectedTime).getTime();
      if (selectedTimeInMilliseconds - currenttime <= 0) {
        console.log("Alarm Ringing");
      }
    }, 1000);
  });

let el2 = document.createElement("button");
el2.innerText = "Stop Alarm";
el2.setAttribute("id", "stop-alarm");
document.getElementById("input-tag").appendChild(el2);

document.getElementById("stop-alarm").addEventListener("click", function () {
  clearInterval(intervalId);
});
