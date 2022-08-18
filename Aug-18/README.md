# Aug-18, 2022

## Recap of Redux
## Small Project
- 2 Functionalities
  - Have a checkbox to toggle light mode and dark mode.
  - Have an input field and show whatever we are typing on a h4 separately.
- Both of them will use Redux.

First Step:
1. install everything
2. Create slice.js:
- It will have 2 reducers, setTheme and second is setText.
- It will have 2 properties, theme: boolean and text: string...
3. Add the store to index.js
4. Creating the importing the components.
5. Add a useSlector to display what's in the text.
6. In the input component, add onKeyUp for the HTML element.
7. Add useDispatch to the Input Component.
8. Add a new Component, ThemeSwitcher.js
9. In this componenet, create input type checkbox and give an onchange.
10. Based on the checkbox checked status (e.target.checked) and then useDispatch to set the value as `light` or `dark` depending on whether it is checked or not.
  - Not Checked -> "light"
  - Checked -> "Dark"
11. Create an HOC
12. Implement useSelector to get the theme value and change the color accordingly.

# Task:
- Use the fakestore API (https://fakestoreapi.com/products) to fetch the data and show list of products.
- Implement add to cart button. If I click on Add to cart, it should be added to the cart object which is maintained by the Redux state.
- There will be another page (using routing) which is like a checkout page.
- This page will show the list of items that have been added to the cart.
- It will also show the total value of that cart.
