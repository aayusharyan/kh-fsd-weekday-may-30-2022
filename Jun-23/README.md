# Jun-23, 2022

## Attribute Selector
- This is a rule that selects the elements based on an attribute.
- The syntax for this is square brackets [].
- To check for attribute name and attribute value. [name="value"]
- To check for just the name, we use [name].


## Border
- border-width -> This defines the thickness of the border.
- border-style -> This defines the style of the border (solid/double/dashed/dotted).
- border-color -> This tells the border color
- border-radius -> This defines the sharpness of the border.


## Class Selector
- This is a special type of attribute selector.
- This is MOST recommended way to give style to your webpage.
- A single element can have multiple classes.
- A single class can be applied to multiple selectors.
- To write a class selector, we use dot Example.
.bg-yellow {
  background-color: yellow;
}

## id selector
- This is another special attribute.
- This is unique. That means, every element can have only 1 ID. Also, no two elements can have same ID.
- Har element ko, maximum ek id de sakte hai, also, repeat nahi karni hai wo id. That id should be unique.
- In CSS, the selector looks like:
#special_whatever {
  border-color: brown;
  background-color: blue;
}


## Universal Selector
- This selects EVERYTHING.
- Every element will have the same style.
- Usage:
* {
  color: red;
}

## Comments
- In CSS, comments are written between /* and */
- This can be multi-line as well, no problem.
- Anything between them will be treated as a comment.


# Coloring:
- red, blue, black, white, aqua, navyblue, brown, lightblue, olive, aquagreen, purple,

rgb -> Red, Green, Blue
cmyk -> Cyan, Magenta, Yellow, Key (Black)

- We have got some default colors to chose from. But we can customize.
- In order to customize, we need the values for red, green and blue.

-> If they are in decimal, they will be between 0 and 255.
-> If they are in hexadecimal, they will be between 00 and FF.
-> If we are writing rgb, then we write like this.
color: rgb(0, 0, 255);
-> If we are writing in hex, then we write like this.
-> color: #AB07EF;

Task 1:
-> Create a page looking like Google.

Task 2:
-> Create a page, looking like calculator.

