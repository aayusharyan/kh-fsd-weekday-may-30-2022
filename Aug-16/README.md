# Aug-16, 2022

## Conditional Rendering
- Using a ternary condition to show/hide a compnent.
- That can depend on the state, or the prop or even both.
- Rendering means display.
- Here, we use ternary condition.

## Linter
- For React, we use eslint.
- This allows/restricts us to wrie good standard code.
- If we don't write good code, it will give warnings.
- We should check them and try to fix them. eslint gives us the file name, the line number as well as abrief explanation about the error, and a code which we can search further.
- Some hosting platforms will NOT allow us to host if we have any linter warnings. We need to get rid of them before attempting to host.

## Context API
- Used to send data from ancestor to descendant.
- This uses a Provider and Consumer approach.
- In a single React Application, it is possible to have multiple contexts.
- It's possible that multiple components are sharing data between each other.


### createContext
- Because there can be multiple contexts, we need to refer to which one we are using. That's why we need to create them first.
- In order to create Contexts, there is a built in function of react. (createContext()).
- This is a named import, we import using {}.
- Typically, because it is possible to have more than 1 contexts in an application, we put them in a separate file.
- In that file, we import createContext, then we create the contexts and then finally we export them.
- This export is named export and not default export.

**Give the Context names in Pascal Casing because later they will be treated as Components.**

### ContextProvider
- This is where we send the data.
- This is <context_name>.Provider component.
- Here, we pass a prop. The name of that prop is `value`.
- Whatever value we want to pass, we will pass here.
- It IS POSSIBLE to pass a function as well.
- This is an HOC which is used at the Component that will be sending the data.

### ContextConsumer
- This is where we consume (get) the data.
- This is <context_name>.Consumer component.
- This is also kind of an HOC, but here, we pass JS callback functions.
- We don't pass the JSX directly.
- Instead, we pass a callback function. The parameter of that function will contain the context object.

**It is possible that one Provider provides to multiple consumers.**

**The Consumer should be a descendant of the Provider.**

## Why use ./ for files when importing?
- import {CompContext} from 'contexts';
- If we use this code, the React server will think contexts is a package.
- import {useState} from 'react';
- Here, react is a package.
- But, in reality, context is a custom file that we created in the code.
- If we want to refer to a file, we need to give ./
- This will be.
- import {CompContext} from './contexts';
- This will tell my server that the data to be fetched is NOT from node_modules, but from a file named contexts.js in the same directory.


## do while (Logical Concept)
- It's kind of like a while loop.
- But, it will execute atleast once.
- It will execute first, then check whether to execute again or not.
- It is called as an Exit Controlled Loop.
- Here, we execute the first time and then check for second time execution or not.
- Syntax:
  - First we write the do keyword.
  - Followed by that, we put a block of code which we want to iterate on.
  - Then after that, we put a while keyword, inside which we put the condition.
  - At the last, semi-colon. (optional).

## While Loop (Recap)
- Typically here we give a condition.
- If the condition is true, it will execute.
- Again it will check the condition, if it is true, it will execute.
- Again it will check the condition, now this time, IF it is NOT true, it will break out of the loop.
- While will keep on executing the things until the condition becomes false.
- It is called as an Entry Controlled Loop.
- Here, we check and then decide to execute or not, even for the first time.

### Examples:
- while Loop
```
while(false) {
  console.log("ABCD");
}
```

- do while
```
do {
  console.log("ABCD");
} while(false);
```

**Note: In JS, semi-colon is optional, but it is a good practice to have it.**

## useReducer
- This needs to be done on LMS (Prism)

## For LMS (Prism) - Self Learning
- Module 6 - Building Forms
- Module 7 - Render Props & Higher Order Components
- Module 8 - Portals(Self-Study)
- Module 9 - Global & Shared Data
- Module 10 - Hooks in Focus
- Module 11 - Routing in a React App

## Task:
- Similar to current approach.
- Have an ancestor component.
- Have about 3/4 middle components.
- Have a Descendant component.
- Ancestor will be the provider, it will fetch the data from https://reqres.in/api/users and set it as value of the Provider.
- The descendant will be the consumer, it will consume this value and show list of the users in an unordered list.