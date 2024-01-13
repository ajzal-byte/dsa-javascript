function recursiveFibonacci(num) {
  if (num < 2) {
    return num;
  }
  return recursiveFibonacci(num - 1) + recursiveFibonacci(num -2);
}
console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));
console.log(recursiveFibonacci(7));

// Interactive had Big-O: O(n)
// Recursive Big-O: 0(2^n)