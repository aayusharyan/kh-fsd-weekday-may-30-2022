## Jun-01, 2022

1. Task: [Pseudocode]
-> Assume you are a teacher, and you want to count how many students are present in a class.

1. Get the list / Open the attendance register.
2. Mentally, think the count as 0.
3. Pick a student from the attendance list.
4. Is the student present?
    a. If student raise hand, then increase the count by 1.
    b. If not present, don't increase the count (Do nothing).
5. Do I have more students pending?
    a. If yes, go to step 3.
    b. If no, end. The count I have mentally is the number of students present in my class.

2. Task: [Pseudocode]
-> Count how much money you have in your wallet.

## Variable:
-> Similar to mentally thinking something is 0, then increasing by 1 and then increasing by 2.
-> It is like a box which can contain data.
-> Variable can variate (They can CHANGE!)


1. Take out all the money out of the wallet.
2. Create a variable with intial value as 0. (Think total money I have is 0).
3. Pick a note/coin.
4. Add that currency value (10, 50, 100, 20, etc. etc.) to my total money.
5. Put that note/coin in the wallet.
6. Do I have more notes/coins left?
    a. If yes, go to step 3.
    b. If no, end and the total money I hve in my variable, that is the answer.

## Constant:
-> Similar to a variable, BUT once created, it cannot be CHANGED/UPDATED!
-> We have a box, we put some data and then we SEAL it...


Task: [Pseudocode]: How many hours I have worked in a month.

1. Assume that in 1 day, I work 8 hours.
2. Think total hours worked as 0.
3. Pick a day.
4. Is that day holiday?
    a. If yes, then ignore and move to Step 5.
    b. If no, then add 8 hours to my total hours.
5. Do I have more days to check?
    a. If yes, then go to step 3.
    b. If no, then end.


Task [Pseudocode]: Take 2 numbers and calculate the sum.

1. Get the first number.
2. Get the second number.
3. Think the sum variable as number1 + number2.
4. Display the sum.


Task [Pseudocode]: Take 4 numbers and calculate the average.

1. GET number1
2. GET number2
3. GET number3
4. GET number4
5. SET sum = number1 + number2 + number3 + number4
6. SET average = sum / 4
7. DISPLAY average

Standard for writing Pseudocode, published by Stanford Uni.

Input (GET / READ)
Plain Eng. -> Take first number from the user.
Standard ->   GET number1

Variable (LET / SET)
Plain Eng. -> Take sum as number1 + number2 + number3 + number4
Standard   -> SET sum = number1 + number2 + number3 + number4

Output (SHOW / PRINT / DISPLAY)


CONDITION


Task: [Pseudocode]
Take a number and check whether it is positive or negative.

1. GET num
2. IF num >= 0 THEN
    a. DISPLAY Positive Number
3. ELSE
    a. DISPLAY Negative Number
4. ENDIF
5. DISPLAY Completed


Example:
<- 7
-> Positive Number
-> Completed

<- -10
-> Negative Number
-> Completed


Task: [Pseudocode] -> Take a number and check whether it is odd or even.



CONDITIONAL (IF, THEN, ELSE, ENDIF):

Plain English:
Do I have more notes/coins left?
    a. If yes, go to step 3.
    b. If no, end and the total money I hve in my variable, that is the answer.


Stanford.

1. IF I have more notes/coins left THEN:
    a. Go to step 3.
2. ELSE:
    a. End and the total money I hve in my variable, that is the answer.
3. ENDIF


Task: [Pseudocode] -> To print all numbers from 1 t0 10. [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

1. SET number = 1
2. DISPLAY number
3. INCREMENT number by 1
4. IF number < or = 10 THEN:
    a. Go to Step 2
5. ELSE:
    a. DISPLAY Task Completed
6. ENDIF


1. FOR num as every number between 1 and 10:
    a. DISPLAY num
2. ENDFOR
3. DISPLAY Task Completed




Task: [Pseudocode] -> Print all EVEN Numbers between 1 to 20. [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].
1. SET num = 1
2. IF num is divisible by 2 THEN:
    a. DISPLAY num
3. ENDIF
4. INCREMENT num BY 1
5. IF num < or = 20 THEN:
    a. Go to step 2.
6. ELSE:
    a. DISPLAY Task Completed
7. ENDIF


** It is completely possible to have an IF condition WITHOUT any ELSE part!

** For loop

1. FOR num as every number between 1 and 20:
    a. IF num is divisible by 2 THEN:
        i. DISPLAY num
    b. ENDIF
2. ENDFOR
3. DISPLAY Task completed



Assignment [Pseudocode]
Task 1: -> To take a number and print whether it is positive(Example: 1, 2, 3, 4...) or neutral(0) or negative(Example: -1, -2, -3, ...).

Situation:
<- 7
-> Positive Number

<- 0
-> Neutral Number

<- -15
-> Negative Number

Task 2: -> Print the sum of all numbers from 1 to 100: 1+2+3+4+5...... 