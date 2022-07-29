# Jul-29, 2022

## ReactJS
- https://github.com/facebook/react
- Makes development easy.
- React is kind of funded by Facebook.
- React was built by Facebook. Later they decided to make it open source.
- React is very lightweight.
- Con -> Because React is lightweight, everything that we need to do, we need to import from third party libraries.
- React has a lot of developer pool.
- New engineers are also inclined towards learning react.
- Because they are learning React, they are again increasing the size of that developer pool.
- React is very popular.
- https://npmtrends.com/angular-vs-react-vs-vue

**Open srouce -> Source code is open, anyone can access it, anyone can make a copy.**

## Library vs Framework
- Libraries are the bare minimum that you need in order to get started. If we need an advanced functionality, we need to import/use third party packages.
- Libraries are smaller in size.
- Because WE (the developers) have to import third party packages, we are responsible for the code quality and bugs, etc.
- In Frameworks, everything is built in, obviously some complicated things we might still import, but majority is already built in.
- Frameworks are larger in size.
- Because it is inbuild in the framework, we can be confident that it is already of good quality.


## Array map
- Makes looping of iterative data easy.
- Can easily loop through a complicated array and return the JSX element for each of the items.
- Map function accepts a callback fn. That callback fn will take element and the index as it's parameters.
- Important Note: When using the element inside the return, that JSX element should have a unique key prop. Otherwise React will give Warning and we will have trouble hosting it online.

## State
- These are those data variables/objects that react can track (observed).
- Why does it need to track?
 - That is because React can do something called as re-rendering.
- React cannot track a variable. For that reason, we have a method called setState.
- This method takes a callback function. That callback function will have a parameter for the current state, then it will do whatever logic it needs to perform. Then after some time, it will return the updated state.

## What is the difference between state and props?
- Props are sent from 1 component to another.
- State is used in the same component.

# Task:
1. Create a separate counter app, but this time add the decrement functionality as well. (decrement -> -1 from the counter value);

2. Create an app, add an input type password element and a paragraph element. Use `onKeyUp={}` in your input, manage the state and basically show the password in the paragraph as I type.