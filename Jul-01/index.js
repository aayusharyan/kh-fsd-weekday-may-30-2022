//This checkPrime function takes a number and returns true or false
//based on whether the number is prime or not.
function checkPrime(num) {
  let tick_counter = 0;
  for(let i = 1; i <= num; i = i + 1) {
    if(num % i == 0) {
      tick_counter = tick_counter + 1;
    }
  }

  if(tick_counter == 2) {
    return true;
  } else {
    return false;
  }
}

let abcd = checkPrime(14);
console.log(abcd);


// Function that takes a number as input and returns a boolean
// true -> even, false -> odd.
function is_odd_or_even(num1) {
  if(num1 % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

//Print the sum of even numbers from 0 to 10.
let sum = 0;
for(let i = 0; i <= 10; i = i + 1) {
  let is_number_even = is_odd_or_even(i);
  
  if(is_number_even == true) {
    sum = sum + i;
  }
}

console.log(sum);

function print_something() {
  // console.log('Something');
  // alert("Something");
  let abcd = prompt();
  console.log(abcd);
}

// Write a function to add 10 and 15 and show the result in an alert.
// Do that on button onclick;


// Task ->
// Create a button, when I click on the button. A prompt should open.
// I enter the string, then calculate the number of vowels in that string.
// Output that in the alert box.

// parseInt() //This takes a STRING as an input and returns a NUMBER as an output.


// let n = "15";
// n = parseInt(n);
// console.log(typeof n);
// console.log(n + 10);


//Take 2 numbers and give sum.

// function two_sum() {
//   let num1 = prompt();
//   let num2 = prompt();

//   // num1 = parseInt(num1);
//   // num2 = parseInt(num2);

//   let sum = num1 + num2;
//   alert(sum);
// }

//Create a button, create a function for onclick.
// When the button is clicked, take a number and print(alert) that from the
// FizzBuzz logic.