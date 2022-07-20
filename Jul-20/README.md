# Jul-20

## scope
- It tells us whether we can access that data or not.
- If we can access then we are in the scope.
- If we cannot access, then we are outside of the scope.

## Block of Code
- Anything between a set of curly brackets is called as a block of code. It can be a function.
function() {
  //Functional block
}

if() {
  //Conditional Block
}

for(;;) {
  //Iterative Block
}

## Scope Chaining
- The access of any variable at inner scope can allow use from a parent scope. (parent, grandparent, greate grand parent, etc....).
- If, I reach root level and I am not able to access the data/variable, then I throw a reference error saying <varibale_name> is not defined.
- Parent cannot access child scope but child can access parent scope.

## var
- The original way of writing variables. Not recommended anymore.
- Reason is that with release of ES6 (2015), block scope was launched.
- By it's nature, var is global scoped (functional scoped).
- That is not good for various reasons, mainly security.


**Note: let and const were launched with ES6.**

## constants
- const keyword was also in ES6.
- Before 2015, there was no constant in JS.
- const is also block scoped.
- It also follows scope chaining.


## let vs var vs const
- var is not so secure. (var is considered as global scoped / functional scoped)
- let is secure, it is treated as block scoped.
- const is a constant.

- Highest Priority (const). You should use it whereever you can.
- Medium Priority (let). In a case when you want to change somsthing, only then use a let.
- Never Priority (var). Just don't do it.

## hoisting
- It is not same as hosting. ❌
- It is a JS concept.
- It used to be a really good concept. Now it is not that anymore.
- Hoisting will shift all the declarations at the top.
- Example

console.log(abcd);
var abcd = "Hello World";
- Because of hoisting, this will not crash. Even though JS is an interpreted language. 
- Because of hoisting, this declaration moves at the top and value is assigned as undefined initially (by the JS engine).
- Another usecase, we can access/execute/invoke a function before declaring it. Because hoisting will anyway move the declaration at the top.

## Temporal Dead Zone
- ES6 introduced let and const.
- By the time of ES6, the engineers realized that hoisting is not a good practice, we should not do it.
- By that time, hoisting was already being used pretty much everywhere.

**Hoisting happens for everything. But because of TDZ, it seems like hoisting is not happening for let and const.**
**If hoisting was not happening for let and const, then for let and const it would show the Reference error, but because hoisting still happens, the JS engine knows that there is a let and because of TDZ, a different error is thrown, cannot access a lexical variable before initialization.**



## Object Oriented Programming (OOP)

## this

## call/apply/bind

## API calls
## modules

# Task - 
- To create a checkout page.
- Add functionality to that page.
- 3 items on our page, there will be + - buttons for the quantity.
- Every time I click + or -, the total amount would be adjusted accordingly.
- Clicking minus multiple times, the quantity cannot go below 0.