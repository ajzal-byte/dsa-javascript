// Given an integer 'n', find factorial of that integer
// The factorial of an integer is the product of all positive integers from 1 to that integer. 

function factorial(num) {
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorial(5));

// Big-O = O(n)