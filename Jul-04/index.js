function hello_world() {
  console.log("Hello Everyone");
}

hello_world();

// let tmp = 10n;
// console.log(typeof tmp);

let session_information = {
  'instructor_name': "Aayush Sinha",
  'date': "July-04",
  'is_live': true,
  "participants": ["Kaustubh", "Apurva", "Aman", "Vaibhav", "Sandeep", "Harika", "Ritesh"]
};

// console.log(session_information);

// console.log(session_information["instructor_name"]);

// let key = prompt();
// let key = "date";
// console.log(session_information[key]); //USE THIS when key is in a variable.

// key = "is_live";
// console.log(session_information[key]);

// console.log(session_information["instructor_name"]);
// console.log(session_information.instructor_name); //For all other cases, when you know the key, use this.

// session_information.today_topic = "JavaScript";
// console.log(session_information);

// let a = [];
// a.push(10);
// a.push("Aayush");

//READ More -> splice function -> Delete from array.

// session_information.hello = function() {
//   console.log("Hello from session");
// }

// session_information.hello();

let calculator = {
  'name': "My Calculator",
  "sum": function(a, b) {
    let s = a + b;
    return s;
  },
  // "sub"
  // "mul"
  // "div"
}

// let sum_result = calculator.sum(10, 25);
// console.log(sum_result);

// calculator.sum(10, 25);
// console.log("ABCD");

// console.log(console);
// console.log("ABCD");
// console.info("ABCD");

// console.log(typeof document);
// document.write("Hey everyone"); //❌ - This is not a good pratice. 

// Create a button in HTML. Write a function and onclick 
// of that button, do document.write()


function fun() {
  let p = document.getElementById("some_para");
  // console.log(p);
  p.innerText = "Hey everyone";
}