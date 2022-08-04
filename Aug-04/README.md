# Aug-04, 2022

# Functional Components (Contd...)
- In this style of programming, we use functions.

## Hooks
- These are special functions which give added functionality to our application.
- There are many hooks available to us or we can also create custom hooks.

### useState
- This is used to manage state in a functional component.
- The class component alternate of this is this.state. But in functions we don't use this keyword, therefore we use a hook called useState.
- This is a named import from react.


## Destructuring of Arrays
- If we have a function that is returning an array and we need to store the elements of that array separately. Then we destructure it.
- Usaage: on the left hand side, we use let/const and an array structure. Inside that array, there are variables.
- Example:
const [state, setState] = useState(<default_value>);
- Introduced in ES6 (2015)


### useEffect
- The lifecycle hook for functional components.
- It can do all the three phases of any lifecycle of a component.
- For componentDidMount we pass the dependency array as empty.
- Exmple:
useEffect(_ => {
  console.log("Mounting Logic");
}, []);
- For componentDidUpdate, we pass the data that we need to track.
- Example:
useEffect(_ => {
  console.log("State Updation");
}, [state1, prop1]);
- We pass teh data that we want to track in the Dependency array.
- For componentWillUnmount, we return the cleanup function from the callback function and we keep the dependency array empty.
- Example:
useEffect(_ => {
  return () => {
    console.log("Unmounting Logic AKA Cleanup function");
  }
}, []);

## Named exeports/import
- There can only be 1 default export, but if we want to export multiple things then we give them in an object {} and export them. Similarly when importing also, we need to use the object syntax. {}
- Default import we can directly use, but it is limited to 1 export item only.


# setTimeout
- It is just like serInterval, but it will only call the callback function once.
- Usage:
const timeout_id = setTimeout(() => {
  //Logic to logout the user.
}, 10 * 60 * 1000); //10 minutes
- Similar to clearInterval, we also have clearTimeout.
- Usage: clearTimeout(timeout_id);
- These ids are also numbers.


# Task:
- Go to https://unsplash.com/developers and register.
- Create an app which will show a gallery (involves CSS).
- Use external CSS.
- Add a search functionality.
- Use the API data to populate the results.


## State Lifting

## headers vs body of an API call

## modules




### Destructuring of Objects - ES9 (2018).

## HOC

## call/apply/bind

## Rest Operator

# Prototype chaining


