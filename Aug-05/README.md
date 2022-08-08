# Aug-05, 2022

**CRA is Create React App.**

## Helper quick commands for boilerplace
- rafce -> React Arrow functional component export
- rfce -> React functional component export
- rfc -> React functional component
- rcc -> React Class component
- To use them you need to have the extension - ES7+ React/Redux/React-Native snipp


## State Lifting / Lifting State Up
- Using Props we can send data from parent to child.
- What if I want to get data from child to parent?
- The way this works is that we send some prop from the parent to child.
- In that prop is a function referenced, like a callback.
- Then from the child, whenever the data is updated, we invoke the callback function coming from the parent prop.
- To track when the state has changed and when we need to call the parent, we use the useEffect function.
- Once we call the parent's function, the parent will get the data and with that, we would have succeddfully lifted the state up.


## headers vs body of an API call
- Any API call is divided into two phases.
- Request and Response.
- Either of those will be sending some data (Request -> Client to Server, Response -> Server to Client).
- That data is divided into 2 parts (Header and Body).
- Head contains additional meta information about the data. (Example, size, authorization, MIME type, location, response location).
- Body contains the actual data. (This contains the actual data).
- Status Codes -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200


## async/await
- ES6 (2015)
- This is another way of writing promise based code.
- Instead of using then and callbacks, we use async and await keywords.
- There is no technical difference. It is just syntactic sugar.
- That means, the only thing it will do is to make the code look good.
- Usage:
  - In the function parameter side, we use the keyword async.
  - In the function definition logic, wherever we would have used .then, instead of that we will use await.
- async means that the function is asynchrnous.
- await means that the JS engine is supposed to wait until we get the response.


### Axios
- Axios is an alternative to fetch.
- It makes API calls easier.
- That means, lesser code to write.
- It's a third party package that we need to install in order to use.
- Usage:
  - npm install axios
  - OR
  - npm i axios
- One of the benefits is that it will auto convert JSON.


## modules
- Each separate JS code that we import and export.
- A single file (w.r.t React) can be treated as a module.
- This is part of Modular Programming Paradigm where we write the modules that we can just import and execute.


## HOC
- Higher Order Component
- Any component that can take in another component as it's child or can return another component is called as a Higher Order component.
- All the other components which cannot do that are called First Order Component.
- These HOCs can be spotted anywhere because they need to use a coupled tag. So, that means, if any component is using a coupled tag and has some children passed to it using nesting (NOT attribute), then it is a higher order component.
- Inside the component code, we can use {props.children} to show the children passed into the HOC.


\ -> Windows
/ -> Linux & Mac

# Task:
## 1. Create an app to show the sum of 2 numbers. (Better understanding of State Lifting and Props)
- There will be 2 input fields (input type number).
- There will be one h2 tag to show the output.
- all three of these things will be separate separate component. (Total 3 components till now).
- They will be directly imported into the App component.
- As I type any number in both the fields, it should automatically start showing the summation result in the output.

## 2. Create an App for github user search.
- There will be an input field.
- There will be some output fields to show the data.
- On the input field, the user will enter their username and click the button to search.
- Then you need to call the API (https://api.github.com/users/aayusharyan - Replace aayusharyan wit the username that the user has entered in the input).
- After getting the data, display it.
- Data to be displayed:
  - Name
  - Username
  - Profile Picture
  - Follower count
  - Webite