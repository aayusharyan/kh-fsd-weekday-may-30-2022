
const addition = (a, b, ...numbers) => {
  console.log(numbers);

  //Rest operator for Array Destructuring
  const [x, y, z, ...others] = numbers;
  console.log(x, y, z);
  console.log(others);

  // console.log(a + b);
  // const sum = a + b + c;
  // return sum;

  const sum = numbers.reduce((cumulative, element) => {
    return cumulative + element;
  }, 0);
  // const str_sum = numbers.reduce((cumulative, element) => {
  //   return cumulative + "+" + element;
  // }, "");
  // console.log(str_sum);
  return sum + a + b;
}

const a = addition(10, 3, 14, 20, 57, 29, 50, 1, 0);
console.log(a);