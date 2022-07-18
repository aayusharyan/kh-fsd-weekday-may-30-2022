# Jul-18, 2022

### Template Strings / String Literal / Template Literal / String Templating :

- This was introduced in ES6. (2015)
- This allows use of JS expression (variable/constant/function call/math equation/etc.) inside a string without the need of concatenation.
- This improves the code readability.

- Syntax
-- String should start and end with `` (backtick)
-- For using JS expressions, we need to use ${} (Dollar and Curly brackets within which we write the JS).


let first_name = "Aayush";
let last_name = "Sinha";
let role = "Educator";

"Hi, I am " + first_name + " " + last_name + " and I am your " + role;

Hi, I am Aayush Sinha and I am your Educator.


### BOM -> Browser Object Model
- This is an object of the browser.
- Open a new tab.
- Get the history
- Check open tabs
- Get device geoLocation
- Get battery status
- Get connected Headphones/mic/etc.
- Get OS info
- Get processor info
- Get bluetooth and WiFi info.
- etc.

- All of this can be accessed by the Browser, therefore we can get it using the BOM. (Browser Object Model).
- Global window object.

**DOM is part of BOM**

## Programming Paradigm:
- It says how you architect your code.
- It defines the way you write/style your code.

- Example:
-- Functional Programming -> Making functions for everything
-- OOP (Object Oriented Programming) -> Making classes and Objects for everything.
-- Procedural
-- Modular (??)
-- Database


### Anonymous functions:
- These functions don't have a name.
- They are referred by their variable name.
- They can be assgined to a variable.
- They can be assigned to a constant.
- They can even be passed as an argument to another function.
- They can be used as a property of an object.


### Callback functin
- When a function is passed as an argument to another function, that (argument fn) is called as an callback function.


### Event Listener / Event Handler.
- This is the function that gets invoked (executed) when the even is triggered (executed). This function can be anonymous as well as a regular function.
- This function can be a callback.



### innerText vs innerHTML
- innerText is for textual data.
- innerHTML is when we want to have html tags inside the element string.


Task 1 -
- Read about innerContent.

Task 2 -
- Add the functionality to the calculator already made for Jun-23 task.