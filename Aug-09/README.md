# Aug-09, 2022

## Spread Operator
- Syntax ...
- It is exact opposite of the Rest operator.
- This is used to unpack the array (iterable).
- This will spread the data across multiple memory locations.
- Usecase, when we want to send 1 array divided into multiple parameters.
- Another common usecase, array concatenation. (Mostly used in React).

## Stateful vs Stateless Components
- Any component that has some sort of state handling implementation is stateful.
- A stateful component will be using one way or the other aproach for state management.
- A stateless component will not be using any form of state management.
- Functional components by default are stateless, we need to add useState hook in order to add the sate functionality, therefore making them stateful components.

## Controlled vs Uncontrolled Components
- Controlled components are those whose state is controlled by their parent components.
- Controlled Components are also referred to as Dumb Components sometimes because of their nature.
- A Controlled Component is a component that takes it's state from the prop and for change handler, that as well it takes from the prop. It does not have a state of it's own.
- The parent component is Controlling the child component.
- By control, we mean sending the value (what to display) as well as a handler function to handle the change.
- Opposite of this is Uncontrolled Component. The parent does not interfere so much. The parent can send the initial value but here, the child will have it's own state.

## Virtual DOM
- Virtual DOM is a copy of the Main Browser's DOM.
- This is NOT SHADOW DOM.
- That react does not put everything on the browser's dom. For example, the non rendered components.
- For example, Fragments.
- It's basically react keeping a copy and handling changes to that copy first.
- Then after some time when the system is free, it will try to update th actual DOM.
- This concept is called Reconciliation (diffing).
- Benefit, no heavy load on the browser's DOM.

**In React, the setState functions are Asynchronous.**

### Shadow DOM
- This is Not a react concept.
- It is the DOM responsible for giving CSS Scopes. (CSSOM)
- This is then connected to the main DOM (to satisfy the encapsulation requirement).

## SPA
- Single Page Application.
- There is only 1 page.
- Navigation happens in JS.
- That means, if we are navigating, the old DOM elements are removed and new DOM elements are added dynamically to feel like we are on a new page.
- This gives an added advantage of being very fast.
- SPA is one of the advantages of React.

### Useful Extension:
- For Firefox -> https://addons.mozilla.org/en-US/firefox/addon/react-devtools/
- For Chrome -> https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
- This is helpful for understanding the component tree and how the React app is structured.
- This also gives an idea about how and what props are sent from which component to which other component.
- Used to debug the React application. (But we can also use this to view the structure of any website which is made with React).

## URL Structuring (Anatomy of a URL)
- Uniform Resource Locator
- Used to give a unique address to any resource.
- Example: https://www.google.com/

### Protocol:
- Examples: http, https, ftp, sftp, tty, smtp
- https is the secure version of http. We should ALWAYS use https.
- HTTP -> Hyper Text Transfer Protocol

### Subdomain
- The part which we se just before the domain.
- Common is www
- https://en.wikipedia.org/wiki/Zoom_(software) -> Subdomain is en.

### Domain
- This is the main website name.
- google.com
- wikipedia.org
- etc etc

### TLD (Top Level Domain)
- These are owned by very large corporations and registrars.
- com, org, in, io
.gov.in is by indian govt.

### Path
- The exact path to your resource which comes after the domain.
- This is only upto the question mark.

https://www.youtube.com/results?search_query=mobiles

https://www.google.com/search?q=ABCD&source=hp&ei=xm_yYqXMGZSOhwOIibygCQ&iflsig=AJiK0e8AAAAAYvJ91t5aVAyLK47AVGeOrxqV5dUCvP7C&ved=0ahUKEwilx7XQ_Ln5AhUUx2EKHYgED5QQ4dUDCAY&uact=5&oq=ABCD&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMgsILhCABBCxAxCDATIICC4QgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzILCC4QgAQQsQMQgwEyCwguEIAEELEDENQCMggIABCABBCxAzIICC4QgAQQsQMyCAgAEIAEELEDOggIABCPARDqAjoICC4QjwEQ6gI6EQguEIAEELEDEIMBEMcBENEDOgsIABCABBCxAxCDAToICAAQsQMQgwE6BQguEIAEOgUIABCABFDpBFi8B2CkCWgBcAB4AYAB2QGIAa8EkgEFMS4yLjGYAQCgAQGwAQo&sclient=gws-wiz

### Query Parameters
- These are key value pairs which are present after the ?
- search_query is the key and mobiles is the value.
- You can have as many key-value pairs as you want.
- The way we separate 2 key-value pairs is by using & symbol.
- ?<key>=<value>&<another_key>=<another_value>

## Task:
1. Emoji List.
- Download this JSON -> https://raw.githubusercontent.com/aayusharyan/emojee/main/emojiList.js
- In your React app, import this.
- Show the list of all emojis.
- We will implement a search input at the top.
- The search input will filter on the description.
