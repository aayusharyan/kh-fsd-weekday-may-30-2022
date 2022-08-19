const checkPrime = (num) => {
  for(let i = 2; i < num; i = i +1) {
    if(num % i == 0) {
      return false;
    }
  }
  return true;
}

let counter = 0;
let num = 2;
while(counter < 25) {
  if(checkPrime(num)) {
    counter = counter + 1;
    console.log(num);
  }

  num = num + 1;
}