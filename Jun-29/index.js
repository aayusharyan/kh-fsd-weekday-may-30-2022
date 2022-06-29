console.log("Hey");

//Task - Assume a number and check whether it is prime or not.
// 2 -> (number-1)

// let number = 31;
// let counter = 2;
// let isPrime = true;

// while(counter <= number - 1) {
//   if(number % counter == 0) {
//     isPrime = false;
//   }
//   counter = counter + 1;
// }

// if(isPrime == true) {
//   console.log("Prime number");
// } else {
//   console.log("Not a prime number");
// }


// let number = 31;
// let times_divided = 0;


// let counter = 1;
// while(counter <= number) {
//   if(number % counter == 0) {
//     times_divided = times_divided + 1;
//   }
//   counter = counter + 1;
// }

// if(times_divided == 2) {
//   console.log("Prime number");
// } else {
//   console.log("Not a prime number");
// }

// let abcd = [1, 2, 3, 4, "str", false, 5, 0.7];
// console.log(abcd);

// console.log(abcd[4]);

// let new_abcd = ["a", "b", "23", "string", false, "something", 99];
// console.log(new_abcd[5]);


// Task -> Assume an array, and print the sum of all elements of that array.
// let my_array = [2, 4, 10, 40, 20, 18];
// let sum = 0;

// let idx = 0;
// while(idx < 6) {
//   sum = sum + my_array[idx];
//   idx = idx + 1;
// }

// console.log(sum);

//Task -> Assume an array and print the maximum element from that array.
// [2, 3, 5, 6, 1, 2, 0]; -> 6

// let my_arr = [2, 3, 5, 6, 1, 2, 0, 10, 12, 0, 8, 1, 1, 2, 1, 4, 5];
// let max = my_arr[0];

// let idx = 0;
// while(idx < my_arr.length) {
//   if(my_arr[idx] > max) {
//     max = my_arr[idx];
//   }
//   idx = idx + 1;
// }

// console.log(max);

// let another_arr = [1, 4, 6, 7];
// console.log(another_arr.length);

// let my_arr = [2, 3, 5, 6, 1, 2, 0, 10, 12, 0, 8, 1, 1, 2, 1, 4, 5];
// let max = my_arr[0]; //0

// for(let idx = 0; idx < my_arr.length; idx = idx + 1) {
//   if(my_arr[idx] > max) {
//     max = my_arr[idx];
//   }
// }

// console.log(max);

// Task -> [USE A FOR LOOP, MANDATORY] Assume an array and return the minimum element.
// let my_arr = [2, 3, 5, 6, 1, 2, 0, 10, 12, 0, 8, 1, 1, 2, 1, 4, 5, -18];
// let min = my_arr[0];

// for(let idx = 0; idx < my_arr.length; idx = idx + 1) {
//   if(my_arr[idx] < min) {
//     min = my_arr[idx];
//   }
// }

// console.log(min);

// let my_name = "Aayush";
// for(let idx = 0; idx < my_name.length; idx = idx + 1) {
//   console.log(my_name[idx]);
// }

// console.log(typeof my_name);


// let my_arr = [1, 2, 3, "something", false];
// console.log(my_arr[99999]);

// let a;
// console.log(typeof a);


// Task -> A, B, C, D, F.
// A -> "Percentage is more than 90%";
// B -> "Percentage is between 75% to 89.99%";
// C -> "Percentage is between 60% to 74.99%";
// D -> "Percentage is between 40% to 59.99%";
// F -> "Student Failed";
// Z, X, Y -> "Invalid input"

let grade = "D";

if(grade == "A") {
  console.log("Percentage is more than 90%");
} else if(grade == "B") {
  console.log("Percentage is between 75% to 89.99%");
} else if(grade == "C") {
  console.log("Percentage is between 60% to 74.99%");
} else if(grade == "D") {
  console.log("Percentage is between 40% to 59.99%");
} else if (grade == "F") {
  console.log("Student Failed");
} else {
  console.log("Invalid Input");
}

switch(grade) {
  case "A":
    console.log("Percentage is more than 90%");
    break;
  case "B":
    console.log("Percentage is between 75% to 89.99%");
    break;
  case "C":
    console.log("Percentage is between 60% to 74.99%");
    break;
  case "D":
    console.log("Percentage is between 40% to 59.99%");
    break;
  case "F":
    console.log("Student Failed");
    break;
  default:
    console.log("Invalid Input");
    break;
}