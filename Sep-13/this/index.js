// function abcd(a, b) {
//   console.log(a + b);
//   console.log(this);
// }

// // abcd(10, 20);

// const obj = {
//   key1: "Value 1",
//   key2: "Value 2",
//   key3: "Value 3",
// }

// abcd.call(obj, 10, 20);
// const args = [10, 20];
// abcd.apply(obj, args); //Immediately invoke the function.

// const binded_abcd = abcd.bind(obj); //Step 1, binding the this keyword

// console.log("Method is NOT called yet");

// binded_abcd(20, 30);


// class Book {
//   getInfo() {
//     console.log("This is a good book")
//   }
// }

// class Magazine {
//   getEdition() {
//     console.log("This is the latest edition");
//   }
// }

// const mag1 = new Magazine();
// mag1.getEdition();
// mag1.getInfo();


// function book() {
//   return {}
// };

// const b1 = book();
// b1.__proto__.getInfo = function () {
//   console.log("This is a good book");
// }

// function magazine() {
//   return {}
// };

// const m1 = magazine();

// m1.__proto__ = Object.create(b1.__proto__);


// m1.__proto__.getEdition = function() {
//   console.log("This is the latest edition");
// } 

// m1.getInfo();
// m1.getEdition();

// console.log(b1.getEdition);

// b1.getEdition(); //Type Error

// console.log(m1);

// function a() {
//   let data = "Something";

//   function b() {
//     console.log(data);
//   }

//   return b;
// }

// const reference_b = a();
// reference_b();

{
  const abcd_another = "Another AAAA";
}

const abcd = "AAAAA";

function sum(a) {
  function another_sum(b) {
    console.log(abcd);
    console.log(abcd_another);
    console.log(a + b);
  }

  return another_sum;
}

sum(10)(20);

const partial_fn = sum(10);
partial_fn(20);

// Task: Create a currying example for multiplication of 3 numbers.
//mul(10)(5)(3);