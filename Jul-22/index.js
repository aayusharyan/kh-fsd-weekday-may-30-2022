
/*
Polymorphism in Java

public static void fn1(String str) {
  //Do something.
  return "result";
}

public static void fn1(Strting str, int n) {
  //Do something else,
  return "another result";
}

fn("ABCD"); //This calls the first function.
fn("ABCD", 100); //This calls the second function.


*/

// fetch()
// window.fetch()
// const response = fetch("https://reqres.in/api/users");
// console.log(response);


// response.then((data) => {
//   console.log(response);
//   // console.log(data);
//   let json = data.json();
//   console.log(json);
// });

// Task a
//Run a loop on res.data.
//For each of the item, docume.createElement(li).
//li.innerText -> item.email, item.first_name and item.last_name.

//Task b
//Put an image tag next to the name.
//Use single_data.avatar to get the src.

const display_data = res => {
  // console.log(res);
  console.log(res.data);
  const parent = document.getElementById("users");
  for(let i = 0; i < res.data.length; i = i + 1) {
    const single_data = res.data[i];

    const new_li = document.createElement("li");
    new_li.innerText = `${single_data.email} (${single_data.first_name} ${single_data.last_name})`;

    let new_img = document.createElement("img");
    new_img.src = single_data.avatar;

    new_li.appendChild(new_img);

    parent.appendChild(new_li);
  }
}

const fetch_promise = fetch("https://reqres.in/api/users");
fetch_promise.then(response => {
  const json_promise = response.json();
  json_promise.then(data => {
    display_data(data);
  });
});