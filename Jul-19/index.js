// Simple Arrow function
// let sum = (a, b) => {
//   let sum = a + b;
//   return sum;
// }

// console.log(sum(10, 25));

// Arrow function with 1 parameter.
// let alert2 = str => {
//   alert(str);
// }

// alert("Hello world");

// Arrow function with 0 parameters.
// let sayHello = _ => {
//   console.log("Hello world");
// }

// sayHello();

// Task 1 -> Create an arrow function to alert "Button clicked" on an event listener for click event.

// addEventListener('click', () => {})


let btn_element = document.getElementById("btn1");
btn_element.addEventListener('click', _ => {
  alert("Button clicked");
});

console.log("Message 1");
console.log("Message 2");
console.log("Message 3");
console.log("Message 4");
console.log("Message 5");
console.log("Message 6");
console.log("Message 7");
console.log("Message 8");
console.log("Message 9");
console.log("Message 10");