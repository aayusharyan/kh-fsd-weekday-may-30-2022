# Jul-21

## Doubt
const PRICE_PER_ONEPLUS_PHONE = 20000;
let count = 0;
let total_oneplus = 0;

fn = () => {
  count = count + 1;
  total_oneplus = count * PRICE_PER_ONEPLUS_PHONE;
}

## Object Oriented Programming (OOP)
- This is another type of Programming Paradigm.
- Object Oriented -> Everything is focused on Objects.
- Whatever code you write, you use objects and classes.
- Class is a blueprint (of an object).
- Classes contain data and functions together.
- Object is an instance of a class.
- Class is a collection of data members and member functions.

### constructor
- This is a special function which gets executed imeediately when the object is created.
- constructor function doesn't have any name.
- The purpose of this is to get the initial data and set it on the object.


### this keyword
- This keyword points to the owner object.
- This is kind of a pointer.
- This keyword is like a self reference.
- Usecase of this keyword. When we want to refer to any data member or any member function from the same object, we use the this keyword.

### super
- Super keyword allows you to point to the parent class.
- For example, when we want to call the parent's constructor. We use super(<arguments>);

### Private data members and member functions
- These are those methods(function) or data which the end user cannot access.
- These can be accessed only by the functions inside the class. Not any other way.
- Syntax -> Prepend the # sumbol before the function name or the variable name. (Remember, when invoking that function, we still use the this.#fn_name())
- This is recent addition. (ES12, 2021).
- This is equivalent to the private access modifier/specifier for other Programming languages.


### Prototype
- Any object can contain data members and member functions.
- The Data members are seen directly. However, the member functions (methods) are stored in the prototype.
- You can call those member functions directly, however technically, under the hood, they are stored under prototype.
- Prototype is itself an object.
- To get ONLY the member functions, we have __proto__.


- There are 4 pillars of OOP

### Encapsulation
- Bundling of multiple functions and data together to be served as a single package/object.
- This is called encapsulation.
- Advantage. It is easier for the user to consume because you have already given all the correct functionalities as per the requirements.

### Abstraction
- Hide unnecesary information from the user.
- Expose only what is needed.
- This makes the output simple and at the same time, increases the security of the code.

### Inheritance
- विरासत
- This says that the child class can access anything from the parent (Except for the private data members and member functions).
- This is achieved by using the extends keyword in the child class.
- Sometimes people also refer Parent as the Base class.
class Child extends Parent {

}

**JS is a multi paradigm programming language.**

## Task
- Create a class for Human with constructor taking input as name. It will have member functions such as introduce and sayHello.
- Create a child class for Student with constructor taking input as name and also taking batch name. Member functions introduce and sayHello, but introduce will also introduce the role as student.
- [optional] Create another child class for Educator.