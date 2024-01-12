// Given a number 'n', find the first 'n' elements of the Fibonacci sequence

// The Fibonacci sequence is a series of numbers in which each number (after the first two) is the sum of the two preceding ones. 

function Fibonacci(n) {
  let arr = [0, 1];
  for (let i = 0; i < n-2; i++) {
   arr[i+2] = arr[i] + arr[i+1]; 
  }
  return arr;
}

console.log(Fibonacci(7));