## Jun-03, 2022

-> What are Functions:
-> Sequence of steps that can be executed multiple times. Just need to define once.

-> FUNCTION <function name>
-> <What ever code we have>
-> ENDFUNCTION

-> CALL <function name>


1. ELSEIF

1. To determine whether the number is positive, negative or neutral.

1. GET number
2. IF number > 0 THEN
    a. DISPLAY Positive
3. ELSE
    a. IF number < 0 THEN
        i. DISPLAY Negative
    b. ELSE
        ii. DISPLAY Neutral
    c. ENDIF
4. ENDIF
5. DISPLAY Task Completed

1. GET number
2. IF number > 0 THEN
    a. DISPLAY Positive
3. ELSEIF number < 0 THEN
    a. DISPLAY Negative
5. ELSE
    a. DISPLAY Neutral
6. ENDIF
7. DISPLAY Task Completed


ELSEIF:
It is used to check for another condition when the previous condition is not true.

80% Outstanding
70% Honours
60% First Class
50% Second Class
35% Pass
0% Fail

Write a Program to Print the grades based on marks.

1. GET marks
2. IF marks >= 80 THEN
    a. DISPLAY Outstanding
3. ELSEIF marks >= 70 THEN
    a. DISPLAY Honours
4. ELSEIF marks >= 60 THEN
    a. DISPLAY First Class
5. ELSEIF marks >= 50 THEN
    a. DISPLAY Second Class
6. ELSEIF marks >= 35 THEN
    a. DISPLAY Pass
7. ELSEIF marks >= 0 THEN
    a. DISPLAY Fail
8. ENDIF
9. DISPLAY Task Completed

Task: [Pseudocode] -> Using ELSEIF ladder
-> Take a number
-> If divisible by 3, print Fizz
-> If divisible by 5, print Buzz
-> If divisible by 3 and 5 both, print FizzBuzz
-> If not divisible by 3 or 5, then just print the number.
-> Task Complete


2. Data Types:
-> Number
--> Integer (1, 2, 3, 4, 5, ... , -1, -2, -3..., 0)
--> Floats (1.2, 3.14 , 4.789)
--> Double (1.926792367472864827647826472864782647)

-> String (Text) -> Aayush (Incorrect) "Aayush" (Correct)
** Note -> String is ALWAYS written inside quotation mark

DISPLAY "Task Completed"
DISPLAY "Positive Number"

1. GET num
2. DISPLAY "num"
3. DISPLAY num
4. DISPLAY "Task Completed"

Execute
<- 7
-> "num"
-> 7
-> "Task Completed"

1. GET name
2. IF "name" = "Aayush" THEN
    a. DISPLAY "Welcome back sir"
3. ELSE
    a. DISPLAY "Who are you?"
4. ENDIF

--> Always PRint "Who are you?"



1. GET name as String
2. IF name = Aayush THEN
    a. DISPLAY "Welcome back sir"
3. ELSE
    a. DISPLAY "Who are you?"
4. ENDIF



//Task -> Take 2 numbers and compare if they are equal or not.

1. GET number1 as String
2. GET number2
3. IF number1 is equal to "a" THEN
    a. DISPLAY "They are same"
4. ELSE
    a. DISPLAY "They are not the same"
5. ENDIF
6. DISPLAY "Task Completed"


//Task -> Take the gender (m/f/o) from the user and display the full form.
<- m
-> Male
<- f
-> Female
<- o 
-> Other

1. GET gender_short
2. IF gender_short is "m" THEN
    a. DISPLAY "Male"
3. ELSEIF gender_short is "f" THEN
    a. DISPLAY "Female"
4. ELSEIF gender_short is "o" THEN
    a. DISPLAY "Other"
5. ENDIF
6. DISPLAY "Task Completed"


//Take a character and check whether is is a vowel or a consonant
//Ask again "Do you want to check another character?"

-> "Enter the character"
<- a
-> "It is a vowel"
-> "Do you want to check another character?"
<- "Yes"
-> "Enter the character"
<- "b"
-> "It is a consonant"
-> "Do you want to check another character?"
<- "No"
-> "Task Completed"

1. FUNCTION ask_for_character
2. DISPLAY "Enter the character"
3. GET character
4. IF character is "a" or character is "e" or character is "i" or character is "o" or character is "u" THEN
    a. DISPLAY "Vowel"
5. ELSE
    a. DISPLAY "Consonant"
6. ENDIF
7. ENDFUNCTION


1. CALL ask_for_character
2. DISPLAY "Do you want to check another character?"
3. WHILE user enters True
    a. CALL ask_for_character
    b. DISPLAY "Do you want to check another character?"
4. ENDWHILE
5. DISPLAY "Task Completed"


-> Boolean (True or False)

LET check as if 7 is equal to 7.
--> check -> True (Yes)

LET check as if 7 is equal to 8.
--> check -> False (No)

Let check as if 7 >= 5.
--> check -> True (Yes)


[Pseudocode]
Task 1 -> Take the name and date of birth (year) of the user and print (name, age) in the format 
-> "Welcome"
-> name
-> "Your age is"
-> age

<- "Aayush"
<- 1990
-> "Welcome"
-> "Aayush"
-> "Your are is"
-> 32

Task 2 -> Take a string and print the number of vowels in that string.
<- "aayush"
-> 3
<- "ritesh"
-> 2
<- "binod"
-> 2
<- "prashant"
-> 2
<- "deepak"
-> 3