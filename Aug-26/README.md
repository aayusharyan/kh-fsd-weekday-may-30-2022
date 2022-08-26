# Aug-26, 2022

**Note: fetch is not part of core JS. It is injected by the browsers. Upto Node version 18, for backend fetch is not available, we have to install as a separate package. From node version 18, node is also giving fetch as an injected function. It is not part of Core Javascript.**

## Doubts
- Prime Number.

## CORS
- Security restriction.
- Can be bypassed by browsers if they wanted.
- Even though CORS is set, the response is still sent by the server, it is the job of browser to respect the CORS header or not.

### Request Methods
- A guideline for what action to take on the server for which type of request.
- We can ignore this and have custom implementations for each of them, but it's not recommended because then other developers who use our backend will have problems.

### Status Codes
- This is standardardization for the response type.
- Depends on whether the request was successful or failure or whatever, we should use proper status codes.

*There is no actual standardardization for what response we should send, we can send any key value pair in whatever structure as we want.*

## Middleware
- This is a piece of code that sits in the middle.
- This is used to handle/manipulate all the requests and responses that go throught the server.
- If we have a common functionality that should be added to all the endpoints, then we add a middleware. Otherwise, we will need to write that logic in each endpoint.
- Example:
  - For responses, we want to add the Access-Control-Allow-Origin header to resolve the CORS issue. Therefore, instead of adding it manually, we use CORS package, which acts as a middleware and manipulates all the responses and adds the CORS header.
  - For requests, typically we will use an authentication middleware which will check whether the user is logged in or not.
- Middleware will intercept all the requests and responses and it can have custom logic to check something or even manipulate the data.
- Middle will do this BEFORE the request reaches the server, or AFTER the response has been issued.
- This logic is implemented on the server side.
- To use a middleware, we just write app.use(<middleware Name>);

### Creating Custom Middleware
- It's just like a function, it accepts 3 parameters.
  - request, this is the first one, this is used to manipulate the request object.
  - response, this is used to manipulate the response object.
  - next, this is used when we want to call the next middleware. Because, it is possible that a server had multiple middlewares.
- Once created, just use it by using -> app.use(<middleware function name>).

**Note: Make sure to write and use all the middlewares BEFORE starting for listening.**

## Getting data from POST.
- There are multiple ways to send data using POST request type.
- Example:
  - form-data
  - form-data encoded
  - raw
    - binary
    - text
    - HTML
    - JSON
    - etc.
  - graphQL

## body-parser
- This is a third party package that we need to install in order to read the data from body.
- This used to be part of express. But later because it was getting complicted and big in size, it was separated.
- Installation -> npm install body-parser
- Purpose of this is to parse the body and show in simple and easy to understand format.
- This is a middleware.
- This will intercept the request, manipulate it, make the request's body better and then move it to the handler.
- For query parameters, we don't need body parser.


## Task:
- This is a Full Stack Task.
- Backend - Create various endpoints.
  - name - Return your name
  - bio - Return some information about you.
  - interests - Return a list of interests.
  - email - Return your email id.
- Frontend - Create a landing page. Consume various APIs that you have created and show that data on your landing page.

### Anagram example
- ABBCCCD (1-A, 2-B, 3-C, 1-D) ✔️
- BACCBDC (1-A, 2-B, 3-c, 1-D) ✔️
- AABBCCD (2-A, 2-B, 2-C, 1-D) ❌

### Further Reading - GraphQL










## Example of OPTIONS.


