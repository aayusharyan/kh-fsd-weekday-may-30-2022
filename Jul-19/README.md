# Jul-19

## Arrow Functions (Fat Arrow Functions) / Arrow Function Expression.
- ES6 (2015).
- Arrow functions are always anonymous.
- Syntax -> 
() => {}

## Backstory about JS
- JavaScript is NOT Java.
- JS was laaunched in Dec, 4, 1995.
- It was designed as an alternative to Java.
- JS is a scripting Language. (Java is a Programming Language).
- JS was made, so it can run anywhere, it does not need many resources, it crashes lesser.
- To, make it easy to code, it was designed as a dynamically typed language (Loosely Typed Language).

let a = true;
a = "Str";
a = -45;

- JS is a single threaded scripting language.
1 Ghz -> 1 Giga operations in 1 second, that 1000K operations in 1 s -> 10,00,000 operations in 1 second.
- A single thread can handle 1 task at a time.
- JS can run on smallest of devices.

- JS is an asynchronous language.
- Synchronous code is step by step code. I define exact sequence of steps.
- Asynchronous code is kind of event based. I define what to do when something happens. That can happen imediately, can happen after some time or can never happen. I don't know the sequenct. This is asynchronous.

Q. What is JS?
- JS is an Asynchronous, single-threaded Scripting Language. It is dynamically typed and platform independent. It is an interpreted language.

## Interpreted Language vs Compiled Language.
- Compiled Example -> Java, C, C++, Ruby, etc.
- Interpreted Example -> PHP, JS, Python, TypeScript, etc.

### Compiled languages 
- You write code, then you compile into a oprimized variant of that code. (This optimized variant can only be read by the machine). Most of the times, it's something called as a bytecode/binary file.
- You need a compiler for that.
- The compiler will take the source code and will compile into a very optimized variant. At the same time, it will check for syntax errors, some logical errors (array out of bounds). It will catch these errors and not allow compilation.
- Then once compiled, we can execute the optimized file.

### Interpreted Language
- These languages are executed line by line.
- We don't use compiler, we use interpreter.
- The interpreter takes in the file, starts executing and it will check syntax 1 line at a time.
- Issue here is, suppose I have a syntax error at line 30, then the interpreter will execute upto line 29 and then crash.


## Scripting Language vs Programming Language.
- All interpreted languages are called Scripting Languages.
- All logical languages are programming Languages (Interpreted + Compiled).
**Note: All scripting Langauges are programming langauges.**

## High Level vs Low Level. (Programming Languages)
- High level languages are are more easy for humans to write and understand. It is kind of difficult for machines to understand. When executing, there is a conversion from high level to low level. (Example - JS)

- Low level languages, there is no conversion, these languages are easier for machines to understand and difficult for humans to code. (Example - Assembly)

Q. What is a Programming Language?
- A programming language is a medium of communication between a human and a machine. It's just like a regular language, there are some keywords that mean something, there is some syntax that is important.
English -> We put full stop after every sentence.
BRB -> Be Right Back. 
ASAP -> As soon as possible

JS -> We put semi colon;
keywords are for loops / functions / conditions.

Q. What is an algorithm?
- A series of steps (set of instructions) to solve a particular problem.
- It's logic that we develop.

Q. What is a program?
- Program is Algorithm written in a particular programming language.

Add 2 numbers:
1. Take num1.
2. Take num2.
3. Let sum as num1 + num2.
4. DISPLAY sum.

let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(sum);

JS is at version 12 (Jul, 2021).
TypeScript
CommonScript
ActionScript

## ECMA 
- European Computer Manufacturing Association.
- It's a non profit organization.
- This organization maintain standards.
- ES Standard -> It is a standard developed by ECMA org.
- Every year/1.5 years they come together and develop a new standard.
- Some browsers are able to do it (Chrome, Firefox).

- ES Standard is the guideline that one needs to follow.
- Right now, we are running on ES12. (Jul, 2021) standard.
- ES6 (2015) standard, it was a big change.
- ES9 (2018) standard we will focus on.
