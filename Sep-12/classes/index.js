// const e = document.getElementById("something");
// e.innerText = "XYZ";


// const fn = () => {
//   const o =  {
//     fName: "Aayush",
//     lName: "Sinha"
//   };

//   o.__proto__.customFn = () => {
//     console.log("This is a custom function");
//   }

//   return o;
// }

// const obj = fn();

// console.log(obj);
// obj.customFn();

// const arr0 = [5, 5, 5, 5];

// const arr = [1, 2, 3, 4];

// arr.__proto__.myFn = () => {
//   console.log("This is a custom array function");
// }


// arr0.myFn();


// arr.myFn();

// const arr2 = [10, 11, 12, 13];
// arr2.myFn();

// const str1 = "ABCD";
// str1.myFn();

// class Book {

//   constructor(book_name) {
//     console.log(`Created an instance of ${book_name}`);
//     this.name = book_name;
//   }

//   printThis() {
//     console.log(this);
//   }

  
//   intro() {
//     console.log("This is a good book");
//   }

// }

// const b1 = new Book("Great Book volume 1");
// console.log(b1);
// // b1.intro();

// const b2 = new Book("Great Book volume 2");
// console.log(b2);

// Task: Create a class for student, take the name as constructor. 
// Create a method in that class which will print the intro of that student.
// Hi, I am ${name} and I am a student.



// function abcd() {
//   console.log(this);
// }

// abcd(); //Same as writing window.abcd();

// const o = {
//   abcd: function() {
//     console.log(this);
//   }
// }

// o.abcd();

function abcd() {
  console.log(this);
}

const obj = {
  fName: "Aayush",
  lName: "Sinha"
};

// abcd(); 
abcd.call(obj);