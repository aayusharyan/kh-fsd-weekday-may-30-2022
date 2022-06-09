## Jun-09, 2022

### open
--> It opens the folder in File explorer.

Single dot -> Current directory
Double dot -> Parent directory


## Permissions
--> sudo (Allows to run as priviledged user... Similar to clicking Yes on ther permission box that opens on Windows).
--> 

--> ls -al
--> ll


--> The permissions are a string of 10 characters as shown in ls -al, out of this, we ignore the first character. Remaining 9 characters are divided into 3 parts.

--> For the first character, 
d means directory
l means link (symbolic link, shortcut)
- means a file

--> Owner
--> Group (A user can be part of multiple groups)
--> Everyone

1. r -> Read Permission
2. w -> Write Permission
3. x -> Execute Permission
4. - -> Permission Missing

rwx -> User can read and write and execute.
rw- -> User can read and write but not execute.
--x -> User cannot read or write on that file, but can execute
--- -> No permission

### touch
--> To touch a file (Change the modify date time)
--> If the file doesn't exist, it will create a file.
--> Example:
touch sample.txt


### echo
--> It is used to display (echo) you are have entered.
--> The output can be routed to a file also.
--> the way to do that is using >>
--> Example:
echo "Hello World" >> sample.txt

** >> is used to route the output, it can be from any command
For example, I want to store the ls output in a file.
ls -al >> op.txt

### man
--> This is manual.
--> Usage, man <command_to_check>

### head
--> Displays the first 10 lines of a file from the top.

### tail
--> Displays the last 10 lines of a file.


Tasks
1. -> Save the manual of any command inside a text file. show the output of head of that file.
2. Create a file, change the permission of that file to r-x-wxrw- and show proof.

