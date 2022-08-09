// console.log("Working");

//Spread Operator

const addition = (a, b, c) => {
  const sum = a + b + c;
  console.log(sum);
}

const numbers = [10, 5, 4];

addition(numbers[0], numbers[1], numbers[2]);
console.log("");
addition(numbers);

const arr1 = ["x", "y", "z"];
const arr2 = [1, 2, 3];

const result = [...arr2, ...arr1];
console.log(result);