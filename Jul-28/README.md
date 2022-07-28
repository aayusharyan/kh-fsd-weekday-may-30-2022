# Jul-28, 2022

## ReactJS
## CDN

## Event Listeners


## Revision of Props
- Props are data that we send from 1 component to another.



## JSX
- JavaScript XML.
- The purpose is that we can write code easily. We don't need to call classes using their constructors, we can directly write them as if they were HTML elements.
- This makes development easy.


## React
- The core functionality of React.
- Everything that we do, will be extended from React.
- All the class components that we create, will be extended from React.Component

## ReactDOM
- ReactDOM, this is helpful when we want to create react components. 
- If we decide NOT to use babel, then we have to use ReactDOM methods everywhere.
- Still, even if we use Babel, we will still need to use ReactDOM to atleast create and render the root of my application.

## Babel (https://babeljs.io/)
- It is a transpiler. Convert JS into what browser can understand.
- One example, babel converts JSX into vanilla HTML and JS.
- It can convert modern JS for old (legacy) browsers.

### Rendering
- Another way of saying display.

**Note: After return, we have to start the html in the same line. Reason, JS will put semi colon at end of the line.**


# Task
- Use the list
let students = [
  {
    name: "Unnati",
    marks: 10
  },
  {
    name: "Tejaswi",
    marks: 20
  },
  {
    name: "Sandeep",
    marks: 30
  },
  {
    name: "Kaustubh",
    marks: 40
  },{
    name: "Apurva",
    marks: 45
  },
  {
    name: "Harika",
    marks: 49
  }
]
- Create a component which shows name and marks.
- Call that component multiple times and pass this information (name, marks) 1 by 1 as props.
