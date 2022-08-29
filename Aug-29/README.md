# Aug-29, 2022

## fs package
- Filesystem package.
- fs is part of NodeJS core.
- Not part of JS, part of NodeJS.
- In order to use it, we just use `const fs = require('fs')`;

## fs.readdir()
- List items
- Used to list items of a specific directory.
- This function takes 3 arguments:
  - First -> The directory to list the items.
  - Second -> Configuration Option Object.
  - Third -> Callback function, what to do when it is either successful or failure. The Callback function itself accepts 2 parameters.
    - First -> error -> In case fs is not able to perform the reading.
    - Second -> success -> In this case, the list of files.

## fs.readFile() - Before this, we used to use fs.read()
- This is very similar to readdir. Except it will read a file.
- This accepts 3 things just like readdir.
- However, in the callback function for success parameter, it will give the actual data of the file.
- The file can be anything, from plain text to even an HTML page that we render in the browser.

## fs.writeFile() - Before this, we used to use fs.write()
- Used to write to a file. If the file does not exist, it will create the file.
- This one, the second parameter, instead of configuration, we send the data which we want to write.
- 3 parameters.
  - First -> Path to file.
  - Second -> Data.
  - Third -> Callback for error situation.
- If we call the method again, it will override the data in the file.

## fs.appendFile()
- This is used to add something at the end of a file.
- This will not override, instead of this,
- fs.writeFile() is going to overrite all the contents and clean it whereas this will instead just append the data to that file.

## fs.unlink()
- This is used to delete the file.
- This is simple function, it accepts 2 parameters:
  - First -> File Path
  - Second -> Callback function.
    - This also accepts 1 parameter only error. No success.


## Further Reading -> fs package
- https://nodejs.dev/en/learn/the-nodejs-fs-module/

\n - New Line

## Task:
- Create 2 endpoints:
  - First -> Register
  - Second -> Login
- Both of these endpoints will use 2 fields, username and password.
- When I call the register endpoint, create a new file with that <usename>.txt and save the password inside that file.
- When I call the login endpoint, read the file <uesrname>.txt and compare the password, if they are same, then return like Login Successful, otherwise, Login failure.

- localhost:3006/register?username=abcd&password=xyz
- On the server, it should create a file called abcd.txt and the content inside that file should be xyz.
- When I login?
  - localhost:3006/login?user=abcd&password=xyz123
- Now, open the file abcd.txt and read the contents.
- xyz and xyz123 do match, therefore return message Login Failure.
