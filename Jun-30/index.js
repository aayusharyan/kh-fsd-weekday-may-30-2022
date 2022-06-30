// let names = ["aman", "unnati", "navjeet", "tejaswi", "apurva", "amod", "shiveio"];
// let max_string = names[0];

// for(let i = 0; i < names.length; i = i + 1) {
//   let single_name = names[i];

//   let current_vowels = 0;
  
//   // Loop on every CHARACTER of single_name String to count the number of Vowels.
//   for(let j = 0; j < single_name.length; j = j + 1) {
//     let single_character = single_name[j];

//     switch(single_character) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//       case 'A':
//       case 'E':
//       case 'I':
//       case 'O':
//       case 'U':
//         current_vowels = current_vowels + 1;
//         break;
//     }
//   }


//   let max_vowels = 0;
//   // Loop on every CHARACTER of max_String String to count the number of vowels.
//   for(let j = 0; j < max_string.length; j = j + 1) {
//     let single_character = max_string[j];

//     switch(single_character) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//       case 'A':
//       case 'E':
//       case 'I':
//       case 'O':
//       case 'U':
//         max_vowels = max_vowels + 1;
//         break;
//     }
//   }

//   if(current_vowels > max_vowels) {
//     max_string = single_name;
//   }
// }

// console.log(max_string);


// Task -> Assume an array of names and print the name that is the longest.
// let names = ["aman", "unnati", "navjeet", "tejaswi", "apurva", "amod", "shiveio"];
// let max_string = names[0];

// for(let i = 0; i < names.length; i = i + 1) {
//   let single_name = names[i];

//   if(single_name.length > max_string.length) {
//     max_string = single_name;
//   }
// }

// console.log(max_string);

// Function Definition.
function sum_3_5 () {
  let number1 = 3;
  let number2 = 5;
  console.log(number1 + number2);
}


// Function calling (invocation)
// sum_3_5();
// sum_3_5();
// sum_3_5();
// sum_3_5();


function button_clicked() {
  console.log("Button is clicked");
}

// Task -> Create a button and when I click on that button, 
// print a series of all the odd numbers from 9 to 1 
// [USE a for loop inside a function] -> 9, 7, 5, 3, 1

function print_reverse() {
  for(let i = 10; i > 0; i = i - 1) {
    if(i % 2 != 0) {
      console.log(i);
    }
  }
}

// Paramters and Arguments.
// Return

// Function Definition - Parameter
// Formal Parameter
// function add_10(num1) {
//   let sum = num1 + 10;
//   console.log(sum);
// }


// // Function calling - Argument
// // Actual Parameter
// add_10(25);
// add_10(14);

// function sum(num1, num2, num3) {
//   let sum = num1 + num2 + num3;
//   // console.log(sum);
//   return sum;
// }

// let total = sum(10, 4, 8);
// console.log(total + " is this value");



// function get_vowel_count(str) {
//   let counter = 0;
//   for(let j = 0; j < str.length; j = j + 1) {
//     let single_character = str[j];

//     switch(single_character) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//       case 'A':
//       case 'E':
//       case 'I':
//       case 'O':
//       case 'U':
//         counter = counter + 1;
//         break;
//     }
//   }
//   return counter;
// }

// let count = get_vowel_count("Chakradhar");
// console.log(count);


// let names = ["aman", "unnati", "navjeet", "tejaswi", "apurva", "amod", "shiveio"];
// let max_string = names[0];

// for(let i = 0; i < names.length; i = i + 1) {
//   let current_vowel_count    = get_vowel_count(names[i]);
//   let max_string_vowel_count = get_vowel_count(max_string);

//   if(current_vowel_count > max_string_vowel_count) {
//     max_string = names[i];
//   }
// }

// console.log(max_string);


// Task -> Write a function, that takes 4 numbers and returns the average of those 4.



// Task 1. -> Write a function which takes a number and returns whether it is a prime number or not.
// Task 2. -> Write a loop from 1 to 100 and PRINT the sum of all prime numbers. To check for every number, use the function created in Task 1.