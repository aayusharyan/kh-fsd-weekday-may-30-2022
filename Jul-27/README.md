# Jul-27, 2022

## Directory Structure

### Components
- This directory contains all the components that we create.

### Public
- This directory contains 3 files (index.html, index.js and index.css)

### src
- This means source, this contains all the source code of any application.

# Task A
- We have a list of colors, and we want to show that our page.

## Array methods
### forEach
- Introduced in ES6 (2015).
- Allows to write a callback function for each of the element.
- The callback function can take (most important) 2 parameters. First parameter is the single element of that array and the second parameter is the index of that element.

### map
- Map will convert.
- If in a case when we want to manipulate every element of an array, we can use a map function.
- In the callback, we will manipulate and then we will return the updated value.
- The callback function also takes 2 parameters (element and the index).

### filter
- Filter is used to filter out the unwanted elements from my array.
- We pass a callback function and that function takes in 2 parameters (element, index) and based on the logic we write, it will either return true or false.
- If we want to keep that element in the result, then we return true, otherwise we return false.

### reduce
- Reduce function reduces the dimensionality of the array. 
- To be contd...

### To make power. For example 2 ^ 4 = 16
- In JS, we don't use ^. Instead of this, we have 2 alternatives.
- ** => 8 ** 2 = 64
- Math.pow => Math.pow(5, 3) => 125


# Task
1. Array of temperatures. 
- let temps = [26, 28, 27, 18, 23, 0, 29];
- Write a map function and convert all of these values from celcius to farenheit.
2. 
let students = [
  {
    name: "Unnati",
    marks: 10
  },
  {
    name: "Tejaswi",
    marks: 20
  },
  {
    name: "Sandeep",
    marks: 30
  },
  {
    name: "Kaustubh",
    marks: 40
  },{
    name: "Apurva",
    marks: 45
  },
  {
    name: "Harika",
    marks: 49
  }
]
- Write a filter function and show only those students who have scored equal or more than 30 marks.