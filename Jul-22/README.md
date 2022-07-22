# Jul-22, 2022

## Polymorphism -> 4th Pillar of OOP.
- A method (member function) of a class can have two or more functionalities but with the same name.
1. Function overriding:
- In the parent class we have a function.
- In the child class we have a function with the same name.
- Depending on whether the object of child or parent, respective function will be invoked.
- Example:
class Book {
  getInfo() {
    return `Book ${this.title}, written by ${this.author}, published in ${this.#getYear()}`;
  }
}
class Magazine extends Book {
  getInfo() {
    return `Magazine ${this.title}, written by ${this.author}, published in ${this.year}, ${this.month}`;
  }
}

2. Function overloading:
- The same name, but in order to differentiate, we change the parameters. Example:
//Function overloading
public static void fn1(String str) {
    //Do something
    System.out.println("This is function 1");
}

public static void fn1(String str, int n) {
    //Do something
    System.out.println("This is function 2");
}

**In JS, we don't have Function overloading. That's why we say it is not True Polymorphism (It's not 100%).**
**When asked in an interview, we give the example of Function overriding.**


## API
- Application Programming Interface
- API is simply a way (interface) using which two pieces of code (two softwares) can commonucate with each other. Exchange data/information. Talk to each other. 

## Network API
- Our Client (Browser) is accessing some data from the server (Remote).
- We use something called as fetch to perform this operation.
- Fetch is NOT part of JS, it is provided by the browser.

## JSON
- JavaScript Object Notation.
- It looks like a JS object.
- JS object outside of Javascript.
- This is one of the standards of data exchange.
- This is the most commonly used data exchange format.


## XML
- Extensible Markup Language
- Similar HTML.
<page>1</page>
<per_page>6</per_page>
<total>12</total>

## fetch
- Getting something (some data from the server).
- 

## Promise
- This is just like the english word promise.
- fetch is a function that returns a promise because it doens't know how big the data is. (Also, depends on the internet speed).
- When the promise is completed, we can have a then function that takes a callback and executes later.
- Promise can be either successful (resolved), or failed (rejected).



## headers vs body of an API call

## call/apply/bind


## modules

## casing


## Rest Operator

# Prototype chaining

# setTimeout / setInterval


**Note: fetch, timers, DOM, BOM, etc. are NOT part of core JS, these are additional things which are provided by the Browser (via an API).**



//console.log("Hello World", "I am Aayush", "I am your educator");


# Task
- Use the URL (https://fakestoreapi.com/products) and fetch the data from it. This is json data.
- Show a flex container for these items. (You can show, image, title and price).
- Similar to like Flipkart UI design.
- No need of additional functionaltiy. 