# Sep-02, 2022

## Query Params vs Path Params - Recap
- Query Parameters are added after the path.
- Query parameters are at the last of the URL, they start with ?
- In any URL, we can have as many query parameters as we want.
- Multiple query parameters are separated by &.
- Query parameters are key value pairs, both the key and the value is in the URL.
- Path parameters are part of the path itself.
- In any URL, we can have n number of path parameters, but we need to write that logic in the code.
- Multiple path parameters are separated by /
- Path parameters only have the value in the URL.

- In general, the query parameters can be identified easily. But path parameters cannot be identified easily.

## Debouncing
- This is used to improve the performance and not make the application lagging.
- The basic idea is waiting.
- If there is a function execution based on any action.
- Then we wait for a short time before initiating that function execution.
- This improves performance.
- This also prevents from multiple API calls because if within that wait period the even happens again, the second execution will not start.
- Example: Auto Suggest, Form Submissions, API Calls.
- Benefit, to prevent from unnecessary API calls.
- Also, to have a better User Exeperience when it depends on the API response.

## Puppeteer
- This is used to test frontend.
- This runs on NodeJS.
- https://pptr.dev/
- To get started:
  - Create an empty project.
  - Install puppeteer.
- This is used to simulate the browser.
- Typically it will use Chrome headless. But we can configure it to use something else as well.
- This is used to perform Browser Testing.
- Puppeteer can be used for Browser Testing, Screenshot Testing, E2E Testing, Integration Testing, Validation Testing.


### puppeteer.launch()
- This will launch the browser instance.
- This is an async function, thererfore we need to wait.
- This will return a reference to the Browser.
- We can pass configuration object here. Commonly we pass headless: false/true.
- Headless mode means the UI will not be shown. Headless: false means the browser will be visible.

### browser.newPage()
- This will open a new page on the browser.
- This is an async function, therefore we need to wait.
- This will return a reference to the page.

### page.setViewport()
- This will set the dimensions of the viewport of the page.
- This is an async function, therefore we need to wait.
- This will accept a configuration object. In that object we can give width and height properties, both of which should be integers.
- This does not return anything.

### page.goto()
- This will set the browser's page to navigate to a particular website.
- This is an async function, therefore we need to wait.
- This will accept the path (URL) of the website as a string.
- This does not return anaything.

### page.focus()
- This will focus onto an element.
- Useful to focus before typing.
- This is an async function, therefore we need to wait.
- This will accecpt a CSS Selector which is equivalent to what we pass in document.querySelector().

### page.keyboard.type()
- This will type the text.
- Whereever there is a focus, it will type, otherwise the effect of typing will be useless.
- This is an async function, therefore we need to wait.
- This accepts the string of what is needed to be typed.
- This does not return anything.

### page.keyboard.press()
- This function will press a single key.
- We need to pass which key to press as a string.
- This is an async function, therefore we need to wait.
- This does not return anything.

### page.click()
- This will perform a click on whatever element we want.
- This is an async function, therefore we need to wait.
- The element to click, we need to pass it's CSS selector.
- This does not return anything.

### page.screenshot()
- This will take the screenshot of the current page.
- This is an async function, therefore we need to wait.
- This accepts a configuration object.
  - path - We give the path of the file which is going to be saved, including the filename and file extension.
  - fullPage - This is a boolean to confirm whether screenshot the whole page or just the part which is visible in the viewport.

### browser.close()
- This method will close the browser instance.
- This is an async method, therefore we need to wait.
- This does not return anything.
- This should be the last step in the testcase.


## Browser Testing
- This is a type of testing where we write code to mimick the user action on the browser.
- Typically, the user will open chrome and go to the website, do the steps and close it.
- We mimick that using code. The same steps.
- This gives an idea of how the end user will be using our website and we can test and check that our website behaves nicely.

## Screenshot Testing
- We have a screenshot of how it is supposed to look.
- We then run the puppeteer test and generate screenshots.
- Then, we compare both of them, if they are same, our tests have passed.
- If there is a difference in the screenshots, then there is a problem.

**Further Reading - XPath.**

**Very Important - Recap/Study Event Loop on PRISM.**


## Task:
- Create a puppeteer code to perform the following:
  - Open page in laptop viewport.
  - Sign into prism.
  - Go to sessions
  - Take screenshot of the sessions page.




## JEST - To test backend.

## Cypress.io - Also for fronetnd