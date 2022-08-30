# Aug-30, 2022

## CLI with NodeJS
- Basically, using nodejs inside terminal.
- We print messages using console.log.
- It is just like regular JS but instead of printing inside the browser's console, we are print in the terminal.
- To take an input, we use readline.
- This is a built in package of nodeJS.
- This was released as a part of NodeJS v7.
- Because this is built in, we don't have to install anything.

### Readline package
- This is used to take input from the user.
- This is built into NodeJS (Starting from NodeJS version 7).
- This will take input from the input interface which typically is the command prompt.
- When initializing this, there is additional step required, we cannot just require and use, we first need to create an Interface.
- Example Code:
```
const readline = require('readline').createInterface({
  input: process.stdin
  output: process.stdout
});
```
- Then to ask a question to user, we say readline.question().
- This function accepts two things, first a message (like hint), second is the callback function.
- This function will have a parameter which will contain answer given by the user for that question.
- Finally, when we no longer want any input, we write `readline.close();`

**Readline can be a bit complicated, therefore there are additional packages which we can use to make things easy. But those are third party packages, not part of core NodeJS. Example, inquirer (https://www.npmjs.com/package/inquirer)**


## REST (with respect to API Calls)
- Representational State Transfer
- When we make an API call, we send all the things which are needed for the API to be successful.
- It is a request, response methodology.
- In this, the server does not save the state.
- Every request should contain the state coming from the user.
- REST is mostly used with JSON data.


## Stream API
- This is used for mostly streaming of information.
- Typically video/audio calls.
- When we are transferring very large files, we use stream.
- YouTube video. Netflix, Hotstar, etc. etc.
- In this, we authenticate once when initializing, but then once the stream is started, we don't authenticate again.
- There are different types of Streams:
  - Readable Stream -> We can only Read from the stream data. Example, Watching a Cricket match.
  - Writable Stream -> We can only write to the stream data. Exmple, Going live on Instagram.
  - Duplex Stream -> We can read and write to the stream data. Example, Session Zoom Calls.
    - Full Duplex -> Multiple parties can read and write at the same time.
    - Half Duplex -> Only one party can write at a single time. Example, walkie talkie.


## SOAP API (Simple Objec Access Protocol)
- This is old, very old.
- This primarily uses XML.
- Used by large organizations because they cannot migrate to REST.

## RPC (Remote Procedure Call)
- This is an old technology
- Recently this is very widely started to use, commonly because of Crypto and Blockchain.



## Task:
- Create a command line quiz application.
- You can have simple questions like what is 1+1?
- There should be 5 questions, each correct question will give  +1 marks, incorrect question will give 0 marks.
- Finally, print the total score of that quiz.
- Complete this task using readline.