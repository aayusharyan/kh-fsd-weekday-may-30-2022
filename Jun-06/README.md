## Jun-06, 2022

1. Setup -> Tomorrow, Jun-07, 2022
-> Pre-requisite
-> Downloaded and installed Virtualbox
-> Downloaded the Ubuntu Desktop


2. Virtual Machine on our PC/Laptop.
-> It's just like a machine, but it is not real. (It's virtual).
-> It is like simulating some other machine on my laptop.
-> That other machine can have any operating system and specifications.

--> VirtualBox
--> Developed by Oracle
--> Helps in creating/Maintaining Virtual machines

3. Server
--> We create and deploy our applications on some server.
--> Server is another computer but the purpose is to SERVE the response.
--> ONLY PURPOSE is to serve the response.

3. Operating System
-> Windows
-> Ubuntu
-> Macintosh (OS X)
-> Linux
-> Remix OS
-> Kali
-> Chrome OS
-> Fedora
-> Arch
--> OS is a software which is useful in interacting between Application Layer and Hardware Layer.


4. Is Linux an Operating System?
-> Linux is a Kernel (but, technically it can be said as an Operating System)
-> Because Linux is Free to use and Open source (Meaning, source code is open and available), anyone can add some functionality and create their own variant of linux.
-> For this reason, there are so many Linux based operating Systems available.

5. Why Ubuntu?
-> Easy to get started.
-> It has nice GUI (Graphical User Interface), nice icons and menu items to click and work with.
-> It will help us understand the commands because we can see the result in a better interface.
-> End of the day, we will be using CLI.

6. For servers, we use CentOS
-> CentOS is completely CLI (Command Line Interface). It's very lightweight.
-> No additional tools or packages available.

7. Why Virtual Machine?
-> Reason, because we are learning, we might end up typing some wrong command which crashes the OS or even format the hard disk. In that case, because we are using a virtual machine, our main machine is safe.

8. Commands:
-> whoami
-> date
-> cal
-> clear
-> history
-> ls
-> cd
-> pwd
-> mkdir
-> vi (vim)
-> cat
-> touch
-> ll
-> permissions
-> chmod
-> cp
-> mv
-> rm
-> rm -Rf 
-> Flags
-> whatis
-> man
-> sudo
-> ipconfig / ifconfig (if we get time)
-> find
-> locate
-> apt-get
-> ps
-> kill
-> git
-> repository
-> push and pull
-> clone / fork
-> commit
-> branch

9. DataTypes
-> String
-> Number (Integer, Float and Double)
-> Boolean

-> Arrays
--> Collection of uniform datatype (Having same data type)
--> This is not true for JS, but in general arrays have same datatype.
--> Arrays are ALWAYS written within square brackets.

-> Let vowels as ["a", "e", "i", "o", "u"]
-> LET participants as ["Aayush", "Sandy", "Tejaswi", "Apurva", "Vaibhav", "Amod", ....]

1. DISPLAY "Enter the numbers to check"
2. GET numbers as an array <- [1, 4, 7, 11, 14, 18, 20]
-> FOR num as every number from 1 to 10: -> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
3. FOR num as every number of numbers array
    a. DISPLAY num
4. ENDFOR


<- [1, 4, 7, 11, 14, 18, 20]
-> 1
-> 4
-> 7
-> 11
-> 14
-> 18
-> 20


Task: -> Take numbers from a user and print only the even numbers from that array.
<- [1, 3, 5, 6, 10, 7, 11, 12, 14]
-> 6
-> 12
-> 14

1. LET a as ["a", "e", "i", "o", "u"]
2. FOR b as every character from a array
    a. DISPLAY a
3. ENDFOR


-> Arrays are made up of elements
-> [1, 5, 3, 7, 10, 14, 11]

-> This array has 7 elements.
-> Index -> It's like a serial number for these elements of my array.
-> INDEX ALWAYS START FROM 0 (ZERO)

1. DISPLAY "Enter the numbers"
2. GET numbers as array
3. FOR single_number as every element of numbers array
    a. IF single_number is divisible by 2 THEN
        i. DISPLAY single_number
    b. ENDIF
4. ENDFOR
5. DISPLAY "Task Completed"


Task -> Take an array of numbers and from that array, print maximum number.
<- [1, 7, 5, 10, 14, 20, 13]
-> 20
<- [1, 2, 3, 4, 5, 4, 7, 3, 2, 1]
-> 7