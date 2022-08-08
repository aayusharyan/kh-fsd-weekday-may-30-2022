# Aug-08, 2022

## Destructuring
- This is for arrays and objects. Basically because they are collection of data.
- The idea/concept of destructuring is that it breaks down the collection of elements into separate elements.
- Unpacking of data.
- The purpose is to make the code clean.
- If we want to access all/many of the data from an array/object, instead of putting separate lines for key value, we just combine and write it in 1 single line.

### Array Destructuring
- This was introduced in ES6 (2015).
- This is speficically for arrays.
- Put the variables in the correct inddex.
- Usage: const [a, b, c] = arr;
- Example: return of the useState hook in React.


### Object Destructuring
- This was introduced in ES9 (2018).
- This is specifically for objects.
- The rule here is that your variable name should be same as the key name. It is not mandatory, we can bypass this rule, but it is recommended.
- Because unline arrays, there is no indexing/ordering or elements.
- If a variable is not available to use in the destructuring for the rules. Then there is a way to bypass that rule.
- Instead of JS automatically detecting which key's value to assign to a variable, we will tell that to JS.
- The way we do it is by using key:<variable_name>
- Usage: const {first_name: fn, last_name: ln, role: r} = obj;
- Here, first_name, last_name and role is a key whereas fn, ln and r is variable.
- Example: Directly destucturing the object inside the parameters of functional component.

**In objects, keys are always string datatype, so because of that, we don't need to give quotation marks for string.**

## Higher Order Functions
- Any function taking another function as it's parameter or returning another function is called as HOF.
- These are the functions that accepts callbacks.
- Example: setInterval, addEventListener, .then

## First Order Function
- Any function that does not accepts another function as it's parameter or does not send/return another function is treated as a first order function.
- console.log()

## First Class Function
- These are the functions that we assign to a variable.
- First Class Functions are those functions that can be saved and treated just like any other variable.
- It doesn't matter whether that function is a function expression, or an arrow function or a named function, or anything else.
- Usage:
const sayHello = function hello() {
  console.log("Hello World");
}

## First Order Component
- This is a component that does not accept another component as it's parameter.
- Any componene which is not a higher order component is a first order component.
- Most of the components that we create by default are first order component.
- FOC will have Self closing tag.

## IIFE
- Immediately Invoked Function Expression.
- These are the functions that are anonymous, giving more security.
- These functions executed immediately after they are defined.
- It's purpose is to perform initialization logic which needs to be done immediately and only once.
- Because there is no reference for any IIFE, it's more secure.

**Because there is no variable reference, IIFE is NOT a first class function.**

## Rest Operator
- Syntax ...
- This is used to tell JS that rest of the things are going to be in this variable.
- The rest variable is an array.
- It can be used in functions' parameters and even in destructuring of objects and arrays.
- The idea is to have rest of the things in a separate collection. (variable).

## Task:
- Use the dictionary API - https://dictionaryapi.dev/
- Create an App (React)
- User will type the word.
- Your app will show the definition.


## Spread Operator
- Syntax ...