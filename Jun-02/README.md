## Jun-02, 2022

Answers:
-> Display +ve, -ve or neutral.

1. GET number
2. IF num > 0 THEN
    a. DISPLAY Positive Number
3. ELSE
    a. IF num < 0 THEN
        i. DISPLAY Negative Number
    b. ELSE:
        i. Display Neutral Number
    c. ENDIF
4. ENDIF
5. DISPLAY Task Completed


Task [Pseudocode]
-> Take a number from the user.
-> If the number is divisible by 3, display Fizz
-> If the number is divisible by 5, display Buzz
-> If the number is divisible by 3 and 5 both, display FizzBuzz

Example
<- 3
-> Fizz
<- 15
-> FizzBuzz
<- 27
-> Fizz
<- 50
-> Buzz
<- 7
-> <No Output>

45
-> FizzBuzz

33
-> Fizz

20
-> Buzz


30
-> Fizz (Actual - Incorrect)
30
-> FizzBuzz (Expected - Correct)

---

Soln:
1. GET number
2. IF number is divisible by 3 and number is divisible by 5 THEN:
    a. DISPLAY FizzBuzz
3. ELSE
    a. IF number is divisible by 3 THEN:
        i. DISPLAY Fizz
    b. ENDIF
    c. IF number is divisible by 5 THEN:
       i. DISPLAY Buzz
    d. ENDIF
4. ENDIF
5. DISPLAY Completed



Task 2: Show the sum of first 100 numbers [1 + 2 + 3 + 4 + 5....]

LET sum as 0
FOR number as every number between 1 to 100
    INCREMENT sum by number (LET sum as sum + number) (Perform sum + number and store into sum)
ENDFOR


FOR Loop

WHILE Loop

WHILE it is raining outside:
 Wait for some time.
ENDWHILE
Go outside and play.

While <condition>
-> Keep on doing something while the condition is true.

WHILE you are in the session:
   Give attention
ENDWHILE
Do whatever you want.
Have Dinner
Watch TV
Sleep

WHILE cricket match is on
   Watch the TV
ENDWHILE
Turn off TV
Spend time in other ways.

WHILE petrol > 0:
   Keep driving
ENDWHILE
Stop the bike


Take the sum of numbers from 1 to 100.

LET sum as 0
LET number as 1
WHILE number <= 100:
    LET sum as sum + number.
    INCREMENT number by 1
ENDWHILE
DISPLAY sum



Task [Pseudocode] -> Write a program to take input from the user and show the sum of the numbers.

Example:
-> Enter the number
<- 10
-> 10
-> Do you want to add more numbers?
<- Yes
-> Enter the number
<- 15
-> 25
-> Do you want to add more numbers?
<- Yes
-> Enter the number
-> 45
-> 70
-> Do you want to add more numbers?
<- No
-> Task Completed


1. LET sum as 0
2. DISPLAY Enter the number
3. GET number
4. LET sum as sum + number
5. DISPLAY sum
6. DISPLAY Do you want to add more numbers?
7. WHILE user enters yes:
    a. DISPLAY Enter the number
    b. GET number
    c. LET sum as sum + number
    d. DISPLAY sum
    e. DISPLAY Do you want to add more numbers?
8. ENDWHILE
9. Display Task Completed


Task [Pseudocode] - Take numbers from the user and display whether odd or even.

-> Enter the number
<- 3
-> Odd number
-> Do you want to check more numbers?
<- Yes
-> Enter the number
<- 6
-> Even Number
-> Do you want to check more numbers?
<- No
-> Task Completed

1. DISPLAY Enter the number
2. GET number
3. IF number is divisible by 2 THEN
    a. DISPLAY Even number
4. ELSE
    b. DISPLAY Odd number
5. ENDIF
6. DISPLAY Do you want to check more numbers?
7. WHILE user enters yes
    a. DISPLAY Enter the number
    b. GET number
    c. IF number is divisible by 2 THEN
        i. DISPLAY Even number
    d. ELSE
        ii. DISPLAY Odd Number
    e. ENDIF
    f. DISPLAY Do you want to add more numbers?
8. ENDWHILE
9. DISPLAY Task Completed

# DRY -> Don't Repeat Yourself


# Functions
-> These are series/sequence of steps which can be defined once and then executed multiple times.

[Main]
1. CALL check if even or odd
2. DISPLAY Do you want to check more numbers?
3. WHILE user enters yes
    a. CALL check if even or odd
    b. DISPLAY Do you want to add more numbers?
4. ENDWHILE
5. DISPLAY Task Completed

[Child]
1. FUNCTION check if even or odd
2. DISPLAY Enter the number
3. GET number
4. IF number is divisible by 2 THEN
    a. DISPLAY Even Number
5. ELSE
    a. DISPLAY Odd Number
6. ENDIF
7. ENDFUNCTION



Assignment:
Task 1[Pseudocode]:
-> Take numbers from the user and check whether it is a Prime number or not.
[Hint -> You can write the checking of prime logic as a separate function].
-> Prime number is only divisible by 1 and itself.

-> Enter the number
<- 7
-> Prime Number
-> Do you want to check more numbers?
<- Yes
-> Enter the number
<- 14
-> Not a Prime Number
-> Do you want to check more numbers?
<- Yes
-> Enter the number
<- 27
-> Not a Prime Number
-> Do you want to check more numbers?
<- No
-> Task Completed