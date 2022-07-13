# Jul-13

### Task - Image List using JS

## Flex:
- display: flex;
- flex-direction: 
- flex-wrap:
- justify-content:
- align-items: -> Is applied on the parent selector, this will be for all the children.
- gap (row-gap/column-gap):
- align-self -> To align the child item.
- order: -> Change the position of the element. This is given on the child. It is ascending (lower is shown first).
- flex-flow: <flex-direction> <flex-wrap>
- flex-flow: column wrap;

-flex-flow: row nowrap; (Default)

-> https://flexboxfroggy.com/


## BOM
- Browser Object Model.
- This allows us to control the browser.
- Uses the window object.
- DOM is part of BOM. That means, document is equal to window.document.


## Object
- keys ARE STRING!

let info = {
  "first_name": "Aayush",
  "last_nme": "Sinha"
}


If the key that you want to check, if that itself is inside a variable, then you need to use square bracket syntax.

let key = "first_name";
let key = "last_name";
key = "Anything";

info[key]; ✔️✔️✔️
info.key -> info["key"] ❌❌❌

If you know the key, just write it directly.
info.first_name;

items[i]; -> i can be anything
items["abcd"]; -> 0 is index, "abcd" is a key -> items.abcd

Object.keys() -> Takes an object and returns the KEYS as an array.

let data = Object.keys(info);
console.log(data);

Object.values -> Takes an object and returns the values in an array.


## constant

let -> variable
const days_in_week = 7;




Task 1 -> Create an object and get the keys using Object.keys and then loop on it and print values of that key.