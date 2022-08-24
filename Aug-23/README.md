# Aug-23, 2022

## CORS
- Full Form - Cross Origin Resource Sharing.
- website1.com - Backend. In this backend, I can define which frontend will have access to this, there is like a whitelist array of domains. [website2.com].
- Purely for security, to restrict access of data for unauthorized websites.
- Data is Resource.
- Domain is called as Origin.
- Cors is not very strict. Most of the browsers respect the Cors, however, respecting or not respecting is choice of the browser. There are several browsers which ignores the cors setting.


**If you have installed nodemon globally, you will have access to it anywhere on your system. If you did NOT do global install, you need to install every time.**

> When we are installing a package, it will first check whether we have it already on our machine or not. (It will check the global list of packages). If we had done before, npm install with the global flag, it will use from there. Otherwise, it will download from the internet.

### Steps:
- npm install cors
- const cors = require('cors');
- app.use(cors());

- By default, it allows * to access the data. If we want to limit/restrict on who can access our data, then we need to create an options variable and give origin configuration in that.
- That variable will be used when we run the cors factory method for use inside the app.
- CORS is purely server side configuration. If we don't have access to server, we cannot fix CORS problem.


## Endpoint
- End + Point
- As a path, which gives the data.
- The most common path is `/`.
- A single app can have multiple endpoints.
- They are separate entities that can take the request, process it and return the response.


## HTTP Request Types
- These are various types of requests that we can make to a server.
- This is a guideline which we should follow, but it is not mandatory.
- We can have a different request type for a different purpose.

### GET
- This is used for getting the data.
- If we want to send data from the client to server, we use query Parameter.
- Query Parameters are sent in the URL.
- It is not so secure.
- Typically used for search and filter logic.


# Task:
- Create the remaining 3 functionalities of the basic calculator API.