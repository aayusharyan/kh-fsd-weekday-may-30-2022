// class Calculator {
//   add(a, b) {
//     let sum = a + b;
//     return sum;
//   }

//   mul() {
//     //This will contain multiplication logic
//   }

//   sub() {
//     //This will contain subtraction logic
//   }

//   div() {
//     //This will contain division logic
//   }
// }

// let calculator_obj = new Calculator();
// console.log(calculator_obj);
// console.log(calculator_obj.add(5, 10));


// Genre, Year of Publish, Author, Title
class Book {
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }

  getInfo() {
    return `Book ${this.title}, written by ${this.author}, published in ${this.#getYear()}`;
  }

  #getYear() {
    return this.year;
  }

  consoleThis() {
    console.log(this);
  }
}

class Magazine extends Book {
  constructor(title, author, year, month, genre) {
    super(title, author, year, genre);
    this.month = month;
  }

  getInfo() {
    return `Magazine ${this.title}, written by ${this.author}, published in ${this.year}, ${this.month}`;
  }
}


let mag_obj = new Magazine("Monthly JS", "Aayush", 2022, "Jul", "Fictional");
console.log(mag_obj.getInfo());
// let book_obj = new Book("JS 101", "Aayush Sinha", 2030, "Fictional");
// console.log(book_obj);
// let another_book_obj = new Book("Intro to React", "Anonymous", 2015, "Fictional");
// console.log(book_obj.getInfo());
// console.log(book_obj.#getYear());

// console.log(book_obj);
// console.log(book_obj.consoleThis());