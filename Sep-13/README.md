# Sep-13

- This keyword points to the owner object.
- In case we want to customize it, we would be using call / apply / bind.

# Call / Apply / Bind

## call (Recap)
- We call the method and pass the object that we want the this keyword to point to.
- If the function is accepting any parameters, then those data we can pass directly as arguments of the call method.
- The first argument of call method is the Object which we want the this keyword to point to.
- After that, we can have n number of arguments which we can send to the method.

## Apply
- This is very very similar to the call method.
- Here also we send the object.
- Here, in the second argument, we send the array of arguments. Comparing to the call method, there we were sending all the data directly, here, we are packing the data into an array and passing that array as second argument of the method.
- In a situation where the number of parameters of the method are fixed, we will be using call method. Whereas in a situation where the number of parameters are not fixed, like a rest operator situation, there we will use apply. Because arrays can be dynamic.

## Bind
- This is different from call and apply.
- When we run call/apply, it will execute the method immediately.
- In bind, it will just bind the object with the method.
- It will NOT start execution of the method.
- This will return a function with the binded this keyword.
- That function we can call.
- Bind is a 2 step process. Call and Apply are 1 step processes.
- When sending the data to the binded method, we can directly send it as we would when we were invokng the function in a regular fashion.

# Prototypal Chaining
- Usually also referred as Prototype Chaining
- When the class keyword was introduced, the extends keyword was also introduced.
- This extends keyword would do the inheritance part.
- For this inheritance on methods and protypes, we implement the child proto to all the parent's proto methods.
- We can have inheritance and reference of parent's proptotype methods. This allows the child class to be able to access the parent class's methods. The way it accesses it is via Prototype chaining.

- null is an object. It is a special object, this DOES NOT have any prototype methods.


# Closures & Currying

## Closure
- A closure is bundling of functions along with it's surrounding data (lexical environment).
- Typically we have two nested functions. From this, the inner function has access to variables of the outer function. However, it will continue to keep that access even after being returned from the outer function.
- A closure is said to be a function along with it's lexical scope.
- Wherever we take this function, this function will have access to it's lexical scope.
- Typically the example that we take is that we create a function inside another function. We say that the outer function has a variable which is part of the lexical scope for the inner function. Now, wherever the inner function is used, it will have access to it's lexical scope. (That is, the variable created in the outer function).


## Currying
- They are very similar.
- The concept of currying is that we should be able to execute a method partially. That means, one argument is one set of parantheses.
- sum(10)(30); - Currying example. This is also closure.
- In JS, closure and currying go together. In other programming languages, that might not be the case.
- Here, we perform partial execution. This is a concept of programming.
- In some situations where we might have partial data currently and later in exec ution we will get complete data, then in those situations we would want to execute with the partial data and store the reference for remaing data method call.
- Many people interchange the technical terms Closure and Curring. They are NOT the same terms.


## Lexical Scope
- This is the scope for which a function has access to.
- This is going to be different for every function. Each function will have it's own lexical scope.
- This defines not only the function's scope or the function's parent's scope. But this also involves scope chaining and can go upto the global scope.
- Scope chaining is when an inner method tries to access a data defined in the ancestoral scope.
- This is also referred as Static scoping.
- Here, a method having access to the data variables created inside it's parent, or it's grandparent's scope or even global scope. This will be bundled togetheer as that method's lexical scope.

# CSS Animation
- Manipulation of the content on screen by changing it's shape, size, form or position.
- It can be any content. This has to be done over some time, if it's immediate, it's not animated.
- There are 2 major ways to do animation.

## transition
- This is used to provide a smooth transition between different values of the same property for different states.
- We typically have the starting properties and the ending properties. It will directly jump from 1 type of design to another type of design.
- However, if we add a property called transition, then that jump will be smooth. That will make it feel animated.
- In transition property, we give which properties to animate (typically all), then we give the time that it should take in order to do the animation (usually that's 0.2-0.25s), then we give the timing functions (typically linear) to check the speed.