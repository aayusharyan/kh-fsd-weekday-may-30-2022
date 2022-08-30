console.log("Hello World");


const my_name = "Aayush Sinha";

console.log(`My name is ${my_name}`);

//Create a CLI code to print a random number between 1 and 10 every time it is called.

/*
 - 1.84
 - 3.17
 - 2.16
 - 9.08
 - 7.99
*/

let num = Math.random() * 10;
// console.log(num.toFixed(2));

num = num * 100;
num = Math.floor(num);
num = num / 100;
console.log(num);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// readline.question('Who are you?', (ans) => {
//   console.log(`Hi ${ans} welcome...`);
//   readline.question("SDFDF", () => {

//     readline.close();
//   })
// });

//Use prompt and take two numbers and print their sum.
// readline.question("Enter first number", ans => {
//   readline.question("Enter second number", ans2 => {

//     ans = parseFloat(ans);
//     ans2 = parseFloat(ans2);

//     console.log(ans + ans2);    

//     readline.close();
//   });
// });

// readline.question("enter first number", ans => {
//   readline.question("enter secont number", ans2 => {

//       ans = parseFloat(ans);
//       ans2 = parseFloat(ans2);

//       console.log(ans + ans2);
//       readline.close();

//   });
// });