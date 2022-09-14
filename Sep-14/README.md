# Sep-14

# CSS Animations Contd.

## Keyframe
- This is used to give complex animations to the page.
- We use @keyframes to define the animation.
- After writing @keyframes, we need to give an identifier to the animation. (Animation name). 
- Inside that, we can either use a from / to approach, or we can give percentages for fine tuning.
- 0%, 50%, 100%, etc, etc for better fine tuning.
- Inside that, we give what desired property we want to see.
- After the keyframes are defined, we give animation property to the element which we want to animate.
- For that property, we can give few parameters:
  - name of animation
  - duration of animation
  - timing function
  - delay
  - iteration count (typipcally infinite)
  - alternate

# Hosting of Backend (Vercel)
- https://github.com/aayusharyan/test-vercel
- After hosting:
  - Change index.js and export the app we created.
  - `module.exports = app;`
  - Create a new file called `vercel.json`
  - Contents of that file:
  - ```
    {
      "version": 2,
      "builds": [
        {
          "src": "index.js",
          "use": "@now/node"
        }
      ]
    }
    ```

**TODO: Express Router() on PRISM.**

# Testing (JEST)
- This is used for backend testing.
- Jest is multi purpose, we can use it for many things related to testing, mostly used for backend.
- To check for API calls, we also need to install and import axios (fetch is not available by default in NodeJS, upto v18). When we have install anyways, we install axios.
- Each testing file is named as .test.js.
- In the package.json we change a script's test to "jest" because there are many third party testing packages available.
- In order to run the testcases, we run the command `npm run test`.
- In the testing file, we have a function called as test();
- This function takes 2 parameters:
  - Test name, this is the string containing the name or a very brief information about the test.
  - This is the callback which will be executed when we run the testcase.
    - This callback does not accept any parameter, but unlike other ES6 callbacks, we CANNOT give _ instead of (). We have to give empty () in the parameter part of the callback fn.
    - Inside the callback, in order to check the the logic whether we get expected result or not, we use `expect` method.
    - We say, expect(response) or expect(data) toBe(thevalue).
    - We can do exact comparison, we can check for ranges.
    - We can check for starts with, contains, rage, array length.
    - Inside a single testcase, we can have multiple expectations. When having multiple expectations, we can tell whether all of them are satisfied for a testcase to pass, or some of them are enough for a testcase to pass.
- We can use jest for different types of testing as well.
- https://jestjs.io/

# OPTIONS (Pre-flight Example)
- This is a pre-flight to check whether the main request is going to be successful or not.
- Browsers typically do this to save on perfornance.
- Browsers will make an OPTIONS request and save that response for some time (caching), so they don't have to make the request again and again for every API Call.
- This we can see by running on POSTMAN.

# Next Steps:
- Head over to PRISM and watch the recorded content.
- Start submitting the tests and assignments.
- Start preparing for the Capstone Project.