//Destructuring

const arr = ["ABCD", "EFGH", 1234];

//a, b, c
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c);

//Destructuring
const [x, y, z] = arr;

console.log(x, y, z);


// Object destructuring

const obj = {
  first_name: "Aayush",
  last_name: "Sinha", 
  role: "Educator"
};

const fname = obj.first_name;
const lname = obj.last_name;
const my_role = obj.role;

console.log(fname, lname, my_role);

// Destructuring way
const { last_name, role: role1, first_name } = obj;

console.log(first_name, last_name, role1);

//Bypassing the same variable name rule.

const {first_name: fn, last_name: ln, role: r} = obj;

console.log(fn, ln, r);

const obj2 = {
  first_name: "Navjeet",
  last_name: "Singh",
  role: obj.role
}


// document.getElementById("btn").addEventListener("click", _ => alert('button clicked'));

// setInterval(_ => console.log("ABCD"), 1000);

console.log(_ => alert("ABCD"));
/*
  1. The anonymous function that we are sending is NOT a callback.
  - Callbacks are those functions that we send as an argument and they are later executed by the function.
  - Sending ✔️
  - Execution ❌
  2. HOF is a function that accepts callbacks. But since this is NOT a callback.
  - The console.log function is NOT an HOF.
  - This means console.log is FOF.
*/

// Execute immediate whenever it is loaded.
// Make it secure, it should never be executed again.

// Arrow function IIFE
(() => {
  //Logic.
  console.log("Initialization");
})();

//Regular IIFE
(function() {
  console.log("Another initialization");
})();