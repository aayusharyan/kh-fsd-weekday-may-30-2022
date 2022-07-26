# Jul-26, 2022

### Render -> Another way of saying display of HTML.

## Static method
- These are special member functions / methods of a class that don't need any object.
- They can be called directly using the class name.
- Syntax -> we put the static keyword before the data member / member function.
- To invoke (call) the method, we directly use the class name. Button.render();
- Specially in JS, we cannot call any static method using the object. If we try, it will give Reference error, function not found. (In other OOP languages, we can do that).


## Casing
- The way in which we give upper/lower case to our variables, functions, classes, etc etc.

1. lowercase - Everything is in the lower characters and for multiple words, we just stitch them together.
2. UPPERCASE - Everything is upper case characters and for multiple words, we just stitch them together.
3. camelCase - First letter of every word is Capital except for the first word. (Camel and Case -> camelCase). Commonly, used to name functions.
4. PascalCase - First letter of every word is Capital. (Pascal & Case -> PascalCase). Commonly used for Class Names.
5. snake_case - Everything is in lower case and multiple words are combined using _. (Snake & Case -> snake_case). Commonly used for Variables/Constants.
6. kebab-case - Everything is in lower case and multiple words are combined using -. (Kebab and Case -> kebab-case). Commonly used in HTML for class and id names.
7. UPPERCASE_SNAKE -> This is used for constants. (Not so common).

## Components
- These are JS clases / functions which contains the HTML elements and their related functionalities.
- These can contain multiple elements together at a time.
- To compare with HTML element, a component is like a collection of multiple HTML elements combined together. HTML element on the other hand is just a fundamental block of tag which cannot be broken down further.
- Components give reuability. That is, we define a component once and we can use it anywhere. This keeps repetition minimum.
- Using Component based approach is easy/fast to develop.

## Props
- Prop is short for property.
- Property is the data that we send from 1 component to another.
- Typically it is like a parent component to a child component.

## Component Tree
- The tree structure of all the components.
- The relation between parent/child, etc, etc.

## Default Parameters
- Syntax, <parameter_name> = <default_value>
- When the argument is not sent, then the default value of the parameter will be taken.
- Introduced in ES6 (2015).

## Task:
- Create some components.
  - image
  - heading (Welcome to my page...)
  - paragraph
  - button
  - input
- On your page, have 3 sections (Heading, about (image, paragraph, h2), contact form (inputs, name, email, message))
- Use Nesting of Components.

