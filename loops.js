// for (i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     alert(i);
//   } else {
//     continue;
//   }
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// do {
//   let input = prompt("Enter a number greater than 100");
// } while (input < 100 && input != null);

// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

//Prime number program.

let input = prompt("Enter a number: ");

if (input < 2) {
  alert("Please enter a number greater than 2.");
} else {
  for (let i = 2; i <= input; i++) {
    if (i == 2) {
      alert(i);
    }
    if (i % 2 == 0) {
      continue;
    }
    let count = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count == 0) {
      alert(i);
    }
  }
}
