# Aug-17, 2022

## Redux
- https://github.com/reduxjs/redux
- https://redux.js.org/
- A predictable State Container for JS Apps
- Redux is a Third Party Open Source JS Library that we use to manage the state of complete application.
- Redux creates like a global object.
- There is 1 object that is shared across the entire application.
- Any component can push a change to that object. (That needs to be done via Reducer, actions).
- Any component can listen for change on that object. 
- This is also developed by Facebook.
- For simple component structure where we are sharing just 1 or 2 data from an ancestor to a descendant. Context API is actually preferable.

- Four more parts of Redux:
- Store -> This is the actual object which contains all the state information.
- Reducer -> This is a function that can update the store. We need to dispatch (call) to the reducer which will update the store.
- Action -> This tells which reducer to call (old approach).
- View -> This is used to read the value.

### Installation:
- npm install @reduxjs/toolkit
- npm install react-redux

## Slice / Reducer / Store
- Store is used to store the data.
- Reducer is used to write the logic for updating.
- Slice is the part which combines everything together.

## Dispatch
- This is used to invoke the reducer functions.
- We cannot call them directly.
- We need to use a hook. -> useDispatch.
- This hook gives a method that we can use.

## Selector
- This is used to see or get the data.
- This is also a hook, useSelector.
- This is part of react-redux.
- In useSelector, we give the callback function which will tell which property of the state object we want.
- Then we can just directly use that value.


**Because it is possible that redux can be added without the need of a react application, for react application, there is a wrapper package that we install, which is react-redux.**

- If you have accidentally installed something wrong or if you don't want that package anymore, you can use:
npm uninstall <package-name>


### Alternates to Redux
- RxJS
- MobX
- Flux
- etc. etc.

### Alternate to NPM
- yarn -> Developed by Facebook
- If doing yarn:
  - yarn create react-app my-app

## Do Redux on LMS (PRISM).

## Task:
- In the application that we created today:
1. Implement a decrement functionality. If I cick on the button, it will decrement the counter by 1.
2. Implement a random functionality. If I click on the random button, it will show a random value on the counter.