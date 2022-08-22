## Aug-22, 2022

## Port
- A URL is an address which can accept various types of data.
- The creation of ports is to keep things organized and understandable.
- So, there are some guidelines on which port we should use for which type of data.
- Common Ports
- FTP - 21 -> File Transfer
- SMTP - 25 -> Email Transfer
- HTTP - 80 -> Non secure web
- HTTPS - 443 -> Secure Web
- There are about 65000 ports.
- Exactly, there are 65.535 ports.

## Postman
- https://www.postman.com/downloads/
- This is a software used to debug APIs.
- This is helpful because it makes testing of API very very easy.
- The tool only needs the URL, and once you click send, it will make the API request and show the response in pretty format.
- The idea is to make API development easy.
- This is not the only tool in the market, there are alternates to this as well.

## nodemon
- npm install nodemon --save-dev --global
- nodemon is third-party package.
- This is used for real-time updation of output.
- This will restart the node server if there is any change in any of the files.
- That means, as a developer, we don't need to stop and start the server again and again after every code change.
- This saves development time and makes things easy for backend development.
- The command to start the server changes, we use: 
  - nodemon <filename.js>

**Note: For Windows users, do not use powershell, instead we need to run this on Command Prompt.**

## Dependencies vs Dev Dependencies
- Dependencies are used to add the packages which are needed for smooth execution of the application. These dependencies are deployed to the production server as well.
- Dev Dependencies are for development purposes, they are used only when we are developing the code. They are NEVER sent to the production server.
- We should keep things clean and if we don't want a package in production, but it is important for development, we should use `--save-dev` flag at the last of your npm install command. This will ensure that the package is uonly at development machines and does not reach the production server.
- We need to do this to keep the production server lightweight, (having less code, node_modules to handle). Being lightweight will also impact the speed and make the server fast.

**Note: When developing full stack applications, we need to ensure that the backend server is running as well as the frontend server is running.**

# Task:
- Take out time and retry the Friday's task.