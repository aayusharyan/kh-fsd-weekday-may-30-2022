# Aug-19, 2022

## NODEJS
- This brings the JS engine outside of the browser.
- This allows execution of JavaScript on a desktop. Not a browser.
- This is userful if we want to write code for the server using JS.

### Instructions
- We write our logic in a JS file.
- Then to execute it, we call using `node <filename>`.
- Create a new Directory
- Inside that directory.
- npm init
- npm install express 

### Task A:
- Create a script which prints the first 25 prime numbers.

## expressJS
- This allows the backend code to run for infinite amount of time to listen for requests and process and give response.
- For the API part, the server logic part, we need Express.
- Installation - npm install express
- Alternate to this is http package.
- This makes the backend code run like a server, processing the requests and sending the responses.

## Approach for developing Express Application
- We need to require express package and save it on a varible.
- Create an app by invoking on that express variable.
- Define the Port where you will be listening on.
- After this, we need to start listening for informaiton.
- This means, we listen for browser requests.
- After this, listen for GET requests on a path.

- app.get(<path>, <callback>).
- Path can be anything in string.
- Callback is a function, we write the logic.
- This callback function accepts two things, request and response.
- Request -> Sent from browser to the server.
- Response -> Processed response sent back from the server to the browser.

### Sending JSON Data.
- Here, send the response.json method and inside that method, give the JSON data you want to send.


**Note: If you change anything in the JS file. You NEED to stop the server and start it again. Otherwise, it will not reflect the updated data/logic. This problem is solved by using nodemon.**

## Task:
- Create a server and send a list of names. (Like, family members, friends).
- For the frontend, create a react application, then show this list of members which is fetched from the server that you created.
