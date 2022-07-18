let first_name = "Aayush";
let last_name = "Sinha";
let role = "Educator";

let op = "Hi, I am " + first_name + " " + last_name + " and I am your " + role;

let op2 = `Hi, I am ${first_name} ${last_name} and I am your ${role}`;

document.write(op2);

// document.write(`1 + 1 = ${1+1}`);

// Frist way of creating a function
function hello(person_name) {
  console.log(`Hello ${person_name}`);
}
hello("Aayush");

//Way 2
let hello2 = function(person_name) {
  console.log(`Hello ${person_name}`);
}
hello2("Aayush");

let para_e = document.getElementById("para");
// para_e.innerText = "Hello <strong>World</strong>";
para_e.innerHTML = "Hello <strong>World</strong>";

para_e.innerHTML = para_e.innerHTML + ", I am back";


let add = function(a, b, c) {
  let sum = a + b;
  c(sum); //Function invocation
}

add(10, 15, function(result) {
  // Function definition.
  // alert(result);
  console.log(result);
})



let btn1_element = document.getElementById("btn1");
// btn1_element.onclick = function() {
//   alert("The button is clicked");
// }
btn1_element.addEventListener('click', function() {
  alert("The button is clicked");
});