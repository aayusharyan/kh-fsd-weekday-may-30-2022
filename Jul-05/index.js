// // alert("Mic check");

// let counter = 0;
// function increment() {
//   counter = counter + 1;
//   let p = document.getElementById("op");
//   console.log(p);
//   p.innerText = counter;
// }


// let p = document.getElementsByClassName("something");
// console.log(p);

// let s = document.getElementsByTagName("span");
// console.log(s);

// document.getElementsByName();

// document.querySelector("[attr=value]");
// document.querySelectorAll();

//I want to access all the inputs that are required in a page.
// let s = document.querySelectorAll("[required]");
// console.log(s);

// let i = document.getElementById("some_input");
// i.value;

function check_password() {
  let ip = document.getElementById("pass");
  let pass = ip.value;
  if(pass.length > 5) {
    alert("You can proceed");
  } else {
    alert("Use better password");
  }
}

function show_password() {
  let ip = document.getElementById("pass")
  ip.type = "text";
}

function hide_password() {
  let ip = document.getElementById("pass");
  ip.type = "password";
}

//You have 2 input fields and 1 button and a paragraph tag
//When I click on the button. check if both the passwords are same.
//If they are same, on the paragh tag, change the innerText to Same
//Otherwise, change the innerText to "Passwords don't match".

function add_new_list_item() {
  let l = document.createElement("li");
  l.innerText = "Created using JS function";

  // let i = document.createElement("img");
  // i.src = "https:/dfgjdhgkjd";

  let c = document.getElementById("container");
  c.appendChild(l);


  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  td1.innerText = "Col 1";
  td2.innerText = "Col 2";

  tr.appendChild(td1);
  tr.appendChild(td2);

  let t_container = document.getElementById("table_container");
  t_container.appendChild(tr);
}