
ul li:first-child {

}

1. Pseudo classes (:)
- These are the type of pseudo selector that we use to change the style properties of any element for a particular state. (hover, active, visited, focus).

- These are used to change the style of the whole element.

2. Pseudo Elements (::)

- These are used to change the style of part of the element. (eg. First Letter or First Line, Or before the element or after the element).


2n + 1

n = 0, n = 1, n = 2, n = 3;

1, 3, 5, 7 (All are odd numbers)

n + 5

5, 6, 7, 8, 9.... (From the second item, it will start styling).

## Pseudo Selector
- This is divided into pseudo classes and pseudo elements.

Specificity (Priority)

Specificity of selectors...

ID - Highest
Class
Tag Type
Universal - Lowest


Inline - Highest
Internal
External - Lowest


Internal -> Class Selector
External -> ID Selector

Type of writing CSS -> Higher priority than the selector priority.
That means, class Selector of Internal will have higher specifity than a ID selector of external.

Pseudo selectors don't have their own specificity -> They pick the specificity of the base selector.

## Exception -> !important
- If we give important, it will override the specificity. Even if we give it to the lowest selector (universal), it will override everything else.
- In case if we give important to multiple selector categories, then whichever selector has higher specificity will override the other one.

### Task -> Create 2 elements, 1 button and 1 anchor. Make the anchor tag look like a button and the button element look like anchor tag.