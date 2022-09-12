# Sep-12, 2022

*To store a password, we do something called as Hashing, the most common way is MD5 hashing.*

**Note: Watch the Videos of Event Loop on PRISM LMS.**

# JS Concepts

## defer keyword
- Usually we used to add the script tag at the bottom of the body tag, however that is not the ideal place to do it.
- Instead we should be adding it to the head tag to keep thigs clean. Because in the head tag, we typically keep the tags which are not shown in the viewport.
- If we are writing the script in the head tag, we should give an attribute called defer.
- This attribute will ensure that the script is executed after the body has parsed. We need this because typically we use JS for some sort of DOM manupulation and to perform DOM manipulation, we need the DOM element to exist which will happen later.
- It can also be written as defer="defer" 

## Prototype
- These are a collection of methods/functionalities that can be executed on a certain data.
- To check that, we can simply use __proto__ property of that data.
- Because, in JS, everything is an Object, this __proto__ is avaialable to all the data types.
- For any data, we can check the Proto and what methods/functionality can we execute on that data.
- This is not only for checking which functions can be done, but this can be customized as well.
- Once defined, all the data variables of the same Class will have access to this updated method.
- This is only avaialable for the class of which's variable the __proto__ has been set up.

## Classes
- It is a special function which can return an object. Not only just key value pairs, but also some functionality associated with it.
- The class keyword was introduced in ES6.
- The class names are typically given in PascalCasing.
- It's not mandatory to give in this casing, but it's a recommended way.
- Syntax, use the class keyword followed by the class name in PascalCasing.
- Inside the class block, we can create all the functions. No need of writing the function keyword here.
- These functions are also called methods, member functions, class function.

### new Keyword
- This keyword is `new`
- This is used to instantiate an object from the class.
- To create an instance of a class.
- Think of class like a factory which produces thousands of phones per year. Each phone is treated as a object, it has it's own data, it has it's own functionality, it does not depend on other phones (objects).
- Syntax - const b1 = new Book();
- We can see the __proto__ here as well which will contain the collection of all the custom methods that we have created for that particular class.

### Constructor
- This is a special method which is available to all the classes.
- This method can contain some logic which can be used during instantiation.
- Sometimes, it is also referred to as initialization.
- This is always there, if we want to customize it, we can just create the code for that, otherwise we can ignore it.
- A particular class can only have 1 constructor. When we try to create more than 1 constructors, the code will crash.
- Constructors can accept parameters.

**Note: Instantiation means Creation of an instance. Creation of an Object from the given class.**

*Note: Read more about 4 Pillars of OOP in Prism and Recap for Jul-21 session*

## This Keyword
- This keyword acts as a pointer.
- Based on which object is calling the method, this keyword will point to that object.
- For example, from a class if we instantiate multiple objects and call the method to print this keyword for each of them, then depending on which object are we calling that method, the response will be different.
- For classes, the this keyword is shared across multiple methods.
- Example, if we create an object in the constructor and assign a property using this keyword, then in the other methods of that class as well we can access those properties just by using the this keyword.
- It will automatically understand which reference we are trying to access based on the which object are we calling this method on.
- This keyword points to the owner object.

- If we directly use this keyword without a class, then this keyword will point to the owner object, which in that case will be window.
- If our function is inside an object itself. Then the owner of that function will be that object. In that case the this keyword will point to that owner object instead of the window object.


# Pointing this keyword to a custom object
- There are 3 ways to do that.
- We might want our function's this keyword to point to another object.
- With this, we can achieve the ability of connection of the function's this keyword to the cutom object.
- Without writing the function's code inside that object.
- They can be at two completely separate places, yet we will be able to connect them.
- The three methods are available for all the functions.

# Call
- Here, we just write function.call and pass the object inside as it's argument.
- We pass the object whichever custom object we want the this keyword to point to.
- This will call the method with a different owner.
- When we invoke this method, we need to pass the Object which will act as the owner.
- If we don't pass the object, JS will try to convert it. (It will be success because in JS, everything is an Object).
- Then, it will execute that function with the this keyword pointing to the custom objecct that we have passed as an argument to the call method.



# Task:
- Create a class for Calculator
- That class should have a property called result which can be accessed directly.
- That class should have the member functions as:
  - Addition
  - Subtraction
  - Multiplication
  - Division






# Apply
# Bind

# Prototype Chaining

# Closure

# OPTIONS (Pre-flight Example)

# CSS

# Animation
# Keyframe
# transition

# Hosting of Backend (Vercel)
# Testing (JEST)