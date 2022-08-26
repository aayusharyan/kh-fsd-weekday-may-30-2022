# Aug-24, 2022

## Logical Operators
- When we have multiple conditions to check, we can combine them.
- Sometimes, we might have a sitaution where all the conditions need to be true.
- Sometimes, if any one condition is true, we can allow.
- That is an OR condition. (If any one is true, we can go inside)
- In programming, that is represented by double pipe. ||
- Example done in doubts file.
- If we want to check and satisfy all conditions, then we use AND operator.
- In programming, that is represented by double ampersand. &&
- Example done in doubts file.


## POST
- This is to post the data.
- Post -> Send
- Typical Example:
- User Login
- User Registration
- Email/Message Sending.

**Quick Tip - Use `npm init -y` to bypass/skip the Enter, enter, enter things...**

## PUT
- Put something in this place.
- If the item already exists, PUT will replace it.
- This is specifically for Insertion of records, but at the same time, it needs the unique identifier to put it.
- If we don't know the ID (which is 95% of the times), it is better to use POST.
- This is CREATE operation.

## PATCH
- This is used to update the record. Fix the mistakes.
- Whenever we are updating something in the database, we are making a patch request.
- Example: Profile update, edit message

## DELETE
- This is to delete the resource.
- For this, we do need the identifier.
- Example: Delete message, Delete Profile, etc.

## HEAD
- This is used to check whether something exists or not.
- This is very similar to the GET request method, but, this DOES NOT send the response body. This only sends the headers.
- A head response does not contain body.


## OPTIONS (Pre-flight)
- This means, what are my options?
- If the client sends this request, then the server will tell which methods are allowed on the server.
- In this request, the client will send the headers to server (not the actual data yet). These headers can contain things like content-type, content-length, origin, request method, etc.
- The server will check and reqpond with some headers. If they match, browser will start the actual request, otherwise it will fail the actual request.


## TRACE
- This is used to trace the path to a server.
- This will trace the path to the server.
- This is a little bit more complicated, therefore not on Postman. (Maybe in future, it will be there).
- There are plenty of online tools to do that. (Just google `traceroute online`).


## CONNECT
- Create a tunnel to server.
- Mostly used for VPN, IP Calls (Whatsapp, Google Meet, Hangouts, Skype, Zoom etc etc).


## Anatomy of a Request / Response
- Any request response is made up of 2 things.
  - HEAD
  - BODY
- The body contains actual data.
- The head contains additional information. Such as:
  - origin.
  - Content Type
  - Content Length
  - Authorization
  - status code.


## HTTP Status Code
- Every response from server has a status code associated to it.
- This status code gives a brief information about what the response might be.
- The status codes are in the range of 100 to 599.
- Examples:
  - 200 - OK - The response is valid and as you should expect.
  - 404 - Not Found - I am trying to access a resource that does not exist.
  - 500 - Server Error - The server has crashed.

- 100-199 - Information
- 200-299 - All good
- 300-399 - Things have shifted
- 400-499 - Client messed up
- 500-599 - Server messed up

- If you want to send a custom status code, then you can just send insode res.send() method.


## Task:
### First
- Create a list of your friends and create a backend with 2 endpoints.
- First endpoint is to show all the friends. You can have it at the root path. (/)
- Second endpoint is to apply filter. That endpoint will be on (/filter) path.
  - Idea is, you check the query parameters, then filter from the list for names that starts with that input. Only show those friends.

### Second
- Create an endpoint which accepts a number and returns whether it is prime number or not.