# Jul-01, 2022

## Inputs and Outputs
- alert -> Show the output in a popup.
- prompt -> Ask for an input in a popup.

## Recap on functions
- Parameters and return.


## Conversion of Data type from String to Number
- parseInt   -> Convert from string to number (integer).
- parseFloat -> Convert from string to number (decimal).


### Tasks:
- Create 4 buttons and 4 functions (1 for each).
Task 1 - Take an input from the user as a string and check whether it is a palindrome string or not. (A palindrome string is a string which is same when read from left to right and right to left, example eye, radar, mom, kayak, etc etc...)

let last = str.length - 1;
while(i < str.length) {
  str[i] == str[last - i];

}
r == r
a == a

racecar

Task 2 - Take input from the user as a string and print the character that is most occured. (For example, from the Input ABCDAAA, the output will be A)/
0 -> a
1 -> b
2 -> c
25 -> z
let frequency = [0, 0, 0, 0, 0, ... 26 times]
for(let i = 0; i < str.length; i = i + 1) {
  switch(str[i]) {
    case 'a':
    case 'A':
      frequency[0] = frequency[0] + 1;
      break;
    case "b":
      frequency[1] = frequency[1] + 1;
      break;
  }
}


Task 3 - Take input fromm the user, convert it to a number and print the factorial of that number (For example, factorial of 5 = 5 * 4 * 3 * 2 * 1 = 120, print 120).

Task 4 - Take input from the user as a string and print the number of characters of that string (excluding the vowels, For, example -> "Aayush" , output 3, "Unnati" -> 3).

UPLOAD THIS ON GITHUB!